// LiveHealthTracker.tsx — CTA banner replacing the health tracker
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function LiveHealthTracker() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2D1210] to-[#4B1E1B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Deploy a Medical Team?
              </h2>
              <p className="text-white/70">
                Tell us about your operation. We'll have a tailored proposal ready within 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href={`tel:${CONTACT_INFO.phone.tel}`} className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phone.display}
              </a>
              <Link href="/corporate-inquiry">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-[#4B1E1B] hover:bg-white/90 font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                  Get a Proposal <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
