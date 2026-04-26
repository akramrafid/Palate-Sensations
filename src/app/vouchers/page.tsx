"use client";

import * as React from "react";
import Image from "next/image";
import { Gift, Mail, Calendar, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const AMOUNTS = [50, 100, 150, 200];

export default function VouchersPage() {
  const [amount, setAmount] = React.useState<number | "custom">(100);
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [recipientName, setRecipientName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const displayAmount = amount === "custom" ? Number(customAmount) || 0 : amount;

  return (
    <div className="flex flex-col w-full bg-brand-cream min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="font-lato font-light text-brand-gold tracking-[0.3em] uppercase text-sm mb-4 block">The Perfect Present</span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brand-espresso mb-4">
            Give the Gift of Culinary Joy
          </h1>
          <p className="font-lato text-brand-warm-gray text-lg max-w-2xl mx-auto">
            Our digital gift vouchers can be used for any cooking class, baking workshop, or special event at Palate Sensations. Delivered instantly via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
          
          {/* Interactive Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-warm-gray/10">
            <h2 className="font-playfair text-2xl font-bold text-brand-espresso mb-8 border-b border-brand-warm-gray/20 pb-4">Personalise Your Gift</h2>
            
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block font-lato text-sm font-bold text-brand-espresso mb-4">Select Amount (SGD)</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {AMOUNTS.map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`h-12 rounded-lg font-lato font-bold transition-all border ${
                      amount === val 
                        ? "bg-brand-burgundy text-white border-brand-burgundy" 
                        : "bg-brand-parchment text-brand-espresso border-brand-warm-gray/30 hover:border-brand-gold"
                    }`}
                  >
                    ${val}
                  </button>
                ))}
                <button
                  onClick={() => setAmount("custom")}
                  className={`h-12 rounded-lg font-lato font-bold transition-all border ${
                    amount === "custom" 
                      ? "bg-brand-burgundy text-white border-brand-burgundy" 
                      : "bg-brand-parchment text-brand-espresso border-brand-warm-gray/30 hover:border-brand-gold"
                  }`}
                >
                  Custom
                </button>
              </div>
              {amount === "custom" && (
                <div className="mt-4">
                  <Input 
                    type="number" 
                    placeholder="Enter custom amount" 
                    variant="filled" 
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="10"
                  />
                </div>
              )}
            </div>

            {/* Recipient Details */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block font-lato text-sm font-bold text-brand-espresso mb-2">Recipient's Name</label>
                <Input 
                  variant="filled" 
                  placeholder="e.g. Jane Doe" 
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-lato text-sm font-bold text-brand-espresso mb-2">Recipient's Email</label>
                <Input type="email" variant="filled" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block font-lato text-sm font-bold text-brand-espresso mb-2">Your Personal Message</label>
                <textarea 
                  className="w-full bg-brand-parchment border border-brand-warm-gray/30 rounded-md p-4 font-lato focus:outline-none focus:border-brand-gold min-h-[100px]"
                  placeholder="Happy Birthday! Enjoy a cooking class on me."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-lato text-sm font-bold text-brand-espresso mb-2">Delivery Date</label>
                <div className="relative">
                  <Input type="date" variant="filled" className="pl-10" />
                  <Calendar className="w-5 h-5 text-brand-warm-gray absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Checkout Area */}
            <div className="border-t border-brand-warm-gray/20 pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-lato text-brand-warm-gray">Total Due</span>
                <span className="font-playfair text-3xl font-bold text-brand-espresso">SGD ${displayAmount}</span>
              </div>
              <Button variant="primary" size="lg" className="w-full h-14 text-lg mb-4">
                <CreditCard className="w-5 h-5 mr-2" /> Complete Purchase
              </Button>
              <div className="text-center font-lato text-xs text-brand-warm-gray flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Secure payment via Stripe
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-32">
            <h2 className="font-playfair text-2xl font-bold text-brand-espresso mb-8 text-center lg:text-left">Gift Preview</h2>
            
            {/* Gift Card Mockup */}
            <div className="bg-brand-espresso rounded-2xl overflow-hidden shadow-2xl relative aspect-[1.6/1] group transition-transform duration-500 hover:scale-105">
              {/* Background texture */}
              <Image 
                src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1200&auto=format&fit=crop" 
                alt="Texture" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-espresso via-transparent to-brand-gold/20" />
              
              <div className="absolute inset-6 border border-brand-gold/30 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-playfair text-xl text-white leading-none">Palate Sensations</h3>
                    <span className="font-lato text-[8px] uppercase tracking-widest text-brand-gold">Culinary School</span>
                  </div>
                  <Gift className="w-8 h-8 text-brand-gold opacity-80" />
                </div>
                
                <div className="text-center">
                  <div className="font-lato text-xs text-brand-cream/60 uppercase tracking-widest mb-1">Gift Voucher</div>
                  <div className="font-playfair text-5xl text-brand-gold font-bold">${displayAmount}</div>
                </div>
                
                <div className="flex justify-between items-end font-lato text-xs text-brand-cream/80">
                  <div>
                    <span className="opacity-50 block mb-1">To:</span>
                    <span className="font-bold text-white">{recipientName || "Recipient Name"}</span>
                  </div>
                  <div className="text-right uppercase tracking-wider opacity-50">
                    Valid for 12 months
                  </div>
                </div>
              </div>
            </div>

            {/* Email Preview */}
            <div className="mt-8 bg-white p-6 rounded-xl border border-brand-warm-gray/20 shadow-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-cream px-4 text-xs font-lato text-brand-warm-gray uppercase tracking-wider font-bold">Email Preview</div>
              <div className="flex items-center gap-3 mb-4 border-b border-brand-warm-gray/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-brand-parchment flex items-center justify-center text-brand-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-lato text-sm font-bold text-brand-espresso">You've received a gift!</div>
                  <div className="font-lato text-xs text-brand-warm-gray">From: sender@example.com</div>
                </div>
              </div>
              <p className="font-playfair italic text-brand-espresso text-lg leading-relaxed text-center px-4">
                "{message || "A personal message will appear here."}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

