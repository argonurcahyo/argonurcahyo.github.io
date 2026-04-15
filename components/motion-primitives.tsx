"use client";

import { motion, type Transition, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  once?: boolean;
  amount?: number;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.55,
  yOffset = 18,
  blur = "8px",
  once = true,
  amount = 0.2,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once, amount }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

type StaggerContainerProps = Omit<MotionDivProps, "children"> & {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
  amount = 0.2,
  ...props
}: StaggerContainerProps) {
  const transition: Transition = {
    when: "beforeChildren",
    delayChildren: delay,
    staggerChildren: stagger,
  };

  return (
    <motion.div
      {...props}
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = Omit<MotionDivProps, "children"> & {
  children: ReactNode;
  yOffset?: number;
  duration?: number;
};

export function StaggerItem({
  children,
  className,
  yOffset = 14,
  duration = 0.45,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      {...props}
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: yOffset, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type HoverLiftProps = Omit<MotionDivProps, "children"> & {
  children: ReactNode;
  scale?: number;
  y?: number;
};

export function HoverLift({ children, className, scale = 1.015, y = -4, ...props }: HoverLiftProps) {
  return (
    <motion.div
      {...props}
      className={cn(className)}
      whileHover={{ y, scale }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
