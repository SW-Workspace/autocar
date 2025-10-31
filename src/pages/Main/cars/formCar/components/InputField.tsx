import type { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: FieldError;
}

export default function InputField({ label, error, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <input {...props} className="border rounded-lg p-2" />
      {error && 
        <span className="text-red-500 text-sm">{error.message}</span>
      }
    </div>
  );
}
