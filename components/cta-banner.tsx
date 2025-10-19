import { Zap, ArrowRight } from "lucide-react"

export const CTABanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border-2 border-primary bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative p-12 md:p-16 text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border-2 border-primary pixel-glow-red">
              <Zap className="h-10 w-10 text-primary" />
            </div>

            {/* Content */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="font-pixel text-4xl md:text-5xl text-foreground">READY TO START YOUR PROJECT?</h2>
              <p className="font-mono text-lg text-muted-foreground">
                From 3D printing to full product development, we've got you covered. Get a quote today and bring your
                ideas to life.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 rounded-full bg-primary text-background font-pixel text-base hover:pixel-glow-red hover:scale-105 transition-all border-2 border-primary flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent border-2 border-secondary text-secondary font-pixel text-base hover:bg-secondary hover:text-background transition-all">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="font-pixel text-3xl text-primary">500+</div>
                <div className="font-mono text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="space-y-1">
                <div className="font-pixel text-3xl text-secondary">24hr</div>
                <div className="font-mono text-sm text-muted-foreground">Turnaround</div>
              </div>
              <div className="space-y-1">
                <div className="font-pixel text-3xl text-primary">100%</div>
                <div className="font-mono text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
