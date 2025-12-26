import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const features = [
  {
    title: "Business Area",
    subtitle: "Strategic Innovation",
    image: "/minimal-corporate-architecture.jpg",
    link: "/business/intro",
  },
  {
    title: "Our History",
    subtitle: "Decades of Excellence",
    image: "/vintage-scientific-laboratory.jpg",
    link: "/company/history",
  },
  {
    title: "New Products",
    subtitle: "Future of Beauty",
    image: "/luxury-skincare-bottles.jpg",
    link: "/products",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-accent font-medium uppercase tracking-[0.2em] text-xs">Excellence</span>
            <h2 className="text-4xl font-serif">Pioneering Progress</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block">
            Exploring new frontiers in carbon materials, clean energy, and premium wellness solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} className="group relative aspect-[4/5] overflow-hidden bg-black">
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white/60 text-xs uppercase tracking-widest mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {feature.subtitle}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-white font-serif tracking-wide">{feature.title}</h3>
                  <ArrowUpRight className="text-white size-6 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
