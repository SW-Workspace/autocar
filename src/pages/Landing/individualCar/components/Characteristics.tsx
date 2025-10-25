import { Users, Briefcase, Gauge, Fuel, DoorClosed, Wind } from "lucide-react";

interface CharacteristicsProps {
  passengers: number;
  luggages: number;
  transmission: string;
  fuel: string;
  doors: number;
  AC: boolean;
}

export default function Characteristics(props: CharacteristicsProps) {
  return (
    <>
      <div className="grid grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 gap-6 w-full h-auto bg-neutral-200 items-center justify-center px-10 py-12">
        <div className="bg-white text-[var(--blue-tertiary)] w-full p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <Users className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.passengers}</h2>
          <p className="text-gray-600">Pasajeros</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <Briefcase className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.luggages}</h2>
          <p className="text-gray-600">Maletas</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <Gauge className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.transmission}</h2>
          <p className="text-gray-600">Transmisión</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <Fuel className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.fuel}</h2>
          <p className="text-gray-600">Combustible</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <DoorClosed className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.doors}</h2>
          <p className="text-gray-600">Puertas</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full">
              <Wind className="w-10 h-10" />
            </span>
          </div>
          <h2 className="text-lg font-bold">{props.AC ? "Sí" : "No"}</h2>
          <p className="text-gray-600">A/C</p>
        </div>
      </div>
    </>
  );
}
