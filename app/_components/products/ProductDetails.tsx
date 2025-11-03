// app/_components/products/ProductDetails.tsx
import Image from "next/image";
import QuantitySelector from "../shared/QuantitySelector";
import { Doc } from "@/convex/_generated/dataModel"; // 1. Import Doc type

// 2. Change the props to accept the whole product document
type ProductDetailsProps = {
  product: Doc<"products">;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  // 3. Use the product object for all data
  return (
    <article
      className="flex flex-col items-center gap-8
                 md:flex-row md:gap-16"
    >
      {/* 1. Image Column */}
      <div className="w-full md:w-1/2">
        <Image
          src={product.productImage_mobile}
          width={654}
          height={704}
          alt={product.name}
          className="block md:hidden rounded-lg w-full"
        />
        <Image
          src={product.productImage_tablet}
          width={562}
          height={960}
          alt={product.name}
          className="hidden md:block lg:hidden rounded-lg w-full"
        />
        <Image
          src={product.productImage_desktop}
          width={540}
          height={560}
          alt={product.name}
          className="hidden lg:block rounded-lg w-full"
        />
      </div>

      {/* 2. Text Content Column */}
      <div
        className="w-full md:w-1/2
                    flex flex-col items-start"
      >
        {product.new && (
          <p className="text-sm uppercase tracking-overline text-orange-primary mb-4">
            New Product
          </p>
        )}

        <h1 className="text-3xl font-bold uppercase text-black-dark 
                       md:text-4xl max-w-xs">
          {product.name}
        </h1>

        <p className="text-base font-medium text-black-dark text-opacity-50 my-6">
          {product.description}
        </p>

        <span className="text-lg font-bold tracking-wider mb-8">
          $ {product.price.toLocaleString()}
        </span>

        {/* 3. --- THIS IS THE FINAL FIX --- */}
        {/* Pass the REAL database ID to the cart */}
        <QuantitySelector
          product={{
            productId: product._id, // Use the real _id
            name: product.name,
            price: product.price,
            image: product.productImage_mobile,
          }}
        />
      </div>
    </article>
  );
}