import type { CarFilters } from "@/config/store/slices/filters/filters.slice";
import type { SB_CarForRentModel } from "../models/carForRent/carForRent.model";

export const applyFilters = (
  cars: SB_CarForRentModel[],
  filters: CarFilters,
): SB_CarForRentModel[] => {
  return cars.filter((car) => {
    if (filters.group && filters.group.length > 0) {
      if (!filters.group.includes(car.group)) return false;
    }

    if (filters.transmission && filters.transmission.length > 0) {
      if (!filters.transmission.includes(car.transmission)) return false;
    }

    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (car.rent_per_day < min || car.rent_per_day > max) return false;
    }

    if (filters.passengerCapacity) {
      if (car.passenger_capacity < filters.passengerCapacity) return false;
    }

    if (filters.fuelType && filters.fuelType.length > 0) {
      if (!car.fuel_type || !filters.fuelType.includes(car.fuel_type))
        return false;
    }

    if (filters.features) {
      if (filters.features.airConditioning && !car.air_conditioning)
        return false;
      if (filters.features.abs && !car.abs) return false;
      if (filters.features.radio && !car.radio) return false;
    }

    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      const query = filters.searchQuery.toLowerCase();
      const matchesBrand = car.brand.toLowerCase().includes(query);
      const matchesGroup = car.group.toLowerCase().includes(query);
      if (!matchesBrand && !matchesGroup) return false;
    }

    return true;
  });
};
