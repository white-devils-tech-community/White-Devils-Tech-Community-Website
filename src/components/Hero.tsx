import { Button } from "./ui/button";
import { ArrowRight, Users, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary/10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <img 
              src="/lovable-uploads/a788dc7f-b2df-4293-8fd3-025fe4014a28.png" 
              alt="White Devils Logo" 
              className="h-32 w-32 mx-auto mb-6 animate-glow-pulse"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient-x">
              WHITE DEVILS
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl">Tech Community</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            India's most authentic student-powered tech collective. 
            <span className="text-primary font-semibold"> By students, for students.</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We build a platform where young minds can level up, teach each other, and grow together — 
            no gatekeeping, no noise, no corporate blah-blah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://chat.whatsapp.com/DT75kINqqKj3iqdCflKI6K?mode=ac_t', '_blank')}
            >
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open('https://wa.me/+919442722391', '_blank')}
            >
              Become Ambassador
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">200+</span>
              <span className="text-sm text-muted-foreground">Active Members</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">24/7</span>
              <span className="text-sm text-muted-foreground">Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;