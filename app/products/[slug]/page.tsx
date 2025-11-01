// app/products/[slug]/page.tsx
import GoBackLink from "@/app/_components/shared/GoBackLink";
import ProductDetails from "@/app/_components/products/ProductDetails";
import ProductFeatures from "@/app/_components/products/ProductFeatures";
import ProductGallery from "@/app/_components/products/ProductGallery";
import RelatedProducts from "@/app/_components/products/RelatedProducts";
import HomeCategories from "@/app/_components/home/HomeCategories";
import BestGear from "@/app/_components/shared/BestGear";

// --- MOCK DATA ---
// In a real app, this data would come from Convex
const MOCK_PRODUCT = {
  name: "XX99 Mark II Headphones",
  slug: "xx99-mark-ii-headphones",
  price: 2999,
  description:
    "The new XX99 Mark II Headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  isNew: true,
  features:
    "Featuring a new-generation 50mm driver with a bio-cellulose diaphragm... \n\n(Add the full features text here, including new paragraphs)",
  includedItems: [
    { quantity: 1, item: "Headphone unit" },
    { quantity: 2, item: "Replacement earcups" },
    { quantity: 1, item: "User manual" },
    { quantity: 1, item: "3.5mm 5m audio cable" },
    { quantity: 1, item: "Travel bag" },
  ],
  image: {
    mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-product.jpg",
    tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-product.jpg",
    desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-product.jpg",
  },
  gallery: {
    first: {
      mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-1.jpg",
      tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-1.jpg",
      desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-2.jpg",
      tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-2.jpg",
      desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-gallery-3.jpg",
      tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-gallery-3.jpg",
      desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-gallery-3.jpg",
    },
  },
  relatedProducts: [
    "xx99-mark-i-headphones",
    "xx59-headphones",
    "zx9-speaker",
  ],
};
// --- END MOCK DATA ---

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, we'd use params.slug to fetch from Convex
  const product = MOCK_PRODUCT;

  return (
    <main>
      <div className="container mx-auto px-6 lg:px-16 
                      py-12 lg:py-20
                      flex flex-col gap-24 lg:gap-40">

        <div className="pt-16"> {/* Padding to clear the absolute header */}
          <GoBackLink />
        </div>

        <ProductDetails
          name={product.name}
          description={product.description}
          price={product.price}
          isNew={product.isNew}
          image={product.image}
        />

        <ProductFeatures
          features={product.features}
          includedItems={product.includedItems}
        />

        <ProductGallery images={product.gallery} />

        <RelatedProducts relatedSlugs={product.relatedProducts} />

        <HomeCategories />

        <BestGear />
      </div>
    </main>
  );
}