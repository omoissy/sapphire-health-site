import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Shield, Stethoscope, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/config/contact";

const heroImage = "/images/sapphire/sapphire-field-medical-hero.jpg";

const stats = [
  { value: "24/7", label: "Emergency response" },
  { value: "48-72 hrs", label: "Planned mobilisation" },
  { value: "8", label: "Core service lines" },
  { value: "Nigeria", label: "Field-ready coverage" },
];

const proofPoints = [
  { icon: Stethoscope, label: "On-site medics and mobile clinics" },
  { icon: Shield, label: "Occupational health and HSE support" },
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
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0D0C]/95 via-[#4B1E1B]/86 to-[#4B1E1B]/35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 flex min-h-[86vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-[#F0B8B0]" />
              Occupational health, emergency response, and field medical coverage
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Wherever work takes you, Sapphire Health brings care closer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Sapphire Health Services Limited supports organisations with on-site medical teams, mobile clinics, workforce screening, emergency response, wellness programmes, and clinical documentation that helps operations continue safely.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/corporate-inquiry">
                <Button size="lg" className="bg-white text-[#4B1E1B] hover:bg-white/90">
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href="/#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Our Services
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#20BA5A]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.label}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 flex-shrink-0 text-[#F0B8B0]" />
                    {point.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#1A0D0C]/86 backdrop-blur-sm">
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
