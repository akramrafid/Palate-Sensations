import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "new" | "popular" | "full" | "featured";
}

function Badge({ className, variant = "new", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-lato font-bold uppercase tracking-[0.1em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    new: "bg-brand-gold text-brand-espresso",
    popular: "bg-brand-burgundy text-white",
    full: "bg-brand-warm-gray text-white",
    featured: "bg-brand-herb-green text-white",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}

export { Badge };
