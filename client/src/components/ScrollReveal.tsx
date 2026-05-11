import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  once?: boolean;
}

const offsets: Record<RevealDirection, (distance: number) => { x: number; y: number }> = {
  up: (distance) => ({ x: 0, y: distance }),
  down: (distance) => ({ x: 0, y: -distance }),
  left: (distance) => ({ x: -distance, y: 0 }),
  right: (distance) => ({ x: distance, y: 0 }),
  none: () => ({ x: 0, y: 0 }),
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.55,
  once = true,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = offsets[direction](distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
