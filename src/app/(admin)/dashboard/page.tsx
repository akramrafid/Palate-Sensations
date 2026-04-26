"use client";

import * as React from "react";
import { Plus, Filter, ChevronLeft, ChevronRight, Users, DollarSign, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-brand-espresso">Operations Calendar</h1>
          <p className="font-lato text-sm text-brand-warm-gray">Manage schedules, instructors, and view daily occupancy.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            New Session
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm flex items-center gap-4 border-l-4 border-l-brand-gold">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="font-lato text-sm text-brand-warm-gray">Today's Students</p>
            <p className="font-playfair text-2xl font-bold text-brand-espresso">42</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm flex items-center gap-4 border-l-4 border-l-brand-herb-green">
          <div className="w-12 h-12 rounded-full bg-brand-herb-green/10 flex items-center justify-center text-brand-herb-green">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="font-lato text-sm text-brand-warm-gray">Today's Revenue (Est)</p>
            <p className="font-playfair text-2xl font-bold text-brand-espresso">$5,400</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm flex items-center gap-4 border-l-4 border-l-brand-burgundy">
          <div className="w-12 h-12 rounded-full bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="font-lato text-sm text-brand-warm-gray">Active Classes</p>
            <p className="font-playfair text-2xl font-bold text-brand-espresso">4</p>
          </div>
        </div>
      </div>

      {/* Calendar Interface (Mockup) */}
      <div className="bg-white rounded-xl border border-brand-warm-gray/10 shadow-sm overflow-hidden flex flex-col h-[600px]">
        {/* Calendar Toolbar */}
        <div className="p-4 border-b border-brand-warm-gray/10 flex justify-between items-center bg-brand-parchment/30">
          <div className="flex items-center gap-4">
            <h2 className="font-playfair text-xl font-bold text-brand-espresso">May 2026</h2>
            <div className="flex gap-1">
              <button className="p-1 rounded hover:bg-white text-brand-espresso"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-1 rounded hover:bg-white text-brand-espresso"><ChevronRight className="w-5 h-5" /></button>
            </div>
            <button className="px-3 py-1 bg-white rounded text-sm font-lato font-bold text-brand-espresso border border-brand-warm-gray/20 shadow-sm">Today</button>
          </div>
          <div className="flex bg-white rounded border border-brand-warm-gray/20 p-1">
            <button className="px-3 py-1 rounded text-sm font-lato font-bold bg-brand-espresso text-white">Month</button>
            <button className="px-3 py-1 rounded text-sm font-lato font-bold text-brand-warm-gray hover:text-brand-espresso">Week</button>
            <button className="px-3 py-1 rounded text-sm font-lato font-bold text-brand-warm-gray hover:text-brand-espresso">Day</button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto bg-white p-4">
          <div className="w-full h-full border border-brand-warm-gray/20 rounded flex items-center justify-center bg-[#FAFAF9] relative">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-brand-warm-gray/30 mx-auto mb-2" />
              <p className="font-lato text-brand-warm-gray">Interactive Calendar View</p>
              <p className="font-lato text-xs text-brand-warm-gray/60 mt-1">FullCalendar.io or React Big Calendar integration will go here</p>
            </div>
            
            {/* Example Mock Event Block */}
            <div className="absolute top-20 left-[20%] w-[12%] bg-brand-burgundy/10 border-l-4 border-l-brand-burgundy rounded p-2 text-left">
              <p className="font-lato text-xs font-bold text-brand-burgundy truncate">10:00 AM</p>
              <p className="font-lato text-xs text-brand-espresso font-bold truncate">Mastering Pastry</p>
              <p className="font-lato text-[10px] text-brand-warm-gray truncate mt-1">Chef Antoine • 8/8 full</p>
            </div>
            
            <div className="absolute top-[40%] left-[50%] w-[12%] bg-brand-herb-green/10 border-l-4 border-l-brand-herb-green rounded p-2 text-left">
              <p className="font-lato text-xs font-bold text-brand-herb-green truncate">2:00 PM</p>
              <p className="font-lato text-xs text-brand-espresso font-bold truncate">Corporate: DBS Bank</p>
              <p className="font-lato text-[10px] text-brand-warm-gray truncate mt-1">Chef Marco • 20 pax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
