import { Hero } from "@/components/home/hero"
import { AboutSection } from "@/components/home/about-section"
import { FeatureGrid } from "@/components/home/feature-grid"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Tagline Section */}
      <div className="bg-background py-16 border-y">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.5em] text-muted-foreground mb-4">Core Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-serif italic text-balance">
            "We believe in the beauty of balance and the power of innovation."
          </h2>
        </div>
      </div>

      <AboutSection />
      <FeatureGrid />

      {/* Service Inquiry CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Ready to transform your business?</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Partner with Lumière to explore innovative solutions in premium materials and global distribution. Our
              experts are ready to assist with your inquiries.
            </p>
            <div className="pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-none px-12 h-14 uppercase text-xs tracking-widest"
              >
                Contact Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Carousel Placeholder */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-12">
            Global Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {["COSMO", "NEO-TECH", "GLOBAL-X", "VISTA", "AURA"].map((partner) => (
              <span key={partner} className="text-2xl font-serif font-bold tracking-tighter">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
