import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-pixel text-5xl md:text-6xl text-foreground mb-4">Contact Us</h1>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team. We're here to help bring your 3D printing projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <h2 className="font-pixel text-3xl text-foreground mb-6">Send us a message</h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-sm text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-mono text-sm text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="+27 12 345 6789"
                />
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block font-mono text-sm text-foreground mb-3">Preferred Contact Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact-method"
                      value="email"
                      defaultChecked
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="font-mono text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact-method"
                      value="whatsapp"
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="font-mono text-sm">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-sm text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-background font-pixel text-xl py-3 px-6 rounded-full hover:scale-105 transition-all border-2 border-primary shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-8">
            {/* Team Members */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />

              <h2 className="font-pixel text-3xl text-foreground mb-6">Our Team</h2>

              <div className="space-y-6">
                {/* Ruan Klopper */}
                <div className="pb-6 border-b border-border">
                  <h3 className="font-pixel text-xl text-primary mb-3">Ruan Klopper</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+27123456789"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      +27 12 345 6789
                    </a>
                    <a
                      href="mailto:ruan@jrxstudios.co.za"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      ruan@jrxstudios.co.za
                    </a>
                  </div>
                </div>

                {/* Johnny Dippenaar */}
                <div>
                  <h3 className="font-pixel text-xl text-secondary mb-3">Johnny Dippenaar</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+27123456790"
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-mono text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      +27 12 345 6790
                    </a>
                    <a
                      href="mailto:johnny@jrxstudios.co.za"
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-mono text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      johnny@jrxstudios.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

              <h2 className="font-pixel text-3xl text-foreground mb-6">Visit Us</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-sm text-foreground mb-1">JRX Studios</p>
                    <p className="font-mono text-sm text-muted-foreground">Pretoria</p>
                    <p className="font-mono text-sm text-muted-foreground">South Africa</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="font-mono text-xs text-muted-foreground">
                    We're located in Pretoria, South Africa. Contact us to schedule a visit or discuss your 3D printing
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-border rounded-2xl p-8 shadow-lg">
              <h2 className="font-pixel text-2xl text-foreground mb-4">Business Hours</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
