"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Upload, FileText, Sparkles } from "lucide-react"

const slides = [
  {
    title: "PLA WHITE ON SPECIAL",
    subtitle: "Premium quality filament at unbeatable prices",
    cta: "Shop Now",
    secondaryCta: "View Details",
    icon: Sparkles,
    badge: "50% OFF",
    features: ["Fast Shipping", "Premium Quality", "Best Price"],
  },
  {
    title: "PRINT WITH US",
    subtitle: "Fast turnaround • Affordable • High quality",
    cta: "Upload STL",
    secondaryCta: "Learn More",
    icon: Upload,
    badge: "HOT",
    features: ["24hr Turnaround", "Any Size", "Pro Finish"],
  },
  {
    title: "PROTOTYPE YOUR PRODUCT",
    subtitle: "From concept to reality in days, not weeks",
    cta: "Get a Quote",
    secondaryCta: "See Examples",
    icon: FileText,
    badge: "NEW",
    features: ["Expert Design", "Rapid Proto", "Full Support"],
  },
]

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[700px] overflow-hidden bg-background">
      {/* Animated pixel grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#FF004C 1px, transparent 1px), linear-gradient(90deg, #FF004C 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-6 h-full flex items-center justify-center relative">
              <div className="relative max-w-5xl w-full">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-primary" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-primary" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-primary" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-primary" />

                {/* Main content card */}
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-12 md:p-16">
                  {/* Glowing badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-primary border-2 border-primary text-background font-pixel text-sm pixel-glow-red animate-pulse">
                      {slide.badge}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10 text-center">
                    {/* Icon with animated glow */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse" />
                      <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/20 border-4 border-primary pixel-glow-red">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-6 max-w-3xl">
                      <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tight">
                        {slide.title}
                      </h1>
                      <p className="font-mono text-xl md:text-2xl text-muted-foreground">{slide.subtitle}</p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        {slide.features.map((feature, i) => (
                          <div
                            key={i}
                            className="px-4 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary font-mono text-sm"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md">
                      <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-background font-pixel text-base hover:pixel-glow-red hover:scale-105 transition-all border-2 border-primary">
                        {slide.cta}
                      </button>
                      <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent border-2 border-primary text-primary font-pixel text-base hover:bg-primary hover:text-background transition-all">
                        {slide.secondaryCta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-xl bg-card/90 backdrop-blur border-2 border-primary/50 hover:bg-primary hover:border-primary hover:pixel-glow-red transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary hover:text-background transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-xl bg-card/90 backdrop-blur border-2 border-primary/50 hover:bg-primary hover:border-primary hover:pixel-glow-red transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary hover:text-background transition-colors" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all border-2 ${
              index === currentSlide
                ? "bg-primary border-primary w-12 pixel-glow-red"
                : "bg-transparent border-primary/50 w-3 hover:border-primary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
