import { FaWhatsapp } from "react-icons/fa6";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-4 z-[70] flex items-center gap-3 sm:bottom-6 sm:right-6">
      <span className="hidden rounded-full border border-white/70 bg-white px-4 py-2 text-xs font-extrabold text-gingerfit-black shadow-soft sm:inline-flex">
        Butuh info stok?
      </span>
      <a
        href={createGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order Gingerfit+ via WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gingerfit-green text-white shadow-glow transition hover:scale-105 hover:bg-[#008B44] focus:outline-none focus:ring-4 focus:ring-gingerfit-green/25 sm:h-16 sm:w-16"
      >
        <span className="absolute h-14 w-14 animate-soft-pulse rounded-full bg-gingerfit-green/30 sm:h-16 sm:w-16" />
        <FaWhatsapp size={30} aria-hidden="true" className="relative z-10" />
      </a>
    </div>
  );
}
