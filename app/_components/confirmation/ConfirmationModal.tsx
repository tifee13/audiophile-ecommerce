// app/_components/confirmation/ConfirmationModal.tsx
"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import OrderSummaryCard from "./OrderSummaryCard";

type ConfirmationModalProps = {
  orderId: Id<"orders">;
};

export default function ConfirmationModal({ orderId }: ConfirmationModalProps) {
  // Use the useQuery hook to fetch the order data
  const order = useQuery(api.orders.getOrderById, { orderId });

  // This is the full-screen modal overlay
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-6">
      {/* Show a loading box while the order data is fetched */}
      {!order && (
        <div className="bg-white rounded-lg p-10 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold uppercase">Loading Order...</h1>
        </div>
      )}

      {/* Show the card once the order data is ready */}
      {order && <OrderSummaryCard order={order} />}
    </div>
  );
}