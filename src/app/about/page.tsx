"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChefHat, Award, Users, Play } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#F4F5F7] min-h-screen pb-12 font-lato text-brand-espresso">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] bg-gradient-to-br from-[#0F5A6D] to-[#0A3D4A] rounded-b-[3rem] overflow-hidden mb-8 mx-2 mt-2" style={{ width: 'calc(100% - 1rem)' }}>
        <Image
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop"
          alt="About Hero"
          fill sizes="100vw"
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#FF5A22] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF5A22]" />
            OUR STORY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight max-w-4xl">
            Cultivating culinary excellence since 2005.
          </h2>
          <p className="max-w-2xl text-white/80 font-lato text-lg md:text-xl">
            Bridging the gap between home cooks and professional chefs through immersive, hands-on experiences.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 space-y-24 mt-12">
        
        {/* 2. Mission Bento Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-white rounded-3xl p-10 md:p-16 shadow-sm flex flex-col justify-center">
            <div className="w-16 h-16 bg-[#EBF2FF] rounded-full flex items-center justify-center mb-8">
              <ChefHat className="w-8 h-8 text-[#0F5A6D]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              A philosophy built on <span className="text-[#FF5A22]">passion and precision</span>.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Founded on the belief that everyone can cook, Palate Sensations has evolved into Singapore's premier culinary school. We focus on modern techniques, premium ingredients, and hands-on learning.
            </p>
            <div className="flex gap-12 border-t border-gray-100 pt-8 mt-auto">
              <div>
                <p className="text-4xl font-playfair font-bold text-[#0F5A6D] mb-1">15+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Exp</p>
              </div>
              <div>
                <p className="text-4xl font-playfair font-bold text-[#0F5A6D] mb-1">50k</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Graduates</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-3xl relative overflow-hidden min-h-[400px] shadow-sm group">
            <Image src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop" fill sizes="50vw" alt="Chef" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-[#FF5A22] text-white text-xs font-bold px-3 py-1.5 rounded-full w-max mb-4">Founder</div>
              <h3 className="text-3xl font-playfair font-bold mb-2">Chef Lynette</h3>
              <p className="text-gray-300 text-sm">Executive Director & Head Chef</p>
            </div>
          </div>
        </section>

        {/* 3. Dark Mode Core Values */}
        <section className="bg-[#0D0D0D] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F5A6D]/20 rounded-full blur-3xl" />
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10 gap-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold max-w-2xl leading-tight">
              Our core values shape every <span className="text-[#FF5A22]">sensation</span>.
            </h2>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shrink-0">
              Join Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: <Award />, title: "Excellence", desc: "We never compromise on ingredient quality or instructional standards." },
              { icon: <Users />, title: "Community", desc: "Fostering a welcoming environment for all food lovers to connect." },
              { icon: <ChefHat />, title: "Innovation", desc: "Constantly evolving our recipes and techniques to match modern trends." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5A22] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FF5A22]/20">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
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
