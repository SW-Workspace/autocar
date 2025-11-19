import { useState, useRef } from "react";
import type { AddCarsFormProps } from "../schemas/carSchema";

interface CarImagesProps extends AddCarsFormProps {
  existingImages?: string[];
}

export default function CarImages({
  formData,
  setFormData,
  errors,
  existingImages,
}: CarImagesProps) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentImages = formData?.urls_img || [];
  const hasExistingImages = existingImages && existingImages.length > 0;

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);

    const validFiles = fileArray.filter((file) =>
      ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    );

    const sizeValidFiles = validFiles.filter(
      (file) => file.size <= 10 * 1024 * 1024,
    );

    const existingFiles = Array.isArray(currentImages) ? currentImages : [];
    const allFiles = [...existingFiles, ...sizeValidFiles].slice(0, 10);

    if (setFormData) {
      setFormData("urls_img", allFiles);
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
    const updatedImages = currentImages.filter(
      (_: any, i: number) => i !== index,
    );
    if (setFormData) {
      setFormData("urls_img", updatedImages);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Imágenes del Auto
      </h2>

      {hasExistingImages && currentImages.length === 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-blue-600 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-blue-900">
                Imágenes actuales del auto
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Este auto tiene {existingImages.length} imagen
                {existingImages.length !== 1 ? "es" : ""} guardada
                {existingImages.length !== 1 ? "s" : ""}. Si subes nuevas
                imágenes, reemplazarán las actuales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {existingImages.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Imagen actual ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border-2 border-blue-200"
                />
                <div className="absolute top-1 right-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                  Actual
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
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
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              />
            </svg>
            <div>
              <p className="text-lg font-medium text-gray-900">
                {hasExistingImages && currentImages.length === 0
                  ? "Sube nuevas imágenes (opcional)"
                  : "Sube imágenes de tu auto"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PNG, JPG, WEBP hasta 10MB
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {currentImages.length}/10 imágenes{" "}
                {currentImages.length > 0 ? "nuevas " : ""}seleccionadas
              </p>
            </div>
            <button
              type="button"
              onClick={triggerFileInput}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
            >
              {currentImages.length > 0
                ? "Agregar más"
                : "Seleccionar Archivos"}
            </button>
          </div>
        </div>
      </div>

      {errors?.urls_img?.message && (
        <p className="text-red-500 text-sm mt-1">
          {String(errors.urls_img.message)}
        </p>
      )}

      {currentImages.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">
              Nuevas imágenes ({currentImages.length})
            </h3>
            {hasExistingImages && (
              <p className="text-xs text-amber-600">
                ⚠️ Estas imágenes reemplazarán las actuales
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((file: File | string, index: number) => (
              <div key={index} className="relative group">
                <img
                  src={file instanceof File ? URL.createObjectURL(file) : file}
                  alt={`Nueva imagen ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border-2 border-green-500"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  title="Eliminar imagen"
                >
                  ×
                </button>
                <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                  Nueva
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

