import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHI – Organización Humana Integral | Salud de Alta Complejidad en Valledupar",
  description:
    "Institución líder en Valledupar con más de 20 años brindando servicios de salud de mediana y alta complejidad. Urgencias 24/7, cirugías, UCI, CEMIC y más.",
  keywords:
    "OHI, salud, Valledupar, clínica, urgencias, UCI, cirugía, alta complejidad, Cesar, Colombia",
  authors: [{ name: "OHI – Organización Humana Integral" }],
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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
