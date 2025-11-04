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
    <section className="flex flex-col gap-[88px] md:gap-[120px] xl:flex-row xl:gap-[125px]">
      
      <div className="xl:w-[635px]">
        <h2 className="text-2xl font-bold uppercase mb-6 md:text-3xl">Features</h2>
        <p className="text-base font-medium text-black-dark text-opacity-50 whitespace-pre-line">
          {features}
        </p>
      </div>

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