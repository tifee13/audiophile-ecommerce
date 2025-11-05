// app/_components/cart/CartIndicator.tsx
"use client";

import Image from "next/image";
import { useCartStore } from "@/app/_store/cartStore";

type CartIndicatorProps = {
  toggleCart: () => void;
};

export default function CartIndicator({ toggleCart }: CartIndicatorProps) {
  // This hook ensures the component updates when cart state changes
  const cartItemsCount = useCartStore((state) => state.items.length);
  
  return (
    <button
      onClick={toggleCart}
      className="relative hover:opacity-70 transition-opacity"
      aria-label="View cart"
    >
      <Image
        src="/assets/shared/icon-cart.svg"
        width={23}
        height={20}
        alt="Shopping cart icon"
        aria-hidden="true"
      />
      {/* Badge is now always rendered if count > 0 */}
      {cartItemsCount > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-orange-primary 
                     text-white text-xs font-bold rounded-full 
                     w-5 h-5 flex items-center justify-center"
        >
          {cartItemsCount}
        </span>
      )}
    </button>
  );
}