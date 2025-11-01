// app/_components/home/Hero.tsx
import Button from "../shared/Button";

export default function Hero() {
  return (
    // The main section. It's black as a fallback and uses 
    // different background images for each breakpoint.
    <section
      className="relative bg-black-dark 
                 bg-[url('/assets/home/mobile/image-hero.jpg')] 
                 md:bg-[url('/assets/home/tablet/image-hero.jpg')] 
                 lg:bg-[url('/assets/home/desktop/image-hero.jpg')] 
                 bg-cover bg-center bg-no-repeat"
    >
      {/* We add a min-height and padding-top to account for the absolute header */}
      <div
        className="container mx-auto px-6 
                   flex flex-col items-center text-center 
                   min-h-[600px] justify-center 
                   md:items-start md:text-left
                   lg:px-16
                   pt-24" // Push content below the header
      >
        {/* Text Content Container */}
        <div className="max-w-sm text-white">
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

          {/* Our reusable Button component */}
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