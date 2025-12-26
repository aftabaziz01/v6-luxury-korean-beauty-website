"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Search, Globe, Menu } from "lucide-react"

const companyItems = [
  { title: "Greetings", href: "/company/greetings" },
  { title: "Company History", href: "/company/history" },
  { title: "Directions", href: "/company/directions" },
]

const businessItems = [
  { title: "Introduction", href: "/business/intro" },
  { title: "Paperette™", href: "/business/paperette" },
  { title: "Cosmetics", href: "/business/cosmetics" },
  { title: "Underwear", href: "/business/underwear" },
  { title: "Video Commerce", href: "/business/video-commerce" },
  { title: "DuPont™", href: "/business/dupont" },
  { title: "SafeSPEC™", href: "/business/safespec" },
  { title: "Carbon fiber", href: "/business/carbon-fiber" },
  { title: "Food Distribution", href: "/business/food" },
]

const productItems = [
  { title: "Cosmetics", href: "/products/cosmetics" },
  { title: "Underwear", href: "/products/underwear" },
]

const customerItems = [
  { title: "Announcement", href: "/customer/announcement" },
  { title: "FAQ", href: "/customer/faq" },
]

const communityItems = [
  { title: "Partnership", href: "/community/partnership" },
  { title: "Inquiry", href: "/community/inquiry" },
  { title: "Free bulletin board", href: "/community/board" },
]

const archiveItems = [
  { title: "Activity", href: "/archive/activity" },
  { title: "News", href: "/archive/news" },
  { title: "Media", href: "/archive/media" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 py-4 shadow-sm" : "bg-transparent py-8",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter uppercase text-neutral-900 group-hover:text-primary transition-colors">
            THE B·O·U Co.
          </span>
        </Link>

        <div className="hidden xl:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* COMPANY */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-4">
                    {companyItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* BUSINESS AREA */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Business Area
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-6 grid-cols-2">
                    {businessItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* PRODUCT */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-4">
                    {productItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* CUSTOMER */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Customer
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-4">
                    {customerItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* COMMUNITY */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-1 p-4">
                    {communityItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ARCHIVE */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold text-[13px] uppercase tracking-[0.15em] text-neutral-800 hover:text-primary transition-colors">
                  Archive
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-4">
                    {archiveItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-sm p-3 text-xs font-medium uppercase tracking-widest leading-none no-underline outline-none transition-colors hover:bg-neutral-50 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="hover:bg-neutral-100 rounded-full transition-colors">
            <Search className="size-5 text-neutral-600" />
          </Button>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Globe className="size-4 text-neutral-400 group-hover:text-primary transition-colors" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
              Kor
            </span>
          </div>
          <Button variant="ghost" size="icon" className="xl:hidden">
            <Menu className="size-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
