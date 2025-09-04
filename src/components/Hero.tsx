import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Borneo coffee beans"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Langsung dari Kalimantan
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Kopi Otentik
                <span className="block text-accent">Borneo</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-xl leading-relaxed">
                Single origin coffee yang dipetik langsung dari kebun-kebun terpilih di pedalaman Kalimantan
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">Direct Trade</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group">
                Jelajahi Kopi Kami
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Wholesale Partnership
              </Button>
            </div>
          </div>

          {/* Right Column - Additional Content or Space */}
          <div className="hidden lg:block">
            {/* This space can be used for additional graphics or testimonials */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;