import type { AddCarsFormProps, CarFormData } from "../schemas/carSchema";

export default function IncomeInformation({
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
        Información de Renta
      </h2>
            
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label 
            htmlFor="rent_per_day"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Precio por Día ($) *
          </label>
          <input 
            type="number"
            id="rent_per_day"
            value={formData?.rent_per_day || ''}
            onChange={(e) => handleChange('rent_per_day', parseInt(e.target.value) || 0)}
            min="1"
            className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
              errors?.rent_per_day ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 500"
            required
          />
          {errors?.rent_per_day?.message && (
            <p className="text-red-500 text-sm mt-1">{String(errors.rent_per_day?.message)}</p>
          )}
        </div>
        <div>
          <label 
            htmlFor="rental_duraction_days"
            className="block text-sm font-medium text-gray-700 mb-2">
            Duración Mínima (días)
          </label>
          <input 
            type="number" 
            id="rental_duraction_days"
            value={formData?.rental_duraction_days || ''}
            onChange={(e) => handleChange('rental_duraction_days', parseInt(e.target.value) || 0)}
            min="1"
            className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
                errors?.rental_duraction_days ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Ej: 2"
          />
        </div>
        <div className="md:col-span-2">
          <label 
            htmlFor="pick_up_location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Ubicación de Recogida *
          </label>
          <input 
            type="text" 
            id="pick_up_location"
            value={formData?.pick_up_location || ''}
            onChange={(e) => handleChange('pick_up_location', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
              errors?.pick_up_location ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Av. Principal #123, Ciudad, Estado"
            required
          />
          {errors?.pick_up_location?.message && (
            <p className="text-red-500 text-sm mt-1">{String(errors.pick_up_location?.message)}</p>
          )}
        </div>
      </div>
    </div>
  )
};