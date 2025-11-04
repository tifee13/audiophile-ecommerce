import Button from "../shared/Button";

export default function FeaturedZX7() {
  return (
    <section>
      <div
        className="
          relative rounded-lg 
          h-[320px]
          flex items-center
          px-6 md:px-16 lg:px-[95px]
          bg-[url('/assets/home/mobile/image-speaker-zx7.png')] 
          md:bg-[url('/assets/home/tablet/image-speaker-zx7.png')] 
          lg:bg-[url('/assets/home/desktop/image-speaker-zx7.png')] 
          bg-cover bg-center bg-no-repeat
        "
      >
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-3xl font-bold uppercase text-black-dark">
            ZX7 Speaker
          </h2>
          
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