"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { documentationImages, type DocumentationImage } from "@/data/testimonials";
import ImageLightbox from "@/components/ImageLightbox";

export default function DocumentationSection() {
  const [selectedImage, setSelectedImage] = useState<DocumentationImage | null>(null);

  return (
    <section className="section-padding bg-gingerfit-cream">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <Camera size={16} aria-hidden="true" />
            Dokumentasi
          </span>
          <h2 className="section-title">Dokumentasi Gingerfit+</h2>
          <p className="section-description mx-auto">
            Momen Gingerfit+ hadir dalam berbagai aktivitas, pelanggan, dan dokumentasi brand.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3" data-aos="fade-up">
          {documentationImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group mb-5 block w-full overflow-hidden rounded-[28px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20"
              aria-label={`Buka ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={78}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} /> : null}
    </section>
  );
}
