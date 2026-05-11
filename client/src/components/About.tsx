import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Target, Users2, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Clinical Excellence",
    description: "Every deployment is led by qualified, certified health professionals — no shortcuts, no compromises.",
  },
  {
    icon: Target,
    title: "Operational Precision",
    description: "We plan every engagement thoroughly so our teams are ready before your personnel arrive on site.",
  },
  {
    icon: Award,
    title: "Clear Documentation",
    description: "Our reports, handovers, and protocols are structured so clients can review service activity with confidence.",
  },
  {
    icon: Users2,
    title: "Partnership First",
    description: "We work alongside your HSE team — not as a replacement, but as the clinical layer they depend on.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">
                About Sapphire Health
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4B1E1B] mb-6 leading-snug">
                Bringing Practical Healthcare Closer to Workforces and Communities
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sapphire Health Services Limited is a Lagos-based healthcare services company supporting organisations, institutions, communities, events, and field-based teams with reliable medical coverage.
                </p>
                <p>
                  We help employers and organisers close the gap between everyday health needs and urgent medical response. Our teams provide screening, education, on-site care, emergency readiness, and clear reporting where people work and gather.
                </p>
                <p>
                  From corporate workforces and project sites to communities, events, and offsite teams, Sapphire Health deploys experienced medical professionals who understand the environment and are prepared to act.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 bg-[#4B1E1B] hover:bg-[#9E3C34] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    Our Full Story <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/corporate-inquiry">
                  <button className="inline-flex items-center gap-2 border border-[#4B1E1B]/20 text-[#4B1E1B] hover:bg-[#4B1E1B]/5 font-medium px-6 py-3 rounded-xl transition-colors text-sm">
                    Request a Consultation
                  </button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Values */}
          <ScrollReveal direction="right">
            <div className="space-y-5">
              <figure className="overflow-hidden rounded-lg border border-gray-100 bg-[#FAFBFC]">
                <img
                  src="/images/sapphire/sapphire-onsite-healthcare-card.jpg"
                  alt="Sapphire Health on-site occupational health screening"
                  className="aspect-[4/3] w-full object-cover object-center"
                  loading="lazy"
                />
              </figure>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#FAFBFC] rounded-2xl p-5 border border-gray-100 hover:border-[#4B1E1B]/20 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#4B1E1B]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#4B1E1B]" />
                    </div>
                    <h4 className="font-semibold text-[#4B1E1B] text-sm mb-1">{val.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{val.description}</p>
                  </motion.div>
                );
              })}

              {/* HQ Card */}
              <div className="sm:col-span-2 bg-[#4B1E1B] rounded-2xl p-5 text-white">
                <p className="text-xs text-white/60 mb-1 font-medium uppercase tracking-wide">Headquartered in</p>
                <p className="font-bold text-lg">Lagos, Nigeria</p>
                <p className="text-white/70 text-sm mt-1">11A Van Daniel's Estate, Orchid, Lagos</p>
                <p className="text-white/60 text-xs mt-3">Deploying nationwide · Offshore & Onshore capable</p>
              </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
