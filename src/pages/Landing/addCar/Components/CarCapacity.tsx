import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model";

export default function CarCapacity({
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
        Capacidades
      </h2>
            
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capacidad de Pasajeros *
          </label>
          <input 
            type="number"
            value={formData?.passenger_capacity || ''}
            onChange={(e) => handleChange('passenger_capacity', parseInt(e.target.value) || 1)}
            min="1"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.passenger_capacity ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 5"
            required
          />
          {errors?.passenger_capacity && (
            <p className="text-red-500 text-sm mt-1">{errors.passenger_capacity}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capacidad de Equipaje (maletas)
          </label>
          <input 
            type="number"
            value={formData?.luggage_capacity || ''}
            onChange={(e) => handleChange('luggage_capacity', parseInt(e.target.value) || 0)}
            min="0"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.luggage_capacity ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capacidad del Tanque (litros)
          </label>
          <input 
            type="number" 
            value={formData?.tank_capacity || ''}
            onChange={(e) => handleChange('tank_capacity', parseInt(e.target.value) || 0)}
            min="0"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.tank_capacity ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 50"
          />
        </div>
      </div>
    </div>
  )
};