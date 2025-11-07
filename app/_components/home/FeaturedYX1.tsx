import Image from "next/image";
import Button from "../shared/Button";

export default function FeaturedYX1({ className = "" }: { className?: string }) {
  return (
    <section 
      className={`
        flex flex-col gap-6          
        md:flex-row md:gap-[11px]   
        lg:flex-row lg:gap-[30px]   
        ${className}
      `}
    >
      
      <div 
        className="
          w-full h-[200px]         
          md:w-[339px] md:h-[320px]  
          lg:w-[540px] lg:h-[320px]  
          rounded-lg overflow-hidden
        "
      >
        <Image
          src="/assets/home/mobile/image-earphones-yx1.png"
          width={327}
          height={200}
          alt="YX1 Earphones"
          className="block md:hidden w-full h-full object-cover"
        />
        <Image
          src="/assets/home/tablet/image-earphones-yx1.png"
          width={339}
          height={320}
          alt="YX1 Earphones"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        <Image
          src="/assets/home/desktop/image-earphones-yx1.png"
          width={540} 
          height={320}
          alt="YX1 Earphones"
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>

      <div 
        className="
          w-full h-[200px]         
          md:w-[339px] md:h-[320px]
          lg:w-[540px] lg:h-[320px]
          bg-gray-light rounded-lg
          flex flex-col justify-center
          px-6                        
          md:px-10                    
          lg:px-[95px]                
        "
      >
        <h2 className="text-3xl font-bold uppercase text-black-dark mb-8">
          YX1 Earphones
        </h2>
        <div className="w-[160px] md:w-auto">
          <Button
            href="/products/yx1-earphones"
            label="See Product"
            variant="tertiary"
          />
        </div>
      </div>

    </section>
  );
}