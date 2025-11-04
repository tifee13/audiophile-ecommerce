import CategoryProduct from "@/app/_components/categories/CategoryProduct";
import HomeCategories from "@/app/_components/home/HomeCategories";
import BestGear from "@/app/_components/shared/BestGear";

const categoryData = {
  headphones: {
    name: "Headphones",
    products: [
      {
        slug: "xx99-mark-ii-headphones",
        name: "XX99 Mark II Headphones",
        description:
          "The new XX99 Mark II Headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        isNew: true,
        image: {
          mobile: "/assets/product-xx99-mark-ii-headphones/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-xx99-mark-ii-headphones/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-xx99-mark-ii-headphones/desktop/image-category-page-preview.jpg",
        },
      },
      {
        slug: "xx99-mark-i-headphones",
        name: "XX99 Mark I Headphones",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        isNew: false,
        image: {
          mobile: "/assets/product-xx99-mark-i-headphones/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-xx99-mark-i-headphones/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-xx99-mark-i-headphones/desktop/image-category-page-preview.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59 Headphones",
        description:
          "Enjoy your audio private and distraction-free with the XX59 headphones. It is the perfect companion for mixing, mastering, and critical listening in a studio environment.",
        isNew: false,
        image: {
          mobile: "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
        },
      },
    ],
  },
  speakers: {
    name: "Speakers",
    products: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        isNew: true,
        image: {
          mobile: "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
        },
      },
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the pinnacle of acoustic reproduction.",
        isNew: false,
        image: {
          mobile: "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
        },
      },
    ],
  },
  earphones: {
    name: "Earphones",
    products: [
      {
        slug: "yx1-earphones",
        name: "YX1 Wireless Earphones",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        isNew: true,
        image: {
          mobile: "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
          tablet: "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
          desktop: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
        },
      },
    ],
  },
};

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const data = categoryData[slug as keyof typeof categoryData];

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <main>
      <div
        className="
          mx-auto max-w-[1110px] 
          px-6 md:px-10 xl:px-0
          py-12 lg:py-20
          flex flex-col gap-24 lg:gap-40
        "
      >
        <section className="flex flex-col gap-24 lg:gap-40">
          {data.products.map((product, index) => (
            <CategoryProduct
              key={product.slug}
              slug={product.slug}
              name={product.name}
              description={product.description}
              isNew={product.isNew}
              image={product.image}
              reverseLayout={index % 2 !== 0}
            />
          ))}
        </section>
        <HomeCategories />
        <BestGear />
      </div>
    </main>
  );
}