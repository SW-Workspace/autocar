import { fetchCars } from "@/config/store/slices/car/thunk";
import type { AppDispatch, RootState } from "@/config/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Catalog() {
  // INFO: Un objeto que contiene otros objetos (cars.cars)
  const cars = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();

  // INFO: Esto recupera todos los carros y los guarda en la variable cars
  useEffect(() => {
    // NOTE: La función fetchCars ya tiene un console.log para mostrar los carros, no hay que poner otro.
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <ul>
        {cars.cars.map((car) => (
          <li key={car.id}>{car.group}</li>
        ))}
      </ul>
    </>
  );
}
