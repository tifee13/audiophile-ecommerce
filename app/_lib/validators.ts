import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  address: z.string().min(5, "Address is required"),
  zip: z.string().min(4, "Invalid ZIP code"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),

  paymentMethod: z.enum(["eMoney", "cashOnDelivery"]),

  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

export type TCheckoutSchema = z.infer<typeof checkoutSchema>;