// app/_components/products/ProductGallery.tsx
import Image from "next/image";

type GalleryImages = {
  first: { mobile: string; tablet: string; desktop: string };
  second: { mobile: string; tablet: string; desktop: string };
  third: { mobile: string; tablet: string; desktop: string };
};

type ProductGalleryProps = {
  images: GalleryImages;
};

// Helper component for a single responsive image
function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: { mobile: string; tablet: string; desktop: string };
  alt: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src.mobile}
        width={654}
        height={348}
        alt={alt}
        className={`block md:hidden rounded-lg w-full ${className}`}
      />
      <Image
        src={src.tablet}
        width={554}
        height={348}
        alt={alt}
        className={`hidden md:block lg:hidden rounded-lg w-full ${className}`}
      />
      <Image
        src={src.desktop}
        width={445}
        height={280}
        alt={alt}
        className={`hidden lg:block rounded-lg w-full ${className}`}
      />
    </>
  );
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
      {/* Image 1 */}
      <div className="md:row-span-1">
        <GalleryImage src={images.first} alt="Product gallery image 1" />
      </div>

      {/* Image 2 */}
      <div className="md:row-span-1">
        <GalleryImage src={images.second} alt="Product gallery image 2" />
      </div>

      {/* Image 3 (Spans 2 rows on tablet, 1 col on desktop) */}
      <div className="md:row-span-2">
        <GalleryImage
          src={images.third}
          alt="Product gallery image 3"
          className="h-full object-cover" // Ensure it stretches
        />
      </div>
    </section>
  );
}