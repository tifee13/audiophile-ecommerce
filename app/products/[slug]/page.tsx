// app/products/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import GoBackLink from "@/app/_components/shared/GoBackLink";
import ProductDetails from "@/app/_components/products/ProductDetails";
import ProductFeatures from "@/app/_components/products/ProductFeatures";
import ProductGallery from "@/app/_components/products/ProductGallery";
import RelatedProducts from "@/app/_components/products/RelatedProducts";
import HomeCategories from "@/app/_components/home/HomeCategories";
import BestGear from "@/app/_components/shared/BestGear";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = useQuery(api.products.getProductBySlug, { slug });

  // Handle Loading State
  if (product === undefined) {
    return (
      <main>
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <GoBackLink />
          <p className="mt-10">Loading...</p>
        </div>
      </main>
    );
  }

  // Handle Not Found State
  if (product === null) {
    return (
      <main>
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <GoBackLink />
          <p className="mt-10">Product not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* This is the main content container.
        We apply all padding and max-width here.
        The gaps between sections are now responsive.
      */}
      <div
        className="
          mx-auto max-w-[1110px] 
          px-6 md:px-10 xl:px-0
          
          flex flex-col
          
          /* Responsive Gaps (Mobile: 88px, Tablet/Desktop: 120px) */
          gap-[88px]
          md:gap-[120px]
          
          /* Vertical Padding */
          pt-4 pb-[88px]
          md:pt-8 md:pb-[120px]
          lg:pt-20 lg:pb-[160px]
        "
      >
        <div>
          <GoBackLink />
        </div>

        <ProductDetails product={product} />

        <ProductFeatures
          features={product.features}
          includedItems={product.includedItems}
        />

        <ProductGallery
          images={{
            first: {
              mobile: product.gallery_first_mobile,
              tablet: product.gallery_first_tablet,
              desktop: product.gallery_first_desktop,
            },
            second: {
              mobile: product.gallery_second_mobile,
              tablet: product.gallery_second_tablet,
              desktop: product.gallery_second_desktop,
            },
            third: {
              mobile: product.gallery_third_mobile,
              tablet: product.gallery_third_tablet,
              desktop: product.gallery_third_desktop,
            },
          }}
        />

        <RelatedProducts relatedSlugs={product.relatedProducts} />

        <HomeCategories />

        <BestGear />
      </div>
    </main>
  );
}