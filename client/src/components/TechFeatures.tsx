// TechFeatures.tsx
import { Smartphone, FileBarChart2, Shield, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Smartphone, title: "Digital Health Records", description: "All screenings and assessments are documented digitally, making records instantly accessible for regulatory review or audits." },
  { icon: FileBarChart2, title: "Structured Reporting", description: "Clients receive monthly and post-deployment health reports in a standardised format — clear, compliant, and ready to file." },
  { icon: Shield, title: "Compliant Documentation", description: "Our templates, certificates, and MERP formats are built to satisfy DPR/NUPRC and major IOC requirements out of the box." },
  { icon: Zap, title: "Rapid Mobilisation", description: "Our deployment infrastructure means we can have a certified team on the ground in 48–72 hours for planned engagements." },
];

export default function TechFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#9E3C34] uppercase mb-3">Our Edge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B1E1B] mb-4">Built for the Way Your Operations Work</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We don't just show up — we bring structure, documentation, and speed to every engagement.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100 hover:border-[#4B1E1B]/20 hover:shadow-sm transition-all text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#4B1E1B] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#4B1E1B] mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
