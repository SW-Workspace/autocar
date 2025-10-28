export default function AdditionalInformation() {
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Describe las condiciones para rentar el auto (kilometraje incluido, restricciones, etc.)"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detalles Adicionales
              </label>
              <textarea 
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Información adicional sobre el auto, características especiales, etc."
              />
            </div>
          </div>
        </div>
    )
};