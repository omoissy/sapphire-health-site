import { useState } from "react";
import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, Youtube } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import SapphireLogo from "@/components/SapphireLogo";
import CTAButton from "@/components/ui/cta-button";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/corporate-inquiry" },
  ],
  Services: [
    { label: "On-Site Medical Support", href: "/#services" },
    { label: "Emergency Response", href: "/#services" },
    { label: "Health Screening", href: "/#services" },
    { label: "Telemedicine", href: "/#services" },
    { label: "Wellness Programmes", href: "/#services" },
    { label: "Event Coverage", href: "/#services" },
  ],
  Solutions: [
    { label: "Workforce Healthcare", href: "/#services" },
    { label: "Remote Site Support", href: "/#services" },
    { label: "Corporate Retainers", href: "/corporate-inquiry" },
    { label: "Diaspora Health Plans", href: "/#services" },
  ],
  Industries: [
    { label: "Oil & Gas", href: "/#who-we-serve" },
    { label: "Construction", href: "/#who-we-serve" },
    { label: "Mining", href: "/#who-we-serve" },
    { label: "Logistics", href: "/#who-we-serve" },
    { label: "Corporate", href: "/#who-we-serve" },
  ],
  Resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
  ],
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const className = "text-sm text-white/60 transition-colors hover:text-white";

  if (href.includes("#")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href}>
      <span className={`${className} cursor-pointer`}>{label}</span>
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_INFO.whatsapp.defaultMessage,
  )}`;

  const socialLinks = [
    { icon: Instagram, href: CONTACT_INFO.social.instagram, label: "Instagram" },
    { icon: Linkedin, href: CONTACT_INFO.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter/X" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#120908] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand + Newsletter */}
          <div>
            <SapphireLogo
              tone="light"
              variant="lockup"
              className="mb-5"
              imageBoxClassName="h-24 w-44 border-white/10 p-3"
              showText={false}
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              Professional healthcare support for organizations, communities, events, and remote workforces.
            </p>

            {/* Newsletter signup */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Stay Updated
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#9E3C34] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#4B1E1B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9E3C34]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-[#4B1E1B]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href={`tel:${CONTACT_INFO.phone.tel}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#F0B8B0]" />
            {CONTACT_INFO.phone.display}
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email.general}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#F0B8B0]" />
            {CONTACT_INFO.email.general}
          </a>
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
            <MapPin className="h-4 w-4 shrink-0 text-[#F0B8B0]" />
            {CONTACT_INFO.addresses.lagos.address}
          </div>
        </div>

        {/* Emergency hotline */}
        <div className="mb-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-white">24/7 Medical Emergency Response</p>
            <p className="mt-0.5 text-xs text-white/50">
              For on-site medical emergencies requiring immediate coordination.
            </p>
          </div>
          <a
            href={`tel:${CONTACT_INFO.emergency.tel}`}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-[#4B1E1B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9E3C34]"
          >
            <Phone className="h-4 w-4" />
            {CONTACT_INFO.emergency.display}
          </a>
        </div>

        {/* Legal strip */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sapphire Health Services Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-white/60">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white/60">Terms of Service</span>
            <span className="cursor-pointer hover:text-white/60">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
