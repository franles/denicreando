import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Clients } from "@/components/landing/clients"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
