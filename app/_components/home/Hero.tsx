// app/_components/home/Hero.tsx
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section
      className="
        relative bg-black-dark 
        bg-[url('/assets/home/mobile/image-hero.jpg')] 
        md:bg-[url('/assets/home/tablet/image-hero.jpg')] 
        lg:bg-[url('/assets/home/desktop/image-hero.jpg')] 
        bg-cover bg-center bg-no-repeat
        lg:bg-contain lg:bg-[position:80%_center]        
        /* Set responsive height of the entire section */
        h-[600px] md:h-[729px] lg:h-[729px] /* 729px - 97px header = 632px */
      "
    >
      <div
        className="
          relative mx-auto max-w-[1110px] 
          w-full 
          h-full 
          px-6 md:px-10 xl:px-0
          flex flex-col justify-center 
          items-center text-center 
          lg:items-start lg:text-left
        "
      >
        {/* Text Content Container */}
        <div className="max-w-[398px] text-white">
          <p className="text-sm uppercase tracking-overline text-white text-opacity-50 mb-4">
            New Product
          </p>
          <h1 className="text-4xl font-bold uppercase tracking-wide 
                         md:text-5xl 
                         lg:text-6xl">
            XX99 Mark II
            <br />
            Headphones
          </h1>
          <p className="text-base font-medium text-white text-opacity-75 my-6">
            Experience natural, lifelike audio and exceptional build
            quality made for the passionate music enthusiast.
          </p>
          
          <Button
            href="/products/xx99-mark-ii-headphones"
            label="See Product"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}