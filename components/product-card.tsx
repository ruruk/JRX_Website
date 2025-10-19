"use client";

import { Download, Package, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

export type ProductType =
  | "3d-print"
  | "stl-file"
  | "handcrafted"
  | "electronic";

export interface Product {
  id: number;
  name: string;
  price: string;
  badge?: string;
  image: string;
  category: string;
  type: ProductType;
  color: "primary" | "secondary";
  rating?: number;
  reviews?: number;
  sales?: number;
}

const typeConfig = {
  "3d-print": {
    label: "3D Printed",
    icon: Package,
    gradient: "from-primary/20 to-primary/5",
  },
  "stl-file": {
    label: "STL File",
    icon: Download,
    gradient: "from-secondary/20 to-secondary/5",
  },
  handcrafted: {
    label: "Handcrafted",
    icon: Wrench,
    gradient: "from-primary/20 to-primary/5",
  },
  electronic: {
    label: "Electronic",
    icon: Cpu,
    gradient: "from-secondary/20 to-secondary/5",
  },
};

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const isPrimary = product.color === "primary";
  const config = typeConfig[product.type];
  const Icon = config.icon;

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div
        onClick={onClick}
        className={`group relative rounded-2xl border-2 overflow-hidden transition-all cursor-pointer bg-gradient-to-br ${
          isPrimary
            ? "border-primary/30 hover:border-primary hover:pixel-glow-red from-primary/5 to-transparent"
            : "border-secondary/30 hover:border-secondary hover:pixel-glow-purple from-secondary/5 to-transparent"
        }`}
      >
        {/* Decorative Corner Elements */}
        <div
          className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 rounded-tl-2xl transition-all ${
            isPrimary
              ? "border-primary/50 group-hover:border-primary"
              : "border-secondary/50 group-hover:border-secondary"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 rounded-br-2xl transition-all ${
            isPrimary
              ? "border-primary/50 group-hover:border-primary"
              : "border-secondary/50 group-hover:border-secondary"
          }`}
        />

        {/* Category Pill - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border-2 transition-all ${
              isPrimary
                ? "bg-primary/90 border-primary text-background"
                : "bg-secondary/90 border-secondary text-background"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-pixel text-sm">{config.label}</span>
          </div>
        </div>

        {/* Badge - Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`px-3 py-1 rounded-full border-2 font-pixel text-sm backdrop-blur-sm ${
                isPrimary
                  ? "bg-background/90 border-primary text-primary"
                  : "bg-background/90 border-secondary text-secondary"
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Image with Overlay Gradient */}
        <div className="aspect-square relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity z-10 ${
              isPrimary
                ? "from-primary/20 to-transparent"
                : "from-secondary/20 to-transparent"
            }`}
          />
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-5 bg-card/80 backdrop-blur-sm relative flex flex-col min-h-[180px] px-4 py-3.5">
          {/* Pixel Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(${
                  isPrimary ? "#FF004C" : "#7B3FF2"
                } 1px, transparent 1px),
                linear-gradient(90deg, ${
                  isPrimary ? "#FF004C" : "#7B3FF2"
                } 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
            }}
          />

          {/* Title */}
          <div className="relative flex-1 mb-0">
            <h3 className="font-pixel text-foreground text-2xl leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between border-t-2 border-border relative pt-3">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted-foreground mb-1">
                Price
              </span>
              <span
                className={`font-pixel text-3xl ${
                  isPrimary ? "text-primary" : "text-secondary"
                }`}
              >
                {product.price}
              </span>
            </div>
            <button
              className={`px-5 rounded-full border-2 font-pixel transition-all text-base relative overflow-hidden group/btn py-1.5 ${
                isPrimary
                  ? "border-primary text-primary hover:text-background"
                  : "border-secondary text-secondary hover:text-background"
              }`}
            >
              <span
                className={`absolute inset-0 transition-transform translate-y-full group-hover/btn:translate-y-0 ${
                  isPrimary ? "bg-primary" : "bg-secondary"
                }`}
              />
              <span className="relative z-10 text-base">
                {product.type === "stl-file" ? "Download" : "Add to Cart"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
