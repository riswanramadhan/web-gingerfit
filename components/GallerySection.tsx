"use client";

import { Images } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { galleryImages, type GalleryImage } from "@/data/gallery";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="galeri" className="section-padding relative overflow-hidden bg-white">
      <div className="animated-blob left-[-90px] top-16 bg-gingerfit-sky/20" />
      <div className="animated-blob right-[-120px] top-1/2 bg-gingerfit-yellow/20 [animation-delay:1.5s]" />
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <Images size={16} aria-hidden="true" />
            Galeri
          </span>
          <h2 className="section-title">Galeri Fresh Gingerfit+</h2>
          <p className="section-description mx-auto">
            Kumpulan foto produk, campaign, dan suasana Gingerfit+ yang menampilkan karakter fresh dan energetic.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-[20px] bg-gingerfit-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20 ${
                index === 0 || index === 5 ? "sm:row-span-2" : ""
              }`}
              aria-label={`Buka ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={78}
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                  index === 0 || index === 5 ? "h-[520px]" : "h-[250px]"
                }`}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} /> : null}
    </section>
  );
}
