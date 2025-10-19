import { Star } from "lucide-react"

type FilamentRating = {
  durability: number
  strength: number
  uvResistance: number
  heatResistance: number
  flexibility: number
  price: number // Higher stars = more affordable
}

type Filament = {
  name: string
  description: string
  useCases: string[]
  ratings: FilamentRating
  color: "primary" | "secondary"
  promo?: boolean
}

const filaments: Filament[] = [
  {
    name: "PLA (Polylactic Acid)",
    description:
      "The most popular 3D printing filament. Easy to print, biodegradable, and produces high-quality prints with minimal warping. Perfect for beginners and general-purpose printing.",
    useCases: [
      "Prototypes and concept models",
      "Decorative items and figurines",
      "Educational projects",
      "Indoor display pieces",
      "Low-stress mechanical parts",
    ],
    ratings: {
      durability: 3,
      strength: 3,
      uvResistance: 2,
      heatResistance: 2,
      flexibility: 1,
      price: 5,
    },
    color: "primary",
    promo: true,
  },
  {
    name: "PETG (Polyethylene Terephthalate Glycol)",
    description:
      "Combines the ease of PLA with the durability of ABS. Chemical resistant, food-safe, and weather-resistant. Excellent layer adhesion and minimal warping.",
    useCases: [
      "Functional mechanical parts",
      "Outdoor applications",
      "Food containers and kitchen items",
      "Protective cases and enclosures",
      "Water-resistant components",
    ],
    ratings: {
      durability: 4,
      strength: 4,
      uvResistance: 3,
      heatResistance: 3,
      flexibility: 2,
      price: 4,
    },
    color: "secondary",
    promo: true,
  },
  {
    name: "TPU (Thermoplastic Polyurethane)",
    description:
      "Flexible and elastic filament with excellent abrasion resistance. Rubber-like properties make it perfect for parts that need to bend or compress.",
    useCases: [
      "Phone cases and protective covers",
      "Gaskets and seals",
      "Flexible hinges and joints",
      "Wearable items and straps",
      "Shock-absorbing components",
    ],
    ratings: {
      durability: 5,
      strength: 3,
      uvResistance: 4,
      heatResistance: 3,
      flexibility: 5,
      price: 3,
    },
    color: "primary",
  },
  {
    name: "ABS (Acrylonitrile Butadiene Styrene)",
    description:
      "Strong and durable engineering plastic. Higher temperature resistance than PLA. Requires heated bed and good ventilation. Can be post-processed with acetone.",
    useCases: [
      "Automotive parts and components",
      "Functional prototypes",
      "Enclosures for electronics",
      "Tools and jigs",
      "High-temperature applications",
    ],
    ratings: {
      durability: 4,
      strength: 4,
      uvResistance: 2,
      heatResistance: 4,
      flexibility: 2,
      price: 4,
    },
    color: "secondary",
  },
  {
    name: "ASA (Acrylonitrile Styrene Acrylate)",
    description:
      "Similar to ABS but with superior UV and weather resistance. Excellent for outdoor applications. Maintains color and mechanical properties in sunlight.",
    useCases: [
      "Outdoor signage and displays",
      "Garden and patio accessories",
      "Automotive exterior parts",
      "Weather-resistant enclosures",
      "Marine applications",
    ],
    ratings: {
      durability: 5,
      strength: 4,
      uvResistance: 5,
      heatResistance: 4,
      flexibility: 2,
      price: 3,
    },
    color: "primary",
  },
  {
    name: "Nylon (Polyamide)",
    description:
      "Extremely strong and durable with excellent wear resistance. Flexible yet tough. Absorbs moisture, requiring dry storage. Professional-grade material.",
    useCases: [
      "Gears and mechanical parts",
      "Hinges and living hinges",
      "Wear-resistant components",
      "Functional prototypes",
      "Industrial applications",
    ],
    ratings: {
      durability: 5,
      strength: 5,
      uvResistance: 3,
      heatResistance: 4,
      flexibility: 4,
      price: 2,
    },
    color: "secondary",
  },
  {
    name: "Polycarbonate (PC)",
    description:
      "Engineering-grade thermoplastic with exceptional strength and heat resistance. Transparent and impact-resistant. Requires high printing temperatures.",
    useCases: [
      "Safety equipment and shields",
      "High-temperature applications",
      "Transparent parts and lenses",
      "Structural components",
      "Industrial tooling",
    ],
    ratings: {
      durability: 5,
      strength: 5,
      uvResistance: 4,
      heatResistance: 5,
      flexibility: 2,
      price: 2,
    },
    color: "primary",
  },
  {
    name: "Silk PLA",
    description:
      "Modified PLA with metallic or glossy finish. Creates stunning visual effects with a smooth, shiny surface. Same printing characteristics as standard PLA.",
    useCases: [
      "Decorative vases and art pieces",
      "Jewelry and accessories",
      "Awards and trophies",
      "Display models",
      "Aesthetic prototypes",
    ],
    ratings: {
      durability: 3,
      strength: 3,
      uvResistance: 2,
      heatResistance: 2,
      flexibility: 1,
      price: 4,
    },
    color: "secondary",
  },
]

