import React from 'react';
import { Clock, Brain, Zap, Target, Check as CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const steps = [
  {
    number: "01",
    title: "Choose a Task",
    description: "Select a specific task or project you want to focus on",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    number: "02",
    title: "Set Timer for 25 Minutes",
    description: "Start your focused work session with our timer",
    icon: <Clock className="h-6 w-6 text-secondary" />
  },
  {
    number: "03",
    title: "Work Until Timer Rings",
    description: "Focus completely on your task without distractions",
    icon: <Brain className="h-6 w-6 text-accent" />
  },
  {
    number: "04",
    title: "Take a 5-Minute Break",
    description: "Rest, stretch, or do something completely different",
    icon: <Zap className="h-6 w-6 text-success" />
  }];


  const benefits = [
  "Improved focus and concentration",
  "Better time management skills",
  "Reduced mental fatigue",
  "Increased productivity",
  "Enhanced work-life balance",
  "Better task completion rates"];


  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              The Science Behind Focus
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is the Pomodoro Technique?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Developed by Francesco Cirillo in the late 1980s, the Pomodoro Technique is a time management 
              method that uses focused work intervals to improve productivity and mental agility.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) =>
              <Card key={index} className="relative bg-card border-border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="mt-4 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Does It Work So Well?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Pomodoro Technique leverages the brain's natural attention spans and energy cycles. 
                By working in short, focused bursts followed by brief breaks, you can maintain high 
                levels of concentration while avoiding mental fatigue.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) =>
                <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Proven Results</h4>
                  <p className="text-muted-foreground">
                    Studies show that people using the Pomodoro Technique experience a 25% increase 
                    in productivity and significantly reduced procrastination.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Brain className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Science-Backed</h4>
                  <p className="text-muted-foreground">
                    Based on research in cognitive psychology and neuroscience about attention, 
                    focus, and the brain's natural work-rest cycles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;