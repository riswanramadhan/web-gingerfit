import { siteConfig } from "@/data/site";

const WATERMARK = "Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createProductMessage(productName: string, size = "80 mL") {
  return `Halo Admin Gingerfit+, saya ingin order produk ${productName} ukuran ${size}. Mohon info ketersediaan dan cara pemesanannya.

${WATERMARK}`;
}

export function createGeneralMessage() {
  return `Halo Admin Gingerfit+, saya tertarik dengan produk Gingerfit+. Mohon info varian, harga, dan cara pemesanannya.

${WATERMARK}`;
}

export function createGeneralWhatsAppLink() {
  return createWhatsAppLink(createGeneralMessage());
}

export function createProductWhatsAppLink(productName: string, size = "80 mL") {
  return createWhatsAppLink(createProductMessage(productName, size));
}
