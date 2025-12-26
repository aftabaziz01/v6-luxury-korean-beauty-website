import { Quote } from "lucide-react"

export default function GreetingsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 grayscale-[20%] transition-transform duration-10000 hover:scale-110"
          style={{ backgroundImage: "url('/company-greetings-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/10 z-10" />
        <div className="container relative z-20 mx-auto px-6 text-center text-white">
          <span className="inline-block uppercase tracking-[0.6em] text-[10px] font-bold mb-6 opacity-70">
            Company / Greetings
          </span>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight mb-4">Greetings</h1>
          <p className="text-sm uppercase tracking-[0.4em] font-light opacity-60">The Beginning of the Unique</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block">
                  An export specialist
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-neutral-900">
                  PREMIUM <br />
                  <span className="italic text-neutral-400">GLOBAL LEADER!</span>
                </h2>
                <div className="w-16 h-px bg-primary/40" />
              </div>

              <div className="lg:col-span-7 space-y-12">
                <div className="relative">
                  <Quote className="absolute -left-8 -top-8 size-16 text-neutral-50 opacity-10 rotate-180" />
                  <p className="text-xl md:text-2xl font-serif leading-relaxed text-neutral-700 italic">
                    "We will create value to effectively respond to the diverse needs and rapid changes in the beauty
                    industry market, and grow into a specialized company through continuous export growth."
                  </p>
                </div>

                <div className="space-y-8 text-neutral-500 text-lg leading-[1.8] font-light">
                  <p>
                    We are constantly researching and developing solutions for beauty product distribution, wholesale
                    supply, and export. Currently, we collaborate with numerous domestic and international companies
                    through online shopping malls, B2C channels, retail beauty and general products, and provide
                    consulting and supply services for automotive carbon fiber.
                  </p>
                  <p>
                    We promise to continue to contribute to Korea's e-business industry with a creative mindset and a
                    commitment to growing together with our customers.
                  </p>
                </div>

                <div className="pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="space-y-2 text-center md:text-left">
                    <p className="text-2xl font-serif text-neutral-900 tracking-tight">THE B·O·U Co., Ltd.</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">
                      Export Excellence & Innovation
                    </p>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/5 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative border-2 border-neutral-900 rounded-full p-8 flex flex-col items-center justify-center text-center w-40 h-40">
                      <span className="text-[8px] font-bold uppercase tracking-widest mb-1">THE B·O·U</span>
                      <span className="text-[6px] uppercase tracking-[0.2em] mb-2 opacity-60">Company</span>
                      <div className="h-px w-8 bg-neutral-900 mb-2" />
                      <span className="text-[8px] font-serif italic">Unique</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
