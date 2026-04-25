import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GP Metalware | Custom POP Display Manufacturer | 東莞展示架工廠",
  description:
    "Professional POP display factory in Dongguan, China. 300 workers specializing in custom metal, wood, and acrylic retail display stands. OEM/ODM manufacturing for global brands. 專業定制POP展示架生產廠家，五金、木、亞克力展示架。",
  keywords:
    "China POP display manufacturer,custom retail display factory,metal wood acrylic POP stand supplier,Dongguan display factory,OEM POP display manufacturer,東莞展示架工廠,定制POP展示架,五金亞克力木展示架,零售陳列架生產廠家",
  authors: [{ name: "GP Metalware" }],
  creator: "GP Metalware",
  robots: "index, follow",
  openGraph: {
    title: "GP Metalware | Custom POP Display Manufacturer",
    description:
      "Professional POP display factory in Dongguan, China. Custom metal, wood, and acrylic retail display stands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
