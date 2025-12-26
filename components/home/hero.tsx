import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with subtle parallax feel */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/luxury-korean-cosmetics-hero-background.jpg')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="container relative z-20 mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block text-white/80 uppercase tracking-[0.3em] text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Lumière Beauty Collection
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Essence of <br /> Timeless Elegance
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Discover the harmony of traditional Korean wisdom and modern scientific innovation for your skin's true
            radiance.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button
              size="lg"
              className="rounded-none px-10 h-14 bg-white text-black hover:bg-white/90 uppercase text-xs tracking-widest transition-all"
            >
              Explore Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 h-14 border-white text-white hover:bg-white/10 uppercase text-xs tracking-widest transition-all bg-transparent"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
