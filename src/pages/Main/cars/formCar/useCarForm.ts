import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCarById } from "@/config/store/slices/car/thunk";
import { formSchema, type CarFormData } from "./schema/form.schema";
import { supabaseUpdateCarForRentById } from "@/shared/services/carForRent/carForRent.service";
import uploadImagesToStorage from "@/shared/helpers/image.helpers";
import { useAuth } from "@/shared/hooks/useAuth";

export function useCarForm() {
  const { id } = useParams();
  const { user } = useAuth();
  const carState = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const carId = Number(id);

  const form = useForm<CarFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { setValue, watch } = form;
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

const onSubmit = async (formData: CarFormData) => {
  try {
    const files = (formData.urls_img || []) as (File | string)[];
    const newFiles = files.filter((f): f is File => f instanceof File);
    const existingUrls = files.filter((f): f is string => typeof f === "string");

    const uploadedUrls =
      newFiles.length > 0
        ? await uploadImagesToStorage(newFiles, user?.id ?? "0")
        : [];

    const imageUrls = [...existingUrls, ...uploadedUrls];

    const { error } = await supabaseUpdateCarForRentById(carId, {
      ...formData,
      urls_img: imageUrls,
    });

    if (error) throw error;

    alert("Vehículo actualizado correctamente");
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    alert("Hubo un error al guardar los datos.");
  }
};

  return { ...form, carId, urls_img, onSubmit };
}
