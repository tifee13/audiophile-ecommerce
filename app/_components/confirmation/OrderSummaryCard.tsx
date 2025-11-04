"use client";

import { Doc } from "@/convex/_generated/dataModel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/app/_store/cartStore";

type OrderSummaryCardProps = {
  order: Doc<"orders">;
};

export default function OrderSummaryCard({ order }: OrderSummaryCardProps) {
  const [showAllItems, setShowAllItems] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart); 

  const handleBackToHome = () => {
    clearCart(); 
  };

  const itemsToShow = showAllItems ? order.items : [order.items[0]];
  const hiddenItemsCount = order.items.length - 1;

  return (
    <div className="bg-white rounded-lg p-6 md:p-10 max-w-lg mx-auto">
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

      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">

        <div className="bg-gray-light p-6 flex-grow">
          {itemsToShow.map((item) => (
            <div key={item.productId} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.shortName}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold">{item.shortName}</p>
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

        <div className="bg-black-dark text-white p-6 md:w-2/5">
          <span className="uppercase text-white text-opacity-50">
            Grand Total
          </span>
          <p className="text-lg font-bold">
            $ {order.grandTotal.toLocaleString()}
          </p>
        </div>
      </div>

      <Link
        href="/"
        onClick={handleBackToHome}
        className="bg-orange-primary text-white hover:bg-orange-light
                       w-full block py-3.5 uppercase text-xs font-bold 
                       tracking-wider transition-colors text-center mt-8"
      >
        Back to Home
      </Link>
    </div>
  );
}