import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `
        w-full min-h-[100px] rounded-lg
        bg-[#111111]
        border border-blue-400/20
        px-3 py-2 text-sm text-white
        placeholder:text-gray-500
        
        transition-all duration-200
        outline-none
        
        focus:border-blue-400/60
        focus:shadow-[0_0_0_2px_rgba(59,130,246,0.15)]
        
        hover:border-blue-400/40
        resize-none
      `,
        className
      )}
      {...props}
    />
  );
}

export { Textarea };