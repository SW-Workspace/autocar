import type { AddCarsFormProps, CarFormData } from "../schemas/carSchema";
import CustomSelect from "./CustomSelect";

export default function BasicInformation({
  formData,
  setFormData,
  errors
}: AddCarsFormProps) {

  const handleChange = (field: keyof CarFormData, value: any) => {
    setFormData?.(field, value);
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Información Básica
      </h2>
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <CustomSelect
          label="Grupo del Auto *"
          options={["Económico", "SUV Compacto", "Sedán Premium"]}
          value={formData?.group || ""}
          onChange={(v) => handleChange("group", v)}
          error={errors?.group?.message ? String(errors.group.message) : undefined}
        />
        <div>
          <label 
            htmlFor="brand"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Marca *
          </label>
          <input 
            type="text"
            id="brand"
            value={formData?.brand || ''}
            onChange={(e) => handleChange('brand', e.target.value)} 
            className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
              errors?.brand ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Toyota, Honda, Ford..."
            required
          />
          {errors?.brand?.message && (
            <p className="text-red-500 text-sm mt-1">{String(errors.brand?.message)}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700 mb-2">
            Año *
          </label>
          <input 
            type="number" 
            id="year"
            value={formData?.year || ''}
            onChange={(e) => handleChange('year', parseInt(e.target.value) || 0)}
            min="1950" 
            max={new Date().getFullYear() + 1}
            className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
              errors?.year ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 2023"
            required
          />
          {errors?.year?.message && (
            <p className="text-red-500 text-sm mt-1">{String(errors.year?.message)}</p>
          )}
        </div>
        <CustomSelect
          label="Tipo de Combustible *"
          options={["gasolina", "diésel", "híbrido", "eléctrico"]}
          value={formData?.fuel_type || ""}
          onChange={(v) => handleChange("fuel_type", v)}
          error={errors?.fuel_type?.message ? String(errors.fuel_type.message) : undefined}
        />
      </div>
    </div>
  )
}