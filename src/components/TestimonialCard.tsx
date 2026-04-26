import * as React from "react";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  classAttended: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  classAttended,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 py-12">
      {/* Large opening quote */}
      <span className="font-playfair text-brand-gold text-8xl leading-none opacity-40 mb-[-2rem]">
        &ldquo;
      </span>
      
      {/* Quote text */}
      <blockquote className="font-playfair italic text-2xl md:text-3xl lg:text-4xl text-brand-espresso leading-relaxed mb-8 relative z-10">
        {quote}
      </blockquote>
      
      {/* Star rating */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-brand-gold text-brand-gold"
                : "fill-brand-parchment text-brand-parchment"
            }`}
          />
        ))}
      </div>
      
      {/* Author details */}
      <div className="font-lato">
        <div className="font-bold text-lg text-brand-espresso">{author}</div>
        <div className="text-sm text-brand-warm-gray uppercase tracking-wider mt-1">
          {classAttended}
        </div>
      </div>
    </div>
  );
}
