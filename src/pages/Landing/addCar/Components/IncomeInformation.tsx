import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model"

export default function IncomeInformation({
  formData,
  setFormData,
  errors
}: addCarsFormModel) {

  const handleChange = (field: string, value: any) => {
    setFormData?.(field, value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Información de Renta
      </h2>
            
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio por Día ($) *
          </label>
          <input 
            type="number"
            value={formData?.rent_per_day || ''}
            onChange={(e) => handleChange('rent_per_day', parseInt(e.target.value) || 0)}
            min="1"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.rent_per_day ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 500"
            required
          />
          {errors?.rent_per_day && (
            <p className="text-red-500 text-sm mt-1">{errors.rent_per_day}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duración Mínima (días)
          </label>
          <input 
            type="number" 
            value={formData?.rental_duraction_days || ''}
            onChange={(e) => handleChange('rental_duraction_days', parseInt(e.target.value) || 0)}
            min="1"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.rental_duraction_days ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Ej: 2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ubicación de Recogida *
          </label>
          <input 
            type="text" 
            value={formData?.pick_up_location || ''}
            onChange={(e) => handleChange('pick_up_location', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.pick_up_location ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Av. Principal #123, Ciudad, Estado"
            required
          />
          {errors?.pick_up_location && (
            <p className="text-red-500 text-sm mt-1">{errors.pick_up_location}</p>
          )}
        </div>
      </div>
    </div>
  )
};