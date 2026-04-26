"use client";

import * as React from "react";
import { Calendar as CalendarIcon, Users, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export interface BookingWidgetProps {
  pricePerPerson: number;
  availableDates: Date[];
  maxParticipants: number;
}

export function BookingWidget({
  pricePerPerson,
  availableDates,
  maxParticipants = 8,
}: BookingWidgetProps) {
  const [participants, setParticipants] = React.useState(1);
  const [promoOpen, setPromoOpen] = React.useState(false);

  const totalPrice = pricePerPerson * participants;

  return (
    <div className="bg-white border border-brand-warm-gray/20 rounded-xl shadow-lg p-6 w-full max-w-sm sticky top-24">
      <div className="mb-6">
        <span className="text-sm text-brand-warm-gray uppercase tracking-wider block mb-1">From</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-playfair font-bold text-brand-espresso">SGD ${pricePerPerson}</span>
          <span className="text-brand-warm-gray text-sm">/ person</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Date Selector Placeholder */}
        <div className="border border-brand-warm-gray/30 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-brand-gold transition-colors">
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-brand-gold" />
            <div>
              <div className="text-sm font-bold text-brand-espresso">Select Date</div>
              <div className="text-xs text-brand-warm-gray">View available dates</div>
            </div>
          </div>
          <span className="text-brand-gold">→</span>
        </div>

        {/* Participant Stepper */}
        <div className="border border-brand-warm-gray/30 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-brand-gold" />
            <div className="text-sm font-bold text-brand-espresso">Guests</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setParticipants(Math.max(1, participants - 1))}
              className="w-8 h-8 rounded-full border border-brand-warm-gray flex items-center justify-center text-brand-espresso hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-50"
              disabled={participants <= 1}
            >
              -
            </button>
            <span className="font-lato font-bold w-4 text-center">{participants}</span>
            <button
              onClick={() => setParticipants(Math.min(maxParticipants, participants + 1))}
              className="w-8 h-8 rounded-full border border-brand-warm-gray flex items-center justify-center text-brand-espresso hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-50"
              disabled={participants >= maxParticipants}
            >
              +
            </button>
          </div>
        </div>

        {/* Promo Code Accordion */}
        <div className="border border-brand-warm-gray/30 rounded-lg overflow-hidden">
          <button
            onClick={() => setPromoOpen(!promoOpen)}
            className="w-full p-3 flex items-center justify-between hover:bg-brand-parchment/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-brand-gold" />
              <div className="text-sm font-bold text-brand-espresso">Promo Code</div>
            </div>
            {promoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {promoOpen && (
            <div className="p-3 bg-brand-parchment/30 border-t border-brand-warm-gray/30 flex gap-2">
              <Input variant="filled" placeholder="Enter code" className="h-10 text-sm" />
              <Button variant="secondary" size="sm">Apply</Button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-warm-gray/20 pt-4 mb-6">
        <div className="flex justify-between items-center text-lg font-bold text-brand-espresso">
          <span>Total</span>
          <span>SGD ${totalPrice}</span>
        </div>
      </div>

      <Button variant="primary" className="w-full h-14 text-lg">
        Book Now
      </Button>

      <div className="mt-4 text-center text-xs text-brand-warm-gray">
        No payment details required yet.
      </div>
    </div>
  );
}
