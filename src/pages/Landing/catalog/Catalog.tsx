import { fetchCars } from "@/config/store/slices/car/thunk";
import type { AppDispatch, RootState } from "@/config/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Luggage, Users, DoorClosed, Gauge, Wind} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  // INFO: Un objeto que contiene otros objetos (cars.cars)
  const cars = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();

  // INFO: Esto recupera todos los carros y los guarda en la variable cars
  useEffect(() => {
    // NOTE: La función fetchCars ya tiene un console.log para mostrar los carros, no hay que poner otro.
    dispatch(fetchCars());
  }, [dispatch]);

  const seachFilter = cars.cars.filter((car) =>
    `${car.brand} ${car.group} ${car.year}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-15 gap-4 pb-4">
        <div className="flex items-center w-[80%]">
            <input 
                type="text"
                placeholder="Escribe el modelo o marca del carro..."
                className="flex-1 px-2 py-3 bg-white rounded-l-lg focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div 
                className="flex items-center justify-center px-4 bg-[var(--blue-tertiary)] text-white py-3 rounded-r-lg cursor-pointer">
                <Search/>
            </div>
        </div>
        
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
             {seachFilter.length > 0 ? (
                seachFilter.map((car) => (
                    <div key={car.id} className="cardCar bg-white rounded-lg shadow-md shadow-black/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                        <div className="rounded-t-lg relative w-full h-48 overflow-hidden">
                            <span className="absolute right-2 top-2 bg-[var(--yellow-secondary)] text-sm px-2 py-1 rounded-lg">
                                ${car.rent_per_day}
                            </span>
                            <img
                                src={car.url_img}
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

                            <button
                            className="w-full py-2 bg-[var(--yellow-secondary)] font-semibold rounded-lg cursor-pointer"
                            onClick={() => navigate(`/vehicles/${car.id}`)}
                            >
                            Ver detalles
                            </button>
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
