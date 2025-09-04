import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee, ShoppingBag, Users, BookOpen, Phone } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#", icon: Coffee },
    { name: "Toko", href: "#products", icon: ShoppingBag },
    { name: "Tentang Kami", href: "#about", icon: Users },
    { name: "Blog", href: "#blog", icon: BookOpen },
    { name: "Kontak", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Coffee className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-primary">
                Borneo Brews
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Roastery
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-premium group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Wholesale
            </Button>
            <Button variant="hero" size="sm">
              Beli Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border bg-background/95 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="px-4 pt-4 space-y-3 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Wholesale
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                Beli Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;