import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { site } from "@/content/site";
import "./globals.css";

const anton = localFont({
  src: "../fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  weight: "400",
  display: "swap",
  preload: true,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
  preload: false,
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: {
    default:
      "Carolina Collegiate Racing | Student-Run Motorsports at the University of South Carolina",
    template: "%s | Carolina Collegiate Racing",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Carolina Collegiate Racing",
    "CCR",
    "University of South Carolina",
    "student motorsports",
    "collegiate racing",
    "Mazda Miata",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Carolina Collegiate Racing",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Collegiate Racing",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${gilroy.variable}`}>
      <body className="flex min-h-full flex-col bg-black font-sans text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.14em] focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <ScrollReveal>{children}</ScrollReveal>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
