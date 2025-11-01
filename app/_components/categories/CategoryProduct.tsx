// app/_components/categories/CategoryProduct.tsx
import Image from "next/image";
import Button from "../shared/Button";

// Define the props our component will accept
type CategoryProductProps = {
  slug: string;
  name: string;
  description: string;
  isNew: boolean;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  // This prop will determine if the image is on the left or right
  reverseLayout?: boolean;
};

export default function CategoryProduct({
  slug,
  name,
  description,
  isNew,
  image,
  reverseLayout = false,
}: CategoryProductProps) {
  return (
    <article
      className="flex flex-col items-center gap-8
                 lg:flex-row lg:gap-32"
    >
      {/* 1. Image Column */}
      <div
        className={`w-full lg:w-1/2 ${
          reverseLayout ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Show/hide the correct image for each breakpoint */}
        <Image
          src={image.mobile}
          width={654}
          height={704}
          alt={name}
          className="block md:hidden rounded-lg w-full"
        />
        <Image
          src={image.tablet}
          width={1378}
          height={704}
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
        className={`w-full lg:w-1/2 text-center lg:text-left
                    flex flex-col items-center lg:items-start
                    ${reverseLayout ? "lg:order-1" : "lg:order-2"}`}
      >
        {isNew && (
          <p className="text-sm uppercase tracking-overline text-orange-primary mb-4">
            New Product
          </p>
        )}

        <h2 className="text-3xl font-bold uppercase text-black-dark 
                       md:text-4xl max-w-xs">
          {name}
        </h2>

        <p className="text-base font-medium text-black-dark text-opacity-50 my-6">
          {description}
        </p>

        <Button
          href={`/products/${slug}`}
          label="See Product"
          variant="primary"
        />
      </div>
    </article>
  );
}