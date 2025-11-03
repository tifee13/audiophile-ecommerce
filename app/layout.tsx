// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./_components/ConvexClientProvider";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Audiophile E-commerce",
  description: "Pixel-perfect e-commerce experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
          <ConvexClientProvider>
          {/* This div ensures the footer stays at the bottom */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}