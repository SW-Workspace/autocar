import { CircleCheck, CircleX, Phone, Check } from "lucide-react";

interface TechnicalDetailsProps {
  details: string;
  AC: boolean;
  power_steering: boolean;
  front_airbags: boolean;
  radio: boolean;
  central_locking: boolean;
  abs: boolean;
  engine: string;
  tank_capacity: number;
  trunk_capacity: number;
  fuel_consumption: string;
  rent_per_day: number;
}

export default function TechnicalDetails(props: TechnicalDetailsProps) {
  const features = [
    { label: "Aire acondicionado", value: props.AC },
    { label: "Dirección asistida", value: props.power_steering },
    { label: "Airbags frontales", value: props.front_airbags },
    { label: "Radio AM/FM", value: props.radio },
    { label: "Cierre centralizado", value: props.central_locking },
    { label: "ABS", value: props.abs },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 w-full bg-white p-6">
        <div className="flex flex-1 flex-col gap-4 w-full max-w-4xl">
          <span className="text-2xl text-black font-semibold">
            Descripción del vehículo
          </span>
          <p>{props.details}</p>

          <hr className="my-2" />

          <span className="text-lg font-semibold text-black">
            Características incluidas
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features
              .map((f) => (
                <div className="flex items-center gap-2 bg-gray-50 rounded-md p-3">
                  {f.value? 
                    <CircleCheck className="text-[var(--green-primary)] w-5 h-5"/>
                    :<CircleX className="text-[var(--red-quartenary)] w-5 h-5"/> 
                  }
                  <span className="text-black font-medium">
                    {f.label}
                  </span>
                </div>
              ))}
          </div>
          <span className="text-lg font-semibold text-black">Especificaciones tecnicas</span>
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-1 bg-gray-50 rounded-md p-3">
                <span>Motor</span>
                <span className="text-lg text-[var(--blue-tertiary)] font-semibold">{props.engine}</span>
             </div>
             
             <div className="flex flex-col gap-1 bg-gray-50 rounded-md p-3">
                <span>Consumo de combustible</span>
                <span className="text-lg text-[var(--blue-tertiary)] font-semibold">{props.fuel_consumption}</span>
             </div>
             
             <div className="flex flex-col gap-1 bg-gray-50 rounded-md p-3">
                <span>Capacidad del tanque</span>
                <span className="text-lg text-[var(--blue-tertiary)] font-semibold">{props.tank_capacity}L</span>
             </div>
             
             <div className="flex flex-col gap-1 bg-gray-50 rounded-md p-3">
                <span>Capacidad del maletero</span>
                <span className="text-lg text-[var(--blue-tertiary)] font-semibold">{props.trunk_capacity}L</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-[var(--blue-tertiary)] rounded-xl shadow-md p-6 w-full max-w-sm bg-white md:sticky md:top-24">
            <span className="text-sm text-gray-500">Desde</span>
            <span className="text-4xl font-bold text-[var(--blue-tertiary)]">
                ${props.rent_per_day}
            </span>
            <span className="text-gray-500">/ por día</span>

            <button className="w-full mt-4 bg-[var(--green-primary)] hover:bg-green-500 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer">
                <Phone size={16}/>
                WhatsApp
            </button>

            <button className="w-full mt-2 border border-[var(--blue-tertiary)] text-[var(--blue-tertiary)] font-medium py-3 rounded-md hover:bg-[var(--blue-tertiary)] hover:text-white transition cursor-pointer">
                Paypal
            </button>
            <hr className="w-full mt-5"/>

            <ul className="w-full mt-4 text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                    <Check className="w5 h-5 text-green-500"/>
                    Cancelación gratuita
                </li>
                <li className="flex items-center gap-2">
                    <Check className="w5 h-5 text-green-500"/>
                    Seguro incluido
                </li>
                <li className="flex items-center gap-2">
                    <Check className="w5 h-5 text-green-500"/>
                    Sin costos ocultos
                </li>
                <li className="flex items-center gap-2">
                    <Check className="w5 h-5 text-green-500"/>
                    Soporte 24/7
                </li>
            </ul>
        </div>
      </section>
    </>
  );
}
