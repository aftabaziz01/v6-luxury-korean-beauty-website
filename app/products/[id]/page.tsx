import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Mock product data for display
  const product = {
    id,
    name: "Radiance Essence Serum",
    category: "Skin Care",
    price: "$120.00",
    description:
      "A revolutionary serum that combines concentrated botanical extracts with advanced peptide technology. Designed to brighten, firm, and hydrate the skin at a cellular level.",
    details: [
      "Visibly reduces fine lines and wrinkles",
      "Improves skin elasticity and firmness",
      "Deeply hydrates for a dewy, radiant finish",
      "Suitable for all skin types, including sensitive skin",
    ],
    usage: "Apply 2-3 drops to cleansed skin morning and night. Gently press into face and neck until fully absorbed.",
    images: ["/product-essence-serum.jpg", "/product-essence-serum-2.jpg"],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 size-3" />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-muted overflow-hidden">
                <img src="/product-essence-serum-2.jpg" alt="Detail 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-muted overflow-hidden">
                <img src="/product-essence-serum-texture.jpg" alt="Texture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif">{product.name}</h1>
              <p className="text-2xl font-medium">{product.price}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex-1 rounded-none h-14 uppercase text-xs tracking-widest gap-2">
                  <ShoppingBag className="size-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="size-14 rounded-none bg-transparent">
                  <Heart className="size-5" />
                </Button>
                <Button variant="outline" size="icon" className="size-14 rounded-none bg-transparent">
                  <Share2 className="size-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest">Key Benefits</h4>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="size-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest">How to Use</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Placeholder */}
      <section className="py-24 border-t mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4 group">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img src={`/product-essence-serum-${i}.jpg`} alt="Related" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1 text-center">
                  <h4 className="font-serif text-sm">Complimentary Care 0{i}</h4>
                  <p className="text-xs font-medium">$75.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
