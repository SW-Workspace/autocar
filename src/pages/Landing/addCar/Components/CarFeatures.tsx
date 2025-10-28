import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model"

export default function CarFeatures({
  formData,
  setFormData
}: addCarsFormModel) {
    const handleCheckboxChange = (field: string, checked: boolean) => {
      setFormData?.(field, checked);
    };

  const features = [
    { key: 'air_conditioning', label: 'Aire Acondicionado' },
    { key: 'power_steering', label: 'Dirección Hidráulica' },
    { key: 'front_airbags', label: 'Airbags Delanteros' },
    { key: 'radio', label: 'Radio' },
    { key: 'central_locking', label: 'Cierre Centralizado' },
    { key: 'abs', label: 'Frenos ABS' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Características del Auto
      </h2>
            
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <label key={feature.key} className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={formData?.[feature.key] || false}
              onChange={(e) => handleCheckboxChange(feature.key, e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">{feature.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
