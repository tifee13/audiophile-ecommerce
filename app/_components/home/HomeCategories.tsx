// app/_components/home/HomeCategories.tsx
import CategoryCard from "../categories/CategoryCard";

// Data for our category cards
const categories = [
  {
    href: "/category/headphones",
    imageSrc: "/assets/shared/image-headphones.png",
    label: "HEADPHONES",
  },
  {
    href: "/category/speakers",
    imageSrc: "/assets/shared/image-speakers.png",
    label: "SPEAKERS",
  },
  {
    href: "/category/earphones",
    imageSrc: "/assets/shared/image-earphones.png",
    label: "EARPHONES",
  },
];

export default function HomeCategories() {
  return (
    <section className="container mx-auto px-6 py-24 
                      lg:px-16">
      {/* - On mobile: stack them vertically (flex-col)
        - On tablet (md): lay them out in a row
        - Use 'gap-16' for mobile spacing
        - Use 'gap-3' for tablet/desktop spacing
      */}
      <div className="flex flex-col items-center gap-16
                      md:flex-row md:gap-3
                      lg:gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.href}
            href={category.href}
            imageSrc={category.imageSrc}
            label={category.label}
          />
        ))}
      </div>
    </section>
  );
}