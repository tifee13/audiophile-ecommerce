import Image from "next/image";

export default function BestGear({ className = "" }: { className?: string }) {
  return (
    <section
      className={`
        flex flex-col items-center text-center gap-10
        md:gap-16
        xl:flex-row xl:text-left xl:gap-[125px] xl:justify-between
        ${className}
      `}
    >
      
      <div className="w-full xl:w-[540px] xl:order-2">
        
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          width={327}
          height={300}
          alt="Man wearing headphones"
          className="block md:hidden rounded-lg w-full h-[300px] object-cover"
        />
        
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          width={689}
          height={300}
          alt="Man wearing headphones"
          className="hidden md:block xl:hidden rounded-lg w-full h-[300px] object-cover"
        />
        
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          width={540}
          height={588}
          alt="Man wearing headphones"
          className="hidden xl:block rounded-lg w-full h-[588px] object-cover"
        />
      </div>

      <div className="w-full xl:w-[445px] xl:order-1">
        <h2
          className="
            text-3xl font-bold uppercase text-black-dark 
            md:text-4xl 
            md:max-w-[573px] 
            md:mx-auto
            xl:max-w-none 
            xl:mx-0       
          "
        >
          Bringing you the <span className="text-orange-primary">best</span> audio gear
        </h2>
        <p
          className="
            text-base font-medium text-black-dark text-opacity-50 my-8
            md:max-w-[573px] 
            md:mx-auto    
            xl:max-w-none 
            xl:mx-0 
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