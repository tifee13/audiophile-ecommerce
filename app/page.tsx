import HomeCategories from "./_components/home/HomeCategories";
import FeaturedZX9 from "./_components/home/FeaturedZX9";
import FeaturedZX7 from "./_components/home/FeaturedZX7";
import FeaturedYX1 from "./_components/home/FeaturedYX1";
import BestGear from "./_components/shared/BestGear";

export default function Home() {
  return (

    <main className="flex flex-col pb-24 md:pb-30 lg:pb-40">
      <div 
        className="
          mx-auto max-w-[1110px] 
          px-6 md:px-10 xl:px-0
          flex flex-col
          gap-6          
          md:gap-8       
          lg:gap-12      
          mt-24 md:mt-30 lg:mt-40
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