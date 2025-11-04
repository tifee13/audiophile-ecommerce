import Image from "next/image";

type GalleryImages = {
  first: { mobile: string; tablet: string; desktop: string };
  second: { mobile: string; tablet: string; desktop: string };
  third: { mobile: string; tablet: string; desktop: string };
};

type ProductGalleryProps = {
  images: GalleryImages;
};

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
      <Image
        src={src.mobile}
        width={mobileSize.width}
        height={mobileSize.height}
        alt={alt}
        className="block md:hidden w-full h-auto"
      />
      <Image
        src={src.tablet}
        width={tabletSize.width}
        height={tabletSize.height}
        alt={alt}
        className="hidden md:block xl:hidden w-full h-full object-cover"
      />
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
        flex flex-col gap-5      
        md:grid md:grid-cols-[40%,1fr] md:grid-rows-2 md:gap-5 
        xl:grid xl:grid-cols-[445px,1fr] xl:grid-rows-1 xl:gap-[30px]
      "
    >
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
          className="md:h-auto"
        />
        <ResponsiveGalleryImage
          src={images.second}
          alt="Product gallery image 2"
          mobileSize={{ width: 327, height: 174 }}
          tabletSize={{ width: 277, height: 174 }}
          desktopSize={{ width: 445, height: 280 }}
          className="md:h-auto"
        />
      </div>

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