import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model"

export default function TechnicalSpecifications({
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
          Especificaciones Técnicas
        </h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transmisión *
            </label>
            <select 
              value={formData?.transmission || ''}
              onChange={(e) => handleChange('transmission', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.transmission ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Selecciona transmisión</option>
              <option value="Manual">Manual</option>
              <option value="Automática">Automática</option>
            </select>
            {errors?.transmission && (
              <p className="text-red-500 text-sm mt-1">{errors.transmission}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Motor
            </label>
            <input 
              type="text" 
              value={formData?.engine || ''}
              onChange={(e) => handleChange('engine', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.engine ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ej: 2.0L 4 cilindros"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Consumo de Combustible
            </label>
            <input 
              type="text" 
              value={formData?.fuel_consumption || ''}
              onChange={(e) => handleChange('fuel_consumption', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.fuel_consumption ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ej: 15 km/L"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de Puertas
            </label>
            <input 
              type="number"
              value={formData?.car_doors || ''}
              onChange={(e) => handleChange('car_doors', parseInt(e.target.value) || 0)} 
              min="2"
              max="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors?.car_doors ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ej: 4"
            />
          </div>
        </div>
      </div>
    )
};