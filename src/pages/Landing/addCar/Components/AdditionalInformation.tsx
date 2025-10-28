import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model";

export default function AdditionalInformation({
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
          Información Adicional
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Condiciones de Viaje *
            </label>
            <textarea 
              rows={3}
              value={formData?.travel_conditions || ''}
              onChange={(e) => handleChange('travel_conditions', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.travel_conditions ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe las condiciones para rentar el auto (kilometraje incluido, restricciones, etc.)"
              required
            />
            {errors?.travel_conditions && (
              <p className="text-red-500 text-sm mt-1">{errors.travel_conditions}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detalles Adicionales
            </label>
            <textarea 
              rows={3}
              value={formData?.details || ''}
              onChange={(e) => handleChange('details', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.details ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Información adicional sobre el auto, características especiales, etc."
            />
          </div>
        </div>
      </div>
  )
};