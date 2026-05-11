import type { ReactNode } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

type CTAButtonVariant = "primary" | "secondary" | "light" | "whatsapp";

const variantClasses: Record<CTAButtonVariant, string> = {
  primary:
    "bg-[#4B1E1B] text-white shadow-lg shadow-[#4B1E1B]/20 hover:bg-[#9E3C34] hover:shadow-[#9E3C34]/25",
  secondary:
    "border border-[#4B1E1B]/20 bg-white text-[#4B1E1B] hover:border-[#9E3C34]/30 hover:bg-[#4B1E1B]/5",
  light:
    "bg-white text-[#4B1E1B] shadow-lg shadow-black/10 hover:bg-[#FFF8F6]",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-green-700/20 hover:bg-[#20BA5A]",
};

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: CTAButtonVariant;
  external?: boolean;
};

export default function CTAButton({
  href,
  children,
  className,
  variant = "primary",
  external,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
    variantClasses[variant],
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <span className={`${classes} cursor-pointer`}>{children}</span>
    </Link>
  );
}
