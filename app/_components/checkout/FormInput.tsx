// app/_components/checkout/FormInput.tsx
import { UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  register: UseFormRegisterReturn; // From react-hook-form
  error?: string; // The error message
  placeholder?: string;
};

export default function FormInput({
  label,
  name,
  register,
  error,
  placeholder,
}: FormInputProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor={name}
          className={`text-xs font-bold ${error ? "text-red-500" : ""}`}
        >
          {label}
        </label>
        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
      <input
        {...register}
        id={name}
        placeholder={placeholder}
        className={`border rounded-lg px-6 py-4 font-bold text-sm
                    ${error ? "border-red-500" : "border-gray-300"}
                    focus:outline-none focus:ring-1 focus:ring-orange-primary`}
      />
    </div>
  );
}