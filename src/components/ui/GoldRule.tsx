import * as React from "react";
import { cn } from "@/lib/utils";

export interface GoldRuleProps extends React.HTMLAttributes<HTMLHRElement> {}

function GoldRule({ className, ...props }: GoldRuleProps) {
  return (
    <hr
      className={cn("border-t border-brand-gold opacity-40 w-full", className)}
      {...props}
    />
  );
}

export { GoldRule };
