import { HeroSection } from "@/components/hero-section";
import { StickyPromoBanner } from "@/components/sticky-promo-banner";
import { FeaturedProducts } from "@/components/featured-products";
import { CTABanner } from "@/components/cta-banner";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional 3D Printing & Product Design Services | JRX Studios",
  description:
    "Leading 3D printing services in South Africa. Custom prototypes, industrial parts, product design, web development, and electronics solutions. Fast turnaround, premium quality materials including PLA, PETG, ABS, and TPU.",
  keywords: [
    "3D printing South Africa",
    "custom 3D printing",
    "rapid prototyping",
    "product design",
    "industrial design",
    "CAD modeling",
    "STL files",
    "FDM printing",
    "PLA PETG ABS TPU",
    "Pretoria 3D printing",
    "small scale manufacturing",
    "large scale production",
    "web development",
    "electronics solutions",
    "IoT development",
    "custom enclosures",
    "precision parts",
    "tooling fixtures",
    "prototype development",
    "manufacturing services",
  ],
  openGraph: {
    title: "Professional 3D Printing & Product Design Services | JRX Studios",
    description:
      "Leading 3D printing services in South Africa. Custom prototypes, industrial parts, product design, web development, and electronics solutions.",
    url: "https://jrxstudios.co.za",
    type: "website",
    images: [
      {
        url: "https://jrxstudios.co.za/3d-printer-fdm-printing.jpg",
        width: 1200,
        height: 630,
        alt: "Professional 3D printing services at JRX Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional 3D Printing & Product Design Services | JRX Studios",
    description:
      "Leading 3D printing services in South Africa. Custom prototypes, industrial parts, product design, web development, and electronics solutions.",
    images: ["https://jrxstudios.co.za/3d-printer-fdm-printing.jpg"],
  },
  alternates: {
    canonical: "https://jrxstudios.co.za",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-10">
        {/* Hero Section with semantic structure */}
        <section aria-label="Hero section showcasing JRX Studios services">
          <HeroSection />
        </section>

        {/* Promotional Banner */}
        <aside aria-label="Current promotions and special offers">
          <StickyPromoBanner />
        </aside>

        {/* Featured Products Section */}
        <section aria-label="Featured 3D printed products and services">
          <FeaturedProducts />
        </section>

        {/* Call to Action Banner */}
        <section aria-label="Call to action for starting a project">
          <CTABanner />
        </section>

        {/* About Section */}
        <section aria-label="About JRX Studios team and services">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
