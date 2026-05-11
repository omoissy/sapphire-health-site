import { cn } from "@/lib/utils";

type SapphireLogoProps = {
  className?: string;
  imageBoxClassName?: string;
  showText?: boolean;
  tone?: "dark" | "light";
  variant?: "mark" | "lockup";
};

const logoSrc = {
  mark: "/images/sapphire/sapphire-mark.png",
  lockup: "/images/sapphire/sapphire-logo.png",
};

export default function SapphireLogo({
  className,
  imageBoxClassName,
  showText = true,
  tone = "dark",
  variant = "mark",
}: SapphireLogoProps) {
  const light = tone === "light";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-md border bg-white",
          variant === "lockup" ? "h-20 w-36 p-2" : "h-10 w-10 p-1",
          light ? "border-white/10" : "border-gray-100",
          imageBoxClassName,
        )}
        aria-hidden="true"
      >
        <img
          src={logoSrc[variant]}
          alt=""
          className="h-full w-full object-contain"
          loading="eager"
        />
      </span>
      {showText ? (
        <span className="leading-tight">
          <span className={cn("block text-sm font-bold", light ? "text-white" : "text-[#4B1E1B]")}>
            Sapphire Health
          </span>
          <span className={cn("-mt-0.5 block text-[10px]", light ? "text-white/45" : "text-gray-500")}>
            Services Limited
          </span>
        </span>
      ) : (
        <span className="sr-only">Sapphire Health Services Limited</span>
      )}
    </span>
  );
}
