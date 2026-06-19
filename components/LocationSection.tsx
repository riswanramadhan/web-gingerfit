import { Clock, MapPin } from "lucide-react";
import { SiGooglemaps } from "react-icons/si";
import { siteConfig } from "@/data/site";

export default function LocationSection() {
  return (
    <section id="lokasi" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-up">
            <span className="section-eyebrow">
              <SiGooglemaps size={16} aria-hidden="true" />
              Lokasi
            </span>
            <h2 className="section-title">Lokasi Gingerfit+</h2>
            <p className="section-description">
              Gingerfit+ berlokasi di Gowa dan melayani pemesanan untuk area Gowa, Makassar, Sulawesi Selatan, dan sekitarnya.
              Kunjungi atau temukan kami melalui Google Maps. Untuk pemesanan, hubungi admin melalui WhatsApp
              agar informasi stok dan preorder dapat dikonfirmasi lebih cepat.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-[24px] border border-gingerfit-gray bg-gingerfit-cream p-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gingerfit-green text-white">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gingerfit-black">Alamat</h3>
                  <p className="mt-2 text-sm leading-7 text-black/70">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-[24px] border border-gingerfit-gray bg-gingerfit-cream p-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gingerfit-yellow text-gingerfit-black">
                  <Clock size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gingerfit-black">Jam Operasional</h3>
                  <p className="mt-2 text-sm leading-7 text-black/70">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="primary-button mt-8">
              Buka Google Maps
              <SiGooglemaps size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-gingerfit-gray bg-gingerfit-cream p-3 shadow-soft" data-aos="fade-up">
            <iframe
              title="Peta lokasi Gingerfit+"
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="420"
              className="rounded-[24px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
