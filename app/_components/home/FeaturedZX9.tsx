// app/_components/home/FeaturedZX9.tsx
import Image from "next/image";
import Button from "../shared/Button";

export default function FeaturedZX9() {
  return (
    // 1. REMOVED all container/padding classes from this <section>
    //    The parent (app/page.tsx) now handles the 1110px width.
    <section>
      <div
        className="
          relative bg-orange-primary rounded-lg
          overflow-hidden
          
          /* Mobile/Tablet: Stacked, centered, padding */
          flex flex-col items-center text-center
          px-6 py-14 
          md:px-16 
          
          /* Desktop: Row, 560px height, specific padding */
          lg:flex-row lg:text-left 
          lg:h-[560px] /* <-- This is the 560px height */
          lg:px-24 lg:pt-24 lg:pb-0
        "
      >
        {/* 1. Background Circle Pattern */}
        <Image
          src="/assets/home/desktop/image-pattern-circles.png" // Using the .png from your file tree
          width={944} 
          height={944} 
          alt=""
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 
                     lg:left-auto lg:-top-[4.5rem] lg:-translate-x-[7rem]" // Fine-tuned desktop position
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
          {/* Desktop Image (410x493) - anchored to bottom */}
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={410}
            height={493}
            alt="ZX9 Speaker"
            className="hidden lg:block relative -bottom-[1px]" // Sits on the bottom edge
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