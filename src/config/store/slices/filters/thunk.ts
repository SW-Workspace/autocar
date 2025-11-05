import { supabaseGetAllAvailableCars } from "@/shared/services/carForRent/carForRent.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAvailableCars = createAsyncThunk(
  "carFilter/fetchAvailableCars",
  async (_, { rejectWithValue }) => {
    try {
      const cars = await supabaseGetAllAvailableCars();
      return cars;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Error al cargar los autos",
      );
    }
  },
);
