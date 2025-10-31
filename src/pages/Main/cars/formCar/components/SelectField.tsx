import type { FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: FieldError;
}

export default function SelectField({ label, options, error, ...props }: SelectFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>

      <select {...props} className="border rounded-lg p-2">
        <option value="">Selecciona una opción</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && 
        <span className="text-red-500 text-sm">{error.message}</span>
      }
    </div>
  );
}
