import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeTone =
  | "maroon"
  | "dark"
  | "slate"
  | "amber"
  | "teal"
  | "blue"
  | "green"
  | "light";

const toneClasses: Record<IconBadgeTone, string> = {
  /* ── Primary system tones ── */
  maroon:
    "from-[#4B1E1B] to-[#7B2D26] text-white shadow-[#4B1E1B]/25",
  dark:
    "from-[#2D1210] to-[#4B1E1B] text-[#D9A441] shadow-[#2D1210]/20",
  slate:
    "from-[#1E3A5F] to-[#2B4C6F] text-white shadow-[#1E3A5F]/20",

  /* ── Supporting tones ── */
  teal:
    "from-[#134E4A] to-[#0F766E] text-white shadow-teal-800/15",
  amber:
    "from-[#D9A441] to-[#B7891F] text-[#2D1210] shadow-amber-800/15",
  blue:
    "from-[#1E3A5F] to-[#3B82F6] text-white shadow-blue-700/15",
  green:
    "from-[#16865D] to-[#36C486] text-white shadow-green-700/15",
  light:
    "from-white to-[#F7ECEA] text-[#4B1E1B] shadow-[#4B1E1B]/10",
};

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: IconBadgeTone;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-16 w-16",
};

const iconSizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

const radiusOuter = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-xl",
};

const radiusInner = {
  sm: "rounded-[6px]",
  md: "rounded-[10px]",
  lg: "rounded-[10px]",
};

export default function IconBadge({
  icon: Icon,
  tone = "maroon",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center bg-gradient-to-br shadow-lg ring-1 ring-white/30",
        radiusOuter[size],
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-[2px] border border-white/15",
          radiusInner[size],
        )}
      />
      <Icon className={cn("relative", iconSizes[size])} strokeWidth={1.8} />
    </span>
  );
}
