import { applyFilters } from "@/shared/helpers/carFilters.helpers";
import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAvailableCars } from "./thunk";

export interface CarFilters {
  group?: string[];
  transmission?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  passengerCapacity?: number;
  fuelType?: string[];
  features?: {
    airConditioning?: boolean;
    abs?: boolean;
    radio?: boolean;
  };
  searchQuery?: string;
}

interface CarsFilterState {
  allCars: SB_CarForRentModel[];
  filteredCars: SB_CarForRentModel[];
  filters: CarFilters;
  status: "idle" | "loading" | "succeded" | "failed";
  error: string | null;
}

const initialState: CarsFilterState = {
  allCars: [],
  filteredCars: [],
  filters: {
    group: [],
    transmission: [],
    priceRange: undefined,
    passengerCapacity: undefined,
    fuelType: [],
    features: {},
    searchQuery: "",
  },
  status: "idle",
  error: null,
};

const carsFilterSlice = createSlice({
  name: "carsFilter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof CarFilters; value: any }>,
    ) => {
      const { key, value } = action.payload;
      state.filters[key] = value as never;
      state.filteredCars = applyFilters(state.allCars, state.filters);
    },
    setFilters: (state, action: PayloadAction<Partial<CarFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredCars = applyFilters(state.allCars, state.filters);
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredCars = state.allCars;
    },
    clearFilter: (state, action: PayloadAction<keyof CarFilters>) => {
      state.filters[action.payload] = initialState.filters[
        action.payload
      ] as never;
      state.filteredCars = applyFilters(state.allCars, state.filters);
    },
    toggleFilterValue: (
      state,
      action: PayloadAction<{
        key: "group" | "transmission" | "fuelType";
        value: string;
      }>,
    ) => {
      const { key, value } = action.payload;
      const currentArray = state.filters[key] || [];

      if (currentArray.includes(value)) {
        state.filters[key] = currentArray.filter((v) => v !== value) as never;
      } else {
        state.filters[key] = [...currentArray, value] as never;
      }

      state.filteredCars = applyFilters(state.allCars, state.filters);
    },
    toggleFeature: (
      state,
      action: PayloadAction<"airConditioning" | "abs" | "radio">,
    ) => {
      const feature = action.payload;
      const features = state.filters.features || {};
      features[feature] = !features[feature];
      state.filters.features = features;
      state.filteredCars = applyFilters(state.allCars, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableCars.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAvailableCars.fulfilled, (state, action) => {
        state.status = "succeded";
        state.allCars = action.payload;
        state.filteredCars = applyFilters(action.payload, state.filters);
      })
      .addCase(fetchAvailableCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const {
  setFilter,
  setFilters,
  clearFilters,
  clearFilter,
  toggleFilterValue,
  toggleFeature
} = carsFilterSlice.actions;

export default carsFilterSlice.reducer;
