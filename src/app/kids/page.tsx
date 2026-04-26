"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cake, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldRule } from "@/components/ui/GoldRule";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ClassCard } from "@/components/ClassCard";

export default function KidsPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAFAF9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-brand-terracotta pt-20">
        <Image
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
          alt="Kids Cooking Class"
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-terracotta/80 to-brand-terracotta" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="w-16 h-[2px] bg-white opacity-80 mb-8" />
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight">
            Little Chefs, <span className="text-brand-light-gold italic font-normal">Big Flavors</span>
          </h1>
          <p className="font-lato text-white/90 text-xl max-w-2xl mb-8">
            Spark their creativity and teach them life skills through the joy of cooking and baking.
          </p>
          <div className="w-16 h-[2px] bg-white opacity-80 mb-12" />
        </div>
      </section>

      {/* Intro & Safety */}
      <section className="py-16 bg-white relative -mt-10 mx-6 md:mx-12 rounded-2xl shadow-xl z-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-espresso mb-6">Safe, Fun, Educational</h2>
            <p className="font-lato text-brand-warm-gray leading-relaxed mb-6">
              Our kids programs are designed specifically for young hands and curious minds. Under the watchful eyes of our experienced chef instructors, children learn about ingredients, nutrition, measuring, and kitchen safety in a vibrant, supportive environment.
            </p>
            <div className="flex flex-wrap gap-4 font-lato">
              <div className="flex items-center gap-2 bg-brand-herb-green/10 text-brand-herb-green px-4 py-2 rounded-full font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> Child-Safe Equipment
              </div>
              <div className="flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta px-4 py-2 rounded-full font-bold text-sm">
                <Sparkles className="w-4 h-4" /> Ages 7-14
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop" width={300} height={300} alt="Kid cooking 1" className="rounded-xl w-full h-48 object-cover" />
            <Image src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop" width={300} height={300} alt="Kid cooking 2" className="rounded-xl w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-espresso mb-6">Our Kids Programs</h2>
            <GoldRule className="w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birthday Parties */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-warm-gray/10 group hover:shadow-xl transition-all">
              <div className="h-48 relative bg-brand-terracotta flex items-center justify-center">
                <Cake className="w-16 h-16 text-white opacity-50 absolute" />
                <h3 className="font-playfair text-3xl font-bold text-white relative z-10">Birthday Parties</h3>
              </div>
              <div className="p-8">
                <div className="bg-brand-terracotta/10 text-brand-terracotta text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">Ages 7+</div>
                <p className="font-lato text-brand-warm-gray mb-6">
                  Celebrate their special day with a hands-on culinary party. They cook, they eat, and we clean up the mess!
                </p>
                <Button variant="ghost" className="text-brand-terracotta px-0 hover:text-brand-espresso">Learn More →</Button>
              </div>
            </div>

            {/* Holiday Bootcamp */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-warm-gray/10 group hover:shadow-xl transition-all">
              <div className="h-48 relative bg-brand-herb-green flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white opacity-50 absolute" />
                <h3 className="font-playfair text-3xl font-bold text-white relative z-10 text-center">Holiday<br/>Bootcamp</h3>
              </div>
              <div className="p-8">
                <div className="bg-brand-herb-green/10 text-brand-herb-green text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">Ages 9-14</div>
                <p className="font-lato text-brand-warm-gray mb-6">
                  Keep them engaged during school holidays with our immersive 3-day or 5-day culinary bootcamps.
                </p>
                <Button variant="ghost" className="text-brand-herb-green px-0 hover:text-brand-espresso">View Schedule →</Button>
              </div>
            </div>

            {/* Parents & Kids */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-warm-gray/10 group hover:shadow-xl transition-all">
              <div className="h-48 relative bg-brand-gold flex items-center justify-center">
                <HeartHandshake className="w-16 h-16 text-white opacity-50 absolute" />
                <h3 className="font-playfair text-3xl font-bold text-white relative z-10 text-center">Parents & Kids</h3>
              </div>
              <div className="p-8">
                <div className="bg-brand-gold/20 text-brand-espresso text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">Family Bonding</div>
                <p className="font-lato text-brand-warm-gray mb-6">
                  Team up with your child in the kitchen. Create delicious memories together in our weekend bonding classes.
                </p>
                <Button variant="ghost" className="text-brand-espresso px-0 hover:text-brand-gold">See Classes →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-brand-warm-gray/10">
        <div className="container mx-auto px-6 md:px-12">
          <TestimonialCard 
            quote="My daughter had her 10th birthday party here making pizzas and cupcakes. The staff were fantastic with the kids, keeping them engaged and safe. Highly recommended!"
            author="Jessica Lim"
            classAttended="Kids Birthday Party"
          />
        </div>
      </section>

      {/* Upcoming Kids Classes */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-playfair text-4xl font-bold text-brand-espresso">Upcoming Classes</h2>
            <Link href="/classes" className="font-lato font-bold text-brand-terracotta uppercase tracking-wider hover:text-brand-espresso transition-colors">
              View All Kids Classes →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ClassCard 
              title="Junior Masterchef Bootcamp" 
              category="Bootcamp" 
              imageSrc="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop" 
              duration="3 Days" 
              skillLevel="Beginner" 
              price={350} 
              badge="popular"
            />
            <ClassCard 
              title="Parent & Child: Pasta Making" 
              category="Family" 
              imageSrc="https://images.unsplash.com/photo-1504670073073-6123e39e0754?q=80&w=1200&auto=format&fit=crop" 
              duration="3 Hours" 
              skillLevel="Beginner" 
              price={140} 
              badge="new"
            />
            <ClassCard 
              title="Teen Baking Essentials" 
              category="Baking" 
              imageSrc="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop" 
              duration="4 Hours" 
              skillLevel="Intermediate" 
              price={160} 
            />
            <ClassCard 
              title="Kids Pizza Party Workshop" 
              category="Cooking" 
              imageSrc="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop" 
              duration="2.5 Hours" 
              skillLevel="Beginner" 
              price={120} 
            />
          </div>
        </div>
      </section>

    </div>
  );
}

