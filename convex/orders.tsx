import { mutation, query, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { api, internal } from "./_generated/api";

const SHIPPING_COST = 50;
const VAT_RATE = 0.2;

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
      eMoneyNumber: v.optional(v.string()),
      eMoneyPin: v.optional(v.string()),
    }),
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
    for (const item of args.cartItems) {
      const product = await ctx.db.get(item.productId);
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }
      subtotal += product.price * item.quantity;
      
      finalOrderItems.push({
        productId: item.productId,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        quantity: item.quantity,
        image: product.productImage_mobile,
      });
    }
    
    const vat = subtotal * VAT_RATE;
    const grandTotal = subtotal + SHIPPING_COST;
    const orderData = {
      customerName: args.formData.name,
      customerEmail: args.formData.email,
      customerPhone: args.formData.phone,
      shippingAddress: args.formData.address,
      shippingZip: args.formData.zip,
      shippingCity: args.formData.city,
      shippingCountry: args.formData.country,
      paymentMethod: args.formData.paymentMethod,
      items: finalOrderItems,
      subtotal: subtotal,
      shippingCost: SHIPPING_COST,
      vat: vat,
      grandTotal: grandTotal,
      orderStatus: "Pending",
    };
    const newOrderId = await ctx.db.insert("orders", orderData);

    await ctx.scheduler.runAfter(0, api.email.sendConfirmationEmail, {
      orderId: newOrderId,
      customerEmail: args.formData.email,
      customerName: args.formData.name,
    });

    return newOrderId;
  },
});

export const getOrderById = query({
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