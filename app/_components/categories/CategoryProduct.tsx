import Image from "next/image";
import Button from "../shared/Button";

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
      className={`
        flex flex-col items-center text-center
        xl:flex-row xl:gap-32 xl:text-left
        ${reverseLayout ? "xl:flex-row-reverse" : ""}
      `}
    >
      <div className="w-full xl:w-[540px]">
        <div
          className=" md:hidden 
                     w-full h-[352px] bg-gray-light rounded-lg 
                     flex items-center justify-center"
        >
          <Image
            src={image.mobile}
            width={202}
            height={243}
            alt={name}
            className="rounded-lg"
          />
        </div>
        <div
          className="hidden md:flex xl:hidden 
                     w-full h-[352px] bg-gray-light rounded-lg 
                     items-center justify-center"
        >
          <Image
            src={image.tablet}
            width={170}
            height={243}
            alt={name}
            className="rounded-lg"
          />
        </div>

        <div
          className="hidden xl:flex items-center justify-center 
                     w-[540px] h-[560px] bg-gray-light rounded-lg"
        >
          <Image
            src={image.desktop}
            width={291}
            height={350}
            alt={name}
            className="rounded-lg"
          />
        </div>
      </div>

      <div
        className={`
          w-full flex flex-col items-center mt-8
          xl:flex-1 xl:items-start xl:mt-0
        `}
      >
        {isNew && (
          <p className="text-sm uppercase tracking-overline text-orange-primary mb-4">
            New Product
          </p>
        )}

        <h2
          className="text-3xl font-bold uppercase text-black-dark 
                     md:text-4xl max-w-xs"
        >
          {name}
        </h2>

        <p
          className="text-base font-medium text-black-dark text-opacity-50 my-6
                     max-w-[327px] 
                     md:max-w-[572px] 
                     xl:max-w-none"
        >
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