import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export function createStructuredData() {
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#localbusiness`,
    name: siteConfig.name,
    description:
      "Gingerfit+ menyediakan gingershot organik berbahan dasar jahe pilihan di Gowa dan Makassar, Sulawesi Selatan. Diformulasikan oleh apoteker untuk mendukung rutinitas sehat harian dengan berbagai varian fresh booster.",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-5.1857",
      longitude: "119.4991",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Gowa",
      },
      {
        "@type": "City",
        name: "Makassar",
      },
      {
        "@type": "State",
        name: "Sulawesi Selatan",
      },
    ],
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "Rp10.000 - Rp95.000",
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
      price: product.price.toString(),
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

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.domain}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DekatLokal",
        item: "https://dekatlokal.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gingerfit+ - Gingershot Organik Jahe Gowa Makassar",
        item: siteConfig.domain,
      },
    ],
  };

  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}${siteConfig.images.logo}`,
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.tiktok],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, organization, ...productGraph, faqPage, breadcrumbList],
  };
}
