import { FaWhatsapp } from "react-icons/fa6";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div
        className="shine-card cta-gradient relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[24px] p-6 text-white shadow-glow sm:p-8 lg:grid-cols-[1fr_0.82fr] lg:p-12"
        data-aos="zoom-in"
      >
        <div className="relative z-10">
          <p className="text-xs font-extrabold uppercase text-white/80">Order Gingerfit+</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Siap Coba Booster Harianmu?
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/80">
            Pilih varian favoritmu dan rasakan kesegaran gingershot organik Gingerfit+ untuk menemani aktivitas harian.
          </p>
          <a
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-gingerfit-green shadow-soft transition hover:-translate-y-1 hover:bg-gingerfit-cream focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            <FaWhatsapp size={20} aria-hidden="true" />
            Order Sekarang via WhatsApp
          </a>
        </div>

        <div className="relative z-10 grid gap-4 rounded-[20px] border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["6", "Varian Booster"],
            ["80 mL", "Shot praktis"],
            ["08.00-20.00", "Jam order WITA"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-black leading-none text-white">{value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
