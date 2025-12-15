import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MaterialsSection } from "@/components/materials-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <MaterialsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LocationSection />
      <FinalCTASection />
      <Footer />
      {/* <WhatsAppButton /> */}
    </main>
  )
}
