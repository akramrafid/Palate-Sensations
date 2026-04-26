"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Corporate", href: "/corporate" },
  { label: "Kids", href: "/kids" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Floating Pill Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-2 px-4 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <div className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Palate Sensations Logo" 
              width={160}
              height={40}
              className="object-contain h-8 md:h-10 w-auto rounded-md" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-gray-600 hover:text-black transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/classes">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#2b2b2b] via-[#1a1a1a] to-[#000000] text-white px-6 py-2.5 rounded-full text-[13px] font-medium shadow-lg shadow-black/20 hover:shadow-black/40 transition-shadow border border-white/10"
            >
              Book a Class
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 bg-white/90 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/50 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-black transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/classes" className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-gradient-to-br from-[#2b2b2b] via-[#1a1a1a] to-[#000000] text-white py-4 rounded-full font-medium shadow-xl">
                Book a Class
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
