// app/_components/cart/CartModal.tsx
"use client";

import { useCartStore } from "@/app/_store/cartStore";
import Image from "next/image";
import Link from "next/link";
import CartQuantitySelector from "./CartQuantitySelector";

export default function CartModal() {
  // Get all the state and actions we need from the store
  const { items, isOpen, toggleCart, clearCart } = useCartStore();

  // Calculate the total price
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Don't render anything if the cart is closed
  if (!isOpen) return null;

  return (
    // 1. Full-screen overlay
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40"
      onClick={toggleCart} // Close when clicking the background
    >
      {/* 2. The Cart Modal content
          We add 'pt-24' for the header
      */}
      <div className="container mx-auto pt-24">
        <div
          className="bg-white rounded-lg shadow-lg p-8
                     ml-auto max-w-sm" // Position on the right
          onClick={(e) => e.stopPropagation()} // Stop background click
        >
          {/* 3. Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider">
              Cart ({items.length})
            </h2>
            <button
              onClick={clearCart}
              className="text-black-dark text-opacity-50 underline hover:text-orange-primary"
            >
              Remove all
            </button>
          </div>

          {/* 4. Cart Items */}
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.productId} className="flex items-center justify-between">
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
                  <CartQuantitySelector
                    productId={item.productId}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>
          )}

          {/* 5. Total */}
          <div className="flex justify-between items-center my-8">
            <span className="text-black-dark text-opacity-50 uppercase">
              Total
            </span>
            <span className="text-lg font-bold">
              $ {total.toLocaleString()}
            </span>
          </div>

          {/* 6. Checkout Button */}
          <Link
            href="/checkout"
            onClick={toggleCart} // Close modal on click
            className="bg-orange-primary text-white hover:bg-orange-light
                       w-full block py-3.5 uppercase text-xs font-bold 
                       tracking-wider transition-colors text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}