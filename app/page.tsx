import { HeroSection } from "@/components/hero-section"
import { StickyPromoBanner } from "@/components/sticky-promo-banner"
import { FeaturedProducts } from "@/components/featured-products"
import { CTABanner } from "@/components/cta-banner"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-10">
        <HeroSection />

        <StickyPromoBanner />

        <FeaturedProducts />

        <CTABanner />

        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
