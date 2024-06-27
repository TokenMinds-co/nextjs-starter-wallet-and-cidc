import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate Wallet & CI/CD",
  description: "This is a boilerplate for a wallet application that is ready for development. It includes CI/CD with GitHub Actions, wallet connection, and balance. It is built with Next.js, TypeScript, Tailwind CSS, and Vercel. It is also optimized for SEO and performance.",
  keywords: ["boilerplate", "wallet", "ci/cd", "next.js", "typescript", "tailwind css", "vercel", "seo", "performance"],
  authors: [
    {
      name: "Tokenminds",
      url: "https://tokenminds.co",
    }
  ],
  creator: "Tokenminds",
  publisher: "Tokenminds",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boilerplate-wallet.vercel.app",
    siteName: "Boilerplate Wallet & CI/CD",
    title: "Boilerplate Wallet & CI/CD",
    description: "This is a boilerplate for a wallet application that is ready for development. It includes CI/CD with GitHub Actions, wallet connection, and balance. It is built with Next.js, TypeScript, Tailwind CSS, and Vercel. It is also optimized for SEO and performance.",
    images: [
      {
        url: "https://boilerplate-wallet.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boilerplate Wallet & CI/CD",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3Provider>
      <body className={inter.className}>{children}</body>
      </Web3Provider>
    </html>
  );
}
