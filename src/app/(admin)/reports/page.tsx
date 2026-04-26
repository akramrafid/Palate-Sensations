"use client";

import * as React from "react";
import { Download, Calendar as CalendarIcon, TrendingUp, Users, CreditCard, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ReportsBI() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-brand-espresso">Business Intelligence</h1>
          <p className="font-lato text-sm text-brand-warm-gray">View revenue, attendance analytics, and export billing reports.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-white">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Last 30 Days <ChevronDown className="w-3 h-3 ml-2" />
          </Button>
          <Button variant="primary" onClick={() => {
            const csvContent = "data:text/csv;charset=utf-8,Date,Revenue,Students,Classes\n2026-04-01,1500,12,1\n2026-04-02,3200,24,2\n2026-04-03,800,6,1";
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "billing_report_apr_2026.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-herb-green/10 flex items-center justify-center text-brand-herb-green">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="flex items-center text-brand-herb-green text-sm font-bold">
              <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
            </span>
          </div>
          <p className="font-lato text-sm text-brand-warm-gray mb-1">Gross Revenue</p>
          <p className="font-playfair text-3xl font-bold text-brand-espresso">$45,230</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center text-brand-herb-green text-sm font-bold">
              <TrendingUp className="w-3 h-3 mr-1" /> +5.2%
            </span>
          </div>
          <p className="font-lato text-sm text-brand-warm-gray mb-1">Total Students</p>
          <p className="font-playfair text-3xl font-bold text-brand-espresso">342</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy">
              <CalendarIcon className="w-5 h-5" />
            </div>
          </div>
          <p className="font-lato text-sm text-brand-warm-gray mb-1">Classes Hosted</p>
          <p className="font-playfair text-3xl font-bold text-brand-espresso">28</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-espresso/10 flex items-center justify-center text-brand-espresso">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <p className="font-lato text-sm text-brand-warm-gray mb-1">Avg. Class Occupancy</p>
          <p className="font-playfair text-3xl font-bold text-brand-espresso">85%</p>
        </div>
      </div>

      {/* Charts Section Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm h-96 flex flex-col">
          <h3 className="font-playfair text-xl font-bold text-brand-espresso mb-6">Revenue by Category</h3>
          <div className="flex-1 bg-brand-parchment/30 rounded-lg flex items-center justify-center border border-dashed border-brand-warm-gray/30">
            <div className="text-center">
              <p className="font-lato text-brand-warm-gray font-bold">Pie Chart Placeholder</p>
              <p className="font-lato text-xs text-brand-warm-gray/80">Recharts / Chart.js integration goes here</p>
              <div className="flex gap-4 mt-4 justify-center text-xs font-lato">
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-brand-burgundy rounded-full" /> Baking (40%)</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-brand-gold rounded-full" /> Corporate (35%)</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-brand-herb-green rounded-full" /> Cooking (25%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-warm-gray/10 shadow-sm h-96 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-playfair text-xl font-bold text-brand-espresso">Revenue Trend</h3>
            <span className="font-lato text-xs text-brand-warm-gray px-2 py-1 bg-brand-parchment rounded">Monthly</span>
          </div>
          <div className="flex-1 bg-brand-parchment/30 rounded-lg flex flex-col justify-end p-4 border border-dashed border-brand-warm-gray/30">
            {/* Extremely simple CSS bar chart mockup */}
            <div className="flex items-end justify-between h-48 gap-2 w-full">
              {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} className="w-full bg-brand-gold/80 rounded-t hover:bg-brand-gold transition-colors relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-espresso text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${h * 100}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 font-lato text-[10px] text-brand-warm-gray uppercase">
              <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Reports List */}
      <div className="bg-white rounded-xl border border-brand-warm-gray/10 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-brand-warm-gray/10 flex justify-between items-center">
          <h3 className="font-playfair text-xl font-bold text-brand-espresso">Generated Reports</h3>
          <Button variant="secondary" size="sm">Custom Report</Button>
        </div>
        <table className="w-full text-left font-lato text-sm">
          <tbody className="divide-y divide-brand-warm-gray/10">
            {[
              { name: "Monthly Billing Summary - Apr 2026", type: "CSV", date: "May 1, 2026" },
              { name: "Instructor Hours & Payout - Apr 2026", type: "PDF", date: "May 1, 2026" },
              { name: "Q1 2026 Corporate Bookings Analysis", type: "PDF", date: "Apr 5, 2026" },
            ].map((report, i) => (
              <tr key={i} className="hover:bg-[#FAFAF9]">
                <td className="px-6 py-4 font-bold text-brand-espresso">{report.name}</td>
                <td className="px-6 py-4 text-brand-warm-gray">Generated: {report.date}</td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm" className="text-brand-burgundy hover:text-brand-burgundy/80">
                    <Download className="w-4 h-4 mr-2" /> Download {report.type}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
