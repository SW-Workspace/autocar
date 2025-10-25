import { Calendar, MapPin } from "lucide-react";

interface Heroprops {
  group: string;
  make: string;
  rent_per_day: number;
  url_img: string;
}

export default function Hero(props: Heroprops) {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-around max-lg:justify-center max-lg:gap-4 lg:pl-15 items-center w-full max-lg:mt-8 h-auto md:h-dvh mt-3 lg:mt:0 bg-gradient-to-br from-[var(--blue-tertiary)] to-[var(--green-primary)]">
        <div className="flex justify-center items-center py-5 lg:py-0 text-white">
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold max-lg:text-3xl">
              Grupo {props.group}
            </span>
            <span>Similar a: {props.make}</span>
            <div>
              <span className="text-5xl text-[var(--yellow-secondary)] font-bold max-lg:text-4xl">
                ${props.rent_per_day}
              </span>
              <span>/por dia</span>
            </div>
            <div className="flex gap-3">
              <button className="flex gap-1 p-2 items-center bg-[var(--yellow-secondary)] rounded-lg text-sm text-black font-semibold cursor-pointer">
                <Calendar size={16} />
                Reservar Ahora
              </button>
              <button className="flex gap-1 p-2 items-center border border-white rounded-lg text-sm text-white font-semibold cursor-pointer">
                <MapPin size={16} />
                ver ubicaciones
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-max items-center justify-center py-5 max-md:px-4">
          <div className="inline-block max-w-2xl border-2 border-green-200 bg-[var(--green-primary)] items-center justify-center rounded-lg ">
            <div className="w-full h-max bg-white/50 backdrop-blur-2xl p-3 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={props.url_img}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

