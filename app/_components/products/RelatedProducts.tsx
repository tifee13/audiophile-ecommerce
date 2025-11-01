// app/_components/products/RelatedProducts.tsx
import Image from "next/image";
import Button from "../shared/Button";

// We'd fetch this data from Convex based on the slugs
const MOCK_RELATED_PRODUCTS = {
  "xx99-mark-i-headphones": {
    name: "XX99 Mark I",
    image: {
      mobile: "/assets/shared/mobile/image-xx99-mark-i-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-i-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-i-headphones.jpg",
    },
  },
  "xx59-headphones": {
    name: "XX59",
    image: {
      mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
    },
  },
  "zx9-speaker": {
    name: "ZX9 Speaker",
    image: {
      mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    },
  },
};

type RelatedProductsProps = {
  relatedSlugs: string[];
};

export default function RelatedProducts({
  relatedSlugs,
}: RelatedProductsProps) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold uppercase mb-10">You May Also Like</h2>
      <div className="flex flex-col gap-14 w-full md:flex-row md:gap-3 lg:gap-8">
        {relatedSlugs.map((slug) => {
          const product = MOCK_RELATED_PRODUCTS[slug as keyof typeof MOCK_RELATED_PRODUCTS];
          if (!product) return null;

          return (
            <div key={slug} className="flex flex-col items-center w-full">
              {/* Image Card */}
              <div className="rounded-lg bg-gray-light w-full flex justify-center py-8 mb-8">
                <Image
                  src={product.image.mobile}
                  width={140}
                  height={120}
                  alt={product.name}
                  className="block md:hidden"
                />
                <Image
                  src={product.image.tablet}
                  width={220}
                  height={180}
                  alt={product.name}
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={product.image.desktop}
                  width={170}
                  height={150}
                  alt={product.name}
                  className="hidden lg:block"
                />
              </div>
              {/* Name & Button */}
              <h3 className="text-2xl font-bold uppercase mb-8">
                {product.name}
              </h3>
              <Button
                href={`/products/${slug}`}
                label="See Product"
                variant="primary"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}