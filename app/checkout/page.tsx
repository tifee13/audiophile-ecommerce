"use client";

import { useState } from "react";
import GoBackLink from "../_components/shared/GoBackLink";
import CheckoutForm from "../_components/checkout/CheckoutForm";
import CheckoutSummary from "../_components/checkout/CheckoutSummary";
import ConfirmationModal from "../_components/confirmation/ConfirmationModal";

// --- Convex & Form Imports ---
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { TCheckoutSchema } from "../_lib/validators";
import { useCartStore } from "../_store/cartStore";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to hold the ID of the completed order
  const [completedOrderId, setCompletedOrderId] = useState<Id<"orders"> | null>(
    null
  );

  const createOrder = useMutation(api.orders.createOrder);
  const { items: cartItems } = useCartStore(); // Removed clearCart

  // --- The Main Submit Handler ---
  const handleSubmit = async (data: TCheckoutSchema) => {
    if (cartItems.length === 0) {
      // Don't submit if cart is empty
      console.error("Cart is empty.");
      return;
    }

    setIsSubmitting(true);

    // 1. Format cart items for the mutation
    const formattedCartItems = cartItems.map((item) => ({
      productId: item.productId as Id<"products">, // Cast string to Id
      quantity: item.quantity,
    }));

    try {
      // 2. Call the mutation
      const newOrderId = await createOrder({
        formData: data,
        cartItems: formattedCartItems,
      });

      // 3. On Success
      console.log("Order created:", newOrderId);
      
      // 4. Set the order ID to show the modal
      setCompletedOrderId(newOrderId);

    } catch (error) {
      console.error("Failed to create order:", error);
      // TODO: Show an error to the user
      alert("Failed to create order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Wrap everything in a relative container for the modal
    <div className="relative">
      <main className="bg-gray-medium">
        <div
          className="
            mx-auto max-w-[1110px] 
            px-6 md:px-10 xl:px-0
            pt-24 pb-24
          "
        >
          <div className="py-8">
            <GoBackLink />
          </div>

          <div className="flex flex-col xl:flex-row xl:gap-8">
            {/* Pass the submit handler to the form */}
            <div className="w-full xl:w-2/3 bg-white rounded-lg p-6 md:p-8">
              <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>
              <CheckoutForm onFormSubmit={handleSubmit} />
            </div>

            {/* Pass the loading state to the summary */}
            <div className="w-full xl:w-1/3 bg-white rounded-lg p-6 md:p-8 h-fit mt-8 xl:mt-0">
              <CheckoutSummary isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      </main>

      {/* Conditionally render the modal on top */}
      {completedOrderId && <ConfirmationModal orderId={completedOrderId} />}
    </div>
  );
}