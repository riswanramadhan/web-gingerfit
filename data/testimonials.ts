export type Testimonial = {
  name: string;
  role?: string;
  origin: string;
  quote: string;
};

export type DocumentationImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Andi Sudirman Sulaiman",
    origin: "Gubernur Sulawesi Selatan",
    quote:
      "Inovasi produk herbal lokal seperti Gingerfit+ menunjukkan potensi besar dalam mengembangkan UMKM berbasis kesehatan serta meningkatkan nilai tambah komoditas lokal.",
  },
  {
    name: "Prof. Dr. Ir. Jamalluddin Jompa, M.Sc.",
    role: "Rektor Universitas Hasanuddin",
    origin: "Makassar",
    quote:
      "Saya mengapresiasi hadirnya Gingerfit+ sebagai inovasi minuman jahe praktis yang memudahkan masyarakat menikmati manfaat jahe dan madu dalam kehidupan sehari-hari.",
  },
  {
    name: "Alfreds Roosevelt",
    origin: "Makassar",
    quote:
      "Mantap! Sekali disajikan, Gingerfit+ langsung habis dinikmati oleh seluruh rekan kerja saya. Rasanya enak, tidak pahit, dan pas untuk dinikmati kapan saja.",
  },
  {
    name: "Khairiyah Said",
    origin: "Makassar",
    quote:
      "Enak, segar, dan tidak pahit. Gingerfit+ memberikan sensasi hangat yang nyaman dengan rasa yang membuat saya langsung menghabiskannya dalam satu kali teguk.",
  },
  {
    name: "Sebastian White",
    origin: "Jerman",
    quote:
      "It leaves me feeling refreshed and energized throughout my entire body. I noticed positive effects almost immediately after taking it. The Vitamin C Booster is my favorite! I would love to see this amazing product become available in Germany.",
  },
  {
    name: "dr. Anita Mustari",
    origin: "Gowa",
    quote:
      "Suka banget sama semua menu Gingerfit+! Rasanya nggak pernah cukup kalau cuma beli satu. Semoga makin sukses dan berkembang terus. Tolong jualannya setiap hari ya, karena sudah jadi favorit saya!",
  },
];

export const documentationImages: DocumentationImage[] = [
  {
    src: "/images/testimonials/testimoni-1.jpg",
    alt: "Dokumentasi pelanggan Gingerfit+ 1",
    width: 1400,
    height: 1750,
  },
  {
    src: "/images/testimonials/testimoni-2.jpg",
    alt: "Dokumentasi pelanggan Gingerfit+ 2",
    width: 1400,
    height: 1750,
  },
  {
    src: "/images/testimonials/testimoni-3.jpg",
    alt: "Dokumentasi pelanggan Gingerfit+ 3",
    width: 1400,
    height: 1750,
  },
  {
    src: "/images/testimonials/testimoni-4.jpg",
    alt: "Dokumentasi pelanggan Gingerfit+ 4",
    width: 1400,
    height: 2489,
  },
  {
    src: "/images/testimonials/testimoni-5.jpg",
    alt: "Dokumentasi pelanggan Gingerfit+ 5",
    width: 1400,
    height: 2489,
  },
];
