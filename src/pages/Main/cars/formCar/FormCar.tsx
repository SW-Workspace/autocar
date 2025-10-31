import { useState } from "react";
import { useCarForm } from "./useCarForm";
import Section from "./components/Section";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import ImageManager from "./components/ImageManager";
import DialogDeleteCar from "./components/DialogDeleteCar";
import DialogAddImageCar from "./components/DialogAddImageCar";
import CarFeatures from "./components/CarFeatures";

export default function FormCar() {
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddImage, setOpenAddImage] = useState(false);
  const { 
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    urls_img,
    handleAddImage,
    handleDeleteImage,
    carId 
  } = useCarForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-6 space-y-10">
      <Section title="Información Básica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
                label="Selecciona un grupo *"
                {...register("group")}
                options={[
                    { value: "Económico", label: "Económico" },
                    { value: "SUV Compacto", label: "SUV Compacto" },
                    { value: "Sedán Premium", label: "Sedán Premium" },
                ]}
                error={errors.group}
            />
            <InputField 
              label="Marca *" 
              {...register("brand")} 
              error={errors.brand}
            />
            <InputField 
              label="Año *"
              type="number" 
              {...register("year", { valueAsNumber: true })} 
              error={errors.year}
            />
            <SelectField
                label="Tipo de Combustible *"
                {...register("fuel_type")}
                options={[
                    { value: "gasolina", label: "Gasolina" },
                    { value: "diésel", label: "Diésel" },
                    { value: "eléctrico", label: "Eléctrico" },
                    { value: "híbrido", label: "Híbrido" },
                ]}
                error={errors.fuel_type}
            />
        </div>
      </Section>

      <Section title="Capacidades">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Capacidad de pasajeros *"
              type="number" {...register("passenger_capacity", { valueAsNumber: true })} 
              error={errors.passenger_capacity}
            />
            <InputField 
              label="Capacidad de maletas *" 
              type="number" {...register("luggage_capacity", { valueAsNumber: true })} 
              error={errors.luggage_capacity} 
            />
            <InputField 
              label="Capacidad del tanque *" 
              type="number" {...register("tank_capacity", { valueAsNumber: true })} 
              error={errors.tank_capacity} 
            />
        </div>
      </Section>

      <Section title="Especificaciones Técnicas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
                label="Transmisión*"
                {...register("transmission")}
                options={[
                    { value: "Automática", label: "Automática" },
                    { value: "Manual", label: "Manual" },
                ]}
                error={errors.transmission}
            />
            <InputField 
              label="Motor *" 
              {...register("engine")} 
              error={errors.engine}
            />
            <InputField 
              label="Consumo de Combustible *" 
              {...register("fuel_consumption")} 
              error={errors.fuel_consumption}
            />
            <InputField
              label="Número de Puertas *" 
              type="number" 
              {...register("car_doors", { valueAsNumber: true })} 
              error={errors.car_doors}
            />
        </div>
      </Section>

      <Section title="Características del Auto">
        <CarFeatures register={register}/>
      </Section>

      <Section title="Información de Renta">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField 
            label="Precio por Día ($) *" 
            type="number" 
            {...register("rent_per_day", { valueAsNumber: true })} 
            error={errors.rent_per_day} 
          />
          <InputField
            label="Duración Mínima (días) *"
            type="number"
            {...register("rental_duraction_days", { valueAsNumber: true })} 
            error={errors.rental_duraction_days} 
          />
          <InputField 
            label="Ubicación de Recogida *"
            {...register("pick_up_location")} 
            error={errors.pick_up_location}
          />
        </div>
      </Section>

      <Section title="Información adicional">
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
      </Section>

      <Section title="Imágenes del auto">
        <ImageManager 
          urls={urls_img} 
          onAdd={() => setOpenAddImage(true)} 
          onDelete={handleDeleteImage}
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
      {openAddImage && 
        <DialogAddImageCar
          open={openAddImage} 
          onClose={() => setOpenAddImage(false)} 
          onAddImage={handleAddImage} 
        />
      }
    </form>
  );
}
