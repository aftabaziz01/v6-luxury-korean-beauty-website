import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

const categories = ["All", "Skin Care", "Make Up", "Body & Hair", "Fragrance"]

const products = [
  {
    id: "1",
    name: "Radiance Essence Serum",
    category: "Skin Care",
    price: "$120.00",
    image: "/product-essence-serum.jpg",
  },
  {
    id: "2",
    name: "Velvet Matte Foundation",
    category: "Make Up",
    price: "$85.00",
    image: "/product-foundation.jpg",
  },
  {
    id: "3",
    name: "Botanical Cleansing Oil",
    category: "Skin Care",
    price: "$55.00",
    image: "/product-cleansing-oil.jpg",
  },
  {
    id: "4",
    name: "Silk Glow Moisturizer",
    category: "Skin Care",
    price: "$95.00",
    image: "/product-moisturizer.jpg",
  },
  {
    id: "5",
    name: "Rose Infusion Body Mist",
    category: "Body & Hair",
    price: "$45.00",
    image: "/product-body-mist.jpg",
  },
  {
    id: "6",
    name: "Charcoal Purifying Mask",
    category: "Skin Care",
    price: "$65.00",
    image: "/product-purifying-mask.jpg",
  },
]

export default async function ProductsPage(props: {
  searchParams: Promise<{ category?: string }>
}) {
  const searchParams = await props.searchParams
  const activeCategory = searchParams.category || "All"

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">Our Products</h1>
            <p className="text-muted-foreground text-lg">
              Curated beauty collections inspired by nature and refined by science.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === activeCategory ? "default" : "ghost"}
                size="sm"
                className="rounded-none uppercase text-[10px] tracking-widest px-4"
                asChild
              >
                <Link href={`/products${cat === "All" ? "" : `?category=${encodeURIComponent(cat)}`}`}>{cat}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-1 max-w-md justify-end">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-muted/50 border-none h-10 pl-10 pr-4 text-xs focus:ring-1 ring-primary outline-none"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-none bg-transparent">
              <Filter className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group space-y-4">
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <Button className="w-full rounded-none bg-white text-black hover:bg-white/90 uppercase text-[10px] tracking-widest">
                      Quick View
                    </Button>
                  </div>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-sm font-medium">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button
              variant="outline"
              className="rounded-none px-12 h-12 uppercase text-xs tracking-widest bg-transparent"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
