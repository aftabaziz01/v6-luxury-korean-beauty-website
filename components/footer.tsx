import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold tracking-widest uppercase mb-6 block">
              Lumière
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Experience the pinnacle of Korean luxury beauty and innovation. Dedicated to creating services that
              inspire.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="size-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/company/greetings" className="text-sm text-muted-foreground hover:text-foreground">
                  Greetings
                </Link>
              </li>
              <li>
                <Link href="/company/history" className="text-sm text-muted-foreground hover:text-foreground">
                  History
                </Link>
              </li>
              <li>
                <Link href="/company/organization" className="text-sm text-muted-foreground hover:text-foreground">
                  Organization
                </Link>
              </li>
              <li>
                <Link href="/company/location" className="text-sm text-muted-foreground hover:text-foreground">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Business</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/business/intro" className="text-sm text-muted-foreground hover:text-foreground">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/business/carbon-fibre" className="text-sm text-muted-foreground hover:text-foreground">
                  Carbon Fibre
                </Link>
              </li>
              <li>
                <Link href="/business/new-energy" className="text-sm text-muted-foreground hover:text-foreground">
                  New Energy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Make Up
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  Body & Hair
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Customer</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/customer" className="text-sm text-muted-foreground hover:text-foreground">
                  Notice
                </Link>
              </li>
              <li>
                <Link href="/customer" className="text-sm text-muted-foreground hover:text-foreground">
                  Inquiry
                </Link>
              </li>
              <li>
                <Link href="/customer" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">© 2025 LUMIÈRE Co., Ltd. All rights reserved.</p>
            <p className="text-xs text-muted-foreground max-w-2xl">
              Seoul, South Korea | CEO: Lumière Kim | Registration: 123-45-67890 | Tel: +82 2-123-4567
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
