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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Gingerfit+ | Gingershot Organik Jahe untuk Daily Booster",
    description: siteConfig.ogDescription,
    siteName: "Gingerfit+ - DekatLokal",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: siteConfig.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gingerfit+ | Gingershot Organik Jahe",
    description: siteConfig.twitterDescription,
    images: [
      {
        url: siteConfig.images.og,
        alt: siteConfig.heroImageAlt,
      },
    ],
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
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:url" content={siteConfig.url} />
      </head>
      <body className={`${poppins.className} bg-gingerfit-cream text-gingerfit-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
