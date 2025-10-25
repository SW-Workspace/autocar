import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import { supabaseGetCarById } from "@/shared/services/carForRent/carForRent.service"
import { useParams } from "react-router-dom";
import Characteristics from "./components/Characteristics";
import TechnicalDetails from "./components/TechnicalDetails";
import type { SB_CarForRentModel } from "@/shared/models/carForRent/carForRent.model";

export default function IndividualCar(){
    const { id } = useParams();
    const [carInfo, setCarInfo] = useState<SB_CarForRentModel | null>(null)
    const carId = Number(id);
    
    useEffect(()=>{
        const fetchGetData = async () =>{
            const data = await supabaseGetCarById(carId)
            setCarInfo(data)
            console.log(data, carId)
        }
        if (carId) fetchGetData()
    },[carId])
    
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center mt-12">
                <Hero 
                    group={carInfo?.group!}
                    make={carInfo?.make!}
                    rent_per_day={carInfo?.rent_per_day!}
                    url_img={carInfo?.url_img!}
                />
                <Characteristics
                    passengers={carInfo?.passenger_capacity!}
                    luggages={carInfo?.luggage_capacity!}
                    transmission={carInfo?.transmission!}
                    fuel={carInfo?.fuel_type!}
                    doors={carInfo?.car_doors!}
                    AC={carInfo?.air_conditioning!}
                />
                <TechnicalDetails
                    details={carInfo?.details!}
                    AC={carInfo?.air_conditioning!}
                    power_steering={carInfo?.power_steering!}
                    front_airbags={carInfo?.front_airbags!}
                    radio={carInfo?.radio!}
                    central_locking={carInfo?.central_locking!}
                    abs={carInfo?.abs!}
                    engine={carInfo?.engine!}
                    tank_capacity={carInfo?.tank_capacity!}
                    trunk_capacity={carInfo?.trunk_capacity!}
                    fuel_consumption={carInfo?.fuel_consumption!}
                    rent_per_day={carInfo?.rent_per_day!}
                />
        </div>
        </>
    )
}