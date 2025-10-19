"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Mail, Phone, Copy, Check } from "lucide-react"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // Generate order number
  useEffect(() => {
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString().slice(-8)
      const random = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")
      return `JRX${timestamp}${random}`
    }
    setOrderNumber(generateOrderNumber())
  }, [])

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !showBankDetails) {
      router.push("/products")
    }
  }, [items, router, showBankDetails])

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setShowBankDetails(true)
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const bankDetails = {
    bank: "FNB",
    accountName: "JRX Studios",
    accountNumber: "62812345678",
    branchCode: "250655",
    accountType: "Business Cheque",
    reference: orderNumber,
  }

  if (showBankDetails) {
    return (
      <div className="min-h-screen bg-background pt-[104px] pb-12">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-pixel text-3xl text-foreground mb-2">Order Placed!</h1>
              <p className="font-mono text-sm text-muted-foreground">
                Your order number is: <span className="text-primary font-bold">{orderNumber}</span>
              </p>
            </div>

            {/* Bank Details Card */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 space-y-6">
              <div className="text-center pb-6 border-b border-border">
                <h2 className="font-pixel text-2xl text-foreground mb-2">Bank Transfer Details</h2>
                <p className="font-mono text-sm text-muted-foreground">Please make payment to the following account</p>
              </div>

              <div className="space-y-4">
                {Object.entries(bankDetails).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 rounded-xl bg-background border border-border"
                  >
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase mb-1">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="font-pixel text-lg text-foreground">{value}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(value, key)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label={`Copy ${key}`}
                    >
                      {copiedField === key ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-muted-foreground">Total Amount:</span>
                  <span className="font-pixel text-3xl text-primary">R{totalPrice.toFixed(2)}</span>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-mono text-sm text-foreground">
                    <strong>Important:</strong> Please use the order number{" "}
                    <strong className="text-primary">{orderNumber}</strong> as your payment reference. We'll process
                    your order once payment is confirmed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    clearCart()
                    router.push("/")
                  }}
                  className="flex-1 py-3 rounded-full border-2 border-border font-pixel text-sm hover:bg-muted transition-all"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => {
                    clearCart()
                    router.push("/products")
                  }}
                  className="flex-1 py-3 rounded-full bg-primary text-background font-pixel text-sm hover:scale-105 transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-muted-foreground mb-4">Questions about your order? Contact us:</p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="mailto:info@jrxstudios.com"
                  className="flex items-center gap-2 font-mono text-sm text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  info@jrxstudios.com
                </a>
                <a
                  href="tel:+27123456789"
                  className="flex items-center gap-2 font-mono text-sm text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  +27 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-[104px] pb-12">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-pixel text-4xl text-foreground mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Order Summary */}
            <div>
              <h2 className="font-pixel text-2xl text-foreground mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.filamentType}-${item.filamentColor}`}
                    className="flex gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-pixel text-sm text-foreground">{item.title}</h3>
                      {item.filamentType && (
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          {item.filamentType} - {item.filamentColor}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-mono text-sm text-muted-foreground">Qty: {item.quantity}</span>
                        <span className="font-pixel text-primary">R{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-muted-foreground">Total:</span>
                    <span className="font-pixel text-2xl text-primary">R{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Email Form */}
            <div>
              <h2 className="font-pixel text-2xl text-foreground mb-4">Contact Information</h2>
              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div>
                    <label htmlFor="email" className="block font-mono text-sm text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <p className="font-mono text-xs text-muted-foreground mt-2">
                      We'll send order confirmation and payment details to this email
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="font-mono text-sm text-foreground">
                      After clicking "Proceed to Payment", you'll receive bank transfer details to complete your order.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!email}
                  className="w-full py-4 rounded-full bg-primary text-background font-pixel text-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
