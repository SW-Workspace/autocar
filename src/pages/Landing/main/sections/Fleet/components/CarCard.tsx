import { Gauge, Luggage, User } from "lucide-react";

export interface CardCarProps {
  image: string;
  price: number;
  name: string;
  related: string;
  passengers: number;
  suitcases: number;
  type: "Manual" | "Automática";
}

export default function CarCard(props: CardCarProps) {
  return (
    <>
      <div className="bg-card flex flex-col gap-6 rounded-xl border border-slate-200/80 shadow-md shadow-black/20 pb-6 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
        <div className="relative h-48 bg-muted overflow-hidden">
          <img
            src={props.image}
            alt={props.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-max gap-1 overflow-hidden border-transparent  absolute top-4 right-4 bg-[#F37513]">
            Desde ${props.price}/por día
          </span>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-1">
              {props.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Similar a: {props.related}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="text-slate-400 size-5" />
              <span>{props.passengers} pasajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <Luggage className="text-slate-400 size-5" />
              <span>{props.suitcases} maletas</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="text-slate-400 size-5" />
              <span>{props.type}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center [.border-t]:pt-6 p-6 pt-0">
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm transition-all h-9 px-4 py-2 w-full bg-[#F37513] hover:bg-[#F37513]/90 font-semibold cursor-pointer">
            Reservar Ahora
          </button>
        </div>
      </div>
    </>
  );
}
