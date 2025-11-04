import CategoryCard from "../categories/CategoryCard";

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
    <section>
      <div
        className="
          flex flex-col items-center gap-16  
          md:flex-row md:gap-3               
          lg:gap-[30px]                      
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