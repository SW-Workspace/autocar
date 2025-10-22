import { Percent, Calendar, Gift, Star } from "lucide-react";
import OfferCard from "./components/Offercard";

export default function Offers() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-6xl py-10 mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Ofertas Especiales
        </h2>
        <p className="text-gray-600 mb-10">
          Aprovecha nuestras promociones exclusivas y ahorra en tu próximo alquiler
        </p>

        <div className="grid md:grid-cols-2 justify-center gap-8 max-w-4xl mx-auto w-full">

          <OfferCard
            color="orange"
            icon={<Percent size={48} />}
            title="15% OFF - Nuevos Clientes"
            description="Obtén un 15% de descuento en tu primera reserva. Usa el cupón BIENVENIDO al momento de reservar."
            code="BIENVENIDO"
            valid="31 de Diciembre, 2025"
          />

          <OfferCard
            color="blue"
            icon={<Calendar size={48} />}
            title="Alquiler Semanal - 20% OFF"
            description="Alquila por 7 días o más y obtén un 20% de descuento en el total de tu reserva."
            code="SEMANA20"
            valid="31 de Diciembre, 2025"
          />

          <OfferCard
            color="orange"
            icon={<Gift size={40} />}
            title="Fin de Semana Especial"
            description="Reserva de viernes a domingo y obtén el domingo gratis. Válido para todos los vehículos."
            code="FINDE"
            valid="30 de Junio, 2025"
            small
          />

          <OfferCard
            color="blue"
            icon={<Star size={40} />}
            title="Upgrade Gratis"
            description="Reserva un vehículo económico y recibe un upgrade gratis a la siguiente categoría, sujeto a disponibilidad."
            code="UPGRADE"
            valid="31 de Marzo, 2025"
            small
          />
        </div>
      </div>
    </section>
  );
}


