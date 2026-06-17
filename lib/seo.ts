import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export function createStructuredData() {
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#localbusiness`,
    name: siteConfig.name,
    description:
      "Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang diformulasikan untuk mendukung gaya hidup sehat.",
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.images.og}`,
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dirgantara 4 Blok E, Mangalli",
      addressLocality: "Gowa",
      addressRegion: "Sulawesi Selatan",
      addressCountry: "ID",
    },
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.tiktok],
  };

  const productGraph = products.map((product) => ({
    "@type": "Product",
    "@id": `${siteConfig.domain}/#${product.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: `Gingerfit+ ${product.name}`,
    description: product.description,
    image: `${siteConfig.domain}${product.image}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: "10000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: siteConfig.domain,
    },
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.domain}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, ...productGraph, faqPage],
  };
}
