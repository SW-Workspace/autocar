import {
  supabaseGetAllCarsForRent,
  supabaseGetCarById,
} from "@/shared/services/carForRent/carForRent.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk("car/fetchCars", async () => {
  const cars = await supabaseGetAllCarsForRent();

  console.log("Carros para rentar:", cars);

  return cars || [];
});

export const fetchCarById = createAsyncThunk(
  "car/fetchCarById",
  async (id: number) => {
    const car = await supabaseGetCarById(id);

    console.log("Carro:", car);

    return car;
  },
);
