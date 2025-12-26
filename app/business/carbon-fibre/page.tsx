import { Button } from "@/components/ui/button"

export default function CarbonFibrePage() {
  return (
    <div className="flex flex-col">
      {/* Side-by-Side Hero */}
      <section className="grid lg:grid-cols-2 min-h-[70vh] bg-background">
        <div className="flex flex-col justify-center p-12 md:p-24 space-y-8">
          <span className="text-accent font-medium uppercase tracking-[0.2em] text-xs">Innovation in Materials</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Advanced <br /> Carbon Fibre
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Lumière's advanced materials division is a global pioneer in carbon fibre technology, providing
            high-performance solutions for aerospace, automotive, and sports industries.
          </p>
          <div className="pt-4">
            <Button className="rounded-none px-10 h-14 uppercase text-xs tracking-widest">Technical Specs</Button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/carbon-fibre-texture-innovation.jpg"
            alt="Carbon Fibre Texture"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Extreme Durability",
                desc: "Superior strength-to-weight ratio compared to traditional materials.",
              },
              {
                title: "Versatile Application",
                desc: "From aerospace components to high-end lifestyle products.",
              },
              {
                title: "Sustainable Manufacturing",
                desc: "Optimized production processes that reduce environmental impact.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-serif border-b pb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src="/aerospace-partnership-carbon.jpg"
                alt="Aerospace Partnership"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">Global Partnerships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our carbon fibre solutions are trusted by leading global corporations. We collaborate extensively with
                aerospace engineers and performance designers to push the boundaries of what's possible.
              </p>
              <ul className="space-y-3">
                {["Aerospace Grade Certification", "Proprietary Weaving Technology", "Customized Resin Systems"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <div className="size-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
