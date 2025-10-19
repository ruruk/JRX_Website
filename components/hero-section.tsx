"use client"

import { useState, useEffect } from "react"
import {
  Upload,
  Printer,
  Lightbulb,
  Code,
  Cpu,
  Award,
  Zap,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Box,
  Layers,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "VOLTA 3 BATTERY COVER",
    description: "Custom protective housing with precise fit",
    image: "/3d-printed-battery-cover-case.jpg",
    badge: "FEATURED",
  },
  {
    title: "INDUSTRIAL ENCLOSURE",
    description: "Functional PETG parts for electronics",
    image: "/industrial-electronics-enclosure-3d-printed.jpg",
    badge: "NEW",
  },
  {
    title: "CUSTOM TOOLING",
    description: "Precision jigs and fixtures",
    image: "/precision-jigs-fixtures-3d-printed-tools.jpg",
    badge: "PRO",
  },
]

export const HeroSection = () => {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-background border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[160px] lg:auto-rows-[180px]">
          {/* Large Featured Project Carousel - Full width on mobile, 2x2 on tablet+desktop */}
          <div className="col-span-2 row-span-2 md:row-span-2 rounded-xl sm:rounded-2xl overflow-hidden bg-card border-2 border-border relative group">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentProject ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-primary border-2 border-primary text-background font-pixel text-xs sm:text-sm animate-pulse">
                      {project.badge}
                    </span>
                    <div className="flex gap-1">
                      {featuredProjects.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all ${
                            i === currentProject ? "bg-primary w-4 sm:w-6" : "bg-border w-1"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-foreground">{project.title}</h3>
                    <p className="font-mono text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-primary font-pixel text-xs sm:text-sm hover:gap-3 transition-all"
                    >
                      View <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Printing Service Card */}
          <Link
            href="/products"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/3d-printer-fdm-printing.jpg" alt="3D Printing" fill className="object-cover" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Printer className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-foreground mb-1">PRINTING</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">FDM scale</p>
              </div>
            </div>
          </Link>

          {/* Design Service Card */}
          <Link
            href="/start-project"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 hover:border-secondary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/cad-design-3d-modeling-industrial.jpg" alt="Design" fill className="object-cover" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/20 border-2 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-foreground mb-1">DESIGN</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Industrial</p>
              </div>
            </div>
          </Link>

          {/* Stats Card - Full width on mobile, 2 columns on tablet+ */}
          <div className="col-span-2 md:col-span-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-card border-2 border-border">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 h-full">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="font-pixel text-xl sm:text-2xl lg:text-3xl text-foreground mb-1">500+</div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <div className="font-pixel text-xl sm:text-2xl lg:text-3xl text-foreground mb-1">200+</div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="font-pixel text-xl sm:text-2xl lg:text-3xl text-foreground mb-1">24-48h</div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">Turnaround</div>
              </div>
            </div>
          </div>

          {/* 3D Model Showcase - PROTOTYPES - Tall card */}
          <div className="row-span-2 md:row-span-2 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/5 to-primary/5 border-2 border-border relative group">
            <Image
              src="/3d-printed-prototypes-mechanical-parts.jpg"
              alt="Prototype"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <span className="font-pixel text-xs sm:text-sm text-foreground">PROTOTYPES</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Rapid iteration</p>
            </div>
          </div>

          {/* Quick Action - Upload */}
          <Link
            href="/start-project"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 hover:border-primary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/stl-file-3d-model-upload.jpg" alt="Upload" fill className="object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
            <div className="relative h-full flex flex-col justify-between z-10">
              <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-pixel text-base sm:text-lg lg:text-xl text-foreground mb-1">UPLOAD</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Instant quote</p>
              </div>
            </div>
          </Link>

          {/* Material Library */}
          <Link
            href="/filament-guide"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-card border-2 border-border hover:border-secondary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/3d-printing-filament-spools-colorful.jpg" alt="Materials" fill className="object-cover" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <Layers className="h-6 w-6 sm:h-8 sm:w-8 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-pixel text-base sm:text-lg lg:text-xl text-foreground mb-1">MATERIALS</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">8+ types</p>
              </div>
            </div>
          </Link>

          {/* 3D Model Showcase - PARTS - Tall card, single column on mobile */}
          <div className="row-span-2 md:row-span-2 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5 border-2 border-border relative group">
            <Image
              src="/precision-3d-printed-mechanical-parts-gears.jpg"
              alt="3D Model"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Box className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="font-pixel text-xs sm:text-sm text-foreground">PARTS</span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Precision</p>
            </div>
          </div>

          {/* Promo Card - Full width on mobile, 2 columns on tablet+ */}
          <div className="col-span-2 md:col-span-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-r from-primary via-secondary to-primary border-2 border-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex sm:flex-row gap-3 sm:gap-0 justify-between sm:items-start items-start flex-row">
              <div className="flex-1">
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-background/90 border border-background font-pixel text-[10px] sm:text-xs text-primary mb-1 sm:mb-2">
                  LIMITED TIME
                </div>
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-background mb-1">WHITE PETG SPECIAL</h3>
                <p className="font-mono text-xs sm:text-sm text-background/80">50% off premium quality</p>
              </div>
              <Link
                href="/products"
                className="px-4 sm:px-6 py-2 rounded-full bg-background text-primary font-pixel text-xs sm:text-sm hover:scale-105 transition-transform border-2 border-background whitespace-nowrap"
              >
                CLAIM
              </Link>
            </div>
          </div>

          {/* Development Service */}
          <Link
            href="/contact"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/web-development-code-programming.jpg" alt="Development" fill className="object-cover" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-foreground mb-1">DEVELOPMENT</h3>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Web & mobile</p>
              </div>
            </div>
          </Link>

          {/* Electronics Service - Single height */}
          <Link
            href="/products"
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 hover:border-secondary transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src="/electronics-circuit-board-iot-embedded.jpg" alt="Electronics" fill className="object-cover" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/20 border-2 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-foreground mb-1">ELECTRONICS</h3>
                <p className="font-mono text-[10px] sm:text-sm text-muted-foreground">IoT & embedded</p>
              </div>
            </div>
          </Link>

          {/* Fast Turnaround Card - Full width on mobile */}
          <div className="col-span-2 md:col-span-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-card border-2 border-border hover:border-primary transition-all group">
            <div className="flex sm:flex-row items-start gap-3 sm:gap-4 sm:items-start flex-row">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-pixel text-lg sm:text-xl lg:text-2xl text-foreground mb-1">FAST TURNAROUND</h3>
                <p className="font-mono text-xs sm:text-sm text-muted-foreground">
                  Most orders ship within 24-48 hours. Rush service available.
                </p>
              </div>
              <Link
                href="/start-project"
                className="px-4 py-2 rounded-full bg-primary text-background font-pixel text-xs sm:text-sm hover:scale-105 transition-transform border-2 border-primary whitespace-nowrap self-start sm:self-auto"
              >
                START NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
