import AOSInit from "@/components/AOSInit";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import DocumentationSection from "@/components/DocumentationSection";
import FAQSection from "@/components/FAQSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LegalSection from "@/components/LegalSection";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import { createStructuredData } from "@/lib/seo";

export default function Home() {
  const structuredData = createStructuredData();

  return (
    <>
      <AOSInit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <PartnerSection />
        <AboutSection />
        <LegalSection />
        <ProductSection />
        <TestimonialSection />
        <DocumentationSection />
        <GallerySection />
        <LocationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
