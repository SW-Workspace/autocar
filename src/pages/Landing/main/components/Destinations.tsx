const Destinations = () => {
  const destinations = [
    {
      name: "Quito",
      img: "https://v0-car-rental-page-seven.vercel.app/galapagos-islands-beach-nature.jpg",
      delay: "0s",
    },
    {
      name: "Guayaquil",
      img: "https://v0-car-rental-page-seven.vercel.app/cuenca-ecuador-colonial-architecture.jpg",
      delay: "0.1s",
    },
    {
      name: "Cuenca",
      img: "https://v0-car-rental-page-seven.vercel.app/guayaquil-ecuador-waterfront.jpg",
      delay: "0.2s",
    },
    {
      name: "Galápagos",
      img: "https://v0-car-rental-page-seven.vercel.app/quito-ecuador-city-mountains.jpg",
      delay: "0.3s",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Destinos para descubrir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Más que alquilar un carro, nosotros cuidamos de tu camino
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {destinations.map((dest, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: dest.delay }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0056A4]/80 to-transparent"></div>
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
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 border-[#0056A4] text-[#0056A4] hover:bg-[#0056A4] hover:text-white bg-transparent"
          >
            Consulta todos los destinos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
