import Image from "next/image"
import { ShoppingCart, Star, TrendingUp, Flame } from "lucide-react"

const products = [
  {
    name: "Custom Phone Stand",
    price: "R150",
    image: "/3d-printed-phone-stand.jpg",
    badge: "BESTSELLER",
    rating: 5,
    sales: "120+ sold",
  },
  {
    name: "Desk Organizer",
    price: "R250",
    image: "/3d-printed-desk-organizer.jpg",
    badge: "NEW",
    rating: 5,
    sales: "45+ sold",
  },
  {
    name: "Cable Management",
    price: "R80",
    image: "/3d-printed-cable-clips.jpg",
    badge: "HOT",
    rating: 4,
    sales: "200+ sold",
  },
  {
    name: "Plant Pot",
    price: "R120",
    image: "/3d-printed-geometric-planter.jpg",
    badge: "TRENDING",
    rating: 5,
    sales: "85+ sold",
  },
]

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="font-pixel text-secondary text-lg">SHOP NOW</span>
          </div>
          <h2 className="font-pixel text-4xl md:text-6xl text-foreground">FEATURED PRODUCTS</h2>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality 3D printed items ready to ship
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card border-2 border-border hover:border-secondary transition-all overflow-hidden hover:pixel-glow-purple relative"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/90 backdrop-blur border border-secondary">
                  {product.badge === "HOT" && <Flame className="h-3 w-3 text-background" />}
                  {product.badge === "TRENDING" && <TrendingUp className="h-3 w-3 text-background" />}
                  <span className="font-pixel text-xs text-background">{product.badge}</span>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-pixel text-foreground mb-1 text-3xl">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < product.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{product.sales}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl text-secondary font-bold">{product.price}</span>
                  <button className="p-2 rounded-lg bg-secondary text-background hover:pixel-glow-purple transition-all">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-secondary text-background font-pixel hover:pixel-glow-purple transition-all border-2 border-secondary text-2xl">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}
