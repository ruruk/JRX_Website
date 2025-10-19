"use client"

import Link from "next/link"
import { X, ChevronRight, Zap, Package, BookOpen, Rocket, Mail, User } from "lucide-react"
import { useEffect } from "react"

interface FullscreenMenuProps {
  isOpen: boolean
  onClose: () => void
  productCategories: { name: string; href: string }[]
}

export const FullscreenMenu = ({ isOpen, onClose, productCategories }: FullscreenMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const mainNavItems = [
    { name: "Home", href: "/", icon: Zap },
    { name: "Filament Guide", href: "/filament-guide", icon: BookOpen },
    { name: "Start Project", href: "/start-project", icon: Rocket, highlight: true },
    { name: "Guidebook", href: "/guidebook", icon: BookOpen },
    { name: "Contact Us", href: "/contact", icon: Mail },
    { name: "My Account", href: "/account", icon: User },
  ]

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Backdrop with pixel grid pattern */}
      <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" onClick={onClose}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Menu Content */}
      <div className="relative h-full overflow-y-auto">
        <div className="container mx-auto px-6 py-8 min-h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-2">
              <span className="font-pixel text-3xl text-primary animate-pulse">JRX</span>
              <span className="font-pixel text-3xl text-foreground">STUDIOS</span>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-xl bg-card border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 space-y-3">
            {mainNavItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center justify-between p-5 rounded-2xl border-2 transition-all
                    ${
                      item.highlight
                        ? "bg-primary/10 border-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_30px_rgba(255,0,76,0.3)]"
                        : "bg-card border-border hover:border-primary/50 hover:bg-card/80"
                    }
                    hover:scale-[1.02] hover:translate-x-2
                    animate-[slideIn_0.3s_ease-out_forwards]
                  `}
                  style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                      p-3 rounded-xl border-2 transition-all
                      ${
                        item.highlight
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-foreground group-hover:border-primary group-hover:text-primary"
                      }
                    `}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`
                      font-pixel text-2xl
                      ${item.highlight ? "text-primary" : "text-foreground"}
                    `}
                    >
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight
                    className={`
                    h-6 w-6 transition-transform group-hover:translate-x-1
                    ${item.highlight ? "text-primary" : "text-muted-foreground"}
                  `}
                  />
                </Link>
              )
            })}

            {/* Products Section */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3 px-2">
                <Package className="h-5 w-5 text-secondary" />
                <span className="font-pixel text-xl text-secondary">Products</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {productCategories.map((category, index) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    onClick={onClose}
                    className="
                      group p-4 rounded-xl border-2 border-border bg-card
                      hover:border-secondary hover:bg-secondary/10
                      transition-all hover:scale-105
                      animate-[slideIn_0.3s_ease-out_forwards]
                    "
                    style={{ animationDelay: `${(mainNavItems.length + index) * 0.05}s`, opacity: 0 }}
                  >
                    <span className="font-mono text-sm text-foreground group-hover:text-secondary transition-colors">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-between text-sm font-mono text-muted-foreground">
              <span>3D Printing & Design</span>
              <span className="text-primary">v1.0</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
