import type { Metadata } from "next";
import { siteConfig } from "./constants";

const ogImage = `${siteConfig.url}/og-image.jpg`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
  default: "NayePankh Foundation",
  template: "%s | NayePankh Foundation",
},
  description: siteConfig.description,
  keywords: [
    "NayePankh Foundation",
    "NGO India",
    "student-led NGO",
    "education NGO",
    "youth empowerment",
    "donate NGO India",
    "80G certified NGO",
    "volunteer India",
    "women empowerment",
    "community welfare",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [ogImage],
    creator: "@nayepankh",
  },
  alternates: { canonical: siteConfig.url },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: { "@type": "Country", name: "India" },
    sameAs: Object.values(siteConfig.social),
    foundingDate: "2020",
    knowsAbout: [
      "Education",
      "Youth Empowerment",
      "Women Empowerment",
      "Community Welfare",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "DonateAction",
      target: `${siteConfig.url}/#donate`,
      name: "Donate to NayePankh Foundation",
    },
  };
}
