// convex/orders.ts
import { action, internalQuery, mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { api, internal } from "./_generated/api";

// --- Resend Imports ---
import { Resend } from "resend";
import ConfirmationEmail from "./emails/ConfirmationEmail";
import { render } from "@react-email/render";

// --- Define our costs (must match the client) ---
const SHIPPING_COST = 50;
const VAT_RATE = 0.2; // 20%

// --- Mutation to create the order ---
export const createOrder = mutation({
  args: {
    formData: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
      paymentMethod: v.union(v.literal("eMoney"), v.literal("cashOnDelivery")),
      
      // --- ADD THESE TWO LINES ---
      eMoneyNumber: v.optional(v.string()),
      eMoneyPin: v.optional(v.string()),
    }),
    // And a list of cart items
    cartItems: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
      })
    ),
  },

  handler: async (ctx, args) => {
    let subtotal = 0;
    const finalOrderItems = [];

    // 1. Loop over cart items to securely calculate total
    for (const item of args.cartItems) {
      // Fetch the product from the database
      const product = await ctx.db.get(item.productId);

      // Check if product exists
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }

      // Add to subtotal
      subtotal += product.price * item.quantity;

      // Add to our final list of items (with database-verified price/name/image)
      finalOrderItems.push({
        productId: item.productId,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.productImage_mobile, // We added this for the confirmation
      });
    }

    // 2. Calculate final totals on the server
    const vat = subtotal * VAT_RATE;
    const grandTotal = subtotal + SHIPPING_COST;

    // 3. Create the order object
    const orderData = {
      // Customer Details
      customerName: args.formData.name,
      customerEmail: args.formData.email,
      customerPhone: args.formData.phone,
      // Shipping Details
      shippingAddress: args.formData.address,
      shippingZip: args.formData.zip,
      shippingCity: args.formData.city,
      shippingCountry: args.formData.country,
      // Payment
      paymentMethod: args.formData.paymentMethod,
      // Items & Totals (server-verified)
      items: finalOrderItems,
      subtotal: subtotal,
      shippingCost: SHIPPING_COST,
      vat: vat,
      grandTotal: grandTotal,
      // Status
      orderStatus: "Pending",
    };

    // 4. Insert the order into the database
    const newOrderId = await ctx.db.insert("orders", orderData);

    // 5. SCHEDULE THE EMAIL ACTION
    await ctx.scheduler.runAfter(0, api.orders.sendConfirmationEmail, {
      orderId: newOrderId,
      customerEmail: args.formData.email,
      customerName: args.formData.name,
    });

    // 6. Return the new order's ID
    return newOrderId;
  },
});

// --- Query to get a single order by its ID (for the client) ---
export const getOrderById = query({
  args: {
    orderId: v.id("orders"), // The argument is the ID of the order
  },
  handler: async (ctx, args) => {
    // Fetch the order from the database
    const order = await ctx.db.get(args.orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    return order;
  },
});

// --- Internal Query (for our Action) ---
export const getOrderByIdInternal = internalQuery({
  args: {
    orderId: v.id("orders"),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  },
});

// --- Action to send the confirmation email ---
export const sendConfirmationEmail = action({
  args: {
    orderId: v.id("orders"),
    customerEmail: v.string(),
    customerName: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Get the Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set. Skipping email.");
      return; // Don't throw error, just log it
    }
    const resend = new Resend(resendApiKey);

    // 2. Fetch the full order details
    const order = await ctx.runQuery(internal.orders.getOrderByIdInternal, {
      orderId: args.orderId,
    });
    if (!order) {
      console.error(`Order ${args.orderId} not found for email.`);
      return;
    }

    // 3. Get the URL of our deployed app
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    // 4. Render our React email template to an HTML string
    const emailHtml = await render(
      <ConfirmationEmail
        order={order}
        orderId={args.orderId} // Use args.orderId
        appUrl={appUrl}
      />
    );

    // 5. Send the email
    try {
      // The `send` function takes ONE argument (an object)
      await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>", // Use the Resend test domain
        to: [args.customerEmail], // Send to the customer
        subject: `Audiophile Order Confirmation (${args.orderId})`, // Use args.orderId
        html: emailHtml,
      });
      console.log(`Email sent for order ${args.orderId}`);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  },
});