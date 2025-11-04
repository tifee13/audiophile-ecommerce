"use client";

import { useCartStore } from "@/app/_store/cartStore";
import Image from "next/image";
import Link from "next/link";
import CartQuantitySelector from "./CartQuantitySelector";

export default function CartModal() {
  const { items, isOpen, toggleCart, clearCart } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40"
      onClick={toggleCart}
    >
      <div className="container mx-auto pt-24">
        <div
          className="bg-white rounded-lg shadow-lg p-8
                     ml-auto max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
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
                  <CartQuantitySelector
                    productId={item.productId}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center my-8">
            <span className="text-black-dark text-opacity-50 uppercase">
              Total
            </span>
            <span className="text-lg font-bold">
              $ {total.toLocaleString()}
            </span>
          </div>

          <Link
            href="/checkout"
            onClick={toggleCart} 
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