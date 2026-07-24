import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OHI – Organización Humana Integral | Salud de Alta Complejidad en Valledupar",
  description:
    "Institución líder en Valledupar con más de 20 años brindando servicios de salud de mediana y alta complejidad. Urgencias 24/7, cirugías, UCI, CEMIC y más.",
  keywords:
    "OHI, salud, Valledupar, clínica, urgencias, UCI, cirugía, alta complejidad, Cesar, Colombia",
  authors: [{ name: "OHI – Organización Humana Integral" }],
  icons: {
    icon: "/LOGOS/LOGO.PNG",
    shortcut: "/LOGOS/LOGO.PNG",
    apple: "/LOGOS/LOGO.PNG",
  },
  openGraph: {
    title: "OHI – Organización Humana Integral",
    description:
      "Servicios de salud de mediana y alta complejidad en Valledupar. Urgencias 24/7, cirugías, UCI adultos y neonatal, intervencionismo cardiovascular.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
      <head>
      </head>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}
