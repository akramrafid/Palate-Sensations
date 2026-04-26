import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-lato font-bold text-brand-burgundy uppercase tracking-widest text-sm mb-4 inline-block">Get in Touch</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-brand-espresso mb-6">Contact Us</h1>
          <p className="font-lato text-brand-warm-gray text-lg max-w-2xl mx-auto">
            Have questions about our classes, corporate events, or private dining? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info Side */}
          <div className="bg-brand-espresso text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1200&auto=format&fit=crop')] opacity-10 bg-cover mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="font-playfair text-3xl font-bold mb-8 text-brand-gold">Palate Sensations</h2>
              
              <div className="space-y-8 font-lato">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Studio</h3>
                    <p className="text-white/80 leading-relaxed">
                      Chromos #01-03<br />
                      10 Biopolis Road<br />
                      Singapore 138670
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-white/80 leading-relaxed">+65 6478 9746</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-white/80 leading-relaxed">info@palatesensations.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12">
            <h2 className="font-playfair text-3xl font-bold text-brand-espresso mb-8">Send an Enquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-lato font-bold text-brand-espresso text-sm mb-2">First Name</label>
                  <Input variant="filled" placeholder="Jane" />
                </div>
                <div>
                  <label className="block font-lato font-bold text-brand-espresso text-sm mb-2">Last Name</label>
                  <Input variant="filled" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block font-lato font-bold text-brand-espresso text-sm mb-2">Email Address</label>
                <Input type="email" variant="filled" placeholder="jane@example.com" />
              </div>

              <div>
                <label className="block font-lato font-bold text-brand-espresso text-sm mb-2">Subject</label>
                <select className="w-full bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-4 py-3 font-lato text-brand-espresso focus:outline-none focus:border-brand-gold transition-colors">
                  <option>General Enquiry</option>
                  <option>Corporate Events</option>
                  <option>Private Dining</option>
                  <option>Class Support</option>
                </select>
              </div>

              <div>
                <label className="block font-lato font-bold text-brand-espresso text-sm mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-brand-parchment border border-brand-warm-gray/20 rounded-md px-4 py-3 font-lato text-brand-espresso focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full text-lg h-14">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
