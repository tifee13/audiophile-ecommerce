// app/_components/products/ProductDetails.tsx
import Image from "next/image";
import QuantitySelector from "../shared/QuantitySelector";

// Define the props it will receive from the page
type ProductDetailsProps = {
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export default function ProductDetails({
  name,
  description,
  price,
  isNew,
  image,
}: ProductDetailsProps) {
  return (
    <article
      className="flex flex-col items-center gap-8
                 md:flex-row md:gap-16"
    >
      {/* 1. Image Column */}
      <div className="w-full md:w-1/2">
        <Image
          src={image.mobile}
          width={654}
          height={704}
          alt={name}
          className="block md:hidden rounded-lg w-full"
        />
        <Image
          src={image.tablet}
          width={562}
          height={960}
          alt={name}
          className="hidden md:block lg:hidden rounded-lg w-full"
        />
        <Image
          src={image.desktop}
          width={540}
          height={560}
          alt={name}
          className="hidden lg:block rounded-lg w-full"
        />
      </div>

      {/* 2. Text Content Column */}
      <div
        className="w-full md:w-1/2
                    flex flex-col items-start"
      >
        {isNew && (
          <p className="text-sm uppercase tracking-overline text-orange-primary mb-4">
            New Product
          </p>
        )}

        <h1 className="text-3xl font-bold uppercase text-black-dark 
                       md:text-4xl max-w-xs">
          {name}
        </h1>

        <p className="text-base font-medium text-black-dark text-opacity-50 my-6">
          {description}
        </p>

        <span className="text-lg font-bold tracking-wider mb-8">
          $ {price.toLocaleString()}
        </span>

        {/* 3. Add to Cart Section */}
        <QuantitySelector />
      </div>
    </article>
  );
}