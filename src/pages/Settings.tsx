import React, { useState } from 'react';
import { Save, Circle as Home, Volume2, VolumeX, Bell, BellOff, Palette, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface SettingsState {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  volume: number;
  theme: string;
  autoStartBreaks: boolean;
  autoStartWork: boolean;
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4,
    soundEnabled: true,
    notificationsEnabled: true,
    volume: 50,
    theme: 'system',
    autoStartBreaks: false,
    autoStartWork: false
  });

  const [hasChanges, setHasChanges] = useState(false);

  const updateSetting = <K extends keyof SettingsState,>(key: K, value: SettingsState[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // In a real app, you would save to localStorage or send to an API
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
    setHasChanges(false);
    toast.success("Settings saved successfully!");
  };

  const resetToDefaults = () => {
    setSettings({
      workDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      longBreakInterval: 4,
      soundEnabled: true,
      notificationsEnabled: true,
      volume: 50,
      theme: 'system',
      autoStartBreaks: false,
      autoStartWork: false
    });
    setHasChanges(true);
    toast.success("Settings reset to defaults");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Customize your Pomodoro experience</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="bg-background hover:bg-muted">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {/* Timer Settings */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Timer Settings
              </CardTitle>
              <CardDescription>
                Customize the duration of your work sessions and breaks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="work-duration">Work Session Duration (minutes)</Label>
                  <Input
                    id="work-duration"
                    type="number"
                    min="1"
                    max="60"
                    value={settings.workDuration}
                    onChange={(e) => updateSetting('workDuration', parseInt(e.target.value) || 25)}
                    className="bg-background border-border" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="short-break-duration">Short Break Duration (minutes)</Label>
                  <Input
                    id="short-break-duration"
                    type="number"
                    min="1"
                    max="30"
                    value={settings.shortBreakDuration}
                    onChange={(e) => updateSetting('shortBreakDuration', parseInt(e.target.value) || 5)}
                    className="bg-background border-border" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="long-break-duration">Long Break Duration (minutes)</Label>
                  <Input
                    id="long-break-duration"
                    type="number"
                    min="1"
                    max="60"
                    value={settings.longBreakDuration}
                    onChange={(e) => updateSetting('longBreakDuration', parseInt(e.target.value) || 15)}
                    className="bg-background border-border" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="long-break-interval">Long Break Interval (sessions)</Label>
                  <Input
                    id="long-break-interval"
                    type="number"
                    min="2"
                    max="10"
                    value={settings.longBreakInterval}
                    onChange={(e) => updateSetting('longBreakInterval', parseInt(e.target.value) || 4)}
                    className="bg-background border-border" />

                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audio & Notifications */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-secondary" />
                Audio & Notifications
              </CardTitle>
              <CardDescription>
                Configure sound alerts and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Sound Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Play sound when sessions start and end
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {settings.soundEnabled ?
                  <Volume2 className="h-4 w-4 text-muted-foreground" /> :

                  <VolumeX className="h-4 w-4 text-muted-foreground" />
                  }
                  <Switch
                    checked={settings.soundEnabled}
                    onCheckedChange={(checked) => updateSetting('soundEnabled', checked)} />

                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Browser Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Show desktop notifications for session changes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {settings.notificationsEnabled ?
                  <Bell className="h-4 w-4 text-muted-foreground" /> :

                  <BellOff className="h-4 w-4 text-muted-foreground" />
                  }
                  <Switch
                    checked={settings.notificationsEnabled}
                    onCheckedChange={(checked) => updateSetting('notificationsEnabled', checked)} />

                </div>
              </div>

              {settings.soundEnabled &&
              <div className="space-y-2">
                  <Label>Volume: {settings.volume}%</Label>
                  <Slider
                  value={[settings.volume]}
                  onValueChange={(value) => updateSetting('volume', value[0])}
                  max={100}
                  step={10}
                  className="w-full" />

                </div>
              }
            </CardContent>
          </Card>

          {/* Automation Settings */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-accent" />
                Automation & Appearance
              </CardTitle>
              <CardDescription>
                Customize automatic behaviors and theme preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Auto-start Breaks</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically start break timers after work sessions
                  </p>
                </div>
                <Switch
                  checked={settings.autoStartBreaks}
                  onCheckedChange={(checked) => updateSetting('autoStartBreaks', checked)} />

              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Auto-start Work Sessions</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically start work timers after breaks
                  </p>
                </div>
                <Switch
                  checked={settings.autoStartWork}
                  onCheckedChange={(checked) => updateSetting('autoStartWork', checked)} />

              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="theme-select">Theme</Label>
                <Select value={settings.theme} onValueChange={(value) => updateSetting('theme', value)}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6">
            <Button
              variant="outline"
              onClick={resetToDefaults}
              className="bg-background hover:bg-muted">

              Reset to Defaults
            </Button>
            <Button
              onClick={handleSave}
              disabled={!hasChanges}
              className="bg-primary hover:bg-primary/90 text-primary-foreground">

              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>);

};

export default Settings;