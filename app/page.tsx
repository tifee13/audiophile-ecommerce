// app/page.tsx
import Hero from "./_components/home/Hero";
import HomeCategories from "./_components/home/HomeCategories";
import FeaturedZX9 from "./_components/home/FeaturedZX9";
import FeaturedZX7 from "./_components/home/FeaturedZX7";
import FeaturedYX1 from "./_components/home/FeaturedYX1";
import BestGear from "./_components/shared/BestGear"; // 1. Import

export default function Home() {
  return (
    // 3. Add padding to the bottom (pb-*) for space before the footer
    <main className="flex flex-col gap-24 md:gap-30 lg:gap-40 
                   pb-24 md:pb-30 lg:pb-40">
      <Hero />
      <HomeCategories />
      <FeaturedZX9 />
      <FeaturedZX7 />
      <FeaturedYX1 />
      <BestGear /> {/* 2. Add it here */}
    </main>
  );
}