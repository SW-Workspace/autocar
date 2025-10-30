import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCarById } from "@/config/store/slices/car/thunk";
import { formSchema } from "./schema/form.schema";
import type { CarFormData } from "./schema/form.schema";
import DialogDeleteCar from "./components/DialogDeleteCar";
import DialogAddImageCar from "./components/DialogAddImageCar";
import { X, Plus } from "lucide-react";
import { supabaseUpdateCarForRentById } from "@/shared/services/carForRent/carForRent.service";

export default function FormCar() {
  const { id } = useParams();
  const carState = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  const carId = Number(id);
  const location = useLocation();
  const [isOpenDialogDelete, setIsOpenDialogDelete] = useState(false);
  const [isOpenDialogAddImage, setIsOpenDialogAddImage] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<CarFormData>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const urls_img = watch("urls_img") || [];

  useEffect(() => {
    dispatch(fetchCarById(carId));
  }, [carId, dispatch, location.pathname]);

  useEffect(() => {
    if (carState.car) {
      Object.entries(carState.car).forEach(([key, value]) => {
        setValue(key as keyof CarFormData, value as any);
      });
    }
  }, [carState.car, setValue]);

  const onSubmit = async (data: CarFormData) => {
    await supabaseUpdateCarForRentById(carId, data);
    alert("Este vehículo se actualizó exitosamente");
    console.log(data)
  };


  const handleDeleteImage = (index: number) => {
    const updatedImages = urls_img.filter((_, i) => i !== index);
    console.log(updatedImages)
    setValue("urls_img", updatedImages, { shouldDirty: true, shouldValidate: true });
  };

  
  const handleAddImage = (newUrl: string) => {
    if (!newUrl) return;
      const updated = [...urls_img, newUrl];
      setValue("urls_img", updated, { shouldValidate: true });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto p-6 space-y-10"
      >
        <section>
          <h2 className="text-xl font-semibold mb-2">Información Básica</h2>
          <hr className="mb-6 border-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Grupo del Auto *</label>
              <select {...register("group")} className="border rounded-lg p-2">
                <option value="">Selecciona un grupo</option>
                <option value="Económico">Económico</option>
                <option value="SUV Compacto">SUV Compacto</option>
                <option value="Sedán Premium">Sedán Premium</option>
              </select>
              {errors.group && 
                <span className="text-red-500 text-sm">
                  {errors.group.message}
                </span>
              }
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Marca *</label>
              <input
                type="text"
                {...register("brand")}
                placeholder="Ej: Toyota, Honda..."
                className="border rounded-lg p-2"
              />
              {errors.brand && 
                <span className="text-red-500 text-sm">
                  {errors.brand.message}
                </span>
              }
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Año *</label>
              <input 
                type="number" 
                {...register("year", { valueAsNumber: true })} 
                className="border rounded-lg p-2"
              />
              {errors.year && 
                <span className="text-red-500 text-sm">
                  {errors.year.message}
                </span>
              }
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Tipo de Combustible *</label>
              <select {...register("fuel_type")} className="border rounded-lg p-2">
                <option value="">Selecciona combustible</option>
                <option value="gasolina">Gasolina</option>
                <option value="diésel">Diésel</option>
                <option value="eléctrico">Eléctrico</option>
                <option value="híbrido">Híbrido</option>
              </select>
              {errors.fuel_type && 
                <span className="text-red-500 text-sm">
                  {errors.fuel_type.message}
                </span>
              }
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Capacidades</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label className="mb-1 font-medium">Capacidad de pasajeros *</label>
              <input 
                {...register("passenger_capacity", { valueAsNumber: true })} 
                placeholder="Pasajeros" 
                className="border rounded-lg p-2"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="mb-1 font-medium">Capacidad de pasajeros *</label>
              <input
                {...register("luggage_capacity", { valueAsNumber: true })}
                placeholder="Equipaje"
                className="border rounded-lg p-2"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="mb-1 font-medium">Capacidad del tanque *</label>
              <input
                {...register("tank_capacity", { valueAsNumber: true })}
                placeholder="Tanque" 
                className="border rounded-lg p-2"
              />
            </div>
            
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Especificaciones Técnicas</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Transmisión *</label>
              <select {...register("transmission")} className="border rounded-lg p-2">
                <option value="">Selecciona transmisión</option>
                <option value="Automática">Automática</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Motor</label>
              <input
                {...register("engine")}
                type="text"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Consumo de Combustible</label>
              <input
                {...register("fuel_consumption")}
                type="text"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Número de Puertas</label>
              <input
                {...register("car_doors", { valueAsNumber: true })}
                type="number"
                className="border rounded-lg p-2"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Características del Auto</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["air_conditioning", "Aire Acondicionado"],
              ["power_steering", "Dirección Hidráulica"],
              ["front_airbags", "Airbags Delanteros"],
              ["radio", "Radio"],
              ["central_locking", "Cierre Centralizado"],
              ["abs", "Frenos ABS"],
            ].map(([key, label]) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!watch(key as keyof CarFormData)}
                onChange={(e) => setValue(key as keyof CarFormData, e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
            </div>

        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Información de Renta</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Precio por Día ($) *</label>
              <input
                {...register("rent_per_day", { valueAsNumber: true })}
                type="number"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Duración Mínima (días)</label>
              <input
                {...register("rental_duraction_days", { valueAsNumber: true })} 
                type="number" 
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 font-medium">Ubicación de Recogida *</label>
              <input
                {...register("pick_up_location")} 
                type="text" 
                className="border rounded-lg p-2"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Información adicional</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Condiciones de viaje</label>
              <textarea
                {...register("travel_conditions")}
                className="w-full h-40 border rounded-lg p-2"
              />
            
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Detalles adicionales</label>
              <textarea 
                {...register("details")} 
                className="w-full h-40 border rounded-lg p-2"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Imágenes del auto</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-2 gap-3">
            {urls_img?.map((url, index) => (
              <div key={index} className="group relative w-full h-60 rounded-lg">
                <button
                  type="button"
                  className="absolute top-5 right-5 opacity-0 p-2 bg-[var(--red-quartenary)] rounded-lg text-white group-hover:opacity-100 transition-all duration-400 cursor-pointer"
                  onClick={() => handleDeleteImage(index)}
                >
                  <X />
                </button>
                <img  
                  src={url}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            {urls_img?.length < 4 && (
              <div 
                className="flex flex-col items-center justify-center w-full h-60 rounded-lg bg-white text-gray-500 border-2 border-dashed cursor-pointer"
                onClick={() => setIsOpenDialogAddImage(true)}
                >
                <Plus size={50} />
                <span className="text-lg font-semibold">Agregar imagen (Url)</span>
              </div>
            )}
          </div>
          <input type="hidden" {...register("urls_img")} />
        </section>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-[var(--red-quartenary)] hover:bg-red-600 text-white px-6 py-2 rounded-lg cursor-pointer"
            onClick={() => setIsOpenDialogDelete(true)}
          >
            Eliminar
          </button>

          <button
            type="submit"
            className="bg-[var(--blue-tertiary)] hover:bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer"
          >
            Guardar
          </button>
        </div>
      </form>

      {isOpenDialogDelete && 
        <DialogDeleteCar
          id={carId} 
          open={isOpenDialogDelete} 
          onClose={() => setIsOpenDialogDelete(false)} 
        />
      }
      {isOpenDialogAddImage && 
        <DialogAddImageCar 
          open={isOpenDialogAddImage} 
          onClose={() => setIsOpenDialogAddImage(false)}
          onAddImage={handleAddImage}
        />
      }
    </>
  );
}
