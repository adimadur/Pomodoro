import React from 'react';
import { Timer, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Timer className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Pomodoro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Boost your productivity with the proven Pomodoro Technique. Focus better, work smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/timer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Timer
              </Link>
              <Link to="/statistics" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Statistics
              </Link>
              <Link to="/settings" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Settings
              </Link>
            </div>
          </div>

          {/* Learn More */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Learn More</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About Technique
              </a>
              <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Pomodoro App. Built with focus and productivity in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;