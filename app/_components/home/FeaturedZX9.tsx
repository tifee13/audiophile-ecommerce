// app/_components/home/FeaturedZX9.tsx
import Image from "next/image";
import Button from "../shared/Button";

export default function FeaturedZX9() {
  return (
    <section className="container mx-auto px-6 lg:px-16">
      <div
        className="relative bg-orange-primary rounded-lg 
                   px-6 py-14 
                   flex flex-col items-center text-center
                   lg:flex-row lg:text-left lg:px-24 lg:pt-24 lg:pb-0
                   overflow-hidden" // This is key to containing the circles
      >
        {/* 1. Background Circle Pattern */}
        <Image
          src="/assets/home/desktop/image-pattern-circles.svg"
          width={944} // Width of the SVG itself
          height={944} // Height of the SVG itself
          alt=""
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 
                     lg:left-auto lg:-top-16 lg:-translate-x-1/4"
        />

        {/* 2. Product Image */}
        <div className="relative z-10 w-full flex justify-center 
                        lg:w-1/2 lg:self-end">
          {/* Mobile Image */}
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={172}
            height={207}
            alt="ZX9 Speaker"
            className="block md:hidden mb-8"
          />
          {/* Tablet Image */}
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            width={197}
            height={237}
            alt="ZX9 Speaker"
            className="hidden md:block lg:hidden mb-8"
          />
          {/* Desktop Image */}
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={410}
            height={493}
            alt="ZX9 Speaker"
            className="hidden lg:block"
          />
        </div>

        {/* 3. Text Content */}
        <div className="relative z-10 max-w-xs
                        lg:w-1/2 lg:pl-16">
          <h2 className="text-4xl font-bold uppercase text-white 
                         md:text-5xl lg:text-6xl">
            ZX9
            <br />
            Speaker
          </h2>
          <p className="text-base font-medium text-white text-opacity-75 my-6">
            Upgrade to premium speakers that are phenomenally built to
            deliver truly remarkable sound.
          </p>

          {/* Reusable Button, secondary variant */}
          <Button
            href="/products/zx9-speaker"
            label="See Product"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}