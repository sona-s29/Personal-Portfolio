import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        h-10 w-full rounded-lg
        bg-[#111111]
        border border-blue-400/20
        px-3 text-sm text-white
        placeholder:text-gray-500
        
        transition-all duration-200
        outline-none
        
        focus:border-blue-400/60
        focus:shadow-[0_0_0_2px_rgba(59,130,246,0.15)]
        
        hover:border-blue-400/40
      `,
        className
      )}
      {...props}
    />
  );
}

export { Input };