"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const slides = [
  {
    src: siteConfig.images.hero.gallery4,
    alt: "Foto campaign Gingerfit+ gallery 4",
  },
  {
    src: siteConfig.images.hero.gallery5,
    alt: "Foto campaign Gingerfit+ gallery 5",
  },
];

export default function HeroGallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[620px]" data-aos="zoom-in">
      <div className="animated-blob left-[-40px] top-8 bg-gingerfit-green/20" />
      <div className="animated-blob bottom-10 right-[-40px] bg-gingerfit-yellow/25 [animation-delay:1s]" />
      <div className="absolute inset-x-10 bottom-6 h-20 rounded-full bg-black/20 blur-2xl" />

      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-soft">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            quality={82}
            sizes="(min-width: 1024px) 560px, 94vw"
            className={`object-cover transition duration-1000 ease-out ${
              activeIndex === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-white/10" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md">
            <p className="text-xs font-extrabold uppercase text-gingerfit-green">Fresh gingershot</p>
            <p className="mt-1 text-sm font-black text-gingerfit-black">Gallery campaign Gingerfit+</p>
          </div>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Tampilkan slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
