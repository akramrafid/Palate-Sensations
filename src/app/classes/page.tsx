"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Activity, TrendingUp, Play, Filter, Check } from "lucide-react";

export default function ClassListing() {
  return (
    <div className="flex flex-col w-full bg-[#F4F5F7] min-h-screen pb-12 font-lato text-brand-espresso">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] bg-gradient-to-br from-[#0F5A6D] to-[#0A3D4A] rounded-b-[3rem] overflow-hidden mb-8 mx-2 mt-2" style={{ width: 'calc(100% - 1rem)' }}>
        <Image
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop"
          alt="Hero Background"
          fill sizes="100vw"
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute top-1/4 left-8 md:left-16 z-10 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-4 leading-tight">
            A new species<br/>of culinary art.
          </h2>
          <div className="flex items-center gap-2 text-sm font-bold text-[#FF5A22]">
            <div className="w-2 h-2 rounded-full bg-[#FF5A22]" />
            EXPERIENCE THE SENSATION
          </div>
        </div>
        
        <h1 className="absolute -bottom-4 md:-bottom-12 left-0 right-0 text-center font-playfair font-bold text-[15vw] leading-none text-white tracking-tighter mix-blend-overlay opacity-90 pointer-events-none">
          Classes
        </h1>
      </section>

      <div className="container mx-auto px-4 md:px-8 space-y-24 mt-12">
        
        {/* 2. Explore Bento Grid */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold max-w-sm leading-tight">
              Explore <span className="inline-block w-8 h-8 rounded-full bg-[#FF5A22] align-middle overflow-hidden"><Image src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop" width={32} height={32} alt="food"/></span> our flexible of classes.
            </h2>
            <div className="flex flex-wrap gap-2 text-sm font-bold">
              {['All Classes', 'Baking', 'Cooking', 'Corporate', 'Kids', 'Events'].map((cat, i) => (
                <span key={cat} className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-black text-white' : 'bg-white text-gray-500 hover:bg-gray-200'}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="font-bold mb-2">Connect with us</p>
                <p className="text-sm text-gray-500">Discover premium culinary experiences tailored for all skill levels.</p>
              </div>
              <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="font-bold text-sm">View All Rankings</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="md:col-span-4 bg-black text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF5A22] rounded-full" />
                  <span className="text-xs font-bold tracking-wider uppercase">Pro Level</span>
                </div>
              </div>
              <h3 className="text-3xl font-playfair font-bold">Visionary<br/>Precision Cooking</h3>
              <div className="mt-8 flex gap-2">
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs">Technique</span>
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs">Plating</span>
              </div>
            </div>

            <div className="md:col-span-4 rounded-3xl relative overflow-hidden h-[300px] shadow-sm group">
              <Image src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop" fill sizes="33vw" alt="Cooking class" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <Play className="w-3 h-3 text-[#FF5A22]" fill="currentColor" /> Masterclass
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Baking</p>
                  <p className="font-bold">Artisan Bread</p>
                </div>
                <div className="bg-[#EBF2FF] text-[#0F5A6D] px-3 py-1 rounded-full text-sm font-bold">
                  $200
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Elevate Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold max-w-md leading-tight">
              Elevate your <span className="inline-block w-8 h-8 rounded-full overflow-hidden align-middle bg-brand-gold"><Image src="https://images.unsplash.com/photo-1504670073073-6123e39e0754?q=80&w=1200&auto=format&fit=crop" width={32} height={32} alt="food"/></span> experience with handpicked featured.
            </h2>
            <p className="text-gray-500 text-sm max-w-xs text-right">
              Our curated selection guarantees premium ingredients and world-class instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-2 text-center md:text-left flex flex-row md:flex-col justify-between h-full">
              <div>
                <span className="text-6xl font-playfair font-bold">01</span>
                <span className="text-gray-400 text-xl">/04</span>
                <p className="text-sm font-bold mt-2">Mastering<br/>French Pastry</p>
              </div>
              <div className="flex gap-2 mt-8 justify-center md:justify-start">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">&larr;</button>
                <button className="w-10 h-10 rounded-full bg-[#FF5A22] text-white flex items-center justify-center hover:bg-[#e04a18]">&rarr;</button>
              </div>
            </div>

            <div className="md:col-span-5 bg-black text-white rounded-3xl p-10 h-[320px] flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-playfair leading-relaxed">
                The expert chefs and <span className="bg-[#FF5A22]/20 text-[#FF5A22] px-2 py-1 rounded-md">simple techniques</span> for better culinary results.
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs uppercase tracking-widest text-gray-400">02 Level</span>
                <span className="text-xs border border-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors">Read More</span>
              </div>
            </div>

            <div className="md:col-span-5 rounded-3xl overflow-hidden relative h-[320px] shadow-sm group">
              <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop" fill sizes="50vw" alt="Kids class" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">All Levels</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Heart className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-1">Chemistry Culinary Partner</h3>
                <p className="text-sm text-gray-200">Perfect your skills together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Activity Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop" fill sizes="50vw" alt="Activity" className="object-cover" />
            
            {/* Overlapping Stats Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EBF2FF] flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[#0F5A6D]" />
                  </div>
                  <span className="font-bold text-sm">Skills Learned</span>
                </div>
                <span className="text-xs bg-[#FF5A22]/10 text-[#FF5A22] px-2 py-1 rounded font-bold">New</span>
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-playfair font-bold">12</span>
                <span className="text-gray-400 font-bold mb-1">Techniques</span>
              </div>
              {/* Fake Graph */}
              <div className="flex items-end gap-1 h-16 w-full mb-4">
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#EBF2FF] rounded-t-sm" style={{ height: `${h}%` }}>
                    {i === 5 && <div className="w-full h-full bg-[#FF5A22] rounded-t-sm" />}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 font-bold">
                <span>Wk 1</span>
                <span>Wk 2</span>
                <span>Wk 3</span>
              </div>
            </div>
          </div>

          <div className="pl-0 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Stay motivated with hands-on <span className="inline-block w-8 h-8 rounded-full bg-brand-espresso align-middle overflow-hidden"><Image src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop" width={32} height={32} alt="food"/></span> cooking.
            </h2>
            <div className="flex gap-4 mb-12">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Filter className="w-5 h-5 text-gray-500"/></div>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Activity className="w-5 h-5 text-gray-500"/></div>
              <div className="w-12 h-12 rounded-full bg-[#FF5A22] flex items-center justify-center shadow-lg shadow-[#FF5A22]/30"><TrendingUp className="w-5 h-5 text-white"/></div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden relative shrink-0">
                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" fill sizes="100px" alt="Small" className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Chef Masterclass</p>
                <p className="text-sm text-gray-500">20% OFF ALL</p>
                <div className="mt-2 text-xs font-bold text-[#0F5A6D] flex items-center gap-1 cursor-pointer">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FF5A22] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 5. Dark Mode Banner List */}
        <section className="bg-[#0D0D0D] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-burgundy/20 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-16 max-w-2xl leading-tight relative z-10">
            To win over culinary-minded consumers with premium <span className="text-[#65B741] font-sans">✦</span> ingredients and excellent techniques.
          </h2>

          <div className="flex flex-col gap-2 relative z-10">
            <div className="flex justify-between items-center border-t border-white/10 py-6 text-xl text-gray-400 hover:text-white cursor-pointer transition-colors group">
              <span className="font-bold">Online Baking Challenge</span>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Highlighted Row */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#FF5A22] rounded-2xl p-6 text-white cursor-pointer hover:bg-[#e04a18] transition-colors shadow-xl shadow-[#FF5A22]/20">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-2">Youth Culinary Camp - 16yo</h3>
                <div className="flex gap-4 text-sm font-bold opacity-90">
                  <span>3 Days Camp</span>
                  <span>Beginner Level</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <Image src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1200&auto=format&fit=crop" width={120} height={80} alt="Camp" className="rounded-xl object-cover h-20 w-32 shadow-lg rotate-3" />
                <div className="w-12 h-12 rounded-full bg-white text-[#FF5A22] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-white/10 py-6 text-xl text-gray-400 hover:text-white cursor-pointer transition-colors group">
              <span className="font-bold">Corporate Team Cooking</span>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-between items-center border-t border-white/10 py-6 text-xl text-gray-400 hover:text-white cursor-pointer transition-colors group">
              <span className="font-bold">Festive Masterclass</span>
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-playfair font-bold max-w-sm leading-tight">
              What <span className="inline-block w-8 h-8 rounded-full overflow-hidden align-middle bg-[#EBF2FF]"/> people are honestly saying right now
            </h2>
            <div className="hidden md:flex gap-2">
               <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">&larr;</button>
               <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">&rarr;</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xl font-bold leading-relaxed mb-6">
                  "The classes keep me on track, and the community pushes me to keep cooking. It's the perfect mix of fun and learning."
                </p>
                <div className="flex items-center gap-1 text-brand-gold mb-8">
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <span className="text-brand-espresso font-bold ml-2">4.9</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                <div>
                  <p className="font-bold">Samantha Chen</p>
                  <p className="text-sm text-gray-500">Pastry Student</p>
                </div>
                <div className="w-10 h-10 bg-[#FF5A22] rounded-full flex items-center justify-center text-white">
                  <Star className="w-5 h-5" fill="currentColor"/>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 rounded-3xl relative overflow-hidden h-[400px] shadow-sm">
              <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" fill sizes="60vw" alt="Review" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4AA6C5]/90 via-[#4AA6C5]/40 to-transparent" />
              
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-white px-3 py-1.5 rounded-full text-xs font-bold w-max flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-blue-500" /> Featured Class
                </span>
                <span className="bg-white/20 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-bold w-max flex items-center gap-2">
                   <Play className="w-3 h-3" fill="currentColor" /> Watch Video
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-4xl font-playfair font-bold mb-2">Single Session</h3>
                  <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 inline-flex items-center gap-2 font-bold shadow-lg">
                     <span className="text-2xl">$180</span>
                     <span className="text-xs uppercase tracking-wider">Per Person</span>
                  </div>
                </div>
                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-espresso shadow-xl hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-6">
             <div className="w-24 h-24 rounded-2xl overflow-hidden relative shadow-md">
               <Image src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" fill sizes="100px" alt="Small CTA" className="object-cover" />
             </div>
             <div>
               <h3 className="text-2xl font-playfair font-bold mb-2">We're doing everything<br/>for culinary excellence.</h3>
               <div className="flex gap-4 text-xs font-bold text-gray-400">
                 <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#FF5A22]"/> Expert Chefs</span>
                 <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#FF5A22]"/> Premium Tools</span>
               </div>
             </div>
           </div>
           
           <div className="flex items-center gap-6 border-l border-gray-100 pl-8">
             <div className="text-xs font-bold text-gray-400 space-y-1">
               <p>Classes: 50+</p>
               <p>Students: 10k+</p>
             </div>
             <button className="w-14 h-14 bg-[#FF5A22] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#FF5A22]/30 hover:scale-105 transition-transform">
               <Star className="w-6 h-6" fill="currentColor"/>
             </button>
           </div>
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
