import Image from "next/image";
import Button from "../shared/Button";

export default function FeaturedZX9({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div
        className="
          relative bg-orange-primary rounded-lg
          overflow-hidden
          
          flex flex-col items-center text-center
          px-6 py-14 
          md:px-16 
          
          lg:flex-row lg:text-left 
          lg:h-[560px] 
          lg:px-24 lg:pt-24 lg:pb-0
        "
      >
        <Image
          src="/assets/home/desktop/image-pattern-circles.png"
          width={944} 
          height={944} 
          alt=""
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 
                     lg:left-auto lg:-top-[4.5rem] lg:-translate-x-[7rem]"
        />

        <div className="relative z-10 w-full flex justify-center 
                        lg:w-1/2 lg:self-end">
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={172}
            height={207}
            alt="ZX9 Speaker"
            className="block md:hidden mb-8"
          />
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            width={197}
            height={237}
            alt="ZX9 Speaker"
            className="hidden md:block lg:hidden mb-8"
          />
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={410}
            height={493}
            alt="ZX9 Speaker"
            className="hidden lg:block relative -bottom-[1px]"
          />
        </div>

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