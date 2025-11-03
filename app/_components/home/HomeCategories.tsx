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
    // This section itself doesn't need padding,
    // as its parent <main> tag will control the max-width.
    <section>
      <div
        className="
          flex flex-col items-center gap-16  /* Mobile: stacked with 64px gap */
          md:flex-row md:gap-3               /* Tablet: row with 12px gap */
          lg:gap-[30px]                      /* Desktop: row with 30px gap */
        "
      >
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