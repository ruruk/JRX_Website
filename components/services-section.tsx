import { Printer, Lightbulb, Code, Cpu, Zap, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Printer,
    title: "FDM 3D PRINTING",
    description: "Small or large scale production with premium materials",
    badge: "POPULAR",
    features: ["PLA, PETG, ABS", "0.1mm precision", "Fast delivery"],
  },
  {
    icon: Lightbulb,
    title: "PRODUCT DESIGN",
    description: "Industrial design from concept to manufacturing",
    badge: "PRO",
    features: ["CAD modeling", "Prototyping", "Manufacturing"],
  },
  {
    icon: Code,
    title: "WEB & MOBILE DEV",
    description: "Full-stack applications built with modern tech",
    badge: "NEW",
    features: ["React/Next.js", "Mobile apps", "API development"],
  },
  {
    icon: Cpu,
    title: "ELECTRONICS & IoT",
    description: "Custom electronics and IoT prototyping",
    badge: "CUSTOM",
    features: ["PCB design", "IoT devices", "Embedded systems"],
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-pixel text-primary text-lg">WHAT WE DO</span>
          </div>
          <h2 className="font-pixel text-4xl md:text-6xl text-foreground">OUR SERVICES</h2>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            From digital design to physical products, we bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all hover:pixel-glow-red relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-lg bg-primary/20 border border-primary text-primary font-pixel text-xs">
                    {service.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center text-primary group-hover:pixel-glow-red transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-pixel text-foreground text-2xl">{service.title}</h3>
                  <p className="font-mono text-muted-foreground leading-relaxed text-sm">{service.description}</p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        <span className="font-mono text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
