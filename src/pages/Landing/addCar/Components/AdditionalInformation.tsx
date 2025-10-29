import type { AddCarsFormProps, CarFormData } from "../schemas/carSchema";

export default function AdditionalInformation({
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
          Información Adicional
        </h2>
        
        <div className="space-y-2">
          <div>
            <label 
              htmlFor="travel_conditions"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Condiciones de Viaje *
            </label>
            <textarea 
              rows={3}
              id="travel_conditions"
              value={formData?.travel_conditions || ''}
              onChange={(e) => handleChange('travel_conditions', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
                errors?.travel_conditions ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe las condiciones para rentar el auto (kilometraje incluido, restricciones, etc.)"
              required
            />
            {errors?.travel_conditions?.message && (
              <p className="text-red-500 text-sm mt-1">{String(errors.travel_conditions?.message)}</p>
            )}
          </div>
          
          <div>
            <label 
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Detalles Adicionales
            </label>
            <textarea 
              rows={3}
              id="details"
              value={formData?.details || ''}
              onChange={(e) => handleChange('details', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg  focus:border-blue-500 transition-colors ${
                errors?.details ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Información adicional sobre el auto, características especiales, etc."
            />
          </div>
        </div>
      </div>
  )
};