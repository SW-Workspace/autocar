import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCarById } from "@/config/store/slices/car/thunk";
import { formSchema, type CarFormData } from "./schema/form.schema"
import { supabaseUpdateCarForRentById } from "@/shared/services/carForRent/carForRent.service";

export function useCarForm() {
  const { id } = useParams();
  const carState = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const carId = Number(id);

  const form = useForm<CarFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { setValue, watch, handleSubmit } = form;
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
  };

  const handleDeleteImage = (index: number) => {
    const updated = urls_img.filter((_, i) => i !== index);
    setValue("urls_img", updated, { shouldDirty: true });
  };

  const handleAddImage = (url: string) => {
    if (!url) return;
    const updated = [...urls_img, url];
    setValue("urls_img", updated, { shouldDirty: true });
  };

  return { ...form, carId, urls_img, onSubmit, handleDeleteImage, handleAddImage };
}
