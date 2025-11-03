// app/_components/shared/BestGear.tsx
import Image from "next/image";

export default function BestGear() {
  return (
    <section
      className="
        flex flex-col items-center text-center gap-10
        md:gap-16
        xl:flex-row xl:text-left xl:gap-[125px] xl:justify-between
      "
    >
      
      {/* 1. Image Column */}
      {/* Mobile/Tablet: Order 1 (default) */}
      {/* Desktop: Order 2 (image on the right) */}
      <div className="w-full xl:w-[540px] xl:order-2">
        
        {/* Mobile Image (327x300) */}
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          width={327}
          height={300}
          alt="Man wearing headphones"
          className="block md:hidden rounded-lg w-full h-[300px] object-cover"
        />
        
        {/* Tablet Image (689x300) */}
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          width={689}
          height={300}
          alt="Man wearing headphones"
          className="hidden md:block xl:hidden rounded-lg w-full h-[300px] object-cover"
        />
        
        {/* Desktop Image (540x588) */}
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          width={540}
          height={588}
          alt="Man wearing headphones"
          className="hidden xl:block rounded-lg w-full h-[588px] object-cover"
        />
      </div>

      {/* 2. Text Content Column */}
      {/* Mobile/Tablet: Order 2 (default), centered */}
      {/* Desktop: Order 1 (text on the left) */}
      <div className="w-full xl:w-[445px] xl:order-1">
        <h2
          className="
            text-3xl font-bold uppercase text-black-dark 
            md:text-4xl 
            md:max-w-[573px] /* Tablet text width */
            xl:max-w-none /* Reset max-width for desktop */
          "
        >
          Bringing you the <span className="text-orange-primary">best</span> audio gear
        </h2>
        <p
          className="
            text-base font-medium text-black-dark text-opacity-50 my-8
            md:max-w-[573px] /* Tablet text width */
            xl:max-w-none /* Reset max-width for desktop */
          "
        >
          Located at the heart of New York City, Audiophile is the premier
          store for high end headphones, earphones, speakers, and audio
          accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of
          our products. Stop by our store to meet some of the fantastic
          people who make Audiophile the best place to buy your portable
          audio equipment.
        </p>
      </div>

    </section>
  );
}