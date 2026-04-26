"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Trophy, Target, Star } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="flex flex-col w-full bg-[#F4F5F7] min-h-screen pb-12 font-lato text-brand-espresso">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] bg-gradient-to-br from-[#1E1208] to-[#0A0603] rounded-b-[3rem] overflow-hidden mb-8 mx-2 mt-2" style={{ width: 'calc(100% - 1rem)' }}>
        <Image
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop"
          alt="Corporate Hero"
          fill sizes="100vw"
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute top-1/4 left-8 md:left-16 z-10 text-white max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0F5A6D] bg-white/90 backdrop-blur w-max px-3 py-1 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#0F5A6D]" />
            TEAM BUILDING
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
            Forge stronger teams through food.
          </h2>
          <button className="bg-[#FF5A22] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl shadow-[#FF5A22]/30 flex items-center gap-2">
            Request Proposal <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 space-y-24 mt-12">
        
        {/* 2. Features Bento Grid */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold max-w-lg leading-tight">
              Transform your <span className="text-[#FF5A22]">corporate culture</span>.
            </h2>
            <p className="text-gray-500 max-w-sm md:text-right text-lg">
              Our culinary challenges are designed to improve communication, foster leadership, and reward your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white rounded-3xl p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="w-16 h-16 bg-[#EBF2FF] rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-[#0F5A6D]" />
                </div>
                <h3 className="text-3xl font-playfair font-bold mb-4">The Masterchef Challenge</h3>
                <p className="text-gray-500 mb-8">
                  Divide into teams and compete to create the best dish. Complete with mystery boxes, time limits, and expert judging.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">3-4 Hours</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">10-50 Pax</span>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden relative shrink-0">
                <Image src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop" fill sizes="256px" alt="Team" className="object-cover" />
              </div>
            </div>

            <div className="md:col-span-4 bg-[#FF5A22] text-white rounded-3xl p-10 shadow-xl shadow-[#FF5A22]/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <Target className="w-10 h-10 mb-6" />
                <h3 className="text-3xl font-playfair font-bold mb-4">Strategic<br/>Alignment</h3>
                <p className="text-white/80 mb-8">Custom programs tailored to your specific organizational goals.</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-white text-[#FF5A22] flex items-center justify-center hover:scale-110 transition-transform relative z-10">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 3. Dark Mode Testimonials/Stats */}
        <section className="bg-[#0D0D0D] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0F5A6D]/10 rounded-full blur-3xl" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Trusted by leading organizations
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 opacity-50 grayscale">
              {/* Fake Logos */}
              <div className="text-2xl font-bold font-serif">GOOGLE</div>
              <div className="text-2xl font-bold font-sans tracking-widest">AMAZON</div>
              <div className="text-2xl font-bold font-mono">META</div>
              <div className="text-2xl font-bold font-serif italic">Stripe</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 border-t border-white/10 pt-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <div className="flex gap-1 text-[#FF5A22] mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5" fill="currentColor"/>)}
              </div>
              <p className="text-xl leading-relaxed mb-8">
                "The most engaging offsite we've ever had. Our engineering team learned to collaborate in a completely new environment under pressure."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-500" />
                <div>
                  <p className="font-bold">David L.</p>
                  <p className="text-sm text-gray-400">VP Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center px-8">
               <h3 className="text-4xl font-playfair font-bold mb-4">Ready to book?</h3>
               <p className="text-gray-400 mb-8">Fill out our corporate enquiry form and our event specialists will craft the perfect experience for your team.</p>
               <Link href="/contact">
                 <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 w-max">
                   Contact Us <ArrowRight className="w-4 h-4" />
                 </button>
               </Link>
            </div>
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
