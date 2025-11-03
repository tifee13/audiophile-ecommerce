// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define the schema
export default defineSchema({
  // == Products Table ==
  // Stores the product catalog information.
  products: defineTable({
    name: v.string(), // "XX99 Mark II Headphones"
    slug: v.string(), // "xx99-mark-ii-headphones"
    category: v.string(), // "headphones", "speakers", "earphones"
    new: v.boolean(), // Is it a "NEW PRODUCT"?
    price: v.number(), // e.g., 2999
    description: v.string(), // The long product description
    features: v.string(), // The "FEATURES" text block
    
    // An array of objects, where each object has a quantity and item name
    // e.g., [{ quantity: 1, item: "Headphone unit" }, { quantity: 2, item: "Replacement earcups" }]
    includedItems: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),

    // Storing image URLs for different screen sizes
    categoryImage_mobile: v.string(),
    categoryImage_tablet: v.string(),
    categoryImage_desktop: v.string(),

    productImage_mobile: v.string(),
    productImage_tablet: v.string(),
    productImage_desktop: v.string(),

    gallery_first_mobile: v.string(),
    gallery_first_tablet: v.string(),
    gallery_first_desktop: v.string(),

    gallery_second_mobile: v.string(),
    gallery_second_tablet: v.string(),
    gallery_second_desktop: v.string(),

    gallery_third_mobile: v.string(),
    gallery_third_tablet: v.string(),
    gallery_third_desktop: v.string(),
    
    // Storing slugs of "you may also like" products
    relatedProducts: v.array(v.string()), 

  }).index("by_slug", ["slug"]), // Add an index to query products by their slug efficiently

  
  // == Orders Table ==
  // Stores all customer order information.
  orders: defineTable({
    // Customer Details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping Details
    shippingAddress: v.string(),
    shippingZip: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),
    
    // Payment Details
    paymentMethod: v.string(), // "e-Money" or "Cash on Delivery"

    // Purchased Items
    // An array of objects representing the items in the cart
    // e.g., [{ productId: "id123", name: "XX99", price: 2999, quantity: 1 }]
    items: v.array(
      v.object({
        productId: v.id("products"), // A reference to a product
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(), // Image URL for the product
      })
    ),

    // Totals
    subtotal: v.number(),
    shippingCost: v.number(),
    vat: v.number(), // Value Added Tax
    grandTotal: v.number(),

    // Order Status
    orderStatus: v.string(), // e.g., "Pending", "Confirmed", "Shipped"
    
    // We don't need a timestamp field, Convex adds `_creationTime` automatically.
  }),
});