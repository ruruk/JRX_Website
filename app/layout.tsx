import type React from "react"
import "./globals.css"
import { Inter, Roboto_Mono, VT323 } from "next/font/google"
import { Header } from "@/components/header"
import { PromoBanner } from "@/components/promo-banner"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
})

export const metadata = {
  title: "JRX Studios - 3D Printing & Product Design",
  description: "Bold 3D printing, product design, and tech services by Ruan Klopper and Johnny Dippenaar",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${vt323.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            <PromoBanner />
            <Header />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
