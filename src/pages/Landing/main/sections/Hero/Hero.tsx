import { Calendar, Clock, MapPin, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-210 from-[var(--green-primary)] via-[var(--blue-tertiary)] to-[var(--yellow-secondary)] overflow-hidden min-h-[98dvh] flex items-center mt-4">
      <div className="absolute inset-0 h-full w-full  bg-[radial-gradient(#1a67ad90_2px,transparent_0.2px)] [background-size:36px_36px]" />

      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl max-w-[17ch] lg:text-6xl text-balance">
              Alquila con nosotros y<br></br>
              <span className="text-[var(--yellow-secondary)]">
                vive tu próxima aventura
              </span>
            </h1>
            <div className="inline-flex w-max text-white items-center gap-3 rounded-lg bg-[var(--red-quartenary)] px-4 py-3 animate-scale-in">
              <div className="text-2xl font-bold text-accent-foreground">
                15% OFF
              </div>
              <div className="text-sm text-accent-foreground">
                <div className="font-semibold">Usa el cupón BIENVENIDO</div>
                <div className="text-xs opacity-90">
                  Válido hasta el 31 de diciembre de 2025
                </div>
              </div>
            </div>
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border border-slate-200/80 bg-white/20 backdrop-blur-xl p-6 shadow-2xl animate-slide-in-right">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Lugar de recogida
                    </label>
                    <div className="relative">
                      <MapPin className="absolute text-neutral-800 bottom-2.5 left-1.5 size-5" />
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Ciudad, Aeropuerto..."
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="date-collection"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Fecha de recogida
                    </label>
                    <div className="relative">
                      <Calendar className="absolute bottom-2.5 size-5 left-2 text-neutral-800" />
                      <input
                        type="date"
                        name="date-collection"
                        id="date-collection"
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="time"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Hora
                    </label>
                    <div className="relative">
                      <Clock className="text-neutral-800 size-5 absolute bottom-2.5 left-2" />
                      <input
                        type="time"
                        name="time"
                        id="time"
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="date-return"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Fecha de devolución
                    </label>
                    <div className="relative">
                      <Calendar className="text-neutral-800 absolute size-5 bottom-2.5 left-2" />
                      <input
                        type="date"
                        name="date-return"
                        id="date-return"
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md transition-all px-4 py-2 w-full bg-[var(--yellow-secondary)] h-12 text-base font-semibold cursor-pointer">
                  <Search className="size-5" />
                  Buscar Vehículos
                </button>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block animate-fade-in-up">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://v0-car-rental-page-seven.vercel.app/happy-person-driving-modern-car.jpg"
                alt="Foto como ejemplo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056A4]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
