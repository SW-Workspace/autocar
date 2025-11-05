import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { carSchema, type CarFormData } from "../schemas/carSchema";
import { useAuth } from "@/shared/hooks/useAuth";
import uploadImagesToStorage from "@/shared/helpers/image.helpers";
import {
  supabaseCreateCarForRent,
  supabaseUpdateCarForRentById,
  supabaseGetCarById,
} from "@/shared/services/carForRent/carForRent.service";
import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";

export const useCarForm = (carId?: string) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!!carId);
  const [originalCar, setOriginalCar] = useState<SB_CarForRentModel | null>(
    null,
  );

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
    defaultValues: {},
  });

  const formData = watch();

  useEffect(() => {
    const loadCarData = async () => {
      if (!carId) return;

      try {
        setIsLoading(true);
        const car = await supabaseGetCarById(parseInt(carId));
        setOriginalCar(car);

        if (car.owner_id !== Number(user?.id)) {
          setSubmitError("No tienes permisos para editar este auto");
          navigate("/catalog");
          return;
        }

        reset({
          group: car.group as "Económico" | "SUV Compacto" | "Sedán Premium",
          brand: car.brand,
          year: car.year,
          fuel_type: car.fuel_type as
            | "gasolina"
            | "diésel"
            | "híbrido"
            | "eléctrico",
          passenger_capacity: car.passenger_capacity,
          luggage_capacity: car.luggage_capacity,
          trunk_capacity: car.trunk_capacity,
          tank_capacity: car.tank_capacity,
          transmission: car.transmission as "Manual" | "Automática",
          engine: car.engine,
          fuel_consumption: car.fuel_consumption,
          car_doors: car.car_doors,
          air_conditioning: car.air_conditioning,
          power_steering: car.power_steering,
          front_airbags: car.front_airbags,
          radio: car.radio,
          central_locking: car.central_locking,
          abs: car.abs,
          rent_per_day: car.rent_per_day,
          rental_duraction_days: car.rental_duraction_days,
          pick_up_location: car.pick_up_location,
          travel_conditions: car.travel_conditions,
          details: car.details,
          urls_img: [],
        });
      } catch (error) {
        console.error("Error al cargar el auto:", error);
        setSubmitError("Error al cargar los datos del auto");
      } finally {
        setIsLoading(false);
      }
    };

    loadCarData();
  }, [carId, user?.id, navigate, reset]);

  const mapFormDataToSupabase = async (
    formData: CarFormData,
  ): Promise<Partial<SB_CarForRentModel>> => {
    let imageUrls: string[] = [];

    if (formData.urls_img && formData.urls_img.length > 0) {
      imageUrls = await uploadImagesToStorage(
        formData.urls_img as File[],
        user?.id ?? "0",
      );
    } else if (originalCar && carId) {
      imageUrls = originalCar.urls_img;
    }

    return {
      group: formData.group || "",
      brand: formData.brand || "",
      year: formData.year,
      passenger_capacity: formData.passenger_capacity || 0,
      luggage_capacity: formData.luggage_capacity || 0,
      transmission: formData.transmission || "",
      travel_conditions: formData.travel_conditions,
      fuel_type: formData.fuel_type,
      pick_up_location: formData.pick_up_location || "",
      available: true,
      rent_per_day: formData.rent_per_day || 0,
      rental_duraction_days: formData.rental_duraction_days,
      details: formData.details,
      car_doors: formData.car_doors || 0,
      air_conditioning: formData.air_conditioning || false,
      power_steering: formData.power_steering || false,
      front_airbags: formData.front_airbags || false,
      radio: formData.radio || false,
      central_locking: formData.central_locking || false,
      abs: formData.abs || false,
      fuel_consumption: formData.fuel_consumption || "",
      engine: formData.engine || "",
      tank_capacity: formData.tank_capacity || 0,
      trunk_capacity: formData.trunk_capacity || 0,
      urls_img: imageUrls,
      renter_id: user?.id ? parseInt(user.id) : 0,
    };
  };

  const onSubmit = async (data: CarFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log("Formulario válido:", data);

      const carData = await mapFormDataToSupabase(data);
      console.log("Datos para Supabase:", carData);

      if (carId) {
        const result = await supabaseUpdateCarForRentById(
          parseInt(carId),
          carData,
        );
        console.log("Auto actualizado exitosamente:", result);
      } else {
        const result = await supabaseCreateCarForRent({
          ...carData,
          owner_id: Number(user?.id),
        });
        console.log("Auto creado exitosamente:", result);
      }

      navigate("/catalog");
    } catch (error) {
      console.error("Error al guardar el auto:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al guardar el auto",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof CarFormData, value: any) => {
    setValue(field, value);
  };

  const handleCancel = () => {
    navigate("/catalog");
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    errors,
    setValue,
    formData,
    updateFormData,
    handleCancel,
    isSubmitting,
    submitError,
    isLoading,
    isEditing: !!carId,
    originalCar,
  };
};
