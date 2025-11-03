// app/_lib/validators.ts
import { z } from "zod";

export const checkoutSchema = z.object({
  // Billing Details
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  // Shipping Info
  address: z.string().min(5, "Address is required"),
  zip: z.string().min(4, "Invalid ZIP code"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),

  // Payment Details
  paymentMethod: z.enum(["eMoney", "cashOnDelivery"]),

  // e-Money (optional based on paymentMethod)
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

// This creates a TypeScript type from our schema
export type TCheckoutSchema = z.infer<typeof checkoutSchema>;