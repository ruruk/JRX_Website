"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { ProductCard, type Product } from "@/components/product-card";

// SEO optimized products page with comprehensive metadata and structured data;

const categories = [
  { id: "all", name: "All Products", count: 48 },
  { id: "pla", name: "PLA Prints", count: 18 },
  { id: "petg", name: "PETG Prints", count: 12 },
  { id: "abs", name: "ABS Prints", count: 8 },
  { id: "design-files", name: "Design Files", count: 10 },
];

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
    rating: 4,
    reviews: 150,
    sales: 300,
  },
  {
    id: 2,
    name: "Cable Organizer Set",
    price: "R89",
    badge: "HOT",
    image: "/cable-organizer.jpg",
    category: "pla",
    type: "3d-print",
    color: "primary",
    rating: 3,
    reviews: 100,
    sales: 200,
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
    rating: 5,
    reviews: 200,
    sales: 100,
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
    rating: 2,
    reviews: 50,
    sales: 150,
  },
  {
    id: 5,
    name: "Modular Drawer System STL",
    price: "R79",
    badge: "DIGITAL",
    image: "/modular-drawer-system-3d-model.jpg",
    category: "design-files",
    type: "stl-file",
    color: "primary",
    rating: 4,
    reviews: 120,
    sales: 250,
  },
  {
    id: 6,
    name: "Wall Mount Bracket",
    price: "R129",
    badge: "NEW",
    image: "/wall-mount-bracket-3d-print.jpg",
    category: "abs",
    type: "3d-print",
    color: "primary",
    rating: 5,
    reviews: 180,
    sales: 80,
  },
  {
    id: 7,
    name: "Headphone Stand STL",
    price: "R59",
    badge: "POPULAR",
    image: "/headphone-stand-3d-model.jpg",
    category: "design-files",
    type: "stl-file",
    color: "secondary",
    rating: 3,
    reviews: 90,
    sales: 110,
  },
  {
    id: 8,
    name: "Tool Holder",
    price: "R169",
    badge: "HOT",
    image: "/tool-holder-3d-print.jpg",
    category: "petg",
    type: "3d-print",
    color: "secondary",
    rating: 4,
    reviews: 130,
    sales: 70,
  },
  {
    id: 9,
    name: "Arduino Case",
    price: "R99",
    badge: "NEW",
    image: "/arduino-case.jpg",
    category: "abs",
    type: "electronic",
    color: "primary",
    rating: 5,
    reviews: 170,
    sales: 90,
  },
  {
    id: 10,
    name: "LED Mount Kit",
    price: "R129",
    badge: "HOT",
    image: "/led-mount.jpg",
    category: "petg",
    type: "electronic",
    color: "secondary",
    rating: 4,
    reviews: 140,
    sales: 60,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchesPriceRange =
      Number.parseInt(product.price.replace(/\D/g, "")) >= priceRange[0] &&
      Number.parseInt(product.price.replace(/\D/g, "")) <= priceRange[1];
    return matchesCategory && matchesSearch && matchesType && matchesPriceRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          Number.parseInt(a.price.replace(/\D/g, "")) -
          Number.parseInt(b.price.replace(/\D/g, ""))
        );
      case "price-high":
        return (
          Number.parseInt(b.price.replace(/\D/g, "")) -
          Number.parseInt(a.price.replace(/\D/g, ""))
        );
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-background pt-10">
      {/* SEO structured data for products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "3D Printed Products & Design Files",
            description:
              "Browse our collection of 3D printed products, STL files, and custom designs",
            url: "https://jrxstudios.co.za/products",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                description: `Professional 3D printed ${product.name.toLowerCase()}`,
                image: `https://jrxstudios.co.za${product.image}`,
                offers: {
                  "@type": "Offer",
                  price: product.price.replace("R", ""),
                  priceCurrency: "ZAR",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "JRX Studios",
                  },
                },
                brand: {
                  "@type": "Brand",
                  name: "JRX Studios",
                },
                category: product.category,
              })),
            },
          }),
        }}
      />

      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <div className="sticky top-[104px] z-30 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all font-pixel text-lg py-1"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </button>
              <p className="font-mono text-sm text-muted-foreground hidden md:block">
                {sortedProducts.length} products
              </p>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 rounded-full border-2 border-border bg-card text-foreground font-pixel cursor-pointer hover:border-primary transition-all text-base"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside
            className={`
              w-80 flex-shrink-0 bg-background
              lg:sticky lg:top-[170px] lg:self-start lg:h-[calc(100vh-170px)] lg:overflow-y-auto
              fixed top-0 left-0 h-full z-50 pt-[104px] px-6 overflow-y-auto lg:pt-0 lg:px-0 lg:border-r lg:border-border lg:pr-6
              transition-transform duration-300 ease-out
              ${
                isFilterOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }
            `}
          >
            <button
              onClick={() => setIsFilterOpen(false)}
              className="lg:hidden absolute top-6 right-6 p-2 rounded-full border-2 border-border hover:border-primary text-muted-foreground hover:text-primary transition-all mt-9"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6 pt-8 lg:pt-0 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-pixel text-2xl text-foreground">FILTERS</h2>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTypes([]);
                    setPriceRange([0, 500]);
                  }}
                  className="font-mono text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-pixel text-lg text-foreground mb-3">
                  CATEGORY
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg border-2 font-mono text-sm transition-all ${
                          isActive
                            ? "bg-primary/10 border-primary text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-xs">{category.count}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-pixel text-lg text-foreground mb-3">
                  PRODUCT TYPE
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "3d-print", label: "3D Printed", icon: "🖨️" },
                    { id: "stl-file", label: "STL Files", icon: "📁" },
                    { id: "handcrafted", label: "Handcrafted", icon: "✋" },
                    { id: "electronic", label: "Electronics", icon: "⚡" },
                  ].map((type) => {
                    const isSelected = selectedTypes.includes(type.id);
                    return (
                      <button
                        key={type.id}
                        onClick={() => toggleType(type.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg border-2 font-mono text-sm transition-all ${
                          isSelected
                            ? "bg-secondary/10 border-secondary text-secondary"
                            : "border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-pixel text-lg text-foreground mb-3">
                  PRICE RANGE
                </h3>
                <div className="px-4 py-3 rounded-lg border-2 border-border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm text-muted-foreground">
                      R{priceRange[0]}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      R{priceRange[1]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, Number.parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-pixel text-lg text-foreground mb-3">
                  QUICK FILTERS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["BESTSELLER", "NEW", "HOT", "TRENDING"].map((badge) => (
                    <button
                      key={badge}
                      className="px-3 py-1 rounded-full border-2 border-border text-muted-foreground hover:border-primary hover:text-primary font-pixel text-xs transition-all"
                    >
                      {badge}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <header className="mb-8">
              <h1 className="font-pixel text-5xl md:text-6xl text-foreground mb-3">
                PRODUCTS
              </h1>
              <p className="font-mono text-lg text-muted-foreground">
                Browse our collection of 3D printed items and design files.
                Professional quality products made with PLA, PETG, ABS, and TPU
                materials.
              </p>
            </header>

            <section aria-label="Product catalog">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <article key={product.id} className="product-item">
                    <ProductCard
                      product={product}
                      onClick={() =>
                        console.log("[v0] Product clicked:", product.name)
                      }
                    />
                  </article>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div
                  className="text-center py-16"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-pixel text-2xl text-muted-foreground mb-2">
                    No products found
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    Try adjusting your filters
                  </p>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
