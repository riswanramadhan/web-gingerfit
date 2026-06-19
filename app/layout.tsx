import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  category: "food and beverage",
  creator: "Gingerfit+",
  publisher: "Gingerfit+",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: "Gingerfit+ gingershot organik jahe Gowa Makassar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.twitterDescription,
    images: [siteConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "ID-SN",
    "geo.placename": "Gowa, Sulawesi Selatan",
    "theme-color": "#00A651",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00A651",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} bg-gingerfit-cream text-gingerfit-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
