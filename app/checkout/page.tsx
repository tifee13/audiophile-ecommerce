"use client";

import { useState } from "react";
import GoBackLink from "../_components/shared/GoBackLink";
import CheckoutForm from "../_components/checkout/CheckoutForm";
import CheckoutSummary from "../_components/checkout/CheckoutSummary";
import ConfirmationModal from "../_components/confirmation/ConfirmationModal";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { TCheckoutSchema } from "../_lib/validators";
import { useCartStore } from "../_store/cartStore";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState<Id<"orders"> | null>(
    null
  );

  const createOrder = useMutation(api.orders.createOrder);
  const { items: cartItems } = useCartStore();

  const handleSubmit = async (data: TCheckoutSchema) => {
    if (cartItems.length === 0) {
      console.error("Cart is empty.");
      return;
    }

    setIsSubmitting(true);

    const formattedCartItems = cartItems.map((item) => ({
      productId: item.productId as Id<"products">,
      quantity: item.quantity,
    }));

    try {
      const newOrderId = await createOrder({
        formData: data,
        cartItems: formattedCartItems,
      });

      console.log("Order created:", newOrderId);
      
      setCompletedOrderId(newOrderId);

    } catch (error) {
      console.error("Failed to create order:", error);
      alert("Failed to create order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            <div className="w-full xl:w-2/3 bg-white rounded-lg p-6 md:p-8">
              <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>
              <CheckoutForm onFormSubmit={handleSubmit} />
            </div>

            <div className="w-full xl:w-1/3 bg-white rounded-lg p-6 md:p-8 h-fit mt-8 xl:mt-0">
              <CheckoutSummary isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      </main>

      {completedOrderId && <ConfirmationModal orderId={completedOrderId} />}
    </div>
  );
}