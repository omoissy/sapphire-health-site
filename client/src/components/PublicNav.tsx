import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/config/contact";
import SapphireLogo from "@/components/SapphireLogo";

type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "On-Site Medical Support & Mobile Clinics", href: "/#services" },
      { label: "Emergency Medical Response", href: "/#services" },
      { label: "Occupational Health Screening", href: "/#services" },
      { label: "Preventive Health & Wellness Programmes", href: "/#services" },
      { label: "Telemedicine Support", href: "/#services" },
      { label: "Health & Safety Training", href: "/#services" },
      { label: "Incident Documentation & Reporting", href: "/#services" },
      { label: "Event / Project Medical Coverage", href: "/#services" },
    ],
  },
  {
    label: "Who We Serve",
    href: "/#who-we-serve",
    children: [
      { label: "Oil & Gas", href: "/#who-we-serve" },
      { label: "Construction & Engineering", href: "/#who-we-serve" },
      { label: "Mining & Exploration", href: "/#who-we-serve" },
      { label: "Logistics & Transport", href: "/#who-we-serve" },
      { label: "Telecommunications & Infrastructure", href: "/#who-we-serve" },
      { label: "Corporate Organizations", href: "/#who-we-serve" },
      { label: "Institutions & Communities", href: "/#who-we-serve" },
      { label: "Remote / Offsite Workforces", href: "/#who-we-serve" },
    ],
  },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

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

export default function PublicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#4B1E1B]/10 bg-white/95 shadow-sm backdrop-blur-sm"
          : "border-b border-gray-100 bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="flex cursor-pointer items-center">
              <SapphireLogo imageBoxClassName="h-11 w-11" />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavTarget
                    href={link.href}
                    className="flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </NavTarget>
                  <AnimatePresence>
                    {openDropdown === link.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 mt-1 w-80 rounded-lg border border-gray-100 bg-white py-2 shadow-xl"
                      >
                        {link.children.map((child) => (
                          <NavTarget
                            key={child.label}
                            href={child.href}
                            className="block cursor-pointer px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                          >
                            {child.label}
                          </NavTarget>
                        ))}
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
                      ? "bg-[#4B1E1B]/5 text-[#4B1E1B]"
                      : "text-gray-700 hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                  }`}
                >
                  {link.label}
                </NavTarget>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#4B1E1B]"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phone.display}
            </a>
            <Link href="/corporate-inquiry">
              <Button className="h-9 px-4 text-sm">Request a Consultation</Button>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-[#4B1E1B] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <NavTarget
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-[#4B1E1B]/5 hover:text-[#4B1E1B]"
                  >
                    {link.label}
                  </NavTarget>
                </div>
              ))}
              <div className="space-y-2 border-t border-gray-100 pt-3">
                <a
                  href={`tel:${CONTACT_INFO.phone.tel}`}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#4B1E1B]"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phone.display}
                </a>
                <Link href="/corporate-inquiry">
                  <Button className="w-full" onClick={() => setMenuOpen(false)}>
                    Request a Consultation
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
