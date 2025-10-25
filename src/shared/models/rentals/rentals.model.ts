export default interface SB_RentalsModel {
  id: number;
  car_id: number;
  renter_id: number;
  owner_id: number;
  start_date: string;
  end_date: string;
  total_price: number;
  status: "pendiente" | "en curso" | "finalizado" | "cancelado";
}

