"use client";

import { FileCheck2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import LegalModal, { type LegalModalItem } from "@/components/LegalModal";

const legalItems: LegalModalItem[] = [
  {
    title: "Nomor Induk Berusaha",
    label: "NIB",
    number: "0505230004703",
    image: siteConfig.images.legal.nib,
    alt: "Dokumen Nomor Induk Berusaha Gingerfit+",
  },
  {
    title: "Hak Kekayaan Intelektual",
    label: "HKI / Hak Cipta",
    number: "No. 000944431",
    image: siteConfig.images.legal.hki,
    alt: "Dokumen Hak Cipta Gingerfit+",
  },
];

export default function LegalSection() {
  const [selectedItem, setSelectedItem] = useState<LegalModalItem | null>(null);

  return (
    <section id="legalitas" className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            Legalitas
          </span>
          <h2 className="section-title">Legalitas Usaha</h2>
          <p className="section-description mx-auto">
            Gingerfit+ memiliki legalitas usaha dan perlindungan karya/merek sebagai bentuk komitmen dalam membangun
            produk lokal yang terpercaya.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {legalItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group overflow-hidden rounded-[22px] border border-gingerfit-gray bg-gingerfit-cream p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20"
              data-aos="fade-up"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start gap-4 px-2 pt-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gingerfit-green text-white">
                  <FileCheck2 size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-gingerfit-green">{item.label}</p>
                  <h3 className="mt-1 text-xl font-black text-gingerfit-black">{item.title}</h3>
                  <p className="mt-2 text-base font-bold text-black/70">{item.number}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem ? <LegalModal item={selectedItem} onClose={() => setSelectedItem(null)} /> : null}
    </section>
  );
}
