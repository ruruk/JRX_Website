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
    default: "JRX Studios - Professional 3D Printing & Product Design Services",
    template: "%s | JRX Studios",
  },
  description:
    "Professional 3D printing services, product design, web development, and electronics solutions in South Africa. Custom prototypes, industrial parts, and innovative designs by Ruan Klopper and Johnny Dippenaar.",
  keywords: [
    "3D printing South Africa",
    "product design",
    "prototyping",
    "industrial design",
    "web development",
    "electronics",
    "CAD design",
    "STL files",
    "custom manufacturing",
    "rapid prototyping",
    "FDM printing",
    "PLA PETG ABS",
    "Pretoria 3D printing",
    "small scale manufacturing",
    "large scale production",
    "IoT solutions",
    "embedded systems",
    "custom enclosures",
    "precision parts",
    "tooling fixtures",
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
    title: "JRX Studios - Professional 3D Printing & Product Design Services",
    description:
      "Professional 3D printing services, product design, web development, and electronics solutions in South Africa. Custom prototypes, industrial parts, and innovative designs.",
    countryName: "South Africa",
    images: [
      {
        url: "https://jrxstudios.co.za/essentials/logo.png",
        width: 1200,
        height: 630,
        alt: "JRX Studios - Professional 3D Printing & Product Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JRX Studios - Professional 3D Printing & Product Design Services",
    description:
      "Professional 3D printing services, product design, web development, and electronics solutions in South Africa.",
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
        logo: {
          "@type": "ImageObject",
          url: "https://jrxstudios.co.za/essentials/logo.png",
          width: 200,
          height: 200,
        },
        description:
          "Professional 3D printing services, product design, web development, and electronics solutions in South Africa.",
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
          addressLocality: "Pretoria",
          addressCountry: "South Africa",
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
        serviceArea: {
          "@type": "Country",
          name: "South Africa",
        },
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
                  "Professional FDM 3D printing with PLA, PETG, ABS, and TPU materials",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Product Design",
                description: "Custom product design and CAD modeling services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Full-stack web development and mobile applications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electronics Solutions",
                description:
                  "IoT development, embedded systems, and custom electronics",
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
          "Professional 3D printing services, product design, web development, and electronics solutions in South Africa.",
        publisher: {
          "@id": "https://jrxstudios.co.za/#organization",
        },
        inLanguage: "en-ZA",
      },
      {
        "@type": "WebPage",
        "@id": "https://jrxstudios.co.za/#webpage",
        url: "https://jrxstudios.co.za",
        name: "JRX Studios - Professional 3D Printing & Product Design Services",
        isPartOf: {
          "@id": "https://jrxstudios.co.za/#website",
        },
        about: {
          "@id": "https://jrxstudios.co.za/#organization",
        },
        description:
          "Professional 3D printing services, product design, web development, and electronics solutions in South Africa. Custom prototypes, industrial parts, and innovative designs.",
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
        <meta name="geo.region" content="ZA" />
        <meta name="geo.placename" content="Pretoria" />
        <meta name="geo.position" content="-25.7479;28.2293" />
        <meta name="ICBM" content="-25.7479, 28.2293" />
        <meta
          name="DC.title"
          content="JRX Studios - Professional 3D Printing & Product Design Services"
        />
        <meta name="DC.creator" content="JRX Studios" />
        <meta
          name="DC.subject"
          content="3D Printing, Product Design, Web Development, Electronics"
        />
        <meta
          name="DC.description"
          content="Professional 3D printing services, product design, web development, and electronics solutions in South Africa."
        />
        <meta name="DC.publisher" content="JRX Studios" />
        <meta name="DC.contributor" content="Ruan Klopper, Johnny Dippenaar" />
        <meta name="DC.date" content="2024-01-01" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://jrxstudios.co.za" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="South Africa" />
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
