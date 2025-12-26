import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img src="/korean-minimalist-office-interior.jpg" alt="Our Vision" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-secondary hidden md:block -z-10" />
            <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 hidden xl:block">
              <span className="text-[12rem] font-serif text-muted/50 leading-none select-none">1985</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-medium uppercase tracking-[0.2em] text-xs">Since 1985</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Creating Innovative Services <br /> for a Better Tomorrow
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Lumière is more than just a beauty brand. We are a corporate entity dedicated to the intersection of
              science, nature, and human wellness. Our journey began with a simple mission: to harness the power of
              Korean botanical heritage through cutting-edge technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 py-6">
              <div className="space-y-2">
                <h4 className="font-bold text-sm uppercase tracking-widest">Global Reach</h4>
                <p className="text-sm text-muted-foreground">
                  Present in over 30 countries across Asia, Europe, and North America.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-sm uppercase tracking-widest">Innovation First</h4>
                <p className="text-sm text-muted-foreground">
                  Dedicated R&D centers focused on sustainable and ethical beauty solutions.
                </p>
              </div>
            </div>

            <Button
              variant="link"
              className="p-0 h-auto text-foreground font-bold uppercase text-xs tracking-[0.2em] group"
            >
              Learn more about our company
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
