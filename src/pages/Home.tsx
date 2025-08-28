import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Circle as BarChart3, Settings, Clock, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        
        {/* Quick Stats Section */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Proven Results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users who have improved their productivity with the Pomodoro Technique
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center bg-card border-border">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <div className="text-muted-foreground">Average productivity increase</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-card border-border">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
                  <div className="text-muted-foreground">Active users worldwide</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-card border-border">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">1M+</div>
                  <div className="text-muted-foreground">Pomodoro sessions completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your first Pomodoro session today and experience the power of focused work
            </p>
            <Link to="/timer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Play className="mr-2 h-5 w-5" />
                Start Timer Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Home;