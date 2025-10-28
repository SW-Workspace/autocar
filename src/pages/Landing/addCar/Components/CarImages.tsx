export default function CarImages() {
    return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Imágenes del Auto
          </h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
              </svg>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Sube imágenes de tu auto
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PNG, JPG, WEBP hasta 10MB
                </p>
              </div>
              <button 
                type="button"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Seleccionar Archivos
              </button>
            </div>
          </div>
        </div>
    )
};