import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Developer",
      content: "This Pomodoro timer completely transformed my coding sessions. I'm getting 40% more done in less time, and I actually feel less stressed at the end of the day.",
      rating: 5,
      initials: "SC",
      color: "bg-primary"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      content: "As a freelancer, staying focused was always a challenge. The Pomodoro technique helped me structure my day better and deliver projects faster than ever.",
      rating: 5,
      initials: "MR",
      color: "bg-secondary"
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager",
      content: "The statistics feature is amazing! Seeing my productivity patterns helped me optimize my schedule. I now know exactly when I'm most productive.",
      rating: 5,
      initials: "EW",
      color: "bg-accent"
    },
    {
      name: "David Kim",
      role: "Student",
      content: "Studying for exams became so much easier with this timer. The 25-minute sessions are perfect for maintaining focus without burning out.",
      rating: 5,
      initials: "DK",
      color: "bg-success"
    },
    {
      name: "Lisa Thompson",
      role: "Content Writer",
      content: "I was skeptical at first, but after a week of using this, my writing output doubled. The breaks actually make me more creative, not less productive.",
      rating: 5,
      initials: "LT",
      color: "bg-warning"
    },
    {
      name: "Alex Johnson",
      role: "Project Manager",
      content: "Managing multiple projects became easier when I started time-boxing my tasks. This app's clean interface keeps me focused on what matters.",
      rating: 5,
      initials: "AJ",
      color: "bg-info"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals, students, and creatives who have transformed 
            their productivity with our Pomodoro timer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`${testimonial.color} text-white font-semibold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">1M+</div>
              <div className="text-muted-foreground">Sessions Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">25%</div>
              <div className="text-muted-foreground">Productivity Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;