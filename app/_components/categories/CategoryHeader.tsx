type CategoryHeaderProps = {
  categoryName: string;
};

export default function CategoryHeader({
  categoryName,
}: CategoryHeaderProps) {
  return (
    <div className="bg-black-dark text-white text-center py-24">
      <h1 className="text-4xl font-bold uppercase tracking-wider">
        {categoryName}
      </h1>
    </div>
  );
}