const StarRating = ({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
      ))}
    </div>
  )
}

export default function FilamentGuidePage() {
  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-5xl md:text-6xl text-foreground mb-4">Filament Guide</h1>
          <p className="font-mono text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guide to 3D printing filaments. Compare properties, use cases, and find the perfect material
            for your project.
          </p>
        </div>

        {/* Filament Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filaments.map((filament, index) => {
            const isPrimary = filament.color === "primary"

            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-2xl p-6 hover:shadow-xl transition-all relative overflow-hidden group"
              >
                {/* Decorative Corner Elements */}
                <div
                  className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${
                    isPrimary ? "border-primary" : "border-secondary"
                  }`}
                />
                <div
                  className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${
                    isPrimary ? "border-primary" : "border-secondary"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${
                    isPrimary ? "border-primary" : "border-secondary"
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${
                    isPrimary ? "border-primary" : "border-secondary"
                  }`}
                />

                {/* Promo Badge */}
                {filament.promo && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-background font-pixel text-xs animate-pulse">
                      ON SPECIAL
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h2 className={`font-pixel text-2xl ${isPrimary ? "text-primary" : "text-secondary"}`}>
                    {filament.name}
                  </h2>

                  {/* Description */}
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{filament.description}</p>

                  {/* Use Cases */}
                  <div>
                    <h3 className="font-pixel text-base text-foreground mb-2">Common Use Cases:</h3>
                    <ul className="space-y-1">
                      {filament.useCases.map((useCase, i) => (
                        <li key={i} className="font-mono text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`${isPrimary ? "text-primary" : "text-secondary"} mt-1`}>•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ratings */}
                  <div className="border-t-2 border-border pt-4">
                    <h3 className="font-pixel text-base text-foreground mb-3">Material Properties:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">Durability</div>
                        <StarRating rating={filament.ratings.durability} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">Strength</div>
                        <StarRating rating={filament.ratings.strength} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">UV Resistance</div>
                        <StarRating rating={filament.ratings.uvResistance} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">Heat Resistance</div>
                        <StarRating rating={filament.ratings.heatResistance} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">Flexibility</div>
                        <StarRating rating={filament.ratings.flexibility} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">Affordability</div>
                        <StarRating rating={filament.ratings.price} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-card border-2 border-border rounded-2xl p-8">
          <h2 className="font-pixel text-3xl text-foreground mb-4">Need Help Choosing?</h2>
          <p className="font-mono text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which filament is right for your project? Our team can help you select the perfect material based
            on your specific requirements.
          </p>
          <a
            href="/start-project"
            className="inline-block px-8 py-3 rounded-full bg-primary text-background font-pixel text-lg hover:scale-105 transition-all border-2 border-primary shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}
