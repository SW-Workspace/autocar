import { Car, DollarSign, Headset, Shield } from "lucide-react";
import ReasonCard from "./components/ReasonCard";

export default function WhyChooseUs() {
  const data = [
    {
      color: "text-orange-500",
      icon: DollarSign,
      title: "Precios Competitivos",
      description: "Las mejores tarifas del mercado sin costos ocultos",
    },
    {
      color: "text-blue-500",
      icon: Car,
      title: "Flota Moderna",
      description: "Vehículos nuevos y bien mantenidos",
    },
    {
      color: "text-orange-500",
      icon: Headset,
      title: "Atención 24/7",
      description: "Soporte al cliente disponible todo el día",
    },
    {
      color: "text-blue-500",
      icon: Shield,
      title: "Seguro incluído",
      description: "Protección completa en todos nuestros vehículos",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((reason, i) => (
          <ReasonCard
              key={i}
              color={reason.color}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
