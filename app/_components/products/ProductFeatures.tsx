// app/_components/products/ProductFeatures.tsx

type IncludedItem = {
  quantity: number;
  item: string;
};

type ProductFeaturesProps = {
  features: string;
  includedItems: IncludedItem[];
};

export default function ProductFeatures({
  features,
  includedItems,
}: ProductFeaturesProps) {
  return (
    // Mobile: flex-col (default)
    // Desktop: flex-row with a 125px gap
    <section className="flex flex-col gap-[88px] md:gap-[120px] xl:flex-row xl:gap-[125px]">
      
      {/* 1. Features Column */}
      {/* Mobile/Tablet: Full width */}
      {/* Desktop: 635px fixed width */}
      <div className="xl:w-[635px]">
        <h2 className="text-2xl font-bold uppercase mb-6 md:text-3xl">Features</h2>
        {/* Use 'whitespace-pre-line' to respect newlines in the features string */}
        <p className="text-base font-medium text-black-dark text-opacity-50 whitespace-pre-line">
          {features}
        </p>
      </div>

      {/* 2. "In the Box" Column */}
      {/* Mobile: Stacked (default) */}
      {/* Tablet: Becomes a 2-column flex row */}
      {/* Desktop: Becomes a stacked column again */}
      <div className="md:flex xl:flex-col xl:w-[350px] xl:flex-shrink-0">
        <h2 className="text-2xl font-bold uppercase mb-6 md:text-3xl md:w-1/2 xl:w-full">
          In the Box
        </h2>
        <ul className="flex flex-col gap-2 md:w-1/2 xl:w-full">
          {includedItems.map((item) => (
            <li key={item.item} className="flex">
              <span className="font-bold text-orange-primary w-8">
                {item.quantity}x
              </span>
              <span className="font-medium text-black-dark text-opacity-50">
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}