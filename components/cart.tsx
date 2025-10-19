"use client"

import { X, Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" onClick={onClose} />

      {/* Cart Sidenav */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border pt-16">
            <h2 className="font-pixel text-xl text-foreground">CART ({items.length})</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-pixel text-2xl text-muted-foreground">0</span>
                </div>
                <p className="font-mono text-sm text-muted-foreground">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-full bg-primary text-background font-mono text-sm hover:scale-105 transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.filamentType}-${item.filamentColor}`}
                    className="flex gap-4 p-4 rounded-xl border border-border bg-background"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-pixel text-sm text-foreground truncate">{item.title}</h3>
                      {item.filamentType && (
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          {item.filamentType} - {item.filamentColor}
                        </p>
                      )}
                      <p className="font-pixel text-primary mt-2">R{item.price.toFixed(2)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(`${item.id}-${item.filamentType}-${item.filamentColor}`, item.quantity - 1)
                          }
                          className="p-1 rounded hover:bg-muted transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(`${item.id}-${item.filamentType}-${item.filamentColor}`, item.quantity + 1)
                          }
                          className="p-1 rounded hover:bg-muted transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(`${item.id}-${item.filamentType}-${item.filamentColor}`)}
                      className="p-2 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-center font-mono">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-pixel text-xl text-primary">R{totalPrice.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full py-3 rounded-full bg-primary text-background font-pixel text-sm hover:scale-105 transition-all text-center"
              >
                CHECKOUT
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
