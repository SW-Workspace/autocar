import { Badge } from "@/shared/components/ui/Badge";
import CarCard from "./components/CarCard";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Fleet() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      image:
        "https://v0-car-rental-page-seven.vercel.app/compact-economy-car-silver.jpg",
      price: 35,
      name: "Grupo Ecónomico",
      related: "Kia Picanto, Chevrolet Spark",
      passengers: 5,
      suitcases: 2,
      type: "Manual",
    },
    {
      id: 2,
      image:
        "https://v0-car-rental-page-seven.vercel.app/compact-suv-white-modern.jpg",
      price: 55,
      name: "Grupo SUV Compacto",
      related: "Nissan Kick, Hyundai Creta",
      passengers: 5,
      popular: true,
      suitcases: 3,
      type: "Automática",
    },
    {
      id: 3,
      image:
        "https://v0-car-rental-page-seven.vercel.app/sedan-car-red-modern.jpg",
      price: 65,
      name: "Grupo Sedán Premium",
      related: "Toyota Corolla, Honda Civic",
      passengers: 5,
      suitcases: 3,
      type: "Automática",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl text-[var(--blue-tertiary)] font-bold text-foreground text-balance">
            Conoce nuestra flota
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-neutral-500">
            Las mejores opciones para que reserves y aproveches
          </p>
          <Badge color="bg-[var(--red-quartenary)] text-white">
            <Zap />
            ¡Ofertas Especiales Disponibles!
          </Badge>
        </div>
      </div>

      <div className="grid gap-8 mb-12 w-7xl mx-auto max-2xl:w-5xl grid-cols-3 max-lg:grid-cols-2 max-lg:w-full max-md:grid-cols-1">
        {data.map((car, i) => (
          <CarCard
            key={i}
            id={car.id}
            image={car.image}
            price={car.price}
            popular={car.popular || false}
            name={car.name}
            related={car.related}
            passengers={car.passengers}
            suitcases={car.suitcases}
            type={car.type as "Manual" | "Automática"}
          />
        ))}
      </div>
      <div className="text-center">
        <button 
          className="items-center justify-center gap-2 cursor-pointer text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6  border-[var(--blue-tertiary)] text-[var(--blue-tertiary)] hover:bg-[var(--blue-tertiary)] hover:text-white bg-transparent"
          onClick={()=> navigate('/catalog')}
          >
          Ver todos los grupos
        </button>
      </div>
    </section>
  );
}
