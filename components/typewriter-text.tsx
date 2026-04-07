"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type TypewriterTextProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function TypewriterText({ children, delay = 0, className = "" }: TypewriterTextProps) {
  const isSimpleString = typeof children === "string";

  if (isSimpleString) {
    const words = (children as string).split(" ");
    const wordStartIndices = words.map((_, index) =>
      words.slice(0, index).reduce((total, word) => total + word.length + 1, 0),
    );

    return (
      <span className={className}>
        {words.map((word, wordIndex) => {
          const startIndex = wordStartIndices[wordIndex] ?? 0;

          return (
            <span key={`${word}-${wordIndex}`} className="inline-flex whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.03,
                    delay: delay + (startIndex + charIndex) * 0.025,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 ? "\u00A0" : null}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
