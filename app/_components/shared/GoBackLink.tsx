// app/_components/shared/GoBackLink.tsx
"use client";

import { useRouter } from "next/navigation";

export default function GoBackLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-black-dark text-opacity-50 text-base font-medium 
                 hover:text-orange-primary transition-colors"
    >
      Go Back
    </button>
  );
}