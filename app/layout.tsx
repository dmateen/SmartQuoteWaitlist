import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Providers } from "@/components/providers";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Smart Roofing Quotes - Instant Roofing Estimates",
  description: "Get instant, accurate roofing quotes in minutes. No signup required. Professional estimates for re-roofing, repairs, and new construction projects.",
  keywords: [
    "roofing quotes",
    "roof estimate",
    "roofing contractor",
    "roof replacement cost",
    "instant roofing quote",
    "roofing calculator",
    "roof repair estimate"
  ],
  authors: [{ name: "Roofing Leads Magnet" }],
  creator: "Roofing Leads Magnet",
  publisher: "Roofing Leads Magnet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Smart Roofing Quotes - Get Instant Roofing Estimates",
    description: "Get instant, accurate roofing quotes in minutes. No signup required. Professional estimates for all roofing projects.",
    url: defaultUrl,
    siteName: "Smart Roofing Quotes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Roofing Quotes - Instant Estimates",
    description: "Get instant, accurate roofing quotes in minutes. No signup required.",
    creator: "@roofingleads",
  },
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
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
