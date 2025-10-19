import { TrendingUp } from "lucide-react"
import { ProductCard, type Product } from "./product-card"

const products: Product[] = [
  {
    id: 1,
    name: "Phone Stand Pro",
    price: "R149",
    badge: "BESTSELLER",
    image: "/3d-printed-phone-stand.jpg",
    category: "pla",
    type: "3d-print",
    color: "primary",
  },
  {
    id: 2,
    name: "Cable Organizer",
    price: "R89",
    badge: "HOT",
    image: "/cable-organizer.jpg",
    category: "pla",
    type: "3d-print",
    color: "primary",
  },
  {
    id: 3,
    name: "Desk Organizer",
    price: "R199",
    badge: "NEW",
    image: "/desk-organizer.jpg",
    category: "petg",
    type: "handcrafted",
    color: "secondary",
  },
  {
    id: 4,
    name: "Custom Keychain",
    price: "R45",
    badge: "TRENDING",
    image: "/custom-keychain.jpg",
    category: "pla",
    type: "3d-print",
    color: "secondary",
  },
]

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-pixel text-primary text-lg">FEATURED</span>
            </div>
            <h2 className="font-pixel text-3xl md:text-4xl text-foreground">POPULAR PRODUCTS</h2>
          </div>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary font-pixel text-sm hover:bg-primary hover:text-background transition-all">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
