import { Handshake } from "lucide-react";
import { siteConfig } from "@/data/site";

const partners = [
  {
    name: "DekatLokal",
    logo: siteConfig.images.partners.dekatLokal,
  },
  {
    name: "EdukasiLokal",
    logo: siteConfig.images.partners.edukasiLokal,
  },
];

export default function PartnerSection() {
  return (
    <section className="bg-white py-12">
      <div className="section-container">
        <div className="grid items-center gap-8 rounded-[24px] border border-gingerfit-gray/70 bg-gingerfit-cream/70 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div data-aos="fade-up">
            <span className="section-eyebrow">
              <Handshake size={16} aria-hidden="true" />
              Mitra
            </span>
            <h2 className="text-2xl font-black text-gingerfit-black sm:text-3xl">
              Didukung Oleh Mitra Terpercaya
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/70 sm:text-base">
              Gingerfit+ berkolaborasi dengan program pendampingan digital bersama DekatLokal
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex min-h-28 items-center justify-center rounded-[20px] border border-gingerfit-gray/70 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0255f5]/30 hover:bg-white"
                data-aos="fade-up"
              >
                <span
                  role="img"
                  className="logo-mask block h-14 w-full max-w-[270px] text-gingerfit-black transition duration-300 group-hover:scale-105 group-hover:text-[#0255f5]"
                  style={{
                    WebkitMaskImage: `url(${partner.logo})`,
                    maskImage: `url(${partner.logo})`,
                  }}
                  aria-label={`Logo ${partner.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
