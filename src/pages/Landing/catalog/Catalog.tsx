import { fetchCars } from "@/config/store/slices/car/thunk";
import type { AppDispatch, RootState } from "@/config/store/store";
import { useEffect, useState} from "react";
import type { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Luggage, Users, DoorClosed, Gauge, Wind, Plus} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";

export default function Catalog() {
  const [search, setSearch] = useState("")
  const { user } = useAuth()
  // INFO: Un objeto que contiene otros objetos (cars.cars)
  const cars = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const seachFilter = cars.cars.filter((car) =>
    `${car.brand} ${car.group} ${car.year}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trimStart());
  };

  return (
    <>
      <div className="flex flex-col items-center mt-15 gap-4 pb-4">
        <div className="flex items-center w-[80%]">
            <input 
                type="text"
                placeholder="Escribe el modelo o marca del carro..."
                className="flex-1 px-2 py-3 bg-white rounded-l-lg focus:outline-none"
                value={search}
                onChange={handleChange}
            />
            {!user ? (
                <div 
                    className="flex items-center justify-center px-4 bg-[var(--blue-tertiary)] text-white py-3 rounded-r-lg cursor-pointer">
                    <Search/>
                </div>
            ) : (
                <div className="flex">
                    <div className="flex gap-5 items-center justify-center px-4 bg-[var(--blue-tertiary)] text-white py-3 border-r cursor-pointer">
                        <Search/>
                    </div>
                    <Link to='/addcar'>
                        <button className="flex gap-5 items-center justify-center px-4 bg-[var(--red-quartenary)] text-white py-3 rounded-r-lg cursor-pointer">
                            <Plus /> 
                            <span>Alquilar un auto</span>
                        </button>
                    </Link>
                </div>
            )}
        </div>
        
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
             {seachFilter.length > 0 ? (
                seachFilter.map((car) => (
                    <div key={car.id} className="cardCar bg-white rounded-lg shadow-md shadow-black/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                        <div className="rounded-t-lg relative w-full h-48 overflow-hidden">
                            <span className="absolute right-2 top-2 bg-[var(--yellow-secondary)] text-sm px-2 py-1 rounded-lg z-90">
                                ${car.rent_per_day}
                            </span>
                            <img
                                src={car.urls_img[0]}
                                className="object-cover h-full w-full rounded-t-lg transition-transform duration-300 hover:scale-110 select-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 px-2 py-3">
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg">
                                    Grupo {car.group}
                                </span>
                                <span className="text-md text-gray-600">{car.brand}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-gray-600 items-center">
                                <div className="flex items-center gap-1">
                                    <Users size={18} />
                                    <span className="text-md">{car.passenger_capacity}</span>
                                </div>

                            <div className="flex items-center gap-1">
                                <Luggage size={18} />
                                <span className="text-md">{car.luggage_capacity}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Gauge size={18} />
                                <span className="text-md">{car.transmission}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <DoorClosed size={18} />
                                <span className="text-md">{car.car_doors}</span>
                                    </div>

                            <div className="flex items-center gap-1">
                                <Wind size={18} />
                                <span className="text-md">
                                {car.air_conditioning ? "Sí" : "No"}
                                </span>
                            </div>
                            </div>

                            <Link 
                                to={`/vehicles/${car.id}`}
                                className=" flex w-full py-2 bg-[var(--yellow-secondary)] font-semibold rounded-lg cursor-pointer items-center justify-center"
                            >
                            Ver detalles
                            </Link>
                        </div>
                        </div>
                    ))
                    ) : (
                    <span className="col-span-full text-center text-gray-600 py-6">
                        No se encontraron carros
                    </span>
                )}
        </div>
      </div>
    </>
  );
}
