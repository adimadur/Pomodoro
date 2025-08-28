import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, Circle as Home, Coffee, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

type SessionType = 'work' | 'shortBreak' | 'longBreak';

interface TimerSettings {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number;
}

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>('work');
  const [sessionCount, setSessionCount] = useState(0);
  const [completedSessions, setCompletedSessions] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const settings: TimerSettings = {
    workDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    longBreakInterval: 4
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSessionDuration = (type: SessionType): number => {
    switch (type) {
      case 'work':return settings.workDuration;
      case 'shortBreak':return settings.shortBreakDuration;
      case 'longBreak':return settings.longBreakDuration;
      default:return settings.workDuration;
    }
  };

  const getProgress = (): number => {
    const totalDuration = getSessionDuration(sessionType);
    return (totalDuration - timeLeft) / totalDuration * 100;
  };

  const startTimer = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSessionComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeLeft(getSessionDuration(sessionType));
  };

  const handleSessionComplete = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (sessionType === 'work') {
      const newSessionCount = sessionCount + 1;
      setSessionCount(newSessionCount);
      setCompletedSessions((prev) => prev + 1);

      // Determine next session type
      if (newSessionCount % settings.longBreakInterval === 0) {
        setSessionType('longBreak');
        setTimeLeft(settings.longBreakDuration);
        toast.success("Work session complete! Time for a long break.");
      } else {
        setSessionType('shortBreak');
        setTimeLeft(settings.shortBreakDuration);
        toast.success("Work session complete! Time for a short break.");
      }
    } else {
      setSessionType('work');
      setTimeLeft(settings.workDuration);
      toast.success("Break complete! Ready for another work session?");
    }
  };

  const switchSession = (type: SessionType) => {
    setSessionType(type);
    setTimeLeft(getSessionDuration(type));
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getSessionBadgeColor = (type: SessionType) => {
    switch (type) {
      case 'work':return 'bg-primary text-primary-foreground';
      case 'shortBreak':return 'bg-secondary text-secondary-foreground';
      case 'longBreak':return 'bg-accent text-accent-foreground';
      default:return 'bg-muted text-muted-foreground';
    }
  };

  const getSessionIcon = (type: SessionType) => {
    switch (type) {
      case 'work':return <Target className="h-4 w-4" />;
      case 'shortBreak':case 'longBreak':return <Coffee className="h-4 w-4" />;
      default:return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-background hover:bg-muted">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="outline" size="sm" className="bg-background hover:bg-muted">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </Link>
        </div>

        {/* Main Timer Card */}
        <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Badge className={getSessionBadgeColor(sessionType)}>
                {getSessionIcon(sessionType)}
                {sessionType === 'work' ? 'Focus Session' :
                sessionType === 'shortBreak' ? 'Short Break' : 'Long Break'}
              </Badge>
            </div>
            <CardTitle className="text-sm text-muted-foreground">
              Session {sessionCount + 1} • {completedSessions} completed today
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center space-y-8">
            {/* Timer Display */}
            <div className="timer-display text-8xl md:text-9xl font-mono font-bold text-foreground">
              {formatTime(timeLeft)}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress value={getProgress()} className="h-2" />
              <div className="text-sm text-muted-foreground">
                {Math.round(getProgress())}% complete
              </div>
            </div>

            {/* Timer Controls */}
            <div className="timer-controls flex justify-center gap-4">
              {!isActive ?
              <Button
                onClick={startTimer}
                size="lg"
                className="timer-button timer-button-start bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">

                  <Play className="mr-2 h-5 w-5" />
                  Start
                </Button> :

              <Button
                onClick={pauseTimer}
                size="lg"
                className="timer-button timer-button-pause bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4">

                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </Button>
              }
              
              <Button
                onClick={resetTimer}
                size="lg"
                variant="outline"
                className="timer-button timer-button-reset bg-background hover:bg-muted px-8 py-4">

                <RotateCcw className="mr-2 h-5 w-5" />
                Reset
              </Button>
            </div>

            {/* Session Type Switcher */}
            <div className="flex justify-center gap-2 flex-wrap">
              <Button
                onClick={() => switchSession('work')}
                variant={sessionType === 'work' ? 'default' : 'outline'}
                size="sm"
                className={sessionType === 'work' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}>

                <Target className="mr-2 h-4 w-4" />
                Work (25m)
              </Button>
              <Button
                onClick={() => switchSession('shortBreak')}
                variant={sessionType === 'shortBreak' ? 'default' : 'outline'}
                size="sm"
                className={sessionType === 'shortBreak' ? 'bg-secondary text-secondary-foreground' : 'bg-background hover:bg-muted'}>

                <Coffee className="mr-2 h-4 w-4" />
                Short Break (5m)
              </Button>
              <Button
                onClick={() => switchSession('longBreak')}
                variant={sessionType === 'longBreak' ? 'default' : 'outline'}
                size="sm"
                className={sessionType === 'longBreak' ? 'bg-accent text-accent-foreground' : 'bg-background hover:bg-muted'}>

                <Coffee className="mr-2 h-4 w-4" />
                Long Break (15m)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card className="bg-card/60 backdrop-blur-sm border-border">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-primary">{completedSessions}</div>
              <div className="text-sm text-muted-foreground">Sessions Today</div>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-secondary">{sessionCount}</div>
              <div className="text-sm text-muted-foreground">Current Cycle</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>);

};

export default Timer;