import { Link } from "wouter";
import { ArrowRight, Handshake, Building, Briefcase, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const types = [
  { icon: Building, title: "Oil & Gas Operators", description: "Upstream, midstream, and downstream companies seeking compliant on-site medical coverage and MERP management." },
  { icon: Briefcase, title: "Drilling & EPC Contractors", description: "Contractors requiring pre-mobilisation screening, fitness-for-work certification, and standby medical teams." },
  { icon: Globe, title: "IOC Subcontractors", description: "Oilfield services companies working under IOC contracts that mandate medical staffing and health documentation standards." },
  { icon: Handshake, title: "HR & Procurement Teams", description: "Corporate HR and procurement departments looking to embed occupational health into their contractor supply chain." },
];

export default function Partnerships() {
  return (
    <section className="py-20 bg-[#4B1E1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-white/40 uppercase mb-3">Partnership Opportunities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who Partners with Sapphire Health</h2>
            <p className="text-white/60 max-w-xl mx-auto">We work best with organisations that understand the cost of getting health compliance wrong — and want a partner who won't let it happen.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {types.map((t, i) => {
            const Icon = t.icon;
            return (
              <ScrollReveal key={t.title} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/25 hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{t.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{t.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link href="/corporate-inquiry">
              <button className="inline-flex items-center gap-2 bg-white text-[#4B1E1B] hover:bg-white/90 font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm">
                Explore a Partnership <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
