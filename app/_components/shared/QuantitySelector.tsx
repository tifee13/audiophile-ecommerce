// app/_components/shared/QuantitySelector.tsx
"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex">
      {/* Quantity Controls */}
      <div className="bg-gray-light flex items-center justify-between w-32 px-4 py-3.5">
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

      {/* Add to Cart Button (We'll use our existing Button component styles) */}
      <button
        className="bg-orange-primary text-white hover:bg-orange-light 
                   inline-block px-7 py-3.5 uppercase text-xs font-bold 
                   tracking-wider transition-colors ml-4"
      >
        Add to Cart
      </button>
    </div>
  );
}