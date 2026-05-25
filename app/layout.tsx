import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHI - Organización Humana Integral",
  description: "Clínica de salud integral en Bogotá. Medicina general, especialistas, odontología, psicología y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
