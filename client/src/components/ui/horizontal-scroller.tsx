import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HorizontalScrollerProps = {
  children: ReactNode;
  className?: string;
  marquee?: boolean;
};

export default function HorizontalScroller({
  children,
  className,
  marquee = false,
}: HorizontalScrollerProps) {
  if (marquee) {
    return <div className={cn("proof-marquee", className)}>{children}</div>;
  }

  return (
    <div
      className={cn(
        "scrollbar-hide flex snap-x gap-5 overflow-x-auto pb-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
