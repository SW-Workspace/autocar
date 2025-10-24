const Destinations = () => {
  const destinations = [
    {
      name: "Parque de Agua",
      img: "https://getvico.com/blog/wp-content/uploads/2022/09/Parque-del-Agua.jpg",
      delay: "0s",
    },
    {
      name: "Museo Arte Moderno",
      img: "https://getvico.com/blog/wp-content/uploads/2022/09/Museo-de-arte-moderno.jpg",
      delay: "0.1s",
    },
    {
      name: "El Cacique",
      img: "https://v0-car-rental-page-seven.vercel.app/guayaquil-ecuador-waterfront.jpg",
      delay: "0.2s",
    },
    {
      name: "Panachi",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ee/10/69/panachi-largejpg.jpg?w=500&h=400&s=1",
      delay: "0.3s",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-tertiary)] text-balance">
            Destinos para descubrir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-neutral-500 mx-auto text-pretty">
            Más que alquilar un carro, nosotros cuidamos de tu camino
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {destinations.map((dest, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-slate-200/80 shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: dest.delay }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-tertiary)]/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border cursor-pointer h-10 rounded-md px-6 border-[var(--blue-tertiary)] text-[var(--blue-tertiary)] hover:bg-[var(--blue-tertiary)] hover:text-white bg-transparent"
          >
            Consulta todos los destinos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
