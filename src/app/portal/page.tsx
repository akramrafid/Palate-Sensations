"use client";

import * as React from "react";
import Image from "next/image";
import { User, Calendar, History, Settings, Ticket, LogOut, ChevronRight, Download, Edit } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = React.useState("dashboard");

  // Mock User Data
  const USER = {
    name: "Alex Tan",
    email: "alex.tan@example.com",
    memberSince: "2024",
    pointsBalance: 1250,
  };

  return (
    <div className="flex flex-col w-full bg-[#FAFAF9] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-warm-gray/10 mb-6">
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-espresso font-playfair text-2xl font-bold mb-4">
              {USER.name.charAt(0)}
            </div>
            <h2 className="font-playfair text-xl font-bold text-brand-espresso">{USER.name}</h2>
            <p className="font-lato text-sm text-brand-warm-gray mb-1">{USER.email}</p>
            <p className="font-lato text-xs text-brand-gold uppercase tracking-widest">Member since {USER.memberSince}</p>
          </div>

          <nav className="bg-white rounded-2xl p-4 shadow-sm border border-brand-warm-gray/10 flex flex-col gap-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: <User className="w-5 h-5" /> },
              { id: "bookings", label: "My Bookings", icon: <Calendar className="w-5 h-5" /> },
              { id: "history", label: "Transaction History", icon: <History className="w-5 h-5" /> },
              { id: "vouchers", label: "Voucher Wallet", icon: <Ticket className="w-5 h-5" /> },
              { id: "settings", label: "Profile Settings", icon: <Settings className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between p-3 rounded-lg font-lato text-sm transition-colors ${
                  activeTab === tab.id 
                    ? "bg-brand-parchment text-brand-espresso font-bold" 
                    : "text-brand-warm-gray hover:bg-[#FAFAF9] hover:text-brand-espresso"
                }`}
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  {tab.label}
                </div>
                {activeTab === tab.id && <ChevronRight className="w-4 h-4 text-brand-gold" />}
              </button>
            ))}
            <div className="border-t border-brand-warm-gray/10 mt-2 pt-2">
              <button className="flex items-center gap-3 p-3 rounded-lg font-lato text-sm text-brand-terracotta hover:bg-brand-terracotta/5 transition-colors w-full">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-brand-espresso text-brand-cream rounded-2xl p-8 flex-1 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-brand-gold opacity-10 rounded-l-full transform translate-x-16" />
                  <h3 className="font-lato text-sm uppercase tracking-widest mb-2 text-brand-gold">Palate Points</h3>
                  <div className="font-playfair text-5xl font-bold mb-4">{USER.pointsBalance}</div>
                  <p className="font-lato text-sm opacity-80">You're 250 points away from a $50 reward voucher.</p>
                </div>
                <div className="bg-white border border-brand-warm-gray/10 rounded-2xl p-8 flex-1 shadow-sm">
                  <h3 className="font-lato text-sm uppercase tracking-widest mb-4 text-brand-warm-gray">Upcoming Class</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-brand-parchment flex flex-col items-center justify-center border border-brand-gold/30">
                      <span className="font-lato text-xs text-brand-espresso uppercase">May</span>
                      <span className="font-playfair text-2xl font-bold text-brand-espresso">15</span>
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-lg text-brand-espresso">Mastering French Pastry</h4>
                      <p className="font-lato text-sm text-brand-warm-gray">2:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="mt-4 p-0 text-brand-burgundy text-sm">View Details →</Button>
                </div>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div className="bg-white rounded-2xl shadow-sm border border-brand-warm-gray/10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 border-b border-brand-warm-gray/10 flex justify-between items-center">
                <h3 className="font-playfair text-2xl font-bold text-brand-espresso">My Bookings</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-brand-parchment text-brand-espresso rounded-full text-xs font-bold font-lato cursor-pointer">Upcoming</span>
                  <span className="px-3 py-1 text-brand-warm-gray rounded-full text-xs font-lato cursor-pointer hover:bg-[#FAFAF9]">Past</span>
                </div>
              </div>
              <div className="divide-y divide-brand-warm-gray/10">
                <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-24 h-24 rounded-xl bg-brand-parchment relative overflow-hidden shrink-0">
                    <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" alt="Class" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-brand-herb-green/10 text-brand-herb-green text-[10px] font-bold uppercase tracking-wider rounded">Confirmed</span>
                      <span className="font-lato text-xs text-brand-warm-gray">Ref: PS-88921</span>
                    </div>
                    <h4 className="font-playfair font-bold text-xl text-brand-espresso mb-1">Mastering French Pastry</h4>
                    <p className="font-lato text-sm text-brand-warm-gray">Sat, 15 May 2026 • 2:00 PM - 5:00 PM • 2 Guests</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <Button variant="secondary" size="sm">Manage Booking</Button>
                    <Button variant="ghost" size="sm" className="text-brand-espresso hover:text-brand-burgundy border border-brand-warm-gray/20">
                      <Download className="w-3 h-3 mr-2" /> Pre-Event Docs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab Placeholder */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-2xl shadow-sm border border-brand-warm-gray/10 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center mb-8 border-b border-brand-warm-gray/10 pb-6">
                <h3 className="font-playfair text-2xl font-bold text-brand-espresso">Profile Settings</h3>
                <Button variant="secondary" size="sm"><Edit className="w-4 h-4 mr-2" /> Edit Profile</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-lato text-sm font-bold text-brand-warm-gray uppercase tracking-wider mb-4">Personal Information</h4>
                  <div className="space-y-4 font-lato">
                    <div>
                      <span className="text-xs text-brand-warm-gray block">Full Name</span>
                      <span className="text-brand-espresso font-bold">{USER.name}</span>
                    </div>
                    <div>
                      <span className="text-xs text-brand-warm-gray block">Email Address</span>
                      <span className="text-brand-espresso font-bold">{USER.email}</span>
                    </div>
                    <div>
                      <span className="text-xs text-brand-warm-gray block">Phone Number</span>
                      <span className="text-brand-espresso font-bold">+65 9123 4567</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-lato text-sm font-bold text-brand-warm-gray uppercase tracking-wider mb-4">Dietary Preferences</h4>
                  <div className="space-y-4 font-lato">
                    <div>
                      <span className="text-xs text-brand-warm-gray block">Allergies</span>
                      <span className="text-brand-espresso font-bold">None</span>
                    </div>
                    <div>
                      <span className="text-xs text-brand-warm-gray block">Dietary Restrictions</span>
                      <span className="text-brand-espresso font-bold">Vegetarian (Optional)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Other tabs would follow similar structure */}
          {["history", "vouchers"].includes(activeTab) && (
            <div className="bg-white rounded-2xl shadow-sm border border-brand-warm-gray/10 p-8 flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 rounded-full bg-brand-parchment text-brand-gold flex items-center justify-center mb-4">
                {activeTab === "history" ? <History className="w-8 h-8" /> : <Ticket className="w-8 h-8" />}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-brand-espresso mb-2">
                {activeTab === "history" ? "Transaction History" : "Voucher Wallet"}
              </h3>
              <p className="font-lato text-brand-warm-gray max-w-md">
                This section is currently being updated. Your data is safe and will be available shortly.
              </p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

