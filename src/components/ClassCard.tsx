import * as React from "react";
import Image from "next/image";
import { Clock, ChefHat } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export interface ClassCardProps {
  title: string;
  category: string;
  imageSrc: string;
  badge?: "new" | "popular" | "full" | "featured";
  duration: string;
  skillLevel: string;
  price: number;
  onBook?: () => void;
}

export function ClassCard({
  title,
  category,
  imageSrc,
  badge,
  duration,
  skillLevel,
  price,
  onBook,
}: ClassCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden bg-white rounded-3xl shadow-lg border border-brand-warm-gray/10 transition-all hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {badge && <Badge variant={badge}>{badge}</Badge>}
          {!badge && <div />} {/* spacer */}
          <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs text-white font-lato uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-playfair text-xl font-bold text-brand-espresso line-clamp-2 mb-4">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-brand-warm-gray mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat className="w-4 h-4" />
            <span>{skillLevel}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="font-lato">
            <span className="text-xs text-brand-warm-gray uppercase tracking-wider block">Price</span>
            <span className="text-lg font-bold text-brand-espresso">SGD ${price}</span>
          </div>
          <Button variant="ghost" className="px-0 group-hover:text-brand-burgundy" onClick={onBook}>
            Book <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
