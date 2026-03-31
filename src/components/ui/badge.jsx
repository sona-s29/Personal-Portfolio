import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",

        secondary:
          "bg-secondary text-secondary-foreground",

        destructive:
          "bg-destructive/10 text-destructive",

        // ✅ FIXED OUTLINE (NO WHITE BORDER)
        outline:
          "border border-blue-400/20 text-gray-300 bg-transparent hover:border-blue-400/50 hover:text-white",

        // ✅ CLEAN GHOST
        ghost:
          "text-gray-300 hover:bg-white/5 hover:text-white",

        link:
          "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "outline", // 👈 make outline default for your UI
    },
  }
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }
