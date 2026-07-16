import type { Metadata, Viewport } from "next";
import { Manrope, Bebas_Neue, Gloock } from "next/font/google";
import "@/styles/globals.css";
import { RootProviders } from "@/components/providers/RootProviders";
import { BackgroundLayers } from "@/components/shared/BackgroundLayers";
import { APP_IDENTITY } from "@/constants/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: APP_IDENTITY.name,
    template: `%s — ${APP_IDENTITY.name}`,
  },
  description: "Industrial Operating Brain — Operations Console",
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable} ${bebas.variable} ${gloock.variable}`}
    >
      <body>
        <BackgroundLayers />
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
