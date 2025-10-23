const Hero = () => {
  return (
    <section className="relative bg-[#0056A4] overflow-hidden ">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"></div>
      </div>
      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
              Alquila con nosotros y<br></br>
              <span className="text-[#F37513]">vive tu próxima aventura</span>
            </h1>
            <div className="inline-flex items-center gap-3 rounded-lg bg-[#F37513] px-4 py-3 animate-scale-in">
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
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-white p-6 shadow-2xl animate-slide-in-right">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-map-pin absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Ciudad, Aeropuerto..."
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <input
                        type="date"
                        name="date-collection"
                        id="date-collection"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-clock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <input
                        type="date"
                        name="date-return"
                        id="date-return"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
                      />
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[>svg]:px-3 w-full bg-[#F37513] hover:bg-accent/90 h-12 text-base font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-search mr-2 h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056A4]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

