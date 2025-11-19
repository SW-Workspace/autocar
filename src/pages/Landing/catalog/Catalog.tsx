import type { AppDispatch, RootState } from "@/config/store/store";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  Luggage,
  Users,
  DoorClosed,
  Gauge,
  Wind,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";

import {
  clearFilters,
  setFilter,
} from "@/config/store/slices/filters/filters.slice";
import { fetchAvailableCars } from "@/config/store/slices/filters/thunk";

export default function Catalog() {
  const { user } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const { filteredCars, filters, status } = useSelector(
    (state: RootState) => state.carsFilter,
  );

  const [localSearch, setLocalSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trimStart();
    setLocalSearch(val);
  };

  const handleSearch = () => {
    dispatch(setFilter({ key: "searchQuery", value: localSearch }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setLocalSearch("");
  };

  useEffect(() => {
    dispatch(fetchAvailableCars());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center mt-15 gap-4 pb-4">
        <div className="flex items-center w-[80%]">
          <input
            type="text"
            placeholder="Escribe el modelo o marca del carro..."
            className="flex-1 px-2 py-3 bg-white rounded-l-lg focus:outline-none"
            value={localSearch}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {!user ? (
            <button
              onClick={handleSearch}
              className="flex items-center justify-center px-4 bg-[var(--blue-tertiary)] text-white py-3 rounded-r-lg cursor-pointer hover:bg-[var(--blue-tertiary)]/90 transition-colors"
            >
              <Search />
            </button>
          ) : (
            <div className="flex">
              <button
                onClick={handleSearch}
                className="flex gap-5 items-center justify-center px-4 bg-[var(--blue-tertiary)] text-white py-3 border-r cursor-pointer hover:bg-[var(--blue-tertiary)]/90 transition-colors"
              >
                <Search />
              </button>
              <Link to="/addcar">
                <button className="flex gap-5 items-center justify-center px-4 bg-[var(--red-quartenary)] text-white py-3 rounded-r-lg cursor-pointer hover:bg-[var(--red-quartenary)]/90 transition-colors">
                  <Plus />
                  <span>Alquila tu auto</span>
                </button>
              </Link>
            </div>
          )}
        </div>

        {(!!filters.searchQuery ||
          (filters.group?.length ?? 0) > 0 ||
          (filters.transmission?.length ?? 0) > 0) && (
          <div className="w-[80%] flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Filtros activos:</span>

            {filters.searchQuery && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Búsqueda: "{filters.searchQuery}"
              </span>
            )}

            {filters.group?.map((group) => (
              <span
                key={group}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {group}
              </span>
            ))}

            {filters.transmission?.map((trans) => (
              <span
                key={trans}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {trans}
              </span>
            ))}
          </div>
        )}

        <div className="w-[80%] flex justify-between items-center">
          <p className="text-gray-600">
            Mostrando{" "}
            <span className="font-semibold">{filteredCars.length}</span> autos
          </p>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            Limpiar filtros
          </button>
        </div>

        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          {status === "loading" ? (
            <div className="col-span-full flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                className="cardCar bg-white rounded-lg shadow-md shadow-black/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              >
                <div className="rounded-t-lg relative w-full h-48 overflow-hidden">
                  <span className="absolute right-2 top-2 bg-[var(--yellow-secondary)] text-sm px-2 py-1 rounded-lg z-90">
                    ${car.rent_per_day}
                  </span>
                  <img
                    src={car.urls_img[0]}
                    alt={`${car.brand} - Grupo ${car.group}`}
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
                    <div className="flex items-center gap-1" title="Pasajeros">
                      <Users size={18} />
                      <span className="text-md">{car.passenger_capacity}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Maletas">
                      <Luggage size={18} />
                      <span className="text-md">{car.luggage_capacity}</span>
                    </div>
                    <div
                      className="flex items-center gap-1"
                      title="Transmisión"
                    >
                      <Gauge size={18} />
                      <span className="text-md">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Puertas">
                      <DoorClosed size={18} />
                      <span className="text-md">{car.car_doors}</span>
                    </div>
                    <div
                      className="flex items-center gap-1"
                      title="Aire acondicionado"
                    >
                      <Wind size={18} />
                      <span className="text-md">
                        {car.air_conditioning ? "Sí" : "No"}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/vehicles/${car.id}`}
                    className="flex w-full py-2 bg-[var(--yellow-secondary)] font-semibold rounded-lg cursor-pointer items-center justify-center hover:bg-[var(--yellow-secondary)]/90 transition-colors"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="flex flex-col items-center gap-3">
                <Search size={48} className="text-gray-400" />
                <p className="text-gray-600 text-lg font-medium">
                  No se encontraron carros
                </p>
                <p className="text-gray-500 text-sm">
                  Intenta ajustar tus filtros de búsqueda
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
