// app/_components/home/FeaturedZX7.tsx
import Button from "../shared/Button";

export default function FeaturedZX7() {
  return (
    <section className="container mx-auto px-6 lg:px-16">
      {/* This div is the main banner. We set the responsive 
        background images on it.
      */}
      <div
        className="relative rounded-lg px-6 py-24 
                   bg-[url('/assets/home/mobile/image-speaker-zx7.png')] 
                   md:bg-[url('/assets/home/tablet/image-speaker-zx7.png')] 
                   lg:bg-[url('/assets/home/desktop/image-speaker-zx7.png')] 
                   bg-cover bg-center bg-no-repeat
                   md:px-16 lg:px-24"
      >
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-3xl font-bold uppercase text-black-dark">
            ZX7 Speaker
          </h2>

          {/* Reusable Button, tertiary variant */}
          <Button
            href="/products/zx7-speaker"
            label="See Product"
            variant="tertiary"
          />
        </div>
      </div>
    </section>
  );
}