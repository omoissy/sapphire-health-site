import { Phone, AlertTriangle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

export default function EmergencyBanner() {
  return (
    <div className="bg-[#4B1E1B] px-4 py-2 text-center text-xs text-white sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5 font-medium">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
          24/7 Medical Emergency Response
        </span>
        <span className="hidden sm:block text-white/40">|</span>
        <a
          href={`tel:${CONTACT_INFO.emergency.tel}`}
          className="flex basis-full items-center justify-center gap-1.5 font-bold transition-colors hover:text-amber-300 sm:basis-auto"
        >
          <Phone className="h-3.5 w-3.5" />
          {CONTACT_INFO.emergency.display}
        </a>
        <span className="hidden sm:block text-white/40">|</span>
        <span className="basis-full text-white/70 sm:basis-auto">Offshore · Onshore · Construction · Events</span>
      </div>
    </div>
  );
}
