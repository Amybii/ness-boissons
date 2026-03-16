import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "Ness Boissons | Service de livraison express",
  description:
    "Distributeur de boissons avec plus de 7750 références. Livraison express 6j/7, accompagnement personnalisé et +250 clients satisfaits. Proximité, réactivité, flexibilité.",
  keywords: [
    "distributeur boissons",
    "livraison express",
    "boissons professionnels",
    "grossiste boissons",
    "Ness Boissons",
  ],
  openGraph: {
    title: "Ness Boissons | Service de livraison express",
    description:
      "Distributeur de boissons avec plus de 7750 références. Livraison express 6j/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <AgeGate>{children}</AgeGate>
      </body>
    </html>
  );
}
