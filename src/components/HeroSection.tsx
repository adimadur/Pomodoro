import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Clock className="mr-2 h-4 w-4" />
            Proven Productivity Method
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Master Your Focus with the
            <span className="text-primary block mt-2">Pomodoro Technique</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Break your work into focused 25-minute sessions, take strategic breaks, 
            and watch your productivity soar. Simple, effective, scientifically proven.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/timer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Start Your First Session
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background hover:bg-muted px-8 py-4 text-lg"
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn How It Works
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <Target className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">Enhanced Focus</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <Clock className="h-6 w-6 text-secondary" />
              <span className="text-foreground font-medium">Time Management</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-foreground font-medium">Productivity Boost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;