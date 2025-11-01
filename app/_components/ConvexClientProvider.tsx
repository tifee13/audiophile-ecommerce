"use client"; // This component must be a client component

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react"; // Use the standard provider

// Initialize the Convex client
const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

// This component wraps our entire app
export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // Use the standard ConvexProvider
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}