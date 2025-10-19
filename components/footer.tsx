import Link from "next/link"
import { Github, Instagram, Mail } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-pixel text-2xl text-primary">JRX</span>
              <span className="font-pixel text-2xl text-foreground">STUDIOS</span>
            </Link>
            <p className="text-base text-muted-foreground font-mono">3D Printing & Product Design</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-pixel text-base text-foreground">NAVIGATE</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-base font-mono text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="#services"
                className="text-base font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#products"
                className="text-base font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                href="#about"
                className="text-base font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-pixel text-base text-foreground">SERVICES</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-base font-mono text-muted-foreground">FDM 3D Printing</span>
              <span className="text-base font-mono text-muted-foreground">Product Design</span>
              <span className="text-base font-mono text-muted-foreground">Web Development</span>
              <span className="text-base font-mono text-muted-foreground">Electronics</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-pixel text-base text-foreground">CONNECT</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@jrxstudios.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base font-mono text-muted-foreground">© 2025 JRX Studios. All rights reserved.</p>
            <p className="text-base font-mono text-muted-foreground">Built with precision & creativity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
