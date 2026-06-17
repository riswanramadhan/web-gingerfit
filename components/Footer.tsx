import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { navItems, siteConfig } from "@/data/site";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

const footerNavItems = navItems.filter((item) => item.href !== "#home");

export default function Footer() {
  return (
    <footer className="bg-gingerfit-black text-white">
      <div className="section-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="relative h-14 w-48">
              <Image
                src={siteConfig.images.logo}
                alt="Logo Gingerfit+"
                fill
                sizes="192px"
                className="object-contain object-left [filter:brightness(0)_invert(1)]"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{siteConfig.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Gingerfit+"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-[#E4405F] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                <FaInstagram size={21} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Gingerfit+"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                <FaTiktok size={21} aria-hidden="true" />
              </a>
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Gingerfit+"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gingerfit-green text-white transition hover:-translate-y-1 hover:bg-[#008B44] focus:outline-none focus:ring-4 focus:ring-gingerfit-green/25"
              >
                <FaWhatsapp size={21} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-base font-black text-white">Navigasi</h2>
            <div className="mt-5 grid gap-3">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-white/60 transition hover:text-gingerfit-green"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-black text-white">Mitra Kami</h2>
            <div className="mt-6 grid gap-7">
              <span
                role="img"
                aria-label="Logo DekatLokal"
                className="logo-mask block h-16 w-full max-w-[320px] text-white"
                style={{
                  WebkitMaskImage: `url(${siteConfig.images.partners.dekatLokal})`,
                  WebkitMaskPosition: "left center",
                  maskImage: `url(${siteConfig.images.partners.dekatLokal})`,
                  maskPosition: "left center",
                }}
              />
              <span
                role="img"
                aria-label="Logo EdukasiLokal"
                className="logo-mask block h-16 w-full max-w-[320px] text-white"
                style={{
                  WebkitMaskImage: `url(${siteConfig.images.partners.edukasiLokal})`,
                  WebkitMaskPosition: "left center",
                  maskImage: `url(${siteConfig.images.partners.edukasiLokal})`,
                  maskPosition: "left center",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm font-semibold text-white/60">
          &copy; 2026 Gingerfit+. All rights reserved | Powered by{" "}
          <a
            href={siteConfig.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-gingerfit-green hover:text-white"
          >
            DekatLokal
          </a>
        </div>
      </div>
    </footer>
  );
}
