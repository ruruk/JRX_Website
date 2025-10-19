"use client"

import { Zap, Package, Clock, Award, Sparkles, Rocket } from "lucide-react"

const promos = [
  { icon: Zap, text: "FAST TURNAROUND" },
  { icon: Package, text: "FREE SHIPPING OVER R500" },
  { icon: Clock, text: "24/7 SUPPORT" },
  { icon: Award, text: "PREMIUM QUALITY" },
  { icon: Sparkles, text: "10% OFF PETG PRINTS" },
  { icon: Rocket, text: "SAME DAY QUOTES" },
]

export const PromoBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/95 backdrop-blur-sm border-b border-primary overflow-hidden">
      <div className="relative flex py-0.5">
        {/* First set of promos */}
        <div className="flex animate-scroll-left">
          {promos.map((promo, index) => {
            const Icon = promo.icon
            return (
              <div key={`first-${index}`} className="flex items-center gap-2 px-6 whitespace-nowrap py-1">
                <Icon className="h-5 w-5 text-background" />
                <span className="font-pixel text-background text-lg">{promo.text}</span>
              </div>
            )
          })}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex animate-scroll-left">
          {promos.map((promo, index) => {
            const Icon = promo.icon
            return (
              <div key={`second-${index}`} className="flex items-center gap-2 px-6 whitespace-nowrap py-0.5">
                <Icon className="h-5 w-5 text-background" />
                <span className="font-pixel text-background text-lg">{promo.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
