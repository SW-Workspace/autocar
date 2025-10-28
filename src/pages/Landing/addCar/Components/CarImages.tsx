import { useState, useRef } from 'react';
import type { AddCarsFormProps } from "../schemas/carSchema";

export default function CarImages({
  formData,
  setFormData,
  errors
}: AddCarsFormProps) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentImages = formData?.imageFiles || [];

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    
    const validFiles = fileArray.filter(file => 
      ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
    );
    
    const sizeValidFiles = validFiles.filter(file => 
      file.size <= 10 * 1024 * 1024
    );
    
    const existingFiles = Array.isArray(currentImages) ? currentImages : [];
    const allFiles = [...existingFiles, ...sizeValidFiles].slice(0, 10);
    
    if (setFormData) {
      setFormData('imageFiles', allFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = currentImages.filter((_: any, i: number) => i !== index);
    if (setFormData) {
      setFormData('imageFiles', updatedImages);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Imágenes del Auto
      </h2>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
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
            <p className="text-xs text-gray-400 mt-1">
              {currentImages.length}/10 imágenes seleccionadas
            </p>
          </div>
          <button 
            type="button"
            onClick={triggerFileInput}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
          >
            Seleccionar Archivos
          </button>
        </div>
      </div>
      {errors?.images?.message && (
        <p className="text-red-500 text-sm mt-1">{String(errors.images?.message)}</p>
      )}

      {currentImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {currentImages.map((file: File | string, index: number) => (
            <div key={index} className="relative group">
              <img 
                src={file instanceof File ? URL.createObjectURL(file) : file}
                alt={`Vista previa ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}