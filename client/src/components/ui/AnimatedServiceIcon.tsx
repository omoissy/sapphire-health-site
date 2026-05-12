import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Animation variant types ─── */

export type AnimationVariant =
  | "pulse"
  | "heartbeat"
  | "signal"
  | "drawCheck"
  | "routeMove"
  | "gaugeTick"
  | "shieldGlow"
  | "float"
  | "chartRise"
  | "crossPulse";

/* ─── Accent color palette ─── */

export type AccentTone =
  | "maroon"
  | "amber"
  | "teal"
  | "slate"
  | "charcoal";

const accentColors: Record<AccentTone, { bg: string; glow: string; ring: string; icon: string; gradient: string }> = {
  maroon: {
    bg: "bg-[#4B1E1B]/8",
    glow: "rgba(158,60,52,0.18)",
    ring: "ring-[#4B1E1B]/10",
    icon: "text-[#7B2D26]",
    gradient: "from-[#4B1E1B] to-[#7B2D26]",
  },
  amber: {
    bg: "bg-[#92400E]/8",
    glow: "rgba(217,164,65,0.2)",
    ring: "ring-[#92400E]/10",
    icon: "text-[#92400E]",
    gradient: "from-[#92400E] to-[#B7891F]",
  },
  teal: {
    bg: "bg-[#134E4A]/8",
    glow: "rgba(15,118,110,0.18)",
    ring: "ring-[#134E4A]/10",
    icon: "text-[#0F766E]",
    gradient: "from-[#134E4A] to-[#0F766E]",
  },
  slate: {
    bg: "bg-[#1E3A5F]/8",
    glow: "rgba(30,58,95,0.18)",
    ring: "ring-[#1E3A5F]/10",
    icon: "text-[#1E3A5F]",
    gradient: "from-[#1E3A5F] to-[#2B4C6F]",
  },
  charcoal: {
    bg: "bg-[#374151]/8",
    glow: "rgba(55,65,81,0.15)",
    ring: "ring-[#374151]/10",
    icon: "text-[#374151]",
    gradient: "from-[#374151] to-[#4B5563]",
  },
};

/* ─── Framer Motion animation definitions ─── */

const iconAnimations: Record<AnimationVariant, Variants> = {
  pulse: {
    idle: { scale: 1, opacity: 1 },
    hover: {
      scale: [1, 1.12, 1.05, 1.1, 1],
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  },
  heartbeat: {
    idle: { scale: 1 },
    hover: {
      scale: [1, 1.18, 0.95, 1.12, 1],
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  },
  signal: {
    idle: { scale: 1, opacity: 1 },
    hover: {
      scale: [1, 1.08, 1],
      opacity: [1, 0.85, 1],
      transition: { duration: 0.6, repeat: 1, ease: "easeInOut" },
    },
  },
  drawCheck: {
    idle: { pathLength: 1, opacity: 1 },
    hover: {
      rotate: [0, -8, 8, -4, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  routeMove: {
    idle: { x: 0 },
    hover: {
      x: [0, 3, -2, 1, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  },
  gaugeTick: {
    idle: { rotate: 0 },
    hover: {
      rotate: [0, -15, 20, -5, 0],
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  },
  shieldGlow: {
    idle: { scale: 1, opacity: 1 },
    hover: {
      scale: [1, 1.08, 1.04, 1.06, 1],
      opacity: [1, 0.9, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  },
  float: {
    idle: { y: 0 },
    hover: {
      y: [0, -4, 0, -2, 0],
      transition: { duration: 1, ease: "easeInOut" },
    },
  },
  chartRise: {
    idle: { y: 0, opacity: 1 },
    hover: {
      y: [0, -3, 0],
      scale: [1, 1.06, 1],
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  crossPulse: {
    idle: { scale: 1, rotate: 0 },
    hover: {
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0],
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  },
};

/* ─── Ambient (subtle idle) animation definitions ─── */

const ambientAnimations: Partial<Record<AnimationVariant, Variants>> = {
  pulse: {
    idle: {
      scale: [1, 1.04, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  float: {
    idle: {
      y: [0, -3, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  },
  heartbeat: {
    idle: {
      scale: [1, 1.06, 0.98, 1.04, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 },
    },
  },
};

/* ─── Glow ring animation ─── */

const glowRingVariants: Variants = {
  idle: { opacity: 0, scale: 0.85 },
  hover: {
    opacity: [0, 0.6, 0],
    scale: [0.85, 1.4, 1.6],
    transition: { duration: 1, ease: "easeOut" },
  },
};

/* ─── Signal wave rings ─── */

function SignalWaves({ color }: { color: string }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-2xl border-2"
          style={{ borderColor: color }}
          variants={{
            idle: { opacity: 0, scale: 1 },
            hover: {
              opacity: [0, 0.4, 0],
              scale: [1, 1.25 + i * 0.15],
              transition: { duration: 0.8, delay: i * 0.12, ease: "easeOut" },
            },
          }}
        />
      ))}
    </>
  );
}

/* ─── Main Component ─── */

type AnimatedServiceIconProps = {
  icon: LucideIcon;
  animation: AnimationVariant;
  tone?: AccentTone;
  ambient?: boolean;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function AnimatedServiceIcon({
  icon: Icon,
  animation,
  tone = "maroon",
  ambient = false,
  size = 28,
  strokeWidth = 1.8,
  className,
}: AnimatedServiceIconProps) {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = accentColors[tone];

  const variants = prefersReduced
    ? { idle: {}, hover: {} }
    : ambient && ambientAnimations[animation]
      ? ambientAnimations[animation]!
      : iconAnimations[animation];

  const showSignalWaves = animation === "signal" && !prefersReduced;

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "group/icon relative inline-flex shrink-0 items-center justify-center rounded-2xl p-3.5",
        colors.bg,
        `ring-1 ${colors.ring}`,
        className,
      )}
      initial="idle"
      whileHover={prefersReduced ? undefined : "hover"}
      animate={ambient && !prefersReduced ? "idle" : undefined}
    >
      {/* Glow ring on hover */}
      {!prefersReduced && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ boxShadow: `0 0 20px 4px ${colors.glow}` }}
          variants={glowRingVariants}
        />
      )}

      {/* Signal wave rings for signal variant */}
      {showSignalWaves && <SignalWaves color={colors.glow} />}

      {/* Animated icon */}
      <motion.span
        className={cn("relative z-10 flex items-center justify-center", colors.icon)}
        variants={variants}
      >
        <Icon size={size} strokeWidth={strokeWidth} />
      </motion.span>
    </motion.div>
  );
}
