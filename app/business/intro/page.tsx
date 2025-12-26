import { Globe, Package, Zap, ShieldCheck, ShoppingCart, TrendingUp, Anchor, Layout } from "lucide-react"

const businessCategories = [
  {
    icon: <Sparkles className="size-6" />,
    title: "뷰티 (Beauty)",
    desc: "Exporting localized beauty products with exceptional quality to global markets.",
  },
  {
    icon: <Package className="size-6" />,
    title: "언더웨어 (Underware)",
    desc: "BYC has led the underwear industry for 70 years, exporting to over 70 countries.",
  },
  {
    icon: <Zap className="size-6" />,
    title: "탄소섬유 (Carbon Fiber)",
    desc: "Partnering with G.Angeloni to supply Korea's first mass-produced carbon fiber.",
  },
  {
    icon: <Globe className="size-6" />,
    title: "수출 (Export)",
    desc: "Exporting and importing a diverse range of products for global clients.",
  },
  {
    icon: <ShoppingCart className="size-6" />,
    title: "비디오커머스 (Video Commerce)",
    desc: "Leveraging e-commerce and MCN platforms for digital commerce synergy.",
  },
  {
    icon: <TrendingUp className="size-6" />,
    title: "마케팅 (Marketing)",
    desc: "Selecting and managing products across 40+ online and offline distribution channels.",
  },
  {
    icon: <Anchor className="size-6" />,
    title: "바라문디 (Barramundi)",
    desc: "One of the world's largest eco-friendly Barramundi aquaculture companies.",
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: "듀폰 보호복 (Fabric Protection)",
    desc: "Innovating and providing safe industrial fabric solutions for worker safety.",
  },
  {
    icon: <Layout className="size-6" />,
    title: "타이벡 디자인 (Tyvek Design)",
    desc: "Eco-friendly, waterproof, and breathable high-density polyethylene designs.",
  },
]

import { Sparkles } from "lucide-react"

export default function BusinessIntroPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-neutral-900 z-10" />
          <img
            src="/business-intro-hero.jpg"
            alt="Business Background"
            className="w-full h-full object-cover opacity-50 grayscale"
          />
        </div>
        <div className="container relative z-20 mx-auto px-6 text-center">
          <span className="inline-block uppercase tracking-[0.5em] text-[10px] font-bold mb-6 opacity-60">
            Business Area / Introduction
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4">Business introduction</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light opacity-50">The Beginning of the Unique</p>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24 space-y-6">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] block">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">사업 영역</h2>
            <div className="w-12 h-px bg-neutral-200" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-neutral-50/50 rounded-3xl -rotate-1 scale-[1.02] z-0" />
            <div className="relative bg-white border border-neutral-100 rounded-3xl p-12 lg:p-20 shadow-2xl shadow-neutral-200/50 z-10">
              <img
                src="/images/screenshot-20from-202025-12-25-2018-58-27.png"
                alt="Global Network Map"
                className="w-full h-auto grayscale-[80%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 md:py-48 bg-neutral-50/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {businessCategories.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-12 border border-neutral-100 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/50"
              >
                <div className="size-14 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-4 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">{item.desc}</p>
                <div className="mt-8 pt-8 border-t border-neutral-50 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-300 group-hover:text-primary transition-colors">
                  Learn More <span className="text-lg leading-none">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
