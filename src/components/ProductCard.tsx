import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Info } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  roastLevel: string;
  flavor: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  name,
  origin,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  roastLevel,
  flavor,
  isNew,
  isFeatured
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground">
              Baru
            </Badge>
          )}
          {isFeatured && (
            <Badge className="bg-gradient-forest text-secondary-foreground">
              Pilihan
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm hover:bg-background">
            <Info className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Origin */}
        <div className="text-sm text-muted-foreground font-medium">
          {origin}
        </div>

        {/* Name */}
        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Flavor Tags */}
        <div className="flex flex-wrap gap-1">
          {flavor.slice(0, 3).map((note, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              {note}
            </Badge>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">
              Rp {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button variant="coffee" size="sm" className="group/btn">
            <ShoppingCart className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
            Beli
          </Button>
        </div>

        {/* Roast Level */}
        <div className="text-xs text-muted-foreground border-t pt-2">
          Roast Level: <span className="font-medium">{roastLevel}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;