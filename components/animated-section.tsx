"use client";

import { type ReactNode } from "react";

import { BlurFade } from "@/components/motion-primitives";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  return (
    <BlurFade delay={delay} className={className}>
      {children}
    </BlurFade>
  );
}
