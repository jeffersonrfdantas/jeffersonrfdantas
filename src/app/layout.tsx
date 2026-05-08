import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NEWS IA — Portal inteligente de notícias",
  description: "Portal premium com IA nativa, jornalismo em tempo real, SEO avançado e experiência mobile superior.",
  openGraph: {
    title: "NEWS IA",
    description: "Jornalismo moderno com curadoria automática e resumos instantâneos.",
    type: "website",
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "NEWS IA",
    description: "Notícias rápidas, IA nativa e experiência premium.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
