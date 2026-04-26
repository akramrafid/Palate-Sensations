import * as React from "react";
import Image from "next/image";

export interface ChefCardProps {
  name: string;
  specialty: string;
  yearsOfExperience: number;
  imageSrc: string;
}

export function ChefCard({
  name,
  specialty,
  yearsOfExperience,
  imageSrc,
}: ChefCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6 rounded-full p-2 border-2 border-brand-gold/30 transition-all group-hover:border-brand-gold group-hover:scale-105">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-burgundy text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
          {yearsOfExperience}+ Years
        </div>
      </div>
      
      <h3 className="font-playfair text-2xl font-bold text-brand-espresso mb-1">
        {name}
      </h3>
      <p className="font-lato font-light text-brand-warm-gray uppercase tracking-[0.2em] text-sm">
        {specialty}
      </p>
    </div>
  );
}
