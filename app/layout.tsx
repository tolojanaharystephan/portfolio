import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { GlowCursor } from "@/components/effects/GlowCursor";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { BackgroundGrid } from "@/components/effects/BackgroundGrid";
import { BackToTop } from "@/components/ui/BackToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { seo } from "@/data/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? seo.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${seo.title.split("|")[0]?.trim() ?? "Portfolio"}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: "Tolojanahary Stephan", url: siteUrl }],
  creator: "Tolojanahary Stephan",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: seo.title,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="relative min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        <JsonLd />
        <ThemeProvider>
          <ToastProvider>
            <BackgroundGrid />
            <ScrollProgress />
            <GlowCursor />
            <BackToTop />
            <div className="relative z-10">{children}</div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
