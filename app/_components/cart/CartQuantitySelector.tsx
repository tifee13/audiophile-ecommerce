// app/_components/cart/CartQuantitySelector.tsx
"use client";

import { useCartStore } from "@/app/_store/cartStore";

type CartQuantitySelectorProps = {
  productId: string;
  quantity: number;
};

export default function CartQuantitySelector({
  productId,
  quantity,
}: CartQuantitySelectorProps) {
  // Get the update function from our store
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = () => {
    updateQuantity(productId, quantity + 1);
  };

  const decrement = () => {
    // If quantity is 1, it will be removed by the update function
    // (or you can choose to remove it here)
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    } else {
      // Optional: or just stop at 1
      // updateQuantity(productId, 1);

      // Let's remove the item if quantity goes to 0
       updateQuantity(productId, quantity - 1); // This will be handled by store logic later if < 1
    }
  };

  return (
    <div className="bg-gray-light flex items-center justify-between w-24 px-4 py-2">
      <button
        onClick={decrement}
        className="text-black-dark text-opacity-25 hover:text-orange-primary"
      >
        -
      </button>
      <span className="font-bold text-xs uppercase">{quantity}</span>
      <button
        onClick={increment}
        className="text-black-dark text-opacity-25 hover:text-orange-primary"
      >
        +
      </button>
    </div>
  );
}