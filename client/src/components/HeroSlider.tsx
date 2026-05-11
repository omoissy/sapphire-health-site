import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Stethoscope, Users2 } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import CTAButton from "@/components/ui/cta-button";
import IconBadge from "@/components/ui/icon-badge";

const heroImage = "/images/sapphire/sapphire-field-medical-hero.jpg";

const stats = [
  { value: "24/7", label: "Emergency response" },
  { value: "48-72 hrs", label: "Planned mobilisation" },
  { value: "8", label: "Core service lines" },
  { value: "Nigeria", label: "Field-ready coverage" },
];

const proofPoints = [
  { icon: Stethoscope, label: "On-site medics and mobile clinics" },
  { icon: ShieldCheck, label: "Occupational health and HSE support" },
  { icon: Users2, label: "Workforce groups, events, and remote sites" },
];

export default function HeroSlider() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_INFO.whatsapp.defaultMessage,
  )}`;

  return (
    <section id="home" className="relative isolate min-h-[86vh] overflow-hidden bg-[#2D1210]">
      <img
        src={heroImage}
        alt="Sapphire Health medical team and mobile clinic support"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(26,13,12,0.98)_0%,rgba(75,30,27,0.9)_42%,rgba(75,30,27,0.42)_72%,rgba(20,40,48,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#1A0D0C]/90 to-transparent" />

      <div className="relative z-10 flex min-h-[86vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
            style={{ width: "min(56rem, calc(100vw - 2rem))" }}
          >
            <div className="mb-5 inline-flex max-w-full items-start gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-black/10 backdrop-blur-sm sm:items-center sm:rounded-full">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0B8B0] sm:mt-0" />
              <span className="min-w-0 break-words">
                Occupational health, emergency response, and field medical coverage
              </span>
            </div>

            <h1 className="max-w-full break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Wherever work takes you, Sapphire Health brings care closer.
            </h1>
            <p className="mt-6 max-w-full text-base leading-relaxed text-white/80 sm:max-w-2xl sm:text-lg">
              Wherever people work, care should follow. Sapphire Health supports organizations with on-site medical teams, mobile clinics, emergency response, workforce screening, wellness programmes, and clinical documentation that keeps operations moving safely.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/corporate-inquiry" variant="light" className="w-full sm:w-auto">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="/#services" variant="secondary" className="w-full border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto">
                Explore Services
              </CTAButton>
              <CTAButton href={whatsappUrl} variant="whatsapp" external className="w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </CTAButton>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 shadow-lg shadow-black/10 backdrop-blur-sm"
                  >
                    <IconBadge icon={Icon} tone="light" size="sm" className="shadow-black/10" />
                    {point.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#1A0D0C]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 text-center">
                <p className="text-lg font-bold text-white sm:text-xl">{stat.value}</p>
                <p className="mt-0.5 text-xs text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
