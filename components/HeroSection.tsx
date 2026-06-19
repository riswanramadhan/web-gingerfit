import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import HeroGallerySlider from "@/components/HeroGallerySlider";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="animated-gradient relative overflow-hidden pt-28"
    >
      <div className="section-container grid min-h-[calc(100vh-40px)] items-center gap-10 pb-16 lg:grid-cols-[1fr_0.95fr] lg:pb-20">
        <div className="max-w-3xl" data-aos="fade-right">
          <span className="section-eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Fresh Booster
          </span>
          <h1 className="text-5xl font-black leading-[1.02] text-gingerfit-black sm:text-6xl lg:text-7xl">
            Gingerfit+ | Gingershot Organik Jahe di Gowa dan Makassar
          </h1>
          <p className="mt-4 text-2xl font-bold leading-tight text-gingerfit-green sm:text-3xl">
            Your Daily Booster, Fresh in Every Shot.
          </p>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-black/70 sm:text-lg">
            Gingerfit+ adalah gingershot organik berbahan dasar jahe pilihan untuk menemani rutinitas sehat harian di Gowa, Makassar, dan Sulawesi Selatan dengan rasa yang segar, hangat, dan praktis.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={createGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="primary-button">
              <FaWhatsapp size={20} aria-hidden="true" />
              Order via WhatsApp
            </a>
            <Link href="#produk" className="secondary-button">
              Lihat Varian Produk
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-extrabold uppercase text-black/60">
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Cold-Pressed</span>
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Dikembangkan Apoteker</span>
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Order via WhatsApp</span>
          </div>
        </div>

        <HeroGallerySlider />
      </div>
    </section>
  );
}
