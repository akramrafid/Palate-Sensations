import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "underline" | "filled";
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "underline", error, ...props }, ref) => {
    const baseStyles =
      "flex h-12 w-full font-lato text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-warm-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
      underline:
        "bg-brand-cream border-b border-brand-warm-gray focus-visible:border-brand-gold rounded-none px-0",
      filled:
        "bg-brand-parchment border border-brand-warm-gray focus-visible:border-brand-gold rounded-md px-4",
    };

    const errorStyles = error ? "border-brand-terracotta focus-visible:border-brand-terracotta" : "";

    return (
      <div className="w-full relative">
        <input
          type={type}
          className={cn(baseStyles, variants[variant], errorStyles, className)}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-brand-terracotta font-lato">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
