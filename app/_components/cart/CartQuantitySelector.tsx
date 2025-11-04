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
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = () => {
    updateQuantity(productId, quantity + 1);
  };

  const decrement = () => {

    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    } else {

       updateQuantity(productId, quantity - 1);
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