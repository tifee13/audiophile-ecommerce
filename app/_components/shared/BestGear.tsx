// app/_components/shared/BestGear.tsx
import Image from "next/image";

export default function BestGear() {
  return (
    <section className="container mx-auto px-6 lg:px-16">
      {/* Main container: 
          - On mobile: flex-col (stacked)
          - On desktop: flex-row (side-by-side)
      */}
      <div className="flex flex-col items-center gap-10
                      lg:flex-row lg:gap-24">

        {/* 1. Image Column
            - On mobile: order-1 (appears first)
            - On desktop: order-2 (appears second)
        */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            width={654}
            height={600}
            alt="Man wearing headphones"
            className="block md:hidden rounded-lg w-full"
          />
          <Image
            src="/assets/shared/tablet/image-best-gear.jpg"
            width={1378}
            height={600}
            alt="Man wearing headphones"
            className="hidden md:block lg:hidden rounded-lg w-full"
          />
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            width={540}
            height={588}
            alt="Man wearing headphones"
            className="hidden lg:block rounded-lg w-full"
          />
        </div>

        {/* 2. Text Content Column
            - On mobile: order-2 (appears second)
            - On desktop: order-1 (appears first)
        */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 
                        text-center lg:text-left">
          <h2 className="text-3xl font-bold uppercase text-black-dark 
                         md:text-4xl md:max-w-md md:mx-auto
                         lg:mx-0">
            Bringing you the <span className="text-orange-primary">best</span> audio gear
          </h2>
          <p className="text-base font-medium text-black-dark text-opacity-50 my-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable
    audio equipment.
          </p>
        </div>

      </div>
    </section>
  );
}