"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Users, Briefcase, BarChart3, Settings, LogOut, Menu, X, LifeBuoy } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigation = [
    { name: "Dashboard (Calendar)", href: "/dashboard", icon: Calendar },
    { name: "Class Management", href: "/classes/manage", icon: Briefcase },
    { name: "Bookings & Students", href: "/bookings", icon: Users },
    { name: "Reports & BI", href: "/reports", icon: BarChart3 },
    { name: "Issue Tracker", href: "/issues", icon: LifeBuoy },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-brand-espresso/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-brand-espresso text-brand-cream transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <Link href="/dashboard" className="font-playfair text-xl font-bold text-brand-gold">
              Palate Sensations<br/><span className="text-sm font-lato font-normal text-brand-cream/80 uppercase tracking-widest">Admin Portal</span>
            </Link>
            <button className="lg:hidden text-white" onClick={() => setIsSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <div className="text-xs font-lato font-bold text-brand-cream/50 uppercase tracking-wider mb-4 px-3">Main Menu</div>
            {navigation.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-lato text-sm transition-colors ${
                    isActive 
                      ? "bg-brand-burgundy text-white font-bold" 
                      : "text-brand-cream/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? "text-brand-gold" : ""}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 mb-2">
              <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-espresso flex items-center justify-center font-playfair font-bold text-sm">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-lato text-sm font-bold text-white truncate">Admin User</p>
                <p className="font-lato text-xs text-brand-cream/60 truncate">admin@palatesensations.com</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg font-lato text-sm text-brand-terracotta hover:bg-brand-terracotta/10 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-brand-warm-gray/10 flex items-center justify-between px-6 sticky top-0 z-30">
          <button 
            className="lg:hidden text-brand-espresso hover:text-brand-burgundy transition-colors"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="font-lato text-sm text-brand-warm-gray hover:text-brand-espresso">Help & Support</button>
            <div className="w-px h-6 bg-brand-warm-gray/20" />
            <Link href="/" target="_blank" className="font-lato text-sm font-bold text-brand-burgundy hover:text-brand-gold transition-colors">
              View Live Site ↗
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
