import React from 'react';
import { Link } from 'react-router-dom';
import { Timer, Circle as BarChart3, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const NavLinks = () =>
  <>
      <a
      href="#features"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('features');
      }}
      className="text-muted-foreground hover:text-foreground transition-colors">

        Features
      </a>
      <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('about');
      }}
      className="text-muted-foreground hover:text-foreground transition-colors">

        About
      </a>
      <a
      href="#testimonials"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('testimonials');
      }}
      className="text-muted-foreground hover:text-foreground transition-colors">

        Testimonials
      </a>
      <Link to="/statistics" className="text-muted-foreground hover:text-foreground transition-colors">
        Statistics
      </Link>
      <Link to="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
        Settings
      </Link>
    </>;


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Timer className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Pomodoro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/timer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Timer
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="bg-background hover:bg-muted">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <div className="pt-4 border-t border-border">
                  <Link to="/timer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Start Timer
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>);

};

export default Header;