"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User, ChevronDown, LogOut } from "lucide-react"
import { Cart } from "@/components/cart"
import { FullscreenMenu } from "@/components/fullscreen-menu"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const { totalItems } = useCart()
  const { isAuthenticated, user, logout } = useAuth()

  const productCategories = [
    { name: "PLA Filament", href: "/products/pla" },
    { name: "PETG Filament", href: "/products/petg" },
    { name: "ABS Filament", href: "/products/abs" },
    { name: "Specialty Filament", href: "/products/specialty" },
    { name: "3D Printed Parts", href: "/products/parts" },
    { name: "Tools & Accessories", href: "/products/accessories" },
  ]

  return (
    <>
      <header className="sticky top-[40px] z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-pixel text-2xl text-primary">JRX</span>
              <span className="font-pixel text-2xl text-foreground">STUDIOS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-mono hover:bg-muted transition-colors">
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className="px-4 py-2 rounded-full text-sm font-mono hover:bg-muted transition-colors flex items-center gap-1"
                >
                  Products
                  <ChevronDown className="h-3 w-3" />
                </Link>

                {productsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    {productCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-3 text-sm font-mono hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/start-project"
                className="px-4 py-2 rounded-full text-sm font-mono bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                Start Project
              </Link>
              <Link
                href="/filament-guide"
                className="px-4 py-2 rounded-full text-sm font-mono hover:bg-muted transition-colors"
              >
                Filament Guide
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-sm font-mono hover:bg-muted transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <div
                  className="relative hidden md:block"
                  onMouseEnter={() => setAccountOpen(true)}
                  onMouseLeave={() => setAccountOpen(false)}
                >
                  <button className="flex items-center gap-2 p-2 rounded-full hover:bg-muted transition-colors">
                    <User className="h-5 w-5" />
                    <span className="text-sm font-mono">{user?.name}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {accountOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                      <Link
                        href="/account"
                        className="block px-4 py-3 text-sm font-mono hover:bg-muted transition-colors border-b border-border"
                      >
                        My Account
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-sm font-mono hover:bg-muted transition-colors flex items-center gap-2 text-destructive"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden md:flex p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Login"
                >
                  <User className="h-5 w-5" />
                </Link>
              )}

              <button
                onClick={() => setCartOpen(true)}
                className="p-2 rounded-full hover:bg-muted transition-colors relative"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-background text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <FullscreenMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        productCategories={productCategories}
      />
    </>
  )
}
