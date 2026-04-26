"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, Video, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <div className="px-4 md:px-8 pb-6 w-full">
      {/* Massive floating pill-shaped footer using the glassmorphism/gradient design */}
      <footer className="w-full max-w-7xl mx-auto rounded-[3rem] bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] pt-16 pb-8 px-8 md:px-16 text-gray-800 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#FF5A22]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 relative z-10">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-12 w-48 flex items-center">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Logo" 
                  fill
                  sizes="192px"
                  className="object-contain object-left mix-blend-multiply" 
                />
              </div>
            </Link>
            <p className="font-lato text-gray-500 leading-relaxed mb-8 max-w-sm font-medium">
              Empowering culinary journeys and creating memorable experiences since 2012. 
              Join us to discover where food becomes memory.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:shadow-md transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:shadow-md transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:shadow-md transition-all">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1: Classes & Events */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-black mb-6">Explore</h4>
            <ul className="space-y-3 font-lato text-sm font-medium text-gray-500">
              <li><Link href="/classes" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> All Classes</Link></li>
              <li><Link href="/classes/baking" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Baking Classes</Link></li>
              <li><Link href="/kids" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Kids Programs</Link></li>
              <li><Link href="/events" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Private Events</Link></li>
              <li><Link href="/corporate" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Team Building</Link></li>
            </ul>
          </div>

          {/* Links 2: Info */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-black mb-6">Information</h4>
            <ul className="space-y-3 font-lato text-sm font-medium text-gray-500">
              <li><Link href="/about" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Our Story</Link></li>
              <li><Link href="/team" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Meet the Team</Link></li>
              <li><Link href="/vouchers" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Gift Vouchers</Link></li>
              <li><Link href="/faq" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-[#FF5A22] transition-all group-hover:w-2"/> Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-black mb-6">Contact Us</h4>
            <ul className="space-y-4 font-lato text-sm font-medium text-gray-500">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                </div>
                <span className="mt-1">Chromos #01-03,<br/>10 Biopolis Road,<br/>Singapore 138670</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone className="w-3.5 h-3.5 text-black" />
                </div>
                <a href="tel:+6587690968" className="hover:text-black transition-colors">+65 8769 0968</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="w-3.5 h-3.5 text-black" />
                </div>
                <a href="mailto:info@palatesensations.com" className="hover:text-black transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-lato text-xs font-bold text-gray-500 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span className="text-black">&copy; {new Date().getFullYear()} Palate Sensations.</span>
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:border-gray-300 transition-colors">Stripe</div>
            <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:border-gray-300 transition-colors">Apple Pay</div>
            <div className="px-3 py-1.5 bg-[#FF5A22]/10 text-[#FF5A22] border border-[#FF5A22]/20 rounded-full shadow-sm">PayNow</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
