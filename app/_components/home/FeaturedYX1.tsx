// app/_components/home/FeaturedYX1.tsx
import Image from "next/image";
import Button from "../shared/Button";

export default function FeaturedYX1() {
  return (
    <section className="container mx-auto px-6 lg:px-16">
      {/* Main container: stacks vertically on mobile, row on tablet+
          We use 'gap-6' for spacing between the two columns.
      */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-3 lg:gap-8">

        {/* 1. Image Column */}
        <div className="w-full md:w-1/2">
          {/* We use responsive images, ensuring they're rounded.
              We show/hide the correct image for each breakpoint.
          */}
          <Image
            src="/assets/home/mobile/image-earphones-yx1.png"
            width={654}
            height={400}
            alt="YX1 Earphones"
            className="block md:hidden rounded-lg w-full"
          />
          <Image
            src="/assets/home/tablet/image-earphones-yx1.png"
            width={678}
            height={640}
            alt="YX1 Earphones"
            className="hidden md:block lg:hidden rounded-lg w-full"
          />
          <Image
            src="/assets/home/desktop/image-earphones-yx1.png"
            width={540}
            height={560}
            alt="YX1 Earphones"
            className="hidden lg:block rounded-lg w-full"
          />
        </div>

        {/* 2. Content Card Column */}
        <div className="w-full md:w-1/2 bg-gray-light rounded-lg
                        flex flex-col justify-center
                        px-6 py-10 
                        md:px-10 lg:px-24">

          <h2 className="text-3xl font-bold uppercase text-black-dark mb-8">
            YX1 Earphones
          </h2>

          <Button
            href="/products/yx1-earphones"
            label="See Product"
            variant="tertiary"
          />
        </div>

      </div>
    </section>
  );
}