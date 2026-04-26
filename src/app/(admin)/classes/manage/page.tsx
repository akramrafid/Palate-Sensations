"use client";

import * as React from "react";
import { Plus, Search, Edit2, Trash2, CalendarPlus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Mock Data for Class Templates
const CLASS_TEMPLATES = [
  { id: "CT-001", title: "Mastering French Pastry", category: "Baking", duration: 180, price: 180, activeSessions: 3 },
  { id: "CT-002", title: "Thai Street Food Classics", category: "Cooking", duration: 240, price: 150, activeSessions: 1 },
  { id: "CT-003", title: "Artisan Bread Baking", category: "Baking", duration: 300, price: 200, activeSessions: 4 },
  { id: "CT-004", title: "Corporate: The Mystery Box", category: "Corporate", duration: 210, price: 0, activeSessions: 2 },
  { id: "CT-005", title: "Kids Holiday Bootcamp", category: "Kids", duration: 4320, price: 350, activeSessions: 1 },
];

export default function ClassManagement() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-brand-espresso">Class Templates</h1>
          <p className="font-lato text-sm text-brand-warm-gray">Manage your class library, pricing, and create new scheduled sessions.</p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-warm-gray/10 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Input variant="filled" placeholder="Search templates..." className="pl-10" />
          <Search className="w-5 h-5 text-brand-warm-gray absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-3 py-2 font-lato text-sm text-brand-espresso outline-none focus:border-brand-gold w-full md:w-auto">
            <option>All Categories</option>
            <option>Baking</option>
            <option>Cooking</option>
            <option>Corporate</option>
            <option>Kids</option>
          </select>
          <select className="bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-3 py-2 font-lato text-sm text-brand-espresso outline-none focus:border-brand-gold w-full md:w-auto">
            <option>Sort by: Newest</option>
            <option>Sort by: Name A-Z</option>
            <option>Sort by: Price High-Low</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl border border-brand-warm-gray/10 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-lato text-sm">
            <thead className="bg-brand-parchment/50 border-b border-brand-warm-gray/20 text-brand-warm-gray">
              <tr>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">ID</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Class Title</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Category</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Duration</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Base Price</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Active Sessions</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-warm-gray/10 text-brand-espresso">
              {CLASS_TEMPLATES.map((template) => (
                <tr key={template.id} className="hover:bg-[#FAFAF9] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-brand-warm-gray">{template.id}</td>
                  <td className="px-6 py-4 font-bold">{template.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-brand-gold/10 text-brand-gold rounded text-xs font-bold tracking-wider uppercase">
                      {template.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-brand-warm-gray">{template.duration / 60} Hrs</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">
                    {template.price > 0 ? `$${template.price}` : "Custom"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${template.activeSessions > 0 ? 'bg-brand-herb-green' : 'bg-brand-warm-gray'}`} />
                      {template.activeSessions}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-espresso hover:bg-brand-parchment rounded transition-colors" title="Schedule New Session">
                        <CalendarPlus className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-gold hover:bg-brand-parchment rounded transition-colors" title="Edit Template">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded transition-colors" title="Delete Template">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-brand-warm-gray/10 bg-brand-parchment/30 flex items-center justify-between text-sm font-lato text-brand-warm-gray">
          <span>Showing 1 to 5 of 24 templates</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-brand-warm-gray/20 bg-white hover:bg-[#FAFAF9] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-brand-warm-gray/20 bg-white hover:bg-[#FAFAF9]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
