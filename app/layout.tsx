import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argonurcahyo.github.io"),
  title: "Argo Nurcahyo | Software Engineer",
  description:
    "Portfolio of Argo Nurcahyo, a software engineer focused on web development with interests in AI, IoT, mobile apps, and data science.",
  openGraph: {
    title: "Argo Nurcahyo | Software Engineer",
    description:
      "Selected public work across Next.js, TypeScript, browser tooling, and data projects.",
    url: "https://argonurcahyo.github.io",
    siteName: "Argo Nurcahyo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Argo Nurcahyo | Software Engineer",
    description:
      "Selected public work across Next.js, TypeScript, browser tooling, and data projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
