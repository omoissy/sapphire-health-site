import { useEffect, useState, useRef, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Menu,
  RadioTower,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users2,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SapphireLogo from "@/components/SapphireLogo";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type MegaPanel = {
  label: string;
  href: string;
  megaPanel?: {
    columns: {
      heading?: string;
      items: { icon: any; label: string; desc: string; href: string }[];
    }[];
    promo?: { title: string; desc: string; cta: string; href: string };
  };
};

const navLinks: MegaPanel[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    megaPanel: {
      columns: [
        {
          heading: "Clinical Care",
          items: [
            { icon: Stethoscope, label: "On-Site Medical Support", desc: "Mobile clinics and field medics", href: "/#services" },
            { icon: ClipboardCheck, label: "Occupational Health Screening", desc: "Pre-employment & fitness-for-work", href: "/#services" },
            { icon: HeartPulse, label: "Preventive Health & Wellness", desc: "Wellness days and chronic risk checks", href: "/#services" },
            { icon: Video, label: "Telemedicine Support", desc: "Remote clinical guidance & follow-up", href: "/#services" },
          ],
        },
        {
          heading: "Emergency & Compliance",
          items: [
            { icon: Activity, label: "Emergency Medical Response", desc: "24/7 rapid stabilisation & referral", href: "/#services" },
            { icon: GraduationCap, label: "Health & Safety Training", desc: "First aid and emergency readiness", href: "/#services" },
            { icon: ClipboardCheck, label: "Incident Documentation", desc: "Medical records and reports", href: "/#services" },
            { icon: ShieldCheck, label: "Event Medical Coverage", desc: "Standby teams for events & projects", href: "/#services" },
          ],
        },
      ],
      promo: {
        title: "Need a Custom Healthcare Plan?",
        desc: "Get a workforce healthcare proposal tailored to your site, headcount, and risk profile.",
        cta: "Request a Proposal",
        href: "/corporate-inquiry",
      },
    },
  },
  {
    label: "Industries",
    href: "/#who-we-serve",
    megaPanel: {
      columns: [
        {
          items: [
            { icon: Fuel, label: "Oil & Gas", desc: "Offshore, onshore, and field teams", href: "/#who-we-serve" },
            { icon: HardHat, label: "Construction", desc: "Active sites and project teams", href: "/#who-we-serve" },
            { icon: Factory, label: "Mining", desc: "Remote operations and exploration", href: "/#who-we-serve" },
            { icon: Truck, label: "Logistics", desc: "Drivers, routes, and warehouses", href: "/#who-we-serve" },
          ],
        },
        {
          items: [
            { icon: RadioTower, label: "Telecoms", desc: "Field engineers and infrastructure", href: "/#who-we-serve" },
            { icon: Building2, label: "Corporate", desc: "Wellness and staff health days", href: "/#who-we-serve" },
            { icon: Landmark, label: "Churches & Communities", desc: "Group programmes and outreaches", href: "/#who-we-serve" },
            { icon: Users2, label: "Families / Diaspora", desc: "Healthcare for loved ones", href: "/#who-we-serve" },
          ],
        },
      ],
    },
  },
  { label: "Experience", href: "/#experience" },
  { label: "Who We Are", href: "/about" },
  { label: "Contact", href: "/corporate-inquiry" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function isAnchorHref(href: string) {
  return href.includes("#");
}

function NavTarget({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (isAnchorHref(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <span className={className} onClick={onClick}>
        {children}
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Nav                                                           */
/* ------------------------------------------------------------------ */

export default function PublicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#4B1E1B]/10 bg-white/95 shadow-md backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
      style={!scrolled ? { background: "linear-gradient(180deg, rgba(26,13,12,0.6) 0%, transparent 100%)" } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[68px]">
          <Link href="/">
            <span className="flex cursor-pointer items-center">
              <SapphireLogo
                imageBoxClassName="h-11 w-11"
                tone={scrolled ? "dark" : "light"}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.megaPanel ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavTarget
                    href={link.href}
                    className={`flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </NavTarget>
                  <AnimatePresence>
                    {openDropdown === link.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={`rounded-xl border border-gray-100 bg-white shadow-2xl ${link.megaPanel.promo ? "w-[720px]" : "w-[540px]"}`}>
                          <div className={`grid gap-0 p-5 ${link.megaPanel.promo ? "grid-cols-[1fr_1fr_auto]" : "grid-cols-2"}`}>
                            {link.megaPanel.columns.map((col, ci) => (
                              <div key={ci} className={ci > 0 ? "border-l border-gray-100 pl-5" : ""}>
                                {col.heading && (
                                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E3C34]">
                                    {col.heading}
                                  </p>
                                )}
                                <div className="space-y-1">
                                  {col.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <NavTarget
                                        key={item.label}
                                        href={item.href}
                                        className="group flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#4B1E1B]/5"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#4B1E1B]/5 text-[#4B1E1B] transition-colors group-hover:bg-[#4B1E1B] group-hover:text-white">
                                          <Icon className="h-4 w-4" />
                                        </span>
                                        <div>
                                          <p className="text-sm font-semibold text-[#4B1E1B]">{item.label}</p>
                                          <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                      </NavTarget>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                            {link.megaPanel.promo && (
                              <div className="border-l border-gray-100 pl-5">
                                <div className="flex h-full flex-col justify-center rounded-lg bg-gradient-to-br from-[#4B1E1B] to-[#9E3C34] p-5 text-white">
                                  <p className="text-sm font-bold">{link.megaPanel.promo.title}</p>
                                  <p className="mt-2 text-xs leading-relaxed text-white/80">{link.megaPanel.promo.desc}</p>
                                  <NavTarget
                                    href={link.megaPanel.promo.href}
                                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors hover:text-white/80"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {link.megaPanel.promo.cta} <ArrowRight className="h-3 w-3" />
                                  </NavTarget>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <NavTarget
                  key={link.label}
                  href={link.href}
                  className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    location === link.href
                      ? scrolled
                        ? "bg-[#4B1E1B]/5 text-[#4B1E1B]"
                        : "bg-white/15 text-white"
                      : scrolled
                        ? "text-gray-700 hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </NavTarget>
              ),
            )}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/corporate-inquiry">
              <Button className={`h-9 px-4 text-sm ${!scrolled ? "bg-white text-[#4B1E1B] hover:bg-white/90" : ""}`}>
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={`rounded-md p-2 lg:hidden ${scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto px-4 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.megaPanel ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-0.5 pb-2 pl-4">
                                {link.megaPanel.columns.flatMap((col) => col.items).map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <NavTarget
                                      key={item.label}
                                      href={item.href}
                                      onClick={() => setMenuOpen(false)}
                                      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                                    >
                                      <Icon className="h-4 w-4 text-[#9E3C34]" />
                                      {item.label}
                                    </NavTarget>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavTarget
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                      >
                        {link.label}
                      </NavTarget>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-3 border-t border-gray-100 pt-3">
                <Link href="/corporate-inquiry">
                  <Button className="w-full" onClick={() => setMenuOpen(false)}>
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
