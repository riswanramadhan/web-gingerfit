export type Product = {
  name: string;
  descriptor: string;
  combination: string;
  description: string;
  price: number;
  size: string;
  otherSizes: string[];
  image: string;
  alt: string;
  color: string;
  bgColor: string;
  highlightColor?: string;
  accentColor?: string;
  buttonTextColor: string;
};

export const otherProductSizes = [
  "300 mL: Rp30.000",
  "600 mL: Rp60.000",
  "1 Liter: Rp100.000",
];

export const products: Product[] = [
  {
    name: "Immunity Aid",
    descriptor: "Organic Ginger & Extra Honey",
    combination: "Organic Ginger + Extra Honey",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#E8AD22",
    bgColor: "#FFF6D8",
    buttonTextColor: "#111111",
    image: "/images/products/product-immunity-aid.png",
    alt: "Botol Gingerfit+ varian Immunity Aid",
    description:
      "Perpaduan rasa tajam khas jahe organik dengan kelembutan manis dari madu ekstra. Varian ini memberikan rasa hangat yang nyaman di tenggorokan.",
  },
  {
    name: "Immunity Booster",
    descriptor: "Organic Ginger & Turmeric Shot",
    combination: "Organic Ginger + Turmeric Shot",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#00A651",
    bgColor: "#F0FFF5",
    buttonTextColor: "#FFFFFF",
    image: "/images/products/product-immunity-booster.png",
    alt: "Botol Gingerfit+ varian Immunity Booster",
    description:
      "Kombinasi tradisional antara jahe dan kunyit yang diproses secara modern. Cita rasa rempahnya kuat dan autentik untuk rutinitas harian yang aktif.",
  },
  {
    name: "Vitamin A Booster",
    descriptor: "Organic Ginger & Carrot Shot",
    combination: "Organic Ginger + Carrot Shot",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#20B9D6",
    bgColor: "#EAFBFF",
    buttonTextColor: "#111111",
    image: "/images/products/product-vitamin-a-booster.png",
    alt: "Botol Gingerfit+ varian Vitamin A Booster",
    description:
      "Perpaduan rasa manis alami dari wortel murni dan kehangatan jahe. Segar untuk melengkapi asupan Vitamin A dan Beta-Karoten harian.",
  },
  {
    name: "Vitamin C Booster",
    descriptor: "Organic Ginger & Lemon Shot",
    combination: "Organic Ginger + Lemon Shot",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#FF641F",
    bgColor: "#FFF0E8",
    buttonTextColor: "#FFFFFF",
    image: "/images/products/product-vitamin-c-booster.png",
    alt: "Botol Gingerfit+ varian Vitamin C Booster",
    description:
      "Kombinasi segar dari perasan lemon dan kehangatan jahe. Cocok dinikmati pagi hari sebagai asupan buah sitrus yang menyegarkan.",
  },
  {
    name: "Running Booster",
    descriptor: "Organic Ginger & Pineapple Extract",
    combination: "Organic Ginger + Pineapple Extract",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#14DDB0",
    highlightColor: "#DDF44A",
    bgColor: "#E9FFF8",
    buttonTextColor: "#111111",
    image: "/images/products/product-running-booster.png",
    alt: "Botol Gingerfit+ varian Running Booster",
    description:
      "Diformulasikan dengan ekstrak nanas alami yang memberi sentuhan manis-asam tropis. Menyegarkan sebelum maupun setelah aktivitas fisik.",
  },
  {
    name: "Energy Booster",
    descriptor: "Organic Ginger & Caffeine Shot",
    combination: "Organic Ginger + Caffeine Shot",
    price: 10000,
    size: "80 mL",
    otherSizes: otherProductSizes,
    color: "#111111",
    accentColor: "#FF5A3C",
    bgColor: "#F7F7F7",
    buttonTextColor: "#FFFFFF",
    image: "/images/products/product-energy-booster.png",
    alt: "Botol Gingerfit+ varian Energy Booster",
    description:
      "Memadukan karakteristik jahe yang hangat dengan tambahan caffeine shot. Praktis untuk menemani kerja atau belajar saat butuh rasa yang mantap.",
  },
];

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
