"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { createGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const whatsAppLink = createGeneralWhatsAppLink();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = navItems
      .map((item) => {
        const section = document.querySelector(item.href);
        if (!section) {
          return null;
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveHref(item.href);
            }
          },
          {
            rootMargin: "-34% 0px -52% 0px",
            threshold: 0,
          },
        );

        observer.observe(section);
        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gingerfit-cream/90 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between gap-4">
        <Link href="#home" aria-label="Kembali ke hero Gingerfit+" className="relative h-12 w-40 shrink-0">
          <Image
            src={siteConfig.images.logo}
            alt="Logo Gingerfit+"
            fill
            priority
            sizes="160px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-bold transition after:absolute after:bottom-0 after:left-3 after:h-0.5 after:rounded-full after:bg-gingerfit-green after:transition-all hover:text-gingerfit-green focus:outline-none focus:ring-4 focus:ring-gingerfit-green/15 ${
                  isActive ? "text-gingerfit-green after:w-[calc(100%-1.5rem)]" : "text-black/70 after:w-0"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="primary-button px-5 py-3">
            <FaWhatsapp size={18} aria-hidden="true" />
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-gingerfit-black shadow-soft transition hover:-translate-y-0.5 hover:text-gingerfit-green focus:outline-none focus:ring-4 focus:ring-gingerfit-green/15 lg:hidden"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[999] h-dvh overflow-hidden bg-gingerfit-cream transition duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute inset-y-0 right-0 flex h-dvh w-full flex-col overflow-hidden bg-gingerfit-cream px-5 py-4 transition duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <div className="relative h-10 w-36">
              <Image
                src={siteConfig.images.logo}
                alt="Logo Gingerfit+"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gingerfit-black shadow-sm transition hover:text-gingerfit-green focus:outline-none focus:ring-4 focus:ring-gingerfit-green/15"
              aria-label="Tutup menu navigasi"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-7 grid gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-black/10 py-2.5 text-xl font-black transition focus:outline-none focus:ring-4 focus:ring-gingerfit-green/15 ${
                    isActive ? "text-gingerfit-green" : "text-gingerfit-black"
                  }`}
                >
                  {item.label}
                  <span
                    className={`h-2 w-2 rounded-full transition ${
                      isActive ? "bg-gingerfit-green" : "bg-gingerfit-gray"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto grid gap-3 pb-1">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gingerfit-green px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:bg-[#008B44] focus:outline-none focus:ring-4 focus:ring-gingerfit-green/25"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Order Now
            </a>
            <p className="text-center text-sm font-semibold text-black/60">
              Powered by{" "}
              <a
                href={siteConfig.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-[#0255f5]"
              >
                DekatLokal
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
