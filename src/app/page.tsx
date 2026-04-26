"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Play, Check, TrendingUp, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#F4F5F7] min-h-screen pb-12 font-lato text-brand-espresso">
      
      {/* 1. Massive Hero Section */}
      <section className="relative w-full h-[85vh] bg-gradient-to-br from-[#1E1208] to-[#3A220F] rounded-b-[3rem] overflow-hidden mb-8 mx-2 mt-2" style={{ width: 'calc(100% - 1rem)' }}>
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
          alt="Home Hero"
          fill sizes="100vw"
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        
        <div className="absolute top-1/4 left-8 md:left-16 z-10 text-white max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-bold text-[#FF5A22] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5A22]" />
            ELEVATE YOUR CULINARY SKILLS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair mb-8 leading-tight">
            Taste the<br/>extraordinary.
          </h2>
          <div className="flex gap-4">
            <Link href="/classes">
              <button className="bg-[#FF5A22] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl shadow-[#FF5A22]/30">
                Explore Classes
              </button>
            </Link>
            <button className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-colors border border-white/20">
              Our Story
            </button>
          </div>
        </div>
        
        <h1 className="absolute -bottom-4 md:-bottom-12 left-0 right-0 text-center font-playfair font-bold text-[18vw] leading-none text-white tracking-tighter mix-blend-overlay opacity-50 pointer-events-none">
          Sensations
        </h1>
      </section>

      <div className="container mx-auto px-4 md:px-8 space-y-24 mt-12">
        
        {/* 2. Bento Grid - What We Offer */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold max-w-xl leading-tight">
              Master the art of <span className="inline-block w-10 h-10 rounded-full bg-[#EBF2FF] align-middle overflow-hidden"><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" width={40} height={40} alt="food"/></span> fine dining.
            </h2>
            <Link href="/classes" className="text-sm font-bold flex items-center gap-2 hover:text-[#FF5A22] transition-colors border-b-2 border-black pb-1">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Dark Card */}
            <div className="md:col-span-5 bg-black text-white rounded-3xl p-10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#FF5A22]/20 rounded-full blur-3xl group-hover:bg-[#FF5A22]/40 transition-colors duration-700" />
              <div className="flex justify-between items-center mb-16 relative z-10">
                <span className="text-xs font-bold tracking-wider uppercase border border-white/20 px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-playfair font-bold mb-4">Hands-on<br/>Cooking</h3>
                <p className="text-gray-400 mb-8 max-w-sm">From foundational knife skills to complex Michelin-star techniques.</p>
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Card */}
            <div className="md:col-span-4 rounded-3xl relative overflow-hidden h-[400px] shadow-sm group">
              <Image src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1200&auto=format&fit=crop" fill sizes="33vw" alt="Baking class" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <Heart className="w-3 h-3 text-red-500" fill="currentColor" /> Pastry Arts
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-6 flex flex-col shadow-lg">
                <p className="font-playfair text-xl font-bold mb-1">Artisan Baking</p>
                <p className="text-xs text-gray-500 font-bold mb-4">Master bread and pastries.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF5A22] font-bold text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5A22]" />
                </div>
              </div>
            </div>

            {/* Light Card */}
            <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#EBF2FF] rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#0F5A6D]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-2">Corporate<br/>Events</h3>
                <p className="text-sm text-gray-500">Unforgettable team building experiences.</p>
              </div>
              <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="font-bold text-sm">Book Event</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Overlapping UI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="pl-0 md:pl-12 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Perfect your craft with <span className="text-[#FF5A22]">precision</span>.
            </h2>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              Our state-of-the-art kitchen studios are equipped with commercial-grade appliances and premium ingredients, providing the ultimate environment for your culinary journey.
            </p>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 relative group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" fill sizes="80px" alt="Studio" className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">State of the Art Studio</p>
                <p className="text-sm text-gray-500">View Our Facilities</p>
              </div>
              <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-xl group-hover:bg-[#FF5A22] transition-colors">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden order-1 md:order-2">
            <Image src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" fill sizes="50vw" alt="Activity" className="object-cover" />
            
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 w-48">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0F5A6D] text-white flex items-center justify-center font-bold">10k</div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Students</p>
                  <p className="font-bold text-sm">Graduated</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#FF5A22] rounded-full" />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur rounded-3xl p-6 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-white bg-gray-300 relative overflow-hidden`}>
                      <Image src={`https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop`} fill sizes="48px" alt="Avatar" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold">Expert Instructors</p>
                  <p className="text-xs text-gray-500">Learn from the best.</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-[#0F5A6D]" fill="currentColor" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Dark Highlights Banner */}
        <section className="bg-[#0D0D0D] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A22]/20 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-16 max-w-2xl leading-tight relative z-10">
            Experiences designed for <span className="text-[#FF5A22]">every palate</span> and every occasion.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { title: "Kids Holiday Camp", desc: "Fun, educational cooking camps for junior chefs.", img: "1600565193348-f74bd3c7ccdf", isHighlighted: true },
              { title: "Corporate Events", desc: "Team building through collaborative culinary challenges.", img: "1547592180-85f173990554", isHighlighted: false },
              { title: "Private Dining", desc: "Exclusive chef-curated meals for special events.", img: "1504670073073-6123e39e0754", isHighlighted: false }
            ].map((item, idx) => (
              <div key={idx} className={`rounded-3xl p-8 flex flex-col justify-between transition-colors cursor-pointer ${item.isHighlighted ? 'bg-[#FF5A22] shadow-xl shadow-[#FF5A22]/20' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-3">{item.title}</h3>
                  <p className={`text-sm ${item.isHighlighted ? 'text-white/90' : 'text-gray-400'} mb-8 line-clamp-2`}>{item.desc}</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-20 h-14 rounded-xl overflow-hidden relative shadow-lg">
                    <Image src={`https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop`} fill sizes="80px" alt="Preview" className="object-cover" />
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.isHighlighted ? 'bg-white text-[#FF5A22]' : 'bg-white/10 text-white'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom CTA Area */}
        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col text-center items-center justify-center py-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop')] opacity-[0.03] bg-cover mix-blend-overlay pointer-events-none" />
           <div className="w-20 h-20 bg-[#FF5A22] rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-[#FF5A22]/30">
             <Star className="w-8 h-8" fill="currentColor"/>
           </div>
           <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 max-w-3xl leading-tight">
             Ready to don your apron?
           </h2>
           <p className="text-gray-500 max-w-xl mb-10 text-lg">
             Join thousands of students who have transformed their culinary skills in our professional studios.
           </p>
           <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3">
             View Schedule <ArrowRight className="w-5 h-5" />
           </button>
        </section>

      </div>

      {/* Massive Footer Title */}
      <div className="w-full overflow-hidden mt-16 px-4 md:px-8">
         <h1 className="text-[18vw] font-bold tracking-tighter leading-none text-center text-brand-espresso whitespace-nowrap opacity-90">
           PalateSensation
         </h1>
      </div>
    </div>
  );
}
