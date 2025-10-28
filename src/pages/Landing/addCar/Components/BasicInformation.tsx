import type { addCarsFormModel } from "@/shared/models/addCar/addCar.model";

export default function BasicInformation({
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
        Información Básica
      </h2>
            
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grupo del Auto *
          </label>
          <select 
            value={formData?.group || ''}
            onChange={(e) => handleChange('group', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.group ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          >
            <option value="">Selecciona un grupo</option>
            <option value="Económico">Económico</option>
            <option value="SUV Compacto">SUV Compacto</option>
            <option value="Sedán Premium">Sedán Premium</option>
          </select>
          {errors?.group && (
            <p className="text-red-500 text-sm mt-1">{errors.group}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marca *
          </label>
          <input 
            type="text"
            value={formData?.brand || ''}
            onChange={(e) => handleChange('brand', e.target.value)} 
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.brand ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Toyota, Honda, Ford..."
            required
          />
          {errors?.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Año *
          </label>
          <input 
            type="number" 
            value={formData?.year || ''}
            onChange={(e) => handleChange('year', parseInt(e.target.value) || 0)}
            min="1950" 
            max={new Date().getFullYear() + 1}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.year ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 2023"
            required
          />
          {errors?.year && (
            <p className="text-red-500 text-sm mt-1">{errors.year}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Combustible *
          </label>
          <select 
            value={formData?.fuel_type || ''}
            onChange={(e) => handleChange('fuel_type', e.target.value) }
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors?.fuel_type ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          >
            <option value="">Selecciona combustible</option>
            <option value="gasolina">Gasolina</option>
            <option value="diésel">Diésel</option>
            <option value="híbrido">Híbrido</option>
            <option value="eléctrico">Eléctrico</option>
          </select>
          {errors?.fuel_type && (
            <p className="text-red-500 text-sm mt-1">{errors.fuel_type}</p>
          )}
        </div>
      </div>
    </div>
  )
}