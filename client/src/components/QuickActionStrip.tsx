import { ArrowRight, Building2, HeartPulse, MessageCircle, Stethoscope } from "lucide-react";
import CTAButton from "@/components/ui/cta-button";
import IconBadge from "@/components/ui/icon-badge";
import { CONTACT_INFO } from "@/config/contact";

const actions = [
  {
    icon: HeartPulse,
    title: "Get a Proposal",
    text: "Scoped to your workforce, site, and timeline.",
    cta: "Start",
    href: "/corporate-inquiry",
    tone: "maroon" as const,
  },
  {
    icon: Stethoscope,
    title: "Explore Services",
    text: "On-site care, screening, emergency response, and wellness.",
    cta: "View",
    href: "/#services",
    tone: "teal" as const,
  },
  {
    icon: MessageCircle,
    title: "Emergency / WhatsApp",
    text: "Fast coordination for urgent medical support.",
    cta: "Chat",
    href: `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
      CONTACT_INFO.whatsapp.defaultMessage,
    )}`,
    tone: "green" as const,
    external: true,
  },
  {
    icon: Building2,
    title: "About Sapphire",
    text: "Clinical support built for workforces and communities.",
    cta: "Read",
    href: "/about",
    tone: "amber" as const,
  },
];

export default function QuickActionStrip() {
  return (
    <section className="relative z-20 bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <article
              key={action.title}
              className="group flex items-center gap-4 rounded-lg border border-[#4B1E1B]/10 bg-[#FAFBFC] p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <IconBadge icon={action.icon} tone={action.tone} size="sm" />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[#4B1E1B]">{action.title}</h3>
                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
                  {action.text}
                </p>
              </div>
              <CTAButton
                href={action.href}
                variant="secondary"
                external={action.external}
                className="min-h-9 shrink-0 px-3 py-2 text-xs"
              >
                {action.cta} <ArrowRight className="h-3 w-3" />
              </CTAButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
