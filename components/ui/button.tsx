import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-black font-bold shadow-[0_16px_34px_rgba(6,182,212,0.28)] hover:bg-cyan-300 hover:text-black hover:-translate-y-0.5 dark:bg-sky-800 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white",
        secondary:
          "border border-border/70 bg-secondary text-foreground shadow-[0_10px_24px_rgba(6,18,35,0.35)] hover:bg-secondary/90",
        outline:
          "border border-border/80 bg-muted/35 text-foreground shadow-[0_10px_24px_rgba(3,8,18,0.28)] hover:bg-muted/55",
        ghost: "text-foreground/90 hover:bg-muted/50 hover:text-foreground",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };