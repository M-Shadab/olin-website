import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "OLIN Hospitality | Hotel Services & Operational Support",
//   description: "OLIN Hospitality is a hospitality support partner delivering hotel laundry, linen care, and back-of-house services for modern hotels.",
// };

export const metadata: Metadata = {
  title: "OLIN Hospitality | Hotel Services & Operational Support",
  description:
    "Reliable hotel Services and Operational Support for modern hotels.",
  openGraph: {
    title: "OLIN Hospitality | Hotel Services & Operational Support",
    description:
      "Reliable hotel Services and Operational Support for modern hotels.",
    url: "https://www.olinhospitality.com",
    siteName: "Olin Hospitality",
    images: [
      {
        url: "/og-image-1.jpg", // Path to your OG image
        width: 1200,
        height: 630,
        alt: "OLIN Hospitality Services | Hotel Services & Operational Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLIN Hospitality Services | Hotel Services & Operational Support",
    description:
      "Reliable hotel Services and Operational Support for modern hotels.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
