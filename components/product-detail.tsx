"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingCart, Sparkles } from "lucide-react"
import { ProductCard, type Product } from "./product-card"
import Image from "next/image"
import { useCart } from "@/context/cart-context"

interface FilamentOption {
  type: string
  colors: { name: string; hex: string; inStock: boolean; onPromo?: boolean }[]
}

const filamentGuide = [
  {
    type: "PLA",
    description: "Perfect for prototypes, decorative items, and general-purpose prints. Easy to print, biodegradable.",
    uses: ["Prototypes", "Decorative items", "Low-stress parts", "Beginner-friendly"],
  },
  {
    type: "PETG",
    description: "Strong, durable, and chemical-resistant. Great for functional parts and outdoor use.",
    uses: ["Functional parts", "Outdoor items", "Food-safe containers", "Mechanical parts"],
  },
  {
    type: "ABS",
    description: "High strength and heat resistance. Ideal for automotive and engineering applications.",
    uses: ["Automotive parts", "Enclosures", "High-temp applications", "Durable tools"],
  },
  {
    type: "TPU",
    description: "Flexible and elastic material. Perfect for phone cases, seals, and wearables.",
    uses: ["Phone cases", "Gaskets & seals", "Wearables", "Flexible hinges"],
  },
  {
    type: "Nylon",
    description: "Extremely strong and wear-resistant. Best for high-stress mechanical parts.",
    uses: ["Gears", "Bearings", "Hinges", "High-wear parts"],
  },
  {
    type: "ASA",
    description: "UV-resistant and weatherproof. Excellent for outdoor applications.",
    uses: ["Outdoor fixtures", "Garden items", "UV-exposed parts", "Automotive trim"],
  },
]

const filamentOptions: FilamentOption[] = [
  {
    type: "PLA",
    colors: [
      { name: "White", hex: "#FFFFFF", inStock: true, onPromo: true },
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Red", hex: "#EF4444", inStock: true },
      { name: "Blue", hex: "#3B82F6", inStock: true },
      { name: "Green", hex: "#10B981", inStock: false },
      { name: "Yellow", hex: "#F59E0B", inStock: true },
    ],
  },
  {
    type: "PETG",
    colors: [
      { name: "Clear", hex: "#E5E7EB", inStock: true },
      { name: "Black", hex: "#000000", inStock: true, onPromo: true },
      { name: "Blue", hex: "#3B82F6", inStock: true },
      { name: "Orange", hex: "#F97316", inStock: true },
    ],
  },
  {
    type: "Silk PLA",
    colors: [
      { name: "Gold", hex: "#FCD34D", inStock: true, onPromo: true },
      { name: "Silver", hex: "#D1D5DB", inStock: true },
      { name: "Copper", hex: "#EA580C", inStock: false },
    ],
  },
  {
    type: "TPU",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Clear", hex: "#E5E7EB", inStock: true },
      { name: "Red", hex: "#EF4444", inStock: false },
    ],
  },
  {
    type: "Nylon",
    colors: [
      { name: "Natural", hex: "#F3F4F6", inStock: true },
      { name: "Black", hex: "#000000", inStock: true },
    ],
  },
  {
    type: "ABS",
    colors: [
      { name: "White", hex: "#FFFFFF", inStock: true },
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Gray", hex: "#6B7280", inStock: true },
    ],
  },
  {
    type: "ASA",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "White", hex: "#FFFFFF", inStock: true },
      { name: "Gray", hex: "#6B7280", inStock: false },
    ],
  },
]

// Mock product data
const mockProduct = {
  id: "1",
  title: "Modular Desk Organizer",
  price: "R 249",
  type: "3D Printed",
  category: "Office & Desk",
  description:
    "A customizable modular desk organizer system with multiple compartments for pens, cables, and small accessories. Designed for maximum functionality and clean aesthetics.",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  defaultFilament: { type: "PLA", color: "White" },
  features: ["Modular design", "Multiple compartments", "Cable management", "Non-slip base"],
}

const relatedProducts: Product[] = [
  {
    id: 2,
    name: "Cable Management Clips",
    price: "R 89",
    image: "/placeholder.svg?height=400&width=400",
    type: "3d-print",
    category: "Office & Desk",
    color: "primary",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Phone Stand",
    price: "R 149",
    image: "/placeholder.svg?height=400&width=400",
    type: "3d-print",
    category: "Office & Desk",
    color: "secondary",
  },
  {
    id: 4,
    name: "Headphone Holder",
    price: "R 199",
    image: "/placeholder.svg?height=400&width=400",
    type: "handcrafted",
    category: "Office & Desk",
    color: "primary",
    badge: "HOT",
  },
  {
    id: 5,
    name: "Monitor Riser",
    price: "R 349",
    image: "/placeholder.svg?height=400&width=400",
    type: "3d-print",
    category: "Office & Desk",
    color: "secondary",
  },
]

