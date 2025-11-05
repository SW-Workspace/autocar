import BasicInformation from "./Components/BasicInformation";
import CarCapacity from "./Components/CarCapacity";
import TechnicalSpecifications from "./Components/TechnicalSpecifications";
import CarFeatures from "./Components/CarFeatures";
import IncomeInformation from "./Components/IncomeInformation";
import AdditionalInformation from "./Components/AdditionalInformation";
import CarImages from "./Components/CarImages";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCarForm } from "./hooks/useCarForm";

export default function CarForm() {
  const { carId } = useParams<{ carId?: string }>();

  const {
    handleSubmit,
    errors,
    formData,
    updateFormData,
    handleCancel,
    isSubmitting,
    submitError,
    isLoading,
    isEditing,
    originalCar,
  } = useCarForm(carId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando datos del auto...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <Link
        to="/catalog"
        className="hidden lg:flex absolute top-10 left-10 items-center text-white text-sm"
      >
        <ArrowLeft size={18} />
        Regresar
      </Link>
      <div className="w-screen">
        <div className="bg-white shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              {isEditing ? "Editar Auto" : "Publicar Auto para Renta"}
            </h1>
            <p className="text-blue-100 text-center mt-2">
              {isEditing
                ? "Actualiza la información de tu vehículo"
                : "Completa la información de tu vehículo para comenzar a rentarlo"}
            </p>
          </div>

          {submitError && (
            <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{submitError}</p>
            </div>
          )}

          <form className="px-6 py-2 space-y-2" onSubmit={handleSubmit}>
            <BasicInformation
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <CarCapacity
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <TechnicalSpecifications
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <CarFeatures
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <IncomeInformation
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <AdditionalInformation
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
            />
            <CarImages
              formData={formData}
              setFormData={updateFormData}
              errors={errors}
              existingImages={originalCar?.urls_img}
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? isEditing
                    ? "Actualizando..."
                    : "Publicando..."
                  : isEditing
                    ? "Actualizar Auto"
                    : "Publicar Auto"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
