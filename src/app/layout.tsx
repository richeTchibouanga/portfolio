import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import { PROFILE } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PROFILE.shortName} — ${PROFILE.title}`,
  description: PROFILE.intro,
  authors: [{ name: `${PROFILE.firstName} ${PROFILE.lastName}` }],
  openGraph: {
    title: `${PROFILE.shortName} — ${PROFILE.title}`,
    description: PROFILE.intro,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
