"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium text-sage-700",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          "transition-colors duration-200",
          "hover:text-sage-900",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span 
            className="ml-1 text-coral-500"
            aria-label="required"
          >
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };