import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Three Circles | Interior Design",
    template: "%s | Three Circles",
  },
  description:
    "Three Circles is an interior design studio creating immersive residential, commercial, and hospitality environments with clear process and strong visual identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <ThemeScript />
        <Header />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
