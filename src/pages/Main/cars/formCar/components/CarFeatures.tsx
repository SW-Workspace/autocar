import type { UseFormRegister } from "react-hook-form";
import type { CarFormData } from "../schema/form.schema";

interface CarFeaturesProps {
  register: UseFormRegister<CarFormData>;
}

export default function CarFeatures({ register }: CarFeaturesProps) {
  const features: { key: keyof CarFormData; label: string }[] = [
    { key: "air_conditioning", label: "Aire Acondicionado" },
    { key: "power_steering", label: "Dirección Hidráulica" },
    { key: "front_airbags", label: "Airbags Delanteros" },
    { key: "radio", label: "Radio" },
    { key: "central_locking", label: "Cierre Centralizado" },
    { key: "abs", label: "Frenos ABS" },
  ];

  return (
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <label
            key={feature.key}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              {...register(feature.key)}
              className="w-4 h-4 text-blue-600 rounded cursor-pointer"
            />
            <span className="text-sm text-gray-700">{feature.label}</span>
          </label>
        ))}
      </div>
  );
}
