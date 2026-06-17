import { BadgeCheck, Leaf, PackageCheck, Snowflake } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const benefits = [
  {
    title: "Bahan Alami Pilihan",
    description: "Menggunakan jahe organik dan bahan alami pilihan.",
    icon: Leaf,
  },
  {
    title: "Cold-Pressed",
    description: "Diproses untuk menjaga karakteristik rasa asli dan kesegaran bahan.",
    icon: Snowflake,
  },
  {
    title: "Praktis Dikonsumsi",
    description: "Kemasan kecil yang mudah dinikmati kapan saja dan di mana saja.",
    icon: PackageCheck,
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="section-padding bg-gingerfit-cream">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white shadow-soft">
            <Image
              src={siteConfig.images.owner}
              alt="Owner Gingerfit+"
              width={1200}
              height={1422}
              sizes="(min-width: 1024px) 500px, 92vw"
              className="block h-auto w-full object-cover"
              priority={false}
            />
          </div>
          <div className="mx-auto mt-4 w-full max-w-[500px] rounded-[20px] bg-white p-4 shadow-soft sm:absolute sm:bottom-5 sm:left-auto sm:right-5 sm:mt-0 sm:w-72 sm:bg-white/95 sm:backdrop-blur-md">
            <p className="text-xs font-extrabold uppercase text-gingerfit-green">Dikembangkan oleh apoteker</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-black/70">
              Formulasi seimbang antara manfaat kesehatan dan kenyamanan konsumsi harian.
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <span className="section-eyebrow">
            <BadgeCheck size={16} aria-hidden="true" />
            Tentang Gingerfit+
          </span>
          <h2 className="section-title">Minuman jahe organik yang segar, hangat, dan praktis.</h2>
          <p className="section-description">
            Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang diformulasikan untuk membantu
            menjaga daya tahan tubuh, menghangatkan badan, dan mendukung gaya hidup sehat. Produk ini menawarkan
            manfaat herbal alami dengan rasa yang praktis dan nyaman dikonsumsi sehari-hari.
          </p>
          <p className="mt-5 text-base leading-8 text-black/70">
            Dikembangkan langsung oleh seorang apoteker, Gingerfit+ mengutamakan formulasi yang seimbang antara
            manfaat kesehatan dan kenyamanan konsumsi. Perpaduan jahe pilihan dengan bahan alami seperti madu,
            kunyit, lemon, wortel, nanas, dan caffeine shot membuat setiap varian memiliki karakter rasa yang berbeda.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-[24px] border border-white/90 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gingerfit-green/10 text-gingerfit-green">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black text-gingerfit-black">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
