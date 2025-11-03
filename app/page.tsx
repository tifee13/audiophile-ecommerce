// app/page.tsx
import Hero from "./_components/home/Hero";
import HomeCategories from "./_components/home/HomeCategories";
import FeaturedZX9 from "./_components/home/FeaturedZX9";
import FeaturedZX7 from "./_components/home/FeaturedZX7";
import FeaturedYX1 from "./_components/home/FeaturedYX1";
import BestGear from "./_components/shared/BestGear";

export default function Home() {
  return (
    // 1. Remove max-width and padding from the <main> tag.
    //    We also remove the main gap-*, as Hero has no vertical gap.
    <main className="flex flex-col pb-24 md:pb-30 lg:pb-40">
      
      {/* 2. The Hero component is now free to be full-width. */}
      <Hero />

      {/* 3. Add a new wrapper div for all other sections. */}
      {/* This div will have the max-width and padding. */}
      <div 
        className="
          mx-auto max-w-[1110px] 
          px-6 md:px-10 xl:px-0
          flex flex-col gap-24 md:gap-30 lg:gap-40
          mt-24 md:mt-30 lg:mt-40 /* Add margin-top to space it from Hero */
        "
      >
        <HomeCategories />
        <FeaturedZX9 />
        <FeaturedZX7 />
        <FeaturedYX1 />
        <BestGear />
      </div>
    </main>
  );
}