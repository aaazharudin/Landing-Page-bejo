import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Bejo Gym - Gym Premium Sleman Yogyakarta | Personal Trainer & Program Fitness",
    template: "%s | Bejo Gym",
  },
  description:
    "Gym premium di Sleman, Yogyakarta dengan personal trainer bersertifikat. Program penurunan berat badan, pembentukan otot, dan fitness terukur. Hitung BMI, lihat transformasi member, dan kunjungi lokasi kami.",
  keywords: [
    "gym sleman",
    "gym yogyakarta",
    "gym jogja",
    "tempat fitness sleman",
    "personal trainer jogja",
    "gym terdekat",
    "penurunan berat badan",
    "pembentukan otot",
    "program fitness",
    "gym murah jogja",
    "personal trainer profesional",
    "gym 24 jam",
    "kalkulator bmi",
    "hitung bmi",
    "gym di sleman",
    "tempat fitness jogja",
    "gym dengan personal trainer",
    "transformasi tubuh",
  ].join(", "),
  authors: [{ name: "Bejo Gym" }],
  creator: "Bejo Gym",
  publisher: "Bejo Gym",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bejogym.id",
    title: "Bejo Gym - Gym Premium Sleman Yogyakarta | Personal Trainer & Program Fitness",
    description:
      "Gym premium di Sleman, Yogyakarta dengan personal trainer bersertifikat. Program penurunan berat badan, pembentukan otot, dan fitness terukur. Hitung BMI, lihat transformasi member, dan kunjungi lokasi kami.",
    siteName: "Bejo Gym",
    images: [
      {
        url: "https://bejogym.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bejo Gym - Gym Premium Sleman Yogyakarta",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Bejo Gym - Gym Premium Sleman Yogyakarta | Personal Trainer & Program Fitness",
    description:
      "Gym premium di Sleman, Yogyakarta dengan personal trainer bersertifikat. Program penurunan berat badan, pembentukan otot, dan fitness terukur.",
    images: ["https://bejogym.id/twitter-image.jpg"],
  },

  // Robots
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

  // Verification
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Alternates
  alternates: {
    canonical: "https://bejogym.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Bejo Gym",
    description: "Gym premium di Sleman, Yogyakarta dengan personal trainer bersertifikat. Program penurunan berat badan, pembentukan otot, BMI calculator, dan fasilitas lengkap.",
    url: "https://bejogym.id",
    telephone: "+62-812-3456-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Magelang Km. 5,5",
      addressLocality: "Sleman",
      addressRegion: "DI Yogyakarta",
      postalCode: "55281",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.7616,
      longitude: 110.3748,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "21:00",
    },
    priceRange: "Rp 499.000 - Rp 1.499.000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -7.7616,
        longitude: 110.3748,
      },
      geoRadius: "50000",
    },
    sameAs: [
      "https://instagram.com/bejogym",
      "https://tiktok.com/@bejogym",
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
