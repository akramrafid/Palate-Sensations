"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-[#1E1208]">
      {/* Background Image - Reliable Unsplash URL */}
      <Image
        src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop"
        alt="Culinary class in action"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40 scale-105 transform animate-pulse-slow"
        priority
      />
      
      {/* Gradient Overlay for bolder contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1208]/80 via-transparent to-[#1E1208]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center mt-20">
        
        {/* Bold Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-burgundy/20 border border-brand-burgundy text-white font-lato text-sm uppercase tracking-widest font-bold mb-8 shadow-[0_0_15px_rgba(128,0,32,0.5)]">
          <span className="w-2 h-2 rounded-full bg-brand-burgundy animate-ping"></span>
          Now Enrolling
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight max-w-5xl leading-[1.1] drop-shadow-2xl">
          Where Food Becomes <br />
          <span className="text-brand-gold italic">An Experience.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="font-lato font-light text-brand-cream/90 text-lg md:text-2xl max-w-2xl mb-12">
          Handcrafted with passion, delivered with a touch of culinary art. Singapore's Premier Culinary School since 2012.
        </p>

        {/* CTAs - Bolder buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button variant="primary" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-brand-burgundy hover:bg-brand-burgundy/90 shadow-xl shadow-brand-burgundy/30 rounded-full transition-transform hover:-translate-y-1">
            Book a Class
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg text-white border-2 border-white hover:bg-white hover:text-[#1E1208] rounded-full transition-transform hover:-translate-y-1">
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Floating Interactive Elements (Like the tape/badges in reference) */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl rotate-3 shadow-2xl transition-transform hover:rotate-0 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-xl">
          ★
        </div>
        <div>
          <div className="text-white font-bold font-lato">Top Rated</div>
          <div className="text-brand-gold text-sm flex gap-1">★★★★★</div>
        </div>
      </div>
    </section>
  );
}
