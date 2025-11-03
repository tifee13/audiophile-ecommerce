// app/_components/checkout/CheckoutSummary.tsx
"use client";

import { useCartStore } from "@/app/_store/cartStore";
import Image from "next/image";

// --- Define our costs ---
const SHIPPING_COST = 50;
const VAT_RATE = 0.2; // 20%

type CheckoutSummaryProps = {
  isSubmitting: boolean;
};
export default function CheckoutSummary({ isSubmitting }: CheckoutSummaryProps) {
  // ... (useCartStore and calculations remain the same)
  const { items } = useCartStore();
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vat = subtotal * VAT_RATE;
  const grandTotal = subtotal + SHIPPING_COST;


  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-lg font-bold uppercase tracking-wider">Summary</h2>

      {/* 1. Cart Items List */}
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={64}
                  height={64}
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
        </div>
      )}

      {/* 2. Totals Section */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-base uppercase text-black-dark text-opacity-50">
            Subtotal
          </span>
          <span className="text-lg font-bold">
            $ {subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base uppercase text-black-dark text-opacity-50">
            Shipping
          </span>
          <span className="text-lg font-bold">
            $ {SHIPPING_COST.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base uppercase text-black-dark text-opacity-50">
            VAT (Included)
          </span>
          <span className="text-lg font-bold">
            $ {vat.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      {/* 3. Grand Total */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-base uppercase text-black-dark text-opacity-50">
          Grand Total
        </span>
        <span className="text-lg font-bold text-orange-primary">
          $ {grandTotal.toLocaleString()}
        </span>
      </div>

      {/* 4. The Submit Button */}
       <button
        type="submit"
        form="checkout-form"
        disabled={isSubmitting} // 2. Add disabled attribute
        className="bg-orange-primary text-white hover:bg-orange-light
                   w-full block py-3.5 uppercase text-xs font-bold 
                   tracking-wider transition-colors text-center
                   disabled:opacity-50 disabled:cursor-not-allowed" // 3. Add disabled styles
      >
        {isSubmitting ? "Processing..." : "Continue & Pay"}
      </button>
    </div>
  );
}