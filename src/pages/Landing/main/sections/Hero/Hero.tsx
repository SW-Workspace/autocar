import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { setFilters } from "@/config/store/slices/filters/filters.slice";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formHeroSchema = z.object({
    pick_up_location: z.string().min(1, "La ubicación es requerida"),
    date_collection: z.string().min(1, "La fecha de recogida es requerida"),
    hour: z.string().min(1, "La hora es requerida"),
    date_return: z.string().min(1, "La fecha de devolución es requerida"),
  })

  type formHero = z.infer<typeof formHeroSchema>;

  const {
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<formHero>({
        resolver: zodResolver(formHeroSchema),
        defaultValues: {}
    });

  const formData = watch();

  const handleChange = (field: keyof formHero, value: any) => {
    setValue(field, value);
  };

  const onSubmit = (data: formHero) => {
    console.log('Formulario válido:', data);
    dispatch(setFilters(data))
    navigate('/catalog')
  }

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
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border border-slate-200/80 bg-white/20 backdrop-blur-xl p-6 shadow-2xl animate-slide-in-right">
              <div className="space-y-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-4 md:grid-cols-2"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="pick_up_location"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Lugar de recogida
                    </label>
                    <div className="relative">
                      <MapPin className="absolute text-neutral-800 bottom-2.5 left-1.5 size-5" />
                      <input
                        value={formData?.pick_up_location || ""}
                        onChange={(e) => handleChange("pick_up_location", e.target.value)}
                        type="text"
                        name="pick_up_location"
                        id="pick_up_location"
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
                        value={formData?.date_collection || ""}
                        onChange={(e) => handleChange("date_collection", e.target.value)}
                        type="date"
                        name="date-collection"
                        id="date-collection"
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="hour"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Hora de devolución
                    </label>
                    <div className="relative">
                      <Clock className="text-neutral-800 size-5 absolute bottom-2.5 left-2" />
                      <input
                        value={formData?.hour || ""}
                        onChange={(e) => handleChange("hour", e.target.value)}
                        type="time"
                        name="hour"
                        id="hour"
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
                        value={formData?.date_return || ""}
                        onChange={(e) => handleChange("date_return", e.target.value)}
                        type="date"
                        name="date-return"
                        id="date-return"
                        className="outline-0 rounded-md placeholder:text-neutral-800 border border-black px-2 pl-8 h-10 w-full"
                      />
                    </div>
                  </div>
                <button 
                  type="submit"
                  className="inline-flex col-span-2 items-center justify-center gap-2 rounded-md transition-all px-4 py-2 w-full bg-[var(--yellow-secondary)] h-12 text-base font-semibold cursor-pointer">
                  <Search className="size-5" />
                  Buscar Vehículos
                </button>
                </form>
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
