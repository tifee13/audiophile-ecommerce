"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./_components/ConvexClientProvider";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import { useCartStore } from "./_store/cartStore";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isCartOpen = useCartStore((state) => state.isOpen);
  return (
    <html lang="en" className={isCartOpen ? "overflow-hidden" : ""}>
      <body className={manrope.className}>
          <ConvexClientProvider>
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