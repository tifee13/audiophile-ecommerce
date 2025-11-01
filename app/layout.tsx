// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./_components/ConvexClientProvider";
import Header from "./_components/layout/Header"; // 1. Import Header
import Footer from "./_components/layout/Footer"; // 2. Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <body className={inter.className}>
        <ConvexClientProvider>
          {/* We add 'flex flex-col min-h-screen' to ensure the
              footer stays at the bottom of the page */}
          <div className="flex flex-col min-h-screen"> 
            <Header />        {/* 3. Add Header */}
            <main>{children}</main> {/* 4. Main content goes here */}
            <Footer />        {/* 5. Add Footer */}
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}