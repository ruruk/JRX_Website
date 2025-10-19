import { Rocket, Ruler, ShoppingBag } from "lucide-react"

const ctas = [
  {
    icon: Rocket,
    title: "START PRINTING NOW",
    description: "Upload your STL files and get instant quotes",
    buttonText: "Upload Files",
    color: "primary",
  },
  {
    icon: Ruler,
    title: "REQUEST DESIGN SERVICES",
    description: "Let us bring your product ideas to life",
    buttonText: "Get Started",
    color: "secondary",
  },
  {
    icon: ShoppingBag,
    title: "VIEW PRODUCT CATALOG",
    description: "Browse our collection of ready-made items",
    buttonText: "Shop Now",
    color: "primary",
  },
]

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => {
            const Icon = cta.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${
                  cta.color === "primary" ? "border-primary bg-primary/5" : "border-secondary bg-secondary/5"
                } hover:pixel-glow transition-all`}
              >
                <div className="flex flex-col h-full gap-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full ${
                      cta.color === "primary" ? "bg-primary" : "bg-secondary"
                    } flex items-center justify-center`}
                  >
                    <Icon className="h-8 w-8 text-background" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-pixel text-foreground text-3xl">{cta.title}</h3>
                    <p className="font-mono text-base text-muted-foreground">{cta.description}</p>
                  </div>
                  <button
                    className={`w-full py-3 rounded-full ${
                      cta.color === "primary"
                        ? "bg-primary hover:pixel-glow-red"
                        : "bg-secondary hover:pixel-glow-purple"
                    } text-background font-pixel transition-all text-2xl`}
                  >
                    {cta.buttonText}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
