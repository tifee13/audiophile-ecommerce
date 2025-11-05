import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    new: v.boolean(), 
    price: v.number(),
    shortName: v.string(),
    description: v.string(), 
    features: v.string(), 
    
    
    includedItems: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),

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
    
    relatedProducts: v.array(v.string()), 

  }).index("by_slug", ["slug"]), 
  orders: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    shippingAddress: v.string(),
    shippingZip: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),
    
    paymentMethod: v.string(),

    items: v.array(
      v.object({
        productId: v.id("products"),
        name: v.string(),
        shortName: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),

    subtotal: v.number(),
    shippingCost: v.number(),
    vat: v.number(),
    grandTotal: v.number(),

    orderStatus: v.string(),
    
  }),
});