"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { DocumentationImage } from "@/data/testimonials";

type ImageLightboxProps = {
  image: DocumentationImage;
  onClose: () => void;
};

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-gingerfit-black shadow-soft transition hover:bg-gingerfit-green hover:text-white focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20"
          aria-label="Tutup lightbox dokumentasi"
        >
          <X size={22} aria-hidden="true" />
        </button>
        <div className="relative h-[82vh] min-h-[360px] overflow-hidden rounded-3xl bg-gingerfit-cream">
          <Image src={image.src} alt={image.alt} fill quality={82} sizes="92vw" className="object-contain" priority />
        </div>
      </div>
    </div>
  );
}
