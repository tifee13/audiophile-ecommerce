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
    <section className="flex flex-col gap-24 lg:flex-row lg:gap-32">
      {/* 1. Features Column */}
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
        {/* Use 'whitespace-pre-line' to respect newlines in the string */}
        <p className="text-base font-medium text-black-dark text-opacity-50 whitespace-pre-line">
          {features}
        </p>
      </div>

      {/* 2. "In the Box" Column */}
      <div className="lg:w-1/3">
        <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
        <ul className="flex flex-col gap-2">
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