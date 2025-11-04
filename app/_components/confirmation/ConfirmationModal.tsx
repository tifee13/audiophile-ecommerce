"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import OrderSummaryCard from "./OrderSummaryCard";

type ConfirmationModalProps = {
  orderId: Id<"orders">;
};

export default function ConfirmationModal({ orderId }: ConfirmationModalProps) {
  const order = useQuery(api.orders.getOrderById, { orderId });

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-6">
      {!order && (
        <div className="bg-white rounded-lg p-10 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold uppercase">Loading Order...</h1>
        </div>
      )}

      {order && <OrderSummaryCard order={order} />}
    </div>
  );
}