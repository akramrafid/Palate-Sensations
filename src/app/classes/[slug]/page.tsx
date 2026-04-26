"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, ChefHat, Users } from "lucide-react";
import { BookingWidget } from "@/components/BookingWidget";
import { ChefCard } from "@/components/ChefCard";
import { ClassCard } from "@/components/ClassCard";
import { GoldRule } from "@/components/ui/GoldRule";
import { TestimonialCard } from "@/components/TestimonialCard";

// Mock data for the specific class
const CLASS_DATA = {
  title: "Mastering French Pastry",
  category: "Baking",
  imageSrc: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop",
  duration: "3 Hours",
  skillLevel: "Intermediate",
  price: 180,
  maxParticipants: 8,
  chef: {
    name: "Chef Antoine Dupont",
    specialty: "Executive Pastry Chef",
    yearsOfExperience: 15,
    imageSrc: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop"
  },
  availableDates: [
    new Date(2026, 4, 15),
    new Date(2026, 4, 22),
    new Date(2026, 4, 29)
  ]
};

const RELATED_CLASSES = [
  { title: "Artisan Bread Baking", category: "Baking", imageSrc: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop", duration: "5 Hours", skillLevel: "Advanced", price: 200, badge: "full" as const },
  { title: "Festive Baking Special", category: "Baking", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop", duration: "3.5 Hours", skillLevel: "Beginner", price: 160, badge: "new" as const },
];

export default function ClassDetail() {
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <div className="flex flex-col w-full bg-brand-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col justify-end overflow-hidden bg-brand-espresso pb-16">
        <Image
          src={CLASS_DATA.imageSrc}
          alt={CLASS_DATA.title}
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso via-brand-espresso/50 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-2 font-lato text-sm text-brand-gold uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/classes" className="hover:text-white transition-colors">Classes</Link>
            <span>/</span>
            <span className="text-white">{CLASS_DATA.category}</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {CLASS_DATA.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-brand-cream/80 font-lato">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-gold" />
              <span>{CLASS_DATA.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-brand-gold" />
              <span>{CLASS_DATA.skillLevel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-gold" />
              <span>Max {CLASS_DATA.maxParticipants} People</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
              <span>4.9 (128 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-brand-warm-gray/30 mb-8 overflow-x-auto scrollbar-hide">
              {['about', 'learn', 'bring'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-lato text-lg font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                    activeTab === tab 
                      ? "text-brand-burgundy border-b-2 border-brand-burgundy" 
                      : "text-brand-warm-gray hover:text-brand-espresso"
                  }`}
                >
                  {tab === 'about' ? 'About this Class' : tab === 'learn' ? "What You'll Learn" : 'What to Bring'}
                </button>
              ))}
            </div>

            {/* Tab Content Placeholder */}
            <div className="prose prose-lg max-w-none text-brand-espresso font-lato mb-16">
              {activeTab === 'about' && (
                <>
                  <p>
                    Embark on a culinary journey to the heart of Paris without leaving Singapore. In this hands-on workshop, you'll discover the secrets behind authentic French pastries that have captivated food lovers for centuries. 
                  </p>
                  <p>
                    Under the expert guidance of our executive pastry chef, you'll learn the delicate art of lamination, temperature control, and the precision required to achieve the perfect flake and rise. This class is designed for those who have a basic understanding of baking but want to elevate their skills to a professional level.
                  </p>
                </>
              )}
              {activeTab === 'learn' && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>The science of dough lamination for croissants.</li>
                  <li>Proper temperature control for working with butter.</li>
                  <li>Techniques for crafting the perfect Mille-Feuille.</li>
                  <li>Creating a flawless crème pâtissière.</li>
                </ul>
              )}
              {activeTab === 'bring' && (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comfortable, closed-toe shoes.</li>
                  <li>Containers to bring home your baked goods.</li>
                  <li>A healthy appetite and enthusiasm!</li>
                  <li>All ingredients, aprons, and equipment are provided.</li>
                </ul>
              )}
            </div>

            <GoldRule className="mb-16" />

            {/* Chef Profile Inline */}
            <div className="mb-16">
              <h3 className="font-playfair text-3xl font-bold text-brand-espresso mb-8">Meet Your Chef</h3>
              <div className="bg-brand-parchment p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="shrink-0">
                  <ChefCard {...CLASS_DATA.chef} />
                </div>
                <div className="font-lato text-brand-espresso">
                  <p className="mb-4">
                    Chef Antoine brings 15 years of experience from Michelin-starred restaurants across France and Switzerland. His passion for precision and artistic presentation makes his classes both rigorous and incredibly rewarding.
                  </p>
                  <p>
                    "Pastry is a science, but presentation is an art. I want my students to master the rules so they can eventually break them beautifully."
                  </p>
                </div>
              </div>
            </div>

            <GoldRule className="mb-16" />

            {/* Class Schedule (if series) - Placeholder */}
            <div className="mb-16">
              <h3 className="font-playfair text-3xl font-bold text-brand-espresso mb-8">Class Schedule</h3>
              <div className="bg-white border border-brand-warm-gray/20 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-brand-warm-gray/20">
                  <div className="font-lato font-bold text-brand-espresso">Session 1</div>
                  <div className="text-brand-warm-gray">Introduction to Lamination</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-brand-cream/50">
                  <div className="font-lato font-bold text-brand-espresso">Session 2</div>
                  <div className="text-brand-warm-gray">Croissants & Pain au Chocolat</div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-16">
              <h3 className="font-playfair text-3xl font-bold text-brand-espresso mb-6">Cancellation Policy</h3>
              <p className="font-lato text-brand-warm-gray">
                Cancellations made 7 days or more in advance of the class date will receive a 100% refund. Cancellations made within 3 - 6 days will incur a 20% fee. Cancellations made within 48 hours to the event will not be refunded.
              </p>
            </div>

          </div>

          {/* Sidebar / Booking Widget */}
          <div className="lg:w-1/3 relative">
            <BookingWidget 
              pricePerPerson={CLASS_DATA.price} 
              availableDates={CLASS_DATA.availableDates} 
              maxParticipants={CLASS_DATA.maxParticipants} 
            />
          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brand-espresso text-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Student Experiences</h2>
            <div className="flex items-center gap-4 text-2xl font-lato">
              <span className="font-bold">4.9</span>
              <div className="flex gap-1">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-brand-warm-gray text-base">(128 Reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1E1208] p-8 border border-white/10 rounded-xl">
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="font-playfair italic text-lg mb-6 leading-relaxed">"Chef Antoine was amazing. The croissants we made were better than the ones I had in Paris!"</p>
              <div className="font-lato text-sm">
                <div className="font-bold text-white">Sarah M.</div>
                <div className="text-brand-warm-gray">March 2026</div>
              </div>
            </div>
            <div className="bg-[#1E1208] p-8 border border-white/10 rounded-xl">
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="font-playfair italic text-lg mb-6 leading-relaxed">"Intense but incredibly rewarding. I finally understand the science behind laminating dough."</p>
              <div className="font-lato text-sm">
                <div className="font-bold text-white">James T.</div>
                <div className="text-brand-warm-gray">February 2026</div>
              </div>
            </div>
            <div className="bg-[#1E1208] p-8 border border-white/10 rounded-xl">
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="font-playfair italic text-lg mb-6 leading-relaxed">"The studio is beautiful and well-equipped. A perfect Saturday activity for baking enthusiasts."</p>
              <div className="font-lato text-sm">
                <div className="font-bold text-white">Melissa W.</div>
                <div className="text-brand-warm-gray">January 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Classes */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-playfair text-4xl font-bold text-brand-espresso mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_CLASSES.map((cls, idx) => (
              <ClassCard key={idx} {...cls} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
