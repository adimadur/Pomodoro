import React from 'react';
import { Clock, Circle as BarChart3, Settings, Bell, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection: React.FC = () => {
  const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Customizable Timer",
    description: "Set your own work and break durations. Default 25-minute work sessions with 5-minute breaks, fully customizable to your needs.",
    color: "bg-primary/10 border-primary/20"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-secondary" />,
    title: "Progress Tracking",
    description: "Monitor your productivity with detailed statistics, charts, and insights into your work patterns and achievements.",
    color: "bg-secondary/10 border-secondary/20"
  },
  {
    icon: <Bell className="h-8 w-8 text-accent" />,
    title: "Smart Notifications",
    description: "Get gentle audio and visual notifications when it's time to take a break or start your next focused work session.",
    color: "bg-accent/10 border-accent/20"
  },
  {
    icon: <Settings className="h-8 w-8 text-warning" />,
    title: "Flexible Settings",
    description: "Personalize your experience with custom themes, sound preferences, and automation options that work for you.",
    color: "bg-warning/10 border-warning/20"
  },
  {
    icon: <Target className="h-8 w-8 text-success" />,
    title: "Focus Sessions",
    description: "Eliminate distractions with our clean, minimal interface designed specifically for deep work and concentration.",
    color: "bg-success/10 border-success/20"
  },
  {
    icon: <Zap className="h-8 w-8 text-info" />,
    title: "Productivity Boost",
    description: "Experience up to 25% improvement in productivity and task completion rates with the proven Pomodoro method.",
    color: "bg-info/10 border-info/20"
  }];


  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Stay Focused
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Pomodoro timer comes packed with features designed to maximize your productivity 
            and help you build better work habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <Card key={index} className={`${feature.color} hover:shadow-lg transition-all duration-300 group`}>
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Our Pomodoro Timer?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-muted-foreground">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                <div className="text-muted-foreground">Sessions Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturesSection;