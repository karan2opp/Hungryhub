import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hungry Hub — Taste The Quality | Pehowa",
  description:
    "Hungry Hub is Pehowa's warm, modern fast-food cafe — fresh burgers, cheesy pizzas, loaded fries and refreshing shakes, served in a cozy, Instagram-worthy space. Visit us on Pehowa-Kaithal Road.",
  keywords: [
    "Hungry Hub",
    "Pehowa cafe",
    "best burger Pehowa",
    "pizza Pehowa",
    "fast food Pehowa Kaithal Road",
  ],
  openGraph: {
    title: "Hungry Hub — Taste The Quality",
    description:
      "Fresh burgers, cheesy pizzas, loaded fries & refreshing shakes in a warm, premium cafe space in Pehowa.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1b33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink-950 font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
