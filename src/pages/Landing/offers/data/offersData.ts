import { Percent, Calendar, Gift, Star } from "lucide-react";
import type { ComponentType } from "react";

export interface OfferItem {
  color: "orange" | "blue";
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
  code: string;
  valid: string;
  small?: boolean;
}

const offersData: OfferItem[] = [
  {
    color: "orange",
    icon: Percent,
    title: "15% OFF - Nuevos Clientes",
    description:
      "Obtén un 15% de descuento en tu primera reserva. Usa el cupón BIENVENIDO al momento de reservar.",
    code: "BIENVENIDO",
    valid: "31 de Diciembre, 2025",
  },
  {
    color: "blue",
    icon: Calendar,
    title: "Alquiler Semanal - 20% OFF",
    description:
      "Alquila por 7 días o más y obtén un 20% de descuento en el total de tu reserva.",
    code: "SEMANA20",
    valid: "31 de Diciembre, 2025",
  },
  {
    color: "orange",
    icon: Gift,
    title: "Fin de Semana Especial",
    description:
      "Reserva de viernes a domingo y obtén el domingo gratis. Válido para todos los vehículos.",
    code: "FINDE",
    valid: "30 de Junio, 2025",
    small: true,
  },
  {
    color: "blue",
    icon: Star,
    title: "Upgrade Gratis",
    description:
      "Reserva un vehículo económico y recibe un upgrade gratis a la siguiente categoría, sujeto a disponibilidad.",
    code: "UPGRADE",
    valid: "31 de Marzo, 2025",
    small: true,
  },
];

export default offersData;
