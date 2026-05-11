import { Phone, AlertTriangle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

export default function EmergencyBanner() {
  return (
    <div className="bg-[#4B1E1B] text-white py-2 px-4 text-center text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <span className="flex items-center gap-1.5 font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          24/7 Medical Emergency Response
        </span>
        <span className="hidden sm:block text-white/40">|</span>
        <a
          href={`tel:${CONTACT_INFO.emergency.tel}`}
          className="flex items-center gap-1.5 font-bold hover:text-amber-300 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          {CONTACT_INFO.emergency.display}
        </a>
        <span className="hidden sm:block text-white/40">|</span>
        <span className="text-white/70 text-xs">Offshore · Onshore · Construction · Events</span>
      </div>
    </div>
  );
}
