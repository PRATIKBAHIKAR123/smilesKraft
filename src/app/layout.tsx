import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import {
  GoogleTagManagerHead,
  GoogleTagManagerBody,
} from "@/components/GoogleTagManager";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import DynamicMetadata from "../../DynamicMetadata";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import {
  Footer,
  LoaderProvider,
  FloatingTextForm,
} from "@/components/ClientComponents";

// Lazy load header component
const Header = dynamic(() => import("@/components/layouts/header"), {
  ssr: true,
  loading: () => <div className="h-20 bg-white" />, // Placeholder to prevent layout shift
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional: define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "SmileKraft Dental | Dentist in Jersey City NJ | Family & Cosmetic Dentistry",
  description:
    "SmileKraft Dental in Jersey City, NJ provides gentle family and cosmetic care, including implants, Invisalign®, whitening, and same-day emergencies. Serving Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307). Call today or book online.",
  keywords:
    "dentist maplewood nj, cosmetic dentist maplewood, family dentist maplewood, dental implants maplewood, root canal maplewood, emergency dentist maplewood",
  authors: [{ name: "SmileKraft Dental Jersey City" }],
  creator: "SmileKraft Dental Jersey City",
  publisher: "SmileKraft Dental Jersey City",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smilekraftnj.com",
    siteName: "SmileKraft Dental Jersey City",
    title:
      "SmileKraft Dental Jersey City | Dentist in Jersey City, NJ | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Jersey City, NJ. Serving patients from Jersey City and nearby areas. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Jersey City, NJ 07040.",
    images: [
      {
        url: "/Images/SmileKraft Dental-Blue.webp",
        width: 1200,
        height: 630,
        alt: "SmileKraft Dental Jersey City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SmileKraft Dental Jersey City | Dentist in Jersey City, NJ | Cosmetic & Family Dentist",
    description:
      "Top-rated cosmetic & family dentist in Jersey City, NJ. Serving patients from Jersey City and nearby areas. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Jersey City, NJ 07040.",
    images: ["/Images/tulip-large-Blue-white-website-header.webp"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/Images/SmileKraft Dental-White.png"
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/Images/SmileKraft Logo - Transparent.png"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/Images/Banner-1.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/Images/heart.webm"
          as="image"
          type="image/webm"
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "SmileKraft Dental",
  "url": "https://smilekraftnj.com",
  "logo": "https://smilekraftnj.com/path-to-your-logo.png",
  "image": "https://smilekraftnj.com/path-to-your-main-image.png",
  "priceRange": "$55 - $2999",
  "telephone": "+1-201-731-2700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "543 Martin Luther King Drive",
    "addressLocality": "Jersey City",
    "addressRegion": "NJ",
    "postalCode": "07304",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.70197,
    "longitude": -74.08977
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "328"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:30",
      "closes": "15:30"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Jersey City",
      "sameAs": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "postalCode": ["07304", "07305"]
      }
    },
    {
      "@type": "City",
      "name": "Greenville",
      "sameAs": "https://en.wikipedia.org/wiki/Greenville,_Jersey_City",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "postalCode": "07305"
      }
    },
    {
      "@type": "City",
      "name": "McGinley Square",
      "sameAs": "https://en.wikipedia.org/wiki/McGinley_Square,_Jersey_City",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "postalCode": ["07304", "07306", "07302"]
      }
    },
    {
      "@type": "City",
      "name": "Bergen-Lafayette",
      "sameAs": "https://en.wikipedia.org/wiki/Bergen-Lafayette,_Jersey_City",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "postalCode": ["07304", "07305"]
      }
    },
    {
      "@type": "City",
      "name": "Journal Square",
      "sameAs": "https://en.wikipedia.org/wiki/Journal_Square",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NJ",
        "postalCode": "07306"
      }
    }
  ],

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services and Pricing",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Adult Patient Examination and X-rays - Special Promo"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "79",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Child Patient Examination (under 5 years) - Special Promo"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "79",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Child Patient Examination (above 5 years) - Special Promo"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "79",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teeth Whitening Special Promo"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "299",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Periodic Examination and X-rays for Adults and Kids (above 5 years)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "100",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Periodic Examination and Cleaning for Kids Under 5"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Visit and Limited Examination"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "55",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scaling and Root Planning (Deep Cleaning)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "140",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Canal Treatment (Anterior)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "700",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Canal Treatment (Pre-Molar)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "750",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Canal Treatment (Molar)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "850",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Crowns (PFM)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "800",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Crowns (Zirconia)"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "900",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partial Dentures"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1120",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Dentures"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1000",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Immediate Dentures"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1000",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anterior Extraction"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "150",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Posterior Extraction"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "220",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Surgical Extraction"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "250",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wisdom Teeth Extraction"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "450",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orthodontic Consultation"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "85",
          "priceCurrency": "USD"
        }
      }
    ]
  }

            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
               "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do patients consider SmileKraft Dental one of the top dentists in Jersey City, NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SmileKraft Dental is known for delivering advanced family, cosmetic, and emergency dentistry using modern technology and a comfort-focused approach. Patients choose us because every treatment plan is personalized, minimally invasive, and designed to help you achieve a healthy, confident smile."
      }
    },
    {
      "@type": "Question",
      "name": "Is SmileKraft Dental currently accepting new patients in Jersey City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We warmly welcome new patients from Bergen-Lafayette, McGinley Square, Greenville, Journal Square, The Heights, and nearby areas. Whether you need preventive care or a complete smile makeover, our team provides customized care for every age."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day or emergency dental appointments in Jersey City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. SmileKraft Dental provides same-day emergency care for toothaches, cracked teeth, infections, broken fillings, and other urgent issues. Our team ensures fast, gentle relief so you can get back to feeling comfortable as soon as possible."
      }
    },
    {
      "@type": "Question",
      "name": "What cosmetic dentistry services does SmileKraft Dental offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a complete range of cosmetic dentistry treatments, including teeth whitening, veneers, bonding, crowns, contouring, and orthodontic options. Whether you want brighter teeth or a complete smile transformation, we use advanced techniques for natural-looking results."
      }
    },
    {
      "@type": "Question",
      "name": "Is SmileKraft Dental a family-friendly dental office?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. As a full-service family dental practice, we treat children, teens, adults, and seniors. From routine cleanings to orthodontics, implants, and oral surgery, we make dental care comfortable and convenient for the entire family."
      }
    },
    {
      "@type": "Question",
      "name": "What advanced technology does SmileKraft Dental use during treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use state-of-the-art diagnostic and treatment technology to ensure precise, efficient, and minimally invasive care. This helps us detect issues early, improve accuracy, reduce discomfort, and make appointments faster and more predictable for our patients."
      }
    },
    {
      "@type": "Question",
      "name": "Which local areas and ZIP codes does SmileKraft Dental serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve patients from Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307). Our office on Martin Luther King Drive is easily accessible from all these neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "Does SmileKraft Dental accept dental insurance and offer payment options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept most major dental insurance plans. For patients without insurance, we offer affordable pricing, flexible financing options, and clear treatment estimates to ensure high-quality dental care fits your budget."
      }
    },
    {
      "@type": "Question",
      "name": "How can I schedule an appointment with SmileKraft Dental in Jersey City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book an appointment by calling our office or using our convenient online scheduling system. Our team will help you find the best available time and answer any questions you may have before your visit."
      }
    }
  ]

            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased pt-18 md:pt-28`}
      >
        <GoogleTagManagerBody />
        <DynamicMetadata />
        <PerformanceMonitor />
        <Header />
        <LoaderProvider>{children}</LoaderProvider>
        <Footer />
        <FloatingTextForm />
      </body>
    </html>
  );
}
