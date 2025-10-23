export interface SB_CarForRentModel {
  id: number;
  group: string;
  make: string;
  year?: number;
  passenger_capacity: number;
  luggage_capacity: number;
  transmission: string;
  travel_conditions?: string;
  fuel_type?: string;
  renter_id: number;
  owner_id?: number | null;
  pick_up_location: string;
  available: boolean;
  rent_per_day: number;
  rental_duraction_days?: number;
  details?: string;
  created_at?: string;
}
