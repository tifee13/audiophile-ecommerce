// app/category/[slug]/page.tsx
import CategoryHeader from "@/app/_components/categories/CategoryHeader";
import CategoryProduct from "@/app/_components/categories/CategoryProduct";
import HomeCategories from "@/app/_components/home/HomeCategories";
import BestGear from "@/app/_components/shared/BestGear";

// --- Mock Data ---
// In a real app, we'd fetch this from Convex based on the `slug`
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
      // ... add other headphone products here
    ],
  },
  // ... add 'speakers' and 'earphones' data here
};
// --- End Mock Data ---

// This params object is passed by Next.js and contains the dynamic part of the URL
type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  // Get the slug from the URL (e.g., "headphones")
  const { slug } = params;

  // Find the correct data.
  // We use a type assertion here for simplicity with our mock data.
  const data = categoryData[slug as keyof typeof categoryData];

  // Handle case where the slug doesn't match
  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <main>
      <CategoryHeader categoryName={data.name} />

      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-16 
                      py-24 lg:py-40
                      flex flex-col gap-24 lg:gap-40">
        
        {/* Products List */}
        <section className="flex flex-col gap-24 lg:gap-40">
          {data.products.map((product, index) => (
            <CategoryProduct
              key={product.slug}
              slug={product.slug}
              name={product.name}
              description={product.description}
              isNew={product.isNew}
              image={product.image}
              // Reverse layout for every even-indexed product (0, 2, 4...)
              reverseLayout={index % 2 !== 0}
            />
          ))}
        </section>

        {/* Other Sections */}
        <HomeCategories />
        <BestGear />
      </div>
    </main>
  );
}