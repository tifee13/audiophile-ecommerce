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

// Reusable component for the gallery images
function ResponsiveGalleryImage({
  src,
  alt,
  mobileSize,
  tabletSize,
  desktopSize,
  className = "",
}: {
  src: { mobile: string; tablet: string; desktop: string };
  alt: string;
  mobileSize: { width: number; height: number };
  tabletSize: { width: number; height: number };
  desktopSize: { width: number; height: number };
  className?: string;
}) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {/* Mobile Image */}
      <Image
        src={src.mobile}
        width={mobileSize.width}
        height={mobileSize.height}
        alt={alt}
        className="block md:hidden w-full h-auto"
      />
      {/* Tablet Image */}
      <Image
        src={src.tablet}
        width={tabletSize.width}
        height={tabletSize.height}
        alt={alt}
        className="hidden md:block xl:hidden w-full h-full object-cover"
      />
      {/* Desktop Image */}
      <Image
        src={src.desktop}
        width={desktopSize.width}
        height={desktopSize.height}
        alt={alt}
        className="hidden xl:block w-full h-full object-cover"
      />
    </div>
  );
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section 
      className="
        flex flex-col gap-5 /* Mobile: stacked, 20px gap */
        
        /* Tablet: 2-col grid */
        md:grid md:grid-cols-[40%,1fr] md:grid-rows-2 md:gap-5 
        
        /* Desktop: 2-col grid, 30px gap */
        xl:grid xl:grid-cols-[445px,1fr] xl:grid-rows-1 xl:gap-[30px]
      "
    >
      {/* --- THIS IS THE FIX ---
        Left Column (Images 1 & 2)
        - md:row-span-2: Makes this column fill both rows on tablet.
        - xl:row-span-1: Resets it to 1 row for the desktop layout.
        - md:justify-between: Spreads the two images to the top and bottom.
      */}
      <div className="
        flex flex-col gap-5 
        md:gap-5 md:row-span-2 md:justify-between
        xl:gap-8 xl:row-span-1
      ">
        <ResponsiveGalleryImage
          src={images.first}
          alt="Product gallery image 1"
          mobileSize={{ width: 327, height: 174 }}
          tabletSize={{ width: 277, height: 174 }}
          desktopSize={{ width: 445, height: 280 }}
          className="md:h-auto" // Let height be automatic on tablet
        />
        <ResponsiveGalleryImage
          src={images.second}
          alt="Product gallery image 2"
          mobileSize={{ width: 327, height: 174 }}
          tabletSize={{ width: 277, height: 174 }}
          desktopSize={{ width: 445, height: 280 }}
          className="md:h-auto" // Let height be automatic on tablet
        />
      </div>

      {/* Right Column (Image 3) */}
      <div className="md:row-span-2 xl:row-span-1">
        <ResponsiveGalleryImage
          src={images.third}
          alt="Product gallery image 3"
          mobileSize={{ width: 327, height: 368 }}
          tabletSize={{ width: 395, height: 368 }}
          desktopSize={{ width: 635, height: 592 }}
          className="h-full"
        />
      </div>
    </section>
  );
}