// convex/products.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// This is the data for one product.
// You will need to copy this structure and fill it out for ALL your products
// from the Figma design.
const SEED_DATA = [
  {
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-ii-headphones",
    category: "headphones",
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II Headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a new-generation 50mm driver... (add the full features text here)",
    includedItems: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    // --- IMAGES ---
    // We'll use placeholder paths for now.
    // We will replace these with actual paths to your /public folder later.
    categoryImage_mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-category-page-preview.jpg",
    categoryImage_tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-category-page-preview.jpg",
    categoryImage_desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-category-page-preview.jpg",

    productImage_mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-product.jpg",
    productImage_tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-product.jpg",
    productImage_desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-product.jpg",

    gallery_first_mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-1.jpg",
    gallery_first_tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-1.jpg",
    gallery_first_desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-1.jpg",

    gallery_second_mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-2.jpg",
    gallery_second_tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-2.jpg",
    gallery_second_desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-2.jpg",

    gallery_third_mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-3.jpg",
    gallery_third_tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-3.jpg",
    gallery_third_desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-3.jpg",

    relatedProducts: [
      "xx99-mark-i-headphones",
      "xx59-headphones",
      "zx9-speaker",
    ],
  },
  // TODO: Add your other products here...
  // {
  //   name: "XX99 Mark I Headphones",
  //   slug: "xx99-mark-i-headphones",
  //   ...
  // },
];

// --- The Mutation ---
export const seedProducts = mutation({
  handler: async (ctx) => {
    // Check if the database is already seeded
    const existingProducts = await ctx.db.query("products").collect();
    if (existingProducts.length > 0) {
      console.log("Database already seeded. Skipping.");
      return "Database already seeded.";
    }

    // If not seeded, insert the data
    console.log("Seeding database...");
    for (const product of SEED_DATA) {
      await ctx.db.insert("products", product);
    }
    console.log("Database seeded successfully!");
    return "Database seeded successfully!";
  },
});