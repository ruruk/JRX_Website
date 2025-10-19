import type React from "react";
import "./globals.css";
import { Inter, Roboto_Mono, VT323 } from "next/font/google";
import { Header } from "@/components/header";
import { PromoBanner } from "@/components/promo-banner";
import { CartProvider } from "@/context/cart-context";
import { AuthProvider } from "@/context/auth-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
});

export const metadata = {
  title: {
    default:
      "JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping",
    template: "%s | JRX Studios Pretoria",
  },
  description:
    "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions. Custom parts, prototypes, and manufacturing services by JRX Studios.",
  keywords: [
    "3D printing Pretoria",
    "3D printing South Africa",
    "Pretoria 3D printing services",
    "Gauteng 3D printing",
    "product design Pretoria",
    "rapid prototyping Pretoria",
    "custom manufacturing Pretoria",
    "FDM printing Pretoria",
    "PLA printing Pretoria",
    "PETG printing Pretoria",
    "ABS printing Pretoria",
    "STL files Pretoria",
    "CAD design Pretoria",
    "prototyping services Pretoria",
    "industrial design Pretoria",
    "electronics Pretoria",
    "IoT solutions Pretoria",
    "embedded systems Pretoria",
    "custom enclosures Pretoria",
    "precision parts Pretoria",
    "tooling fixtures Pretoria",
    "3D printer rental Pretoria",
    "additive manufacturing Pretoria",
    "digital manufacturing Pretoria",
    "small batch production Pretoria",
    "custom parts Pretoria",
    "mechanical parts Pretoria",
    "engineering prototypes Pretoria",
    "product development Pretoria",
    "design consultation Pretoria",
    "web development Pretoria",
    "software development Pretoria",
  ],
  authors: [
    { name: "Ruan Klopper", url: "https://jrxstudios.co.za" },
    { name: "Johnny Dippenaar", url: "https://jrxstudios.co.za" },
  ],
  creator: "JRX Studios",
  publisher: "JRX Studios",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://jrxstudios.co.za",
    siteName: "JRX Studios",
    title:
      "JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping",
    description:
      "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions. Custom parts and manufacturing services.",
    countryName: "South Africa",
    images: [
      {
        url: "https://jrxstudios.co.za/essentials/logo.png",
        width: 1200,
        height: 630,
        alt: "JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping",
    description:
      "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions.",
    creator: "@jrxstudios",
    images: ["https://jrxstudios.co.za/essentials/logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://jrxstudios.co.za",
  },
  category: "Technology",
  classification: "3D Printing, Product Design, Web Development, Electronics",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jrxstudios.co.za"),
  applicationName: "JRX Studios",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jrxstudios.co.za/#organization",
        name: "JRX Studios",
        url: "https://jrxstudios.co.za",
        description:
          "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions.",
        foundingDate: "2023",
        founders: [
          {
            "@type": "Person",
            name: "Ruan Klopper",
            jobTitle: "Fullstack Developer & Photographer",
            email: "ruan@jrxstudios.co.za",
            telephone: "+27123456789",
          },
          {
            "@type": "Person",
            name: "Johnny Dippenaar",
            jobTitle: "Industrial Designer & Electronics Engineer",
            email: "johnny@jrxstudios.co.za",
            telephone: "+27123456790",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pretoria",
          addressLocality: "Pretoria",
          addressRegion: "Gauteng",
          postalCode: "0001",
          addressCountry: "ZA",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+27123456789",
          contactType: "customer service",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.instagram.com/jrxstudios",
          "https://github.com/jrxstudios",
        ],
        serviceArea: [
          {
            "@type": "City",
            name: "Pretoria",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Gauteng",
              containedInPlace: {
                "@type": "Country",
                name: "South Africa",
              },
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Gauteng",
            containedInPlace: {
              "@type": "Country",
              name: "South Africa",
            },
          },
          {
            "@type": "Country",
            name: "South Africa",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "3D Printing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "3D Printing Services",
                description:
                  "Professional FDM 3D printing services in Pretoria with PLA, PETG, ABS, and TPU materials. Custom parts and prototypes.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Product Design",
                description:
                  "Custom product design and CAD modeling services in Pretoria, South Africa",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Full-stack web development and mobile applications for Pretoria businesses",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electronics Solutions",
                description:
                  "IoT development, embedded systems, and custom electronics solutions in Pretoria",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://jrxstudios.co.za/#website",
        url: "https://jrxstudios.co.za",
        name: "JRX Studios",
        description:
          "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions.",
        publisher: {
          "@id": "https://jrxstudios.co.za/#organization",
        },
        inLanguage: "en-ZA",
      },
      {
        "@type": "WebPage",
        "@id": "https://jrxstudios.co.za/#webpage",
        url: "https://jrxstudios.co.za",
        name: "JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping",
        isPartOf: {
          "@id": "https://jrxstudios.co.za/#website",
        },
        about: {
          "@id": "https://jrxstudios.co.za/#organization",
        },
        description:
          "Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions. Custom prototypes, industrial parts, and innovative designs.",
        inLanguage: "en-ZA",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${vt323.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://jrxstudios.co.za" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/essentials/logo.png" />
        <link rel="icon" type="image/png" href="/essentials/logo.png" />
        <link rel="shortcut icon" href="/essentials/logo.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JRX Studios" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Pretoria" />
        <meta name="geo.position" content="-25.7479;28.2293" />
        <meta name="ICBM" content="-25.7479, 28.2293" />
        <meta name="locality" content="Pretoria" />
        <meta name="region" content="Gauteng" />
        <meta name="country" content="South Africa" />
        <meta name="postal-code" content="0001" />
        <meta name="business-name" content="JRX Studios" />
        <meta name="business-type" content="3D Printing Services" />
        <meta name="service-area" content="Pretoria, Gauteng, South Africa" />
        <meta
          name="DC.title"
          content="JRX Studios - 3D Printing Services Pretoria | Product Design & Prototyping"
        />
        <meta name="DC.creator" content="JRX Studios" />
        <meta
          name="DC.subject"
          content="3D Printing Pretoria, Product Design Pretoria, Rapid Prototyping Pretoria, Electronics Pretoria"
        />
        <meta
          name="DC.description"
          content="Leading 3D printing services in Pretoria, South Africa. Professional FDM printing, product design, rapid prototyping, and electronics solutions."
        />
        <meta name="DC.publisher" content="JRX Studios" />
        <meta name="DC.contributor" content="Ruan Klopper, Johnny Dippenaar" />
        <meta name="DC.date" content="2024-01-01" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://jrxstudios.co.za" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Pretoria, Gauteng, South Africa" />
        <meta name="DC.rights" content="Copyright JRX Studios" />
      </head>
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
  );
}
