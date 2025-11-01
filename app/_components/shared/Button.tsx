// app/_components/shared/Button.tsx
import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({
  href,
  label,
  variant = "primary",
}: ButtonProps) {
  // Define styles for each variant
  const baseStyle =
    "inline-block px-7 py-3.5 uppercase text-xs font-bold tracking-wider transition-colors";

  const styles = {
    primary:
      "bg-orange-primary text-white hover:bg-orange-light",
    secondary:
      "bg-black-dark text-white hover:bg-gray-700",
    tertiary:
      "border border-black-dark text-black-dark hover:bg-black-dark hover:text-white",
  };

  return (
    <Link href={href} className={`${baseStyle} ${styles[variant]}`}>
      {label}
    </Link>
  );
}