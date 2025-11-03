// convex/products.ts
import { mutation, query } from "./_generated/server";
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
      "Featuring a new generation 50mm driver with a bio-cellulose diaphragm, the XX99 Mark II headphones deliver uncompromising audio performance. The natural materials provide optimal acoustic properties, while the robust construction ensures long-lasting durability. Enjoy a spacious, detailed soundstage that brings your music to life.\n\nThe advanced acoustic design aims to provide a natural soundscape with faithful sound reproduction. These headphones are engineered to minimise distortion and ensure accurate sound across the entire frequency range. The bespoke drivers provide a flat frequency response, making them ideal for audiophiles and professional audio engineers alike.",
    includedItems: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    categoryImage_mobile:
      "/assets/product-xx99-mark-ii-headphones/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-xx99-mark-ii-headphones/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-xx99-mark-ii-headphones/desktop/image-category-page-preview.jpg",
    productImage_mobile:
      "/assets/product-xx99-mark-ii-headphones/mobile/image-product.jpg",
    productImage_tablet:
      "/assets/product-xx99-mark-ii-headphones/tablet/image-product.jpg",
    productImage_desktop:
      "/assets/product-xx99-mark-ii-headphones/desktop/image-product.jpg",
    gallery_first_mobile:
      "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-1.jpg",
    gallery_first_tablet:
      "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-2.jpg",
    gallery_third_mobile:
      "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-3.jpg",
    gallery_third_tablet:
      "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "xx99-mark-i-headphones",
      "xx59-headphones",
      "zx9-speaker",
    ],
  },
  {
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-i-headphones",
    category: "headphones",
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to withstand daily use.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber.",
    includedItems: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    categoryImage_mobile:
      "/assets/product-xx99-mark-i-headphones/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-xx99-mark-i-headphones/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-xx99-mark-i-headphones/desktop/image-category-page-preview.jpg",
    productImage_mobile:
      "/assets/product-xx99-mark-i-headphones/mobile/image-product.jpg",
    productImage_tablet:
      "/assets/product-xx99-mark-i-headphones/tablet/image-product.jpg",
    productImage_desktop:
      "/assets/product-xx99-mark-i-headphones/desktop/image-product.jpg",
    gallery_first_mobile:
      "/assets/product-xx99-mark-i-headphones/mobile/image-gallery-1.jpg",
    gallery_first_tablet:
      "/assets/product-xx99-mark-i-headphones/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-xx99-mark-i-headphones/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-xx99-mark-i-headphones/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-xx99-mark-i-headphones/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-xx99-mark-i-headphones/desktop/image-gallery-2.jpg",
    gallery_third_mobile:
      "/assets/product-xx99-mark-i-headphones/mobile/image-gallery-3.jpg",
    gallery_third_tablet:
      "/assets/product-xx99-mark-i-headphones/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-xx99-mark-i-headphones/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "xx99-mark-ii-headphones",
      "xx59-headphones",
      "zx9-speaker",
    ],
  },
  {
    name: "XX59 Headphones",
    slug: "xx59-headphones",
    category: "headphones",
    new: false,
    price: 899,
    description:
      "Enjoy your audio private and distraction-free with the XX59 headphones. It is the perfect companion for mixing, mastering, and critical listening in a studio environment.",
    features:
      "These headphones have been created from the ground up with professionals in mind. The sturdy construction and robust materials mean that they can withstand the rigors of travel, studio use, and continuous daily wear.\n\nThe comfort-enhancing design provides a tight seal, which isolates noise and prevents sound leakage. This ensures mathematically precise audio reproduction. The XX59 is built for critical listening and is key for sound engineers, music producers, and audiophiles who need critical accuracy in a closed-back headphone design.",
    includedItems: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    categoryImage_mobile:
      "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    productImage_mobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
    productImage_tablet: "/assets/product-xx59-headphones/tablet/image-product.jpg",
    productImage_desktop:
      "/assets/product-xx59-headphones/desktop/image-product.jpg",
    gallery_first_mobile:
      "/assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
    gallery_first_tablet:
      "/assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
    gallery_third_mobile:
      "/assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
    gallery_third_tablet:
      "/assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "xx99-mark-ii-headphones",
      "xx99-mark-i-headphones",
      "zx9-speaker",
    ],
  },
  {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    category: "speakers",
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to hear every detail in your music.",
    includedItems: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "10m optical cable" },
    ],
    categoryImage_mobile:
      "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    productImage_mobile: "/assets/product-zx9-speaker/mobile/image-product.jpg",
    productImage_tablet: "/assets/product-zx9-speaker/tablet/image-product.jpg",
    productImage_desktop: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    gallery_first_mobile: "/assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
    gallery_first_tablet: "/assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
    gallery_third_mobile: "/assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
    gallery_third_tablet: "/assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "zx7-speaker",
      "xx99-mark-i-headphones",
      "xx59-headphones",
    ],
  },
  {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    category: "speakers",
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the pinnacle of acoustic reproduction.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower distortion and improve clarity. Its larger driver area means simple, robust construction for greater reliability.\n\nA two-way front panel design gives you structural rigidity, while silver-coated OFC copper leads ensure faint audio signals are transmitted clearly. High quality sound is ensured by using OFC drivers and Mechanical Damping Frame structure as well. This minimizes sound degradation and resonance distortion.",
    includedItems: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" },
    ],
    categoryImage_mobile:
      "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    productImage_mobile: "/assets/product-zx7-speaker/mobile/image-product.jpg",
    productImage_tablet: "/assets/product-zx7-speaker/tablet/image-product.jpg",
    productImage_desktop: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    gallery_first_mobile: "/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
    gallery_first_tablet: "/assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
    gallery_third_mobile: "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
    gallery_third_tablet: "/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "zx9-speaker",
      "xx99-mark-i-headphones",
      "xx59-headphones",
    ],
  },
  {
    name: "YX1 Wireless Earphones",
    slug: "yx1-earphones",
    category: "earphones",
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unparalleled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional sound quality.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 31 hours with the charging case. Combined with dynamic range driver technology, you’ll get a crystal clear sound experience that truly brings you closer to your music.",
    includedItems: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" },
    ],
    categoryImage_mobile:
      "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
    categoryImage_tablet:
      "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
    categoryImage_desktop:
      "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    productImage_mobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
    productImage_tablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
    productImage_desktop:
      "/assets/product-yx1-earphones/desktop/image-product.jpg",
    gallery_first_mobile:
      "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
    gallery_first_tablet:
      "/assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
    gallery_first_desktop:
      "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
    gallery_second_mobile:
      "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
    gallery_second_tablet:
      "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
    gallery_second_desktop:
      "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
    gallery_third_mobile:
      "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
    gallery_third_tablet:
      "/assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
    gallery_third_desktop:
      "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
    relatedProducts: [
      "xx99-mark-i-headphones",
      "xx59-headphones",
      "zx9-speaker",
    ],
  },
];

// --- The Mutation ---
// --- The Mutation ---
export const seedProducts = mutation({
  handler: async (ctx) => {
    // 1. Get all existing products
    const existingProducts = await ctx.db.query("products").collect();

    // 2. Delete all of them
    console.log(`Deleting ${existingProducts.length} existing products...`);
    for (const product of existingProducts) {
      await ctx.db.delete(product._id);
    }
    console.log("Existing products deleted.");

    // 3. Insert the new, complete data
    console.log("Seeding database with 6 new products...");
    for (const product of SEED_DATA) {
      await ctx.db.insert("products", product);
    }
    
    console.log("Database seeded successfully!");
    return "Database seeded successfully!";
  },
});

// --- Query to get a product by its slug ---
export const getProductBySlug = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    // Query the 'by_slug' index we defined in our schema
    const product = await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first(); // Get the first (and only) matching product

    return product;
  },
});