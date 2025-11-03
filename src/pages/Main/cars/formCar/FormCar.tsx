import { useState } from "react";
import { useCarForm } from "./useCarForm";
import Section from "./components/Section";
import DialogDeleteCar from "./components/DialogDeleteCar";
import CarFeatures from "./components/CarFeatures";
import CarImages from "./components/CarImages";

export default function FormCar() {
  const error = "Este apartado es obligatorio * ";
  const [openDelete, setOpenDelete] = useState(false);
  const { 
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    setValue,
    urls_img,
    carId 
  } = useCarForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-6 space-y-10">

      <Section title="Información Básica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Selecciona un grupo *</label>
            <select {...register("group")} className="border rounded-lg p-2">
              <option value="">Selecciona una opción</option>
              <option value="Económico">Económico</option>
              <option value="SUV Compacto">SUV Compacto</option>
              <option value="Sedán Premium">Sedán Premium</option>
            </select>
            {errors.group && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Marca *</label>
            <input {...register("brand")} className="border rounded-lg p-2" />
            {errors.brand && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Año *</label>
            <input 
              type="number" 
              {...register("year", { valueAsNumber: true })} 
              className="border rounded-lg p-2"
            />
            {errors.year && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Tipo de Combustible *</label>
            <select {...register("fuel_type")} className="border rounded-lg p-2">
              <option value="">Selecciona una opción</option>
              <option value="gasolina">Gasolina</option>
              <option value="diésel">Diésel</option>
              <option value="eléctrico">Eléctrico</option>
              <option value="híbrido">Híbrido</option>
            </select>
            {errors.fuel_type && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

        </div>
      </Section>

      <Section title="Capacidades">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Capacidad de pasajeros *</label>
            <input 
              type="number" 
              {...register("passenger_capacity", { valueAsNumber: true })} 
              className="border rounded-lg p-2"
            />
            {errors.passenger_capacity && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Capacidad de maletas *</label>
            <input 
              type="number" 
              {...register("luggage_capacity", { valueAsNumber: true })} 
              className="border rounded-lg p-2"
            />
            {errors.luggage_capacity && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Capacidad del tanque *</label>
            <input 
            type="number" 
              {...register("tank_capacity", { valueAsNumber: true })} 
              className="border rounded-lg p-2"
            />
            {errors.tank_capacity && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

        </div>
      </Section>

      <Section title="Especificaciones Técnicas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Transmisión *</label>
            <select {...register("transmission")} className="border rounded-lg p-2">
              <option value="">Selecciona una opción</option>
              <option value="Automática">Automática</option>
              <option value="Manual">Manual</option>
            </select>
            {errors.transmission && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Motor *</label>
            <input {...register("engine")} className="border rounded-lg p-2" />
            {errors.engine && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Consumo de Combustible *</label>
            <input {...register("fuel_consumption")} className="border rounded-lg p-2" />
            {errors.fuel_consumption && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Número de Puertas *</label>
            <input 
              type="number" 
              {...register("car_doors", { valueAsNumber: true })} 
              className="border rounded-lg p-2" 
            />
            {errors.car_doors && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

        </div>
      </Section>

      <Section title="Características del Auto">
        <CarFeatures register={register} />
      </Section>

      <Section title="Información de Renta">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Precio por Día ($) *</label>
            <input 
              type="number" 
              {...register("rent_per_day", { valueAsNumber: true })}
              className="border rounded-lg p-2" 
            />
            {errors.rent_per_day && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Duración Mínima (días) *</label>
            <input
              type="number" 
              {...register("rental_duraction_days", { valueAsNumber: true })} 
              className="border rounded-lg p-2"
            />
            {errors.rental_duraction_days && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Ubicación de Recogida *</label>
            <input {...register("pick_up_location")} className="border rounded-lg p-2" />
            {errors.pick_up_location && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>

        </div>
      </Section>

      <Section title="Información adicional">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Condiciones de viaje</label>
          <textarea {...register("travel_conditions")} className="w-full h-40 border rounded-lg p-2" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Detalles adicionales</label>
          <textarea {...register("details")} className="w-full h-40 border rounded-lg p-2" />
        </div>
      </Section>

      <Section title="Imágenes del auto">
        <CarImages
          urls_img={urls_img}
          setUrls={(imgs) => setValue("urls_img", imgs, { shouldDirty: true })}
          errors={errors}
        />
      </Section>

      <div className="flex justify-end gap-2">
        <button 
          type="button" 
          className="bg-red-500 text-white px-6 py-2 rounded-lg" 
          onClick={() => setOpenDelete(true)}
        >
          Eliminar
        </button>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Guardar
        </button>
      </div>

      {openDelete && 
        <DialogDeleteCar 
          id={carId} 
          open={openDelete} 
          onClose={() => setOpenDelete(false)} 
        />
      }
    </form>
  );
}
