import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Phone as PhoneIcon,
  Radio,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";
import CTAButton from "@/components/ui/cta-button";

const slides = [
  {
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
    headline: "Corporate Workforce Healthcare, Delivered On-Site",
    sub: "Deploy qualified medical teams, mobile clinics, and emergency response where your people work — across Nigeria.",
  },
  {
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
    headline: "Telemedicine & Remote Clinical Support",
    sub: "Connect your remote workforce with licensed clinicians for triage, follow-up, and ongoing health guidance — anytime, anywhere.",
  },
  {
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
    headline: "Mobile Clinics & Field Medical Deployment",
    sub: "Fully equipped mobile clinics and standby medical teams for construction sites, oil fields, mining camps, and community outreaches.",
  },
  {
    image: "/images/sapphire/sapphire-field-medical-hero.jpg",
    headline: "Preventive Health & Workforce Wellness",
    sub: "Proactive screening, wellness programmes, and chronic disease prevention that keep your workforce healthy and productive.",
  },
];

const trustCards = [
  { icon: Stethoscope, label: "24/7 Telemedicine" },
  { icon: ShieldCheck, label: "Onsite Medical Support" },
  { icon: HeartPulse, label: "Preventive Workforce Care" },
  { icon: Radio, label: "Emergency Response Readiness" },
];

const stats = [
  { value: "24/7", label: "Emergency response" },
  { value: "48-72 hrs", label: "Planned mobilisation" },
  { value: "8", label: "Core service lines" },
  { value: "Nigeria", label: "Field-ready coverage" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-[#2D1210]">
      {/* Background images with crossfade */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(26,13,12,0.97)_0%,rgba(75,30,27,0.88)_40%,rgba(75,30,27,0.45)_70%,rgba(20,40,48,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#1A0D0C]/90 to-transparent" />

      {/* Pulse line SVG overlay */}
      <svg
        className="pulse-line-svg absolute bottom-32 left-0 right-0 h-16 opacity-10"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 L200,30 L220,10 L240,50 L260,20 L280,40 L300,30 L1200,30"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="pulse-line-path"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex min-h-[92vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Text content */}
            <div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="max-w-full text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                    {slide.sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href="/corporate-inquiry" variant="light" className="w-full sm:w-auto">
                  For Companies <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton
                  href="/corporate-inquiry"
                  variant="secondary"
                  className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  Book a Consultation
                </CTAButton>
              </div>

              {/* Slide controls */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={goNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Floating trust cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                {trustCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="group rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/15"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-white">{card.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
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
