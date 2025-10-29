import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCarById } from "@/config/store/slices/car/thunk";
import type { CarForRentFormType } from "./schema/form.schema";
import { CarForRentSchema } from "./schema/form.schema";
import DialogDeleteCar from "./components/DialogDeleteCar";
import { X, Plus } from "lucide-react";

export default function FormCar() {
  const { id } = useParams();
  const carState = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  const carId = Number(id);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CarForRentFormType>({
    resolver: zodResolver(CarForRentSchema),
    defaultValues: carState.car || {},
  });

  useEffect(() => {
    dispatch(fetchCarById(carId));
  }, [carId, dispatch, location.pathname]);

  useEffect(() => {
    if (carState.car) {
      Object.entries(carState.car).forEach(([key, value]) => {
        setValue(key as keyof CarForRentFormType, value as any);
      });
    }
  }, [carState.car, setValue]);

  const onSubmit = (data: CarForRentFormType) => {
    console.log("🚗 Datos validados:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-6 space-y-10">
        {/* Información Básica */}
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
              {errors.group && <span className="text-red-500 text-sm">{errors.group.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Marca *</label>
              <input
                type="text"
                {...register("brand")}
                placeholder="Ej: Toyota, Honda..."
                className="border rounded-lg p-2"
              />
              {errors.brand && <span className="text-red-500 text-sm">{errors.brand.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Año *</label>
              <input type="number" {...register("year", { valueAsNumber: true })} className="border rounded-lg p-2" />
              {errors.year && <span className="text-red-500 text-sm">{errors.year.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Tipo de Combustible *</label>
              <select {...register("fuel_type")} className="border rounded-lg p-2">
                <option value="">Selecciona combustible</option>
                <option value="gasolina">Gasolina</option>
                <option value="diésel">Diésel</option>
                <option value="eléctrico">Eléctrico</option>
              </select>
              {errors.fuel_type && <span className="text-red-500 text-sm">{errors.fuel_type.message}</span>}
            </div>
          </div>
        </section>

        {/* Capacidades */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Capacidades</h2>
          <hr className="mb-6 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input {...register("passenger_capacity", { valueAsNumber: true })} placeholder="Pasajeros" className="border rounded-lg p-2" />
            <input {...register("luggage_capacity", { valueAsNumber: true })} placeholder="Equipaje" className="border rounded-lg p-2" />
            <input {...register("tank_capacity", { valueAsNumber: true })} placeholder="Tanque" className="border rounded-lg p-2" />
          </div>
        </section>

        {/* Características */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Características</h2>
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
                <input type="checkbox" {...register(key as keyof CarForRentFormType)} />
                {label}
              </label>
            ))}
          </div>
        </section>

        {/* Botones */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-[var(--red-quartenary)] hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            Eliminar
          </button>

          <button
            type="submit"
            className="bg-[var(--blue-tertiary)] hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </form>

      {isOpen && (
        <DialogDeleteCar id={carId} open={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