export function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFilamentColor, setSelectedFilamentColor] = useState<{
    type: string
    color: string
    hex: string
    onPromo?: boolean
  }>({
    type: "PETG",
    color: "White",
    hex: "#FFFFFF",
    onPromo: true,
  })
  const [quantity, setQuantity] = useState(1)
  const [showFilamentGuide, setShowFilamentGuide] = useState(false)
  const [showAllFilaments, setShowAllFilaments] = useState(false)
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null)

  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const inStockFilaments = [
    {
      type: "PLA",
      colors: [
        { name: "Black", hex: "#000000", onPromo: false },
        { name: "White", hex: "#FFFFFF", onPromo: false },
      ],
    },
    {
      type: "PETG",
      colors: [
        { name: "Black", hex: "#000000", onPromo: false },
        { name: "White", hex: "#FFFFFF", onPromo: true }, // White PETG on special
      ],
    },
    {
      type: "TPU",
      colors: [
        { name: "Black", hex: "#000000", onPromo: false },
        { name: "White", hex: "#FFFFFF", onPromo: false },
      ],
    },
    {
      type: "ABS",
      colors: [
        { name: "Black", hex: "#000000", onPromo: false },
        { name: "White", hex: "#FFFFFF", onPromo: false },
      ],
    },
  ]

  const is3DPrinted = mockProduct.type === "3D Printed"

  const handleAddToCart = () => {
    addItem({
      id: mockProduct.id,
      title: mockProduct.title,
      price: Number.parseFloat(mockProduct.price.replace("R ", "")),
      image: mockProduct.images[0],
      quantity: quantity,
      filamentType: is3DPrinted ? selectedFilamentColor?.type : undefined,
      filamentColor: is3DPrinted ? selectedFilamentColor?.color : undefined,
      type: mockProduct.type,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="container mx-auto px-6 py-12">
        {/* Product Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-[104px] lg:self-start pt-2">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border bg-card">
              <Image
                src={mockProduct.images[selectedImage] || "/placeholder.svg"}
                alt={mockProduct.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div className="lg:sticky lg:top-[104px] lg:z-20 bg-background/95 backdrop-blur-sm p-4 rounded-xl border-b-2 border-border -mx-4 px-4">
              <div className="flex items-start justify-between mb-2">
                <h1 className="font-pixel text-4xl text-foreground">{mockProduct.title}</h1>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary text-primary font-pixel text-base">
                  {mockProduct.type}
                </span>
              </div>
              <p className="font-mono text-muted-foreground mb-4 text-base">{mockProduct.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-pixel text-5xl text-primary">{mockProduct.price}</span>
                <span className="font-mono text-sm text-muted-foreground">excl. VAT</span>
              </div>
            </div>

            {/* Features */}
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-pixel text-lg mb-3">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {mockProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 font-mono text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Filament Selection (only for 3D Printed items) */}
            {is3DPrinted && (
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-card border-2 border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-pixel text-lg">Select Filament & Color</h3>
                    {selectedFilamentColor?.onPromo && (
                      <span className="px-3 py-1 rounded-full bg-secondary text-background font-pixel text-xs flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        ON SPECIAL
                      </span>
                    )}
                  </div>

                  {/* In-Stock Filaments - Compact Row Layout */}
                  <div className="space-y-3">
                    {inStockFilaments.map((filament) => (
                      <div key={filament.type} className="flex items-center gap-3">
                        {/* Filament Type Label */}
                        <div className="w-16 font-pixel text-muted-foreground shrink-0 text-lg">{filament.type}</div>

                        {/* Color Bubbles */}
                        <div className="flex items-center gap-2">
                          {filament.colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() =>
                                setSelectedFilamentColor({
                                  type: filament.type,
                                  color: color.name,
                                  hex: color.hex,
                                  onPromo: color.onPromo,
                                })
                              }
                              className={`relative group transition-all group-hover:z-50 ${
                                selectedFilamentColor?.type === filament.type &&
                                selectedFilamentColor?.color === color.name
                                  ? "scale-110"
                                  : "hover:scale-105"
                              }`}
                              title={`${filament.type} - ${color.name}`}
                            >
                              {/* Circular Color Bubble */}
                              <div
                                className={`w-10 h-10 rounded-full border-2 shadow-md transition-all ${
                                  selectedFilamentColor?.type === filament.type &&
                                  selectedFilamentColor?.color === color.name
                                    ? "border-primary ring-2 ring-primary/30"
                                    : "border-border group-hover:border-primary/50"
                                }`}
                                style={{ backgroundColor: color.hex }}
                              />

                              {/* Promo Badge */}
                              {color.onPromo && (
                                <div className="absolute -top-1 -right-1">
                                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Current Selection Display */}
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-primary shadow-sm"
                        style={{ backgroundColor: selectedFilamentColor?.hex }}
                      />
                      <div className="flex-1">
                        <div className="font-pixel text-lg">
                          {selectedFilamentColor?.type} - {selectedFilamentColor?.color}
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">
                          {selectedFilamentColor?.onPromo ? "Special Price Applied ✨" : "In Stock & Ready"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filament Guide Accordion */}
                <button
                  onClick={() => setShowFilamentGuide(!showFilamentGuide)}
                  className="w-full p-4 rounded-xl bg-card border-2 border-border hover:border-primary transition-all flex items-center justify-between group"
                >
                  <span className="font-pixel text-lg">Choose the Right Filament</span>
                  {showFilamentGuide ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </button>

                {showFilamentGuide && (
                  <div className="space-y-2 animate-in slide-in-from-top-2">
                    {filamentGuide.map((guide) => (
                      <div key={guide.type} className="border-2 border-border rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedGuide(expandedGuide === guide.type ? null : guide.type)}
                          className="w-full p-4 bg-card hover:bg-muted/50 transition-colors flex items-center justify-between"
                        >
                          <span className="font-pixel text-base">{guide.type}</span>
                          {expandedGuide === guide.type ? (
                            <ChevronUp className="h-4 w-4 text-primary" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          )}
                        </button>
                        {expandedGuide === guide.type && (
                          <div className="p-4 bg-muted/30 border-t-2 border-border space-y-3">
                            <p className="font-mono text-sm text-muted-foreground">{guide.description}</p>
                            <div>
                              <div className="font-pixel text-sm mb-2">Best For:</div>
                              <div className="flex flex-wrap gap-2">
                                {guide.uses.map((use, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 font-mono text-xs"
                                  >
                                    {use}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setShowAllFilaments(!showAllFilaments)}
                  className="w-full p-4 rounded-xl bg-muted border-2 border-border hover:border-primary text-foreground font-pixel transition-all text-lg"
                >
                  {showAllFilaments ? "Hide Options" : "Need a Different Filament or Color?"}
                </button>

                {showAllFilaments && (
                  <div className="space-y-4 animate-in slide-in-from-top-2">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="font-mono text-sm text-muted-foreground mb-3">
                        Don't see what you need? We can source additional filament types and colors. Select from the
                        options below and we'll get back to you with pricing and lead time.
                      </p>
                    </div>
                    {filamentOptions.map((filament) => (
                      <div key={filament.type} className="p-4 rounded-xl bg-card border-2 border-border">
                        <div className="font-pixel text-base mb-3">{filament.type}</div>
                        <div className="flex flex-wrap gap-3">
                          {filament.colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() =>
                                setSelectedFilamentColor({
                                  type: filament.type,
                                  color: color.name,
                                  hex: color.hex,
                                  onPromo: color.onPromo,
                                })
                              }
                              className="relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-border hover:border-primary/50 hover:scale-105 transition-all"
                            >
                              {/* Circular Color Bubble */}
                              <div
                                className="w-12 h-12 rounded-full border-2 border-border shadow-md"
                                style={{ backgroundColor: color.hex }}
                              />
                              <div className="font-mono text-xs text-center">{color.name}</div>
                              <div className="absolute -top-1 -right-1">
                                <span className="px-1.5 py-0.5 rounded-full bg-muted border border-border font-pixel text-[9px]">
                                  REQUEST
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-pixel text-base">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-border hover:border-primary transition-all flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="w-16 h-10 rounded-lg border-2 border-border flex items-center justify-center font-pixel text-lg">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-border hover:border-primary transition-all flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-pixel hover:scale-[1.02] transition-all border-2 border-primary shadow-lg text-xl flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t-2 border-border pt-12">
          <h2 className="font-pixel text-3xl mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
