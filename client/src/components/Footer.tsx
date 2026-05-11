import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import SapphireLogo from "@/components/SapphireLogo";
import CTAButton from "@/components/ui/cta-button";

const footerLinks = {
  Services: [
    { label: "On-Site Medical Support & Mobile Clinics", href: "/#services" },
    { label: "Emergency Medical Response", href: "/#services" },
    { label: "Occupational Health Screening", href: "/#services" },
    { label: "Preventive Health & Wellness Programmes", href: "/#services" },
    { label: "Telemedicine Support", href: "/#services" },
    { label: "Event / Project Medical Coverage", href: "/#services" },
  ],
  Company: [
    { label: "Who We Serve", href: "/#who-we-serve" },
    { label: "Experience", href: "/#experience" },
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Careers", href: "/careers" },
    { label: "Request a Consultation", href: "/corporate-inquiry" },
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
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_INFO.whatsapp.defaultMessage,
  )}`;

  return (
    <footer className="bg-[#120908] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <SapphireLogo
              tone="light"
              variant="lockup"
              className="mb-5"
              imageBoxClassName="h-24 w-44 border-white/10 p-3"
              showText={false}
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              Professional healthcare support for organizations, communities, events, and remote workforces that need care closer to where work happens.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: CONTACT_INFO.social.instagram, label: "Instagram" },
                { icon: Linkedin, href: CONTACT_INFO.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
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

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <div className="mb-5 space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone.tel}`}
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-[#F0B8B0]" />
                {CONTACT_INFO.phone.display}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email.general}`}
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-[#F0B8B0]" />
                {CONTACT_INFO.email.general}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F0B8B0]" />
                <span>{CONTACT_INFO.addresses.lagos.address}</span>
              </div>
            </div>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20BA5A]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <CTAButton href="/corporate-inquiry" variant="light" className="w-full min-h-11 rounded-xl py-2.5">
                Request a Consultation
              </CTAButton>
            </div>
          </div>
        </div>

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

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Sapphire Health Services Limited. All rights reserved.</p>
          <p>Lagos HQ · Occupational health · Emergency medical support</p>
        </div>
      </div>
    </footer>
  );
}
