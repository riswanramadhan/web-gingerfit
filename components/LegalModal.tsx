"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export type LegalModalItem = {
  title: string;
  label: string;
  number: string;
  image: string;
  alt: string;
};

type LegalModalProps = {
  item: LegalModalItem;
  onClose: () => void;
};

export default function LegalModal({ item, onClose }: LegalModalProps) {
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
      aria-label={`Preview ${item.title}`}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4 px-2 pt-1">
          <div>
            <p className="text-xs font-extrabold uppercase text-gingerfit-green">{item.label}</p>
            <h3 className="text-lg font-black text-gingerfit-black">{item.number}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gingerfit-cream text-gingerfit-black transition hover:bg-gingerfit-green hover:text-white focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20"
            aria-label="Tutup modal legalitas"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="relative h-[74vh] min-h-[320px] overflow-hidden rounded-3xl bg-gingerfit-cream">
          <Image src={item.image} alt={item.alt} fill sizes="92vw" className="object-contain" priority />
        </div>
      </div>
    </div>
  );
}
