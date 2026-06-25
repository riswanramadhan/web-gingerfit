import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

function toAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function createProductId(productName: string) {
  return `${siteConfig.url}#produk-${productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

const safeFaqQuestions = new Set([
  "Berapa harga produk Gingerfit+?",
  "Di mana lokasi Gingerfit+?",
  "Apakah produk ready stock?",
  "Bagaimana cara order Gingerfit+?",
  "Apakah Gingerfit+ harus diminum dingin?",
  "Apakah perlu dikocok sebelum diminum?",
  "Bagaimana cara menyimpan Gingerfit+?",
  "Apakah Gingerfit+ membuka kerja sama reseller atau mitra?",
]);

export function createStructuredData() {
  const organizationId = `${siteConfig.url}#organization`;
  const localBusinessId = `${siteConfig.url}#localbusiness`;
  const websiteId = `${siteConfig.url}#website`;
  const webpageId = `${siteConfig.url}#webpage`;
  const breadcrumbId = `${siteConfig.url}#breadcrumb`;
  const primaryImageId = `${siteConfig.url}#primaryimage`;
  const logoUrl = toAbsoluteUrl(siteConfig.images.logo);
  const ogImageUrl = toAbsoluteUrl(siteConfig.images.og);
  const safeFaqItems = faqItems.filter((item) => safeFaqQuestions.has(item.question));
  const sameAs = [siteConfig.socials.instagram, siteConfig.socials.tiktok].filter(Boolean);

  const primaryImage = {
    "@type": "ImageObject",
    "@id": primaryImageId,
    url: ogImageUrl,
    contentUrl: ogImageUrl,
    width: 1200,
    height: 630,
    caption: siteConfig.heroImageAlt,
  };

  const organization = {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: ["Gingerfit Plus", "Gingerfit"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      contentUrl: logoUrl,
    },
    image: ogImageUrl,
    sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    alternateName: ["Gingerfit Plus", "Gingerfit"],
    url: siteConfig.url,
    inLanguage: "id-ID",
    publisher: {
      "@id": organizationId,
    },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
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
        name: "Gingerfit+ - Gingershot Organik Jahe untuk Daily Booster",
        item: siteConfig.url,
      },
    ],
  };

  const webPage = {
    "@type": "WebPage",
    "@id": webpageId,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "id-ID",
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": localBusinessId,
    },
    primaryImageOfPage: {
      "@id": primaryImageId,
    },
    image: {
      "@id": primaryImageId,
    },
    breadcrumb: {
      "@id": breadcrumbId,
    },
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: siteConfig.name,
    alternateName: ["Gingerfit Plus", "Gingerfit"],
    description:
      "Gingerfit+ adalah brand gingershot organik berbahan jahe pilihan dan bahan alami yang praktis untuk menemani rutinitas sehat harian dengan rasa segar, hangat, dan modern.",
    url: siteConfig.url,
    image: ogImageUrl,
    logo: logoUrl,
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dirgantara 4 Blok E, Mangalli",
      addressLocality: "Gowa",
      addressRegion: "Sulawesi Selatan",
      addressCountry: "ID",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "Rp10.000 - Rp95.000",
    sameAs,
  };

  const productGraph = products.map((product) => ({
    "@type": "Product",
    "@id": createProductId(product.name),
    name: `Gingerfit+ ${product.name}`,
    description: `Gingerfit+ ${product.name} adalah varian gingershot organik berbahan ${product.descriptor} dengan ukuran utama ${product.size}.`,
    image: toAbsoluteUrl(product.image),
    category: "Gingershot organik",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Ukuran utama",
        value: product.size,
      },
      {
        "@type": "PropertyValue",
        name: "Ukuran lain",
        value: product.otherSizes.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Status",
        value: "Ready Stock / PO",
      },
    ],
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: `${siteConfig.url}#produk`,
      seller: {
        "@id": organizationId,
      },
    },
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}#faq`,
    mainEntity: safeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph: Record<string, unknown>[] = [
    organization,
    website,
    primaryImage,
    breadcrumbList,
    webPage,
    localBusiness,
    ...productGraph,
  ];

  if (safeFaqItems.length > 0) {
    graph.push(faqPage);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
