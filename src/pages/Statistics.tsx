import React from 'react';
import { Circle as BarChart3, Clock, Target, TrendingUp, Calendar1 as Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Statistics: React.FC = () => {
  // Mock data - in a real app, this would come from your state management or API
  const weeklyData = [
  { day: 'Mon', sessions: 8, minutes: 200 },
  { day: 'Tue', sessions: 6, minutes: 150 },
  { day: 'Wed', sessions: 10, minutes: 250 },
  { day: 'Thu', sessions: 7, minutes: 175 },
  { day: 'Fri', sessions: 9, minutes: 225 },
  { day: 'Sat', sessions: 5, minutes: 125 },
  { day: 'Sun', sessions: 4, minutes: 100 }];


  const monthlyTrend = [
  { week: 'Week 1', productivity: 75 },
  { week: 'Week 2', productivity: 82 },
  { week: 'Week 3', productivity: 88 },
  { week: 'Week 4', productivity: 91 }];


  const sessionTypes = [
  { name: 'Work Sessions', value: 156, color: '#FF6B6B' },
  { name: 'Short Breaks', value: 142, color: '#4ECDC4' },
  { name: 'Long Breaks', value: 38, color: '#45B7D1' }];


  const achievements = [
  { title: 'First Session', description: 'Complete your first Pomodoro', earned: true },
  { title: 'Week Warrior', description: 'Complete 7 days in a row', earned: true },
  { title: 'Century Club', description: 'Complete 100 sessions', earned: true },
  { title: 'Focus Master', description: 'Complete 25 sessions in one day', earned: false },
  { title: 'Marathon Runner', description: 'Complete 1000 sessions', earned: false },
  { title: 'Consistency King', description: 'Complete 30 days in a row', earned: false }];


  const todayStats = {
    sessionsCompleted: 8,
    totalMinutes: 200,
    averageSessionLength: 25,
    productivityScore: 88
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Statistics</h1>
            <p className="text-muted-foreground">Track your productivity and progress</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="bg-background hover:bg-muted">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>

        {/* Today's Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="stats-card bg-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stats-value text-primary">{todayStats.sessionsCompleted}</div>
                  <div className="stats-label text-primary/80">Sessions Today</div>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="stats-card bg-secondary/10 border-secondary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stats-value text-secondary">{todayStats.totalMinutes}</div>
                  <div className="stats-label text-secondary/80">Minutes Focused</div>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="stats-card bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stats-value text-accent">{todayStats.averageSessionLength}</div>
                  <div className="stats-label text-accent/80">Avg Session (min)</div>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="stats-card bg-success/10 border-success/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stats-value text-success">{todayStats.productivityScore}%</div>
                  <div className="stats-label text-success/80">Productivity Score</div>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Sessions Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Weekly Sessions
              </CardTitle>
              <CardDescription>Your Pomodoro sessions this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="day" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} />

                  <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Productivity Trend */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Productivity Trend
              </CardTitle>
              <CardDescription>Your productivity score over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="week" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} />

                  <Line
                    type="monotone"
                    dataKey="productivity"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 6 }} />

                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Session Distribution and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session Types Distribution */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Session Distribution
              </CardTitle>
              <CardDescription>Breakdown of your session types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sessionTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>

                    {sessionTypes.map((entry, index) =>
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    )}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} />

                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-warning" />
                Achievements
              </CardTitle>
              <CardDescription>Your productivity milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) =>
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                    <div className="flex items-center gap-3">
                      <Award className={`h-5 w-5 ${achievement.earned ? 'text-warning' : 'text-muted-foreground'}`} />
                      <div>
                        <div className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                    <Badge
                    variant={achievement.earned ? 'default' : 'secondary'}
                    className={achievement.earned ? 'bg-warning text-warning-foreground' : 'bg-muted text-muted-foreground'}>

                      {achievement.earned ? 'Earned' : 'Locked'}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="mt-6 bg-card border-border">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your consistency this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) =>
              <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-[100px]">
                    <span className="font-medium text-foreground">{day.day}</span>
                    <span className="text-sm text-muted-foreground">{day.sessions} sessions</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <Progress value={day.sessions / 10 * 100} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground min-w-[60px] text-right">
                    {day.minutes}min
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default Statistics;