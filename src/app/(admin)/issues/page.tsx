"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Clock, MessageSquare, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const ISSUES = [
  { id: "TKT-1042", title: "Cannot transfer booking to next week", user: "Eleanor Shellstrop", role: "Customer", status: "OPEN", priority: "HIGH", date: "2026-05-10" },
  { id: "TKT-1041", title: "Oven #4 in Studio B not heating properly", user: "Chef Michael", role: "Staff", status: "IN_PROGRESS", priority: "CRITICAL", date: "2026-05-09" },
  { id: "TKT-1040", title: "Requesting vegan substitute for Pastry class", user: "Tahani Al-Jamil", role: "Customer", status: "OPEN", priority: "MEDIUM", date: "2026-05-08" },
  { id: "TKT-1039", title: "Missing apron stock for corporate event", user: "Tina (Ops Manager)", role: "Staff", status: "RESOLVED", priority: "HIGH", date: "2026-05-05" },
];

export default function IssueTracker() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-brand-espresso">Issue & Support Tracker</h1>
          <p className="font-lato text-sm text-brand-warm-gray">Manage support tickets from customers and operational issues from staff.</p>
        </div>
        <Button variant="primary">
          <MessageSquare className="w-4 h-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-warm-gray/10 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Input variant="filled" placeholder="Search tickets..." className="pl-10" />
          <Search className="w-5 h-5 text-brand-warm-gray absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-3 py-2 font-lato text-sm text-brand-espresso outline-none focus:border-brand-gold w-full md:w-auto">
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>
          <select className="bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-3 py-2 font-lato text-sm text-brand-espresso outline-none focus:border-brand-gold w-full md:w-auto">
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <Button variant="secondary" className="px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Ticket List */}
      <div className="bg-white rounded-xl border border-brand-warm-gray/10 shadow-sm overflow-hidden flex flex-col">
        <table className="w-full text-left font-lato text-sm">
          <thead className="bg-brand-parchment/50 border-b border-brand-warm-gray/20 text-brand-warm-gray">
            <tr>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Ticket ID</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Issue</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Reporter</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Priority</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-warm-gray/10 text-brand-espresso">
            {ISSUES.map((issue) => (
              <tr key={issue.id} className="hover:bg-[#FAFAF9] transition-colors group cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-brand-warm-gray">{issue.id}</td>
                <td className="px-6 py-4">
                  <div className="font-bold text-brand-espresso">{issue.title}</div>
                  <div className="text-xs text-brand-warm-gray">Opened on {issue.date}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold">{issue.user}</div>
                  <div className="text-xs text-brand-warm-gray">{issue.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded text-xs font-bold tracking-wider uppercase ${
                    issue.priority === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                    issue.priority === 'HIGH' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {issue.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
                    {issue.status === 'OPEN' && <AlertCircle className="w-4 h-4 text-brand-burgundy" />}
                    {issue.status === 'IN_PROGRESS' && <Clock className="w-4 h-4 text-brand-gold" />}
                    {issue.status === 'RESOLVED' && <CheckCircle2 className="w-4 h-4 text-brand-herb-green" />}
                    
                    <span className={
                      issue.status === 'OPEN' ? 'text-brand-burgundy' :
                      issue.status === 'IN_PROGRESS' ? 'text-brand-gold' :
                      'text-brand-herb-green'
                    }>{issue.status.replace('_', ' ')}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 text-brand-warm-gray hover:text-brand-espresso">
                    View Thread
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
