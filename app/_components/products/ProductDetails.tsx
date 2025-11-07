import Image from "next/image";
import QuantitySelector from "../shared/QuantitySelector";
import { Doc } from "@/convex/_generated/dataModel";

type ProductDetailsProps = {
  product: Doc<"products">;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <article
      className="
        flex flex-col items-center gap-8
        
        md:flex-row md:items-center md:gap-[69px]
        
        lg:gap-[125px] 
      "
    >
      <div
        className="
          w-full bg-gray-light rounded-lg 
          flex items-center justify-center 
          overflow-hidden
          
          h-[327px]
          md:w-[281px] md:h-[480px]  
          lg:w-[540px] lg:h-[560px]
        "
      >
        <Image
          src={product.productImage_mobile}
          width={327}
          height={327}
          alt={product.name}
          className="block md:hidden w-full h-full object-cover rounded-lg"
        />
        
        <Image
          src={product.productImage_tablet}
          width={281}
          height={480} 
          alt={product.name}
          className="hidden md:block lg:hidden rounded-lg"
        />

        <Image
          src={product.productImage_desktop}
          width={540} 
          height={560} 
          alt={product.name}
          className="hidden lg:block w-auto h-auto max-h-[450px] rounded-lg"
        />
      </div>

      <div
        className="
          w-full flex flex-col items-start
          md:w-auto md:flex-1
          lg:justify-center 
        "
      >
        {product.new && (
          <p className="text-sm uppercase tracking-overline text-orange-primary mb-4">
            New Product
          </p>
        )}

        <h1 className="text-3xl font-bold uppercase text-black-dark 
                       md:text-4xl">
          {product.name}
        </h1>

        <p className="text-base font-medium text-black-dark text-opacity-50 my-6">
          {product.description}
        </p>

        <span className="text-lg font-bold tracking-wider mb-8">
          $ {product.price.toLocaleString()}
        </span>

        <QuantitySelector
          product={{
            productId: product._id,
            shortName: product.shortName,
            price: product.price,
            image: product.productImage_mobile,
          }}
        />
      </div>
    </article>
  );
}