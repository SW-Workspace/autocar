import { z } from 'zod';
import type { FieldErrors } from 'react-hook-form';

export const carSchema = z.object({
    group: z.enum(['Económico', 'SUV Compacto', 'Sedán Premium'])
        .refine(val => val !== undefined, {
                message: "El grupo del auto es requerido"
        }),
    brand: z.string().min(1, "La marca es requerida").max(100, "Marca demasiado larga"),
    year: z.number()
    .min(1950, "El año debe ser mayor o igual a 1950")
    .max(new Date().getFullYear() + 1, "El año no puede ser futuro"),
    fuel_type: z.enum(['gasolina', 'diésel', 'híbrido', 'eléctrico'])
        .refine(val => val !== undefined, {
            message: "El tipo de combustible es requerido"
        }),

    passenger_capacity: z.number().min(1, "Debe ser al menos 1 pasajero"),
    luggage_capacity: z.number().min(0, "No puede ser negativo").optional(),
    tank_capacity: z.number().min(0, "No puede ser negativo").optional(),

    transmission: z.enum(['Manual', 'Automática'])
        .refine(val => val !== undefined, {
            message: "La transmisión es requerida"
        }),
    engine: z.string().max(50, "Descripción del motor demasiado larga").optional(),
    fuel_consumption: z.string().max(20, "Consumo demasiado largo").optional(),
    car_doors: z.number().min(2).max(6, "Máximo 6 puertas").optional(),

    air_conditioning: z.boolean().optional(),
    power_steering: z.boolean().optional(),
    front_airbags: z.boolean().optional(),
    radio: z.boolean().optional(),
    central_locking: z.boolean().optional(),
    abs: z.boolean().optional(),

    rent_per_day: z.number().min(1, "El precio por día debe ser mayor a 0"),
    rental_duraction_days: z.number().min(1, "La duración mínima debe ser al menos 1 día").optional(),
    pick_up_location: z.string().min(5, "La ubicación es muy corta").max(200, "Ubicación demasiado larga"),

    travel_conditions: z.string().min(10, "Describe las condiciones de viaje (mínimo 10 caracteres)").max(500, "Descripción demasiado larga"),
    details: z.string().max(1000, "Detalles demasiado largos").optional(),    

    imageFiles: z.array(z.instanceof(File))
      .max(10, "Máximo 10 archivos de imagen")
      .optional(),

})

export type CarFormData = z.infer<typeof carSchema>;

export interface AddCarsFormProps {
  formData?: CarFormData;
  setFormData?: (field: keyof CarFormData, value: any) => void;
  errors?: FieldErrors;
}