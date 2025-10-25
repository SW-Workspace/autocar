import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./thunk";

interface CarState {
  cars: SB_CarForRentModel[];
  car: SB_CarForRentModel | null;
  status: "idle" | "loading" | "succeded" | "failed";
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  car: null,
  status: "idle",
  error: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<SB_CarForRentModel>) => {
      state.cars.push(action.payload);
    },
    updateCar: (state, action: PayloadAction<SB_CarForRentModel>) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);

      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    deleteCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCars.fulfilled,
        (state, action: PayloadAction<SB_CarForRentModel[]>) => {
          state.status = "succeded";
          state.cars = action.payload;
        },
      )
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Algo salió mal";
      })
      .addCase(fetchCarById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCarById.fulfilled,
        (state, action: PayloadAction<SB_CarForRentModel>) => {
          state.status = "succeded";
          state.car = action.payload;
        },
      )
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Algo salió mal";
      });
  },
});

export const { addCar, updateCar, deleteCar } = carSlice.actions;
export default carSlice.reducer;
