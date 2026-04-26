"use client";

import * as React from "react";
import { Search, Filter, CheckCircle, XCircle, RefreshCw, Mail, MoreHorizontal, Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Mock Data for Bookings
const BOOKINGS = [
  { id: "BKG-9921", studentName: "Eleanor Shellstrop", email: "eleanor@example.com", className: "Mastering French Pastry", date: "2026-05-15T14:00:00", pax: 2, status: "CONFIRMED", payment: "PAID" },
  { id: "BKG-9922", studentName: "Chidi Anagonye", email: "chidi@example.com", className: "Artisan Bread Baking", date: "2026-05-16T09:00:00", pax: 1, status: "PENDING", payment: "UNPAID" },
  { id: "BKG-9923", studentName: "Tahani Al-Jamil", email: "tahani@example.com", className: "Corporate: The Mystery Box", date: "2026-05-20T10:00:00", pax: 15, status: "CONFIRMED", payment: "INVOICED" },
  { id: "BKG-9924", studentName: "Jason Mendoza", email: "jason@example.com", className: "Thai Street Food Classics", date: "2026-05-12T18:00:00", pax: 2, status: "CANCELLED", payment: "REFUNDED" },
  { id: "BKG-9925", studentName: "Michael Architect", email: "michael@example.com", className: "Mastering French Pastry", date: "2026-05-15T14:00:00", pax: 1, status: "CONFIRMED", payment: "PAID" },
];

export default function BookingManagement() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-brand-espresso">Bookings & Students</h1>
          <p className="font-lato text-sm text-brand-warm-gray">Manage reservations, process class transfers, and view student attendance.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" />
            Print A4 List
          </Button>
          <Button variant="secondary">
            <Mail className="w-4 h-4 mr-2" />
            Email Attendees
          </Button>
          <Button variant="primary">
            Manual Booking
          </Button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-warm-gray/10 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Input variant="filled" placeholder="Search by name, email, or booking ID..." className="pl-10" />
          <Search className="w-5 h-5 text-brand-warm-gray absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-3 py-2 font-lato text-sm text-brand-espresso outline-none focus:border-brand-gold w-full md:w-auto">
            <option>All Statuses</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <Button variant="secondary" className="w-full md:w-auto px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl border border-brand-warm-gray/10 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-lato text-sm">
            <thead className="bg-brand-parchment/50 border-b border-brand-warm-gray/20 text-brand-warm-gray">
              <tr>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Booking Ref</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Student</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Class Details</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Pax</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Payment</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-warm-gray/10 text-brand-espresso">
              {BOOKINGS.map((booking) => (
                <tr key={booking.id} className="hover:bg-[#FAFAF9] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-xs">{booking.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold">{booking.studentName}</div>
                    <div className="text-xs text-brand-warm-gray">{booking.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold truncate max-w-[200px]">{booking.className}</div>
                    <div className="text-xs text-brand-warm-gray">
                      {new Date(booking.date).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-brand-warm-gray">{booking.pax}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-bold tracking-wider uppercase ${
                      booking.status === 'CONFIRMED' ? 'bg-brand-herb-green/10 text-brand-herb-green' :
                      booking.status === 'PENDING' ? 'bg-brand-gold/10 text-brand-gold' :
                      'bg-brand-burgundy/10 text-brand-burgundy'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs font-bold ${
                      booking.payment === 'PAID' ? 'text-brand-herb-green' :
                      booking.payment === 'REFUNDED' ? 'text-brand-warm-gray line-through' :
                      'text-brand-burgundy'
                    }`}>
                      {booking.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-herb-green hover:bg-brand-herb-green/10 rounded transition-colors" title="Mark Attended">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-gold hover:bg-brand-parchment rounded transition-colors" title="Transfer Class">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-burgundy hover:bg-brand-burgundy/10 rounded transition-colors" title="Cancel Booking">
                        <XCircle className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-brand-warm-gray hover:text-brand-espresso hover:bg-brand-parchment rounded transition-colors" title="More Options">
                        <MoreHorizontal className="w-4 h-4" />
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
          <span>Showing 1 to 5 of 142 bookings</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-brand-warm-gray/20 bg-white hover:bg-[#FAFAF9] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-brand-warm-gray/20 bg-white hover:bg-[#FAFAF9]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
