import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, ArrowRight } from "lucide-react";
import farmersImage from "@/assets/farmers-kalimantan.jpg";

const AboutSection = () => {
  const stats = [
    {
      icon: MapPin,
      number: "15+",
      label: "Kebun Mitra",
      description: "Di seluruh Kalimantan"
    },
    {
      icon: Users,
      number: "200+",
      label: "Petani Mitra",
      description: "Diperdayakan langsung"
    },
    {
      icon: Award,
      number: "100%",
      label: "Single Origin",
      description: "Kualitas terjamin"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Tentang Borneo Brews
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Menghubungkan Anda dengan
                <span className="block text-primary">Petani Kalimantan</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kami percaya bahwa kopi terbaik lahir dari hubungan yang erat dengan petani. 
                Setiap biji kopi kami memiliki cerita - dari tangan petani di pedalaman 
                Kalimantan hingga cangkir Anda.
              </p>
            </div>

            {/* Story */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-foreground">
                Misi Kami
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mengangkat pamor kopi Kalimantan sambil memberdayakan petani lokal 
                melalui perdagangan yang adil. Kami berkomitmen untuk memberikan 
                kopi berkualitas tinggi yang tidak hanya nikmat, tetapi juga 
                berkelanjutan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-coffee rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="font-display font-bold text-2xl text-primary">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-sm text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Button variant="forest" size="lg" className="group">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={farmersImage}
                alt="Petani kopi di Kalimantan"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">
                      Direct Trade
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hubungan langsung dengan petani
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;