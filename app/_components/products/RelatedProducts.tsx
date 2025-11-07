import Image from "next/image";
import Button from "../shared/Button";


const RELATED_PRODUCTS_DATA = {

  "xx99-mark-ii-headphones": {
    name: "XX99 Mark II",
    slug: "xx99-mark-ii-headphones",
    images: {
      mobile: "/assets/shared/mobile/image-xx99-mark-ii-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-ii-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-ii-headphones.jpg",
    },
  },

  "xx99-mark-i-headphones": {
    name: "XX99 Mark I",
    slug: "xx99-mark-i-headphones",
    images: {
      mobile: "/assets/shared/mobile/image-xx99-mark-i-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-i-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-i-headphones.jpg",
    },
  },
  "xx59-headphones": {
    name: "XX59",
    slug: "xx59-headphones",
    images: {
      mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
    },
  },
  "zx9-speaker": {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    images: {
      mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    },
  },
  "zx7-speaker": {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    images: {
      mobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx7-speaker.jpg",
    },
  },
  "yx1-earphones": {
    name: "YX1 Earphones",
    slug: "yx1-earphones",
    images: {
      mobile: "/assets/shared/mobile/image-yx1-earphones.jpg", 
      tablet: "/assets/shared/tablet/image-yx1-earphones.jpg", 
      desktop: "/assets/shared/desktop/image-yx1-earphones.jpg",
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
      <h2 className="text-2xl font-bold uppercase mb-10 md:text-3xl md:mb-14">
        You May Also Like
      </h2>
      
      <div className="flex flex-col gap-14 w-full md:flex-row md:gap-3 lg:gap-[30px]">
        
        {relatedSlugs.map((slug) => {
          const product = RELATED_PRODUCTS_DATA[slug as keyof typeof RELATED_PRODUCTS_DATA];
          if (!product) return null;

          return (
            <div key={slug} className="flex flex-col items-center w-full md:w-1/3">
              
              <div
                className="
                  rounded-lg bg-gray-light w-full 
                  flex items-center justify-center
                  h-[120px]
                  md:h-[318px]
                  lg:w-[350px]
                "
              >
                <Image
                  src={product.images.mobile}
                  width={80}
                  height={104}
                  alt={product.name}
                  className="block md:hidden"
                />
                <Image
                  src={product.images.tablet}
                  width={121}
                  height={159}
                  alt={product.name}
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={product.images.desktop}
                  width={147}
                  height={193}
                  alt={product.name}
                  className="hidden lg:block"
                />
              </div>

              <h3 className="text-2xl font-bold uppercase mt-8 md:mt-10">
                {product.name}
              </h3>
              <div className="mt-8">
                <Button
                  href={`/products/${product.slug}`}
                  label="See Product"
                  variant="primary"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}