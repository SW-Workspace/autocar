import { useEffect } from "react";
import Hero from "./components/Hero";
import { useParams } from "react-router-dom";
import Characteristics from "./components/Characteristics";
import TechnicalDetails from "./components/TechnicalDetails";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/config/store/store";
import { fetchCarById } from "@/config/store/slices/car/thunk";

export default function IndividualCar() {
  const { id } = useParams();

  const car = useSelector((state: RootState) => state.car.car);
  const dispatch = useDispatch<AppDispatch>();

  const carId = Number(id);

  useEffect(() => {
    dispatch(fetchCarById(carId));
  }, [carId]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">

        {/* TODO: Refactor (improve prop drilling) */} 
        <Hero
          group={car?.group!}
          make={car?.brand!}
          rent_per_day={car?.rent_per_day!}
          url_img={car?.url_img!}
        />
        <Characteristics
          passengers={car?.passenger_capacity!}
          luggages={car?.luggage_capacity!}
          transmission={car?.transmission!}
          fuel={car?.fuel_type!}
          doors={car?.car_doors!}
          AC={car?.air_conditioning!}
        />
        <TechnicalDetails
          carName={car?.group!}
          details={car?.details!}
          AC={car?.air_conditioning!}
          power_steering={car?.power_steering!}
          front_airbags={car?.front_airbags!}
          radio={car?.radio!}
          central_locking={car?.central_locking!}
          abs={car?.abs!}
          engine={car?.engine!}
          tank_capacity={car?.tank_capacity!}
          trunk_capacity={car?.trunk_capacity!}
          fuel_consumption={car?.fuel_consumption!}
          rent_per_day={car?.rent_per_day!}
        />
      </div>
    </>
  );
}
