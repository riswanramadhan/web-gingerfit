import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { formatRupiah, products } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";

export default function ProductSection() {
  return (
    <section id="produk" className="section-padding relative overflow-hidden bg-gingerfit-cream">
      <div className="animated-blob left-[-120px] top-28 bg-gingerfit-green/15" />
      <div className="animated-blob bottom-24 right-[-140px] bg-gingerfit-sky/20 [animation-delay:1.2s]" />
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <ShoppingBag size={16} aria-hidden="true" />
            Produk
          </span>
          <h2 className="section-title">Pilihan Varian Gingerfit+</h2>
          <p className="section-description mx-auto">
            Segarkan hari Anda dengan koleksi gingershot organik dari Gingerfit+. Setiap varian dibuat dari jahe
            pilihan dan dipadukan dengan bahan alami premium untuk menemani aktivitas harian Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[22px] border border-white/90 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              data-aos="fade-up"
              style={{ background: `linear-gradient(180deg, ${product.bgColor} 0%, #FFFFFF 54%)` }}
            >
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[28px]" style={{ backgroundColor: product.bgColor }}>
                <div
                  className="absolute left-4 top-4 z-10 rounded-full px-4 py-2 text-xs font-black uppercase shadow-sm"
                  style={{
                    background:
                      product.highlightColor != null
                        ? `linear-gradient(90deg, ${product.color}, ${product.highlightColor})`
                        : product.color,
                    color: product.buttonTextColor,
                  }}
                >
                  Varian
                </div>
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                  className="object-contain p-5 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-extrabold" style={{ color: product.color }}>
                  {product.descriptor}
                </p>
                <h3 className="mt-2 text-2xl font-black text-gingerfit-black">{product.name}</h3>
                <p className="mt-3 min-h-[112px] text-sm leading-7 text-black/70">{product.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-black/70 shadow-sm">
                    {product.size}
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-black/70 shadow-sm">
                    Ready Stock / PO
                  </span>
                </div>

                <div className="mt-4 rounded-[22px] border border-black/10 bg-white/75 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase text-black/50">Harga 80 mL</p>
                      <p className="text-2xl font-black text-gingerfit-black">{formatRupiah(product.price)}</p>
                    </div>
                    <p className="text-right text-xs font-bold leading-5 text-black/60">Ukuran lain tersedia</p>
                  </div>
                  <div className="mt-3 grid gap-2 text-xs font-bold text-black/60">
                    {product.otherSizes.map((size) => (
                      <span key={`${product.name}-${size}`}>{size}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={createProductWhatsAppLink(product.name, product.size)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-extrabold shadow-sm transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gingerfit-green/20"
                  style={{ backgroundColor: product.color, color: product.buttonTextColor }}
                >
                  <FaWhatsapp size={18} aria-hidden="true" />
                  Order Varian Ini
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
