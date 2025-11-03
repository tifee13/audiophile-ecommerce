// app/_components/confirmation/OrderSummaryCard.tsx
"use client";

import { Doc } from "@/convex/_generated/dataModel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/app/_store/cartStore"; // 1. Import the cart store

type OrderSummaryCardProps = {
  order: Doc<"orders">;
};

export default function OrderSummaryCard({ order }: OrderSummaryCardProps) {
  const [showAllItems, setShowAllItems] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart); // 2. Get the clearCart function

  const handleBackToHome = () => {
    clearCart(); // 3. Call clearCart when the button is clicked
  };

  const itemsToShow = showAllItems ? order.items : [order.items[0]];
  const hiddenItemsCount = order.items.length - 1;

  return (
    <div className="bg-white rounded-lg p-6 md:p-10 max-w-lg mx-auto">
      {/* 1. Thank You Header */}
      <Image
        src="/assets/shared/icon-order-confirmation.svg"
        width={64}
        height={64}
        alt=""
        className="mb-6"
      />
      <h1 className="text-3xl font-bold uppercase mb-4">
        Thank you
        <br />
        for your order
      </h1>
      <p className="text-black-dark text-opacity-50 mb-6">
        You will receive an email confirmation shortly.
      </p>

      {/* 2. Order Details */}
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        {/* 2a. Items List */}
        <div className="bg-gray-light p-6 flex-grow">
          {itemsToShow.map((item) => (
            <div key={item.productId} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-black-dark text-opacity-50">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className="font-bold text-black-dark text-opacity-50">
                x{item.quantity}
              </span>
            </div>
          ))}

          {/* Toggle Button */}
          {order.items.length > 1 && (
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="text-xs font-bold text-black-dark text-opacity-50
                             w-full pt-4 mt-4 border-t border-gray-dark"
            >
              {showAllItems
                ? "View less"
                : `and ${hiddenItemsCount} other item(s)`}
            </button>
          )}
        </div>

        {/* 2b. Grand Total */}
        <div className="bg-black-dark text-white p-6 md:w-2/5">
          <span className="uppercase text-white text-opacity-50">
            Grand Total
          </span>
          <p className="text-lg font-bold">
            $ {order.grandTotal.toLocaleString()}
          </p>
        </div>
      </div>

      {/* 4. Back to Home Button */}
      <Link
        href="/"
        onClick={handleBackToHome} // <-- 4. Add the onClick handler here
        className="bg-orange-primary text-white hover:bg-orange-light
                       w-full block py-3.5 uppercase text-xs font-bold 
                       tracking-wider transition-colors text-center mt-8"
      >
        Back to Home
      </Link>
    </div>
  );
}