import { Calendar } from "lucide-react";

interface OfferCardProps {
  color: "orange" | "blue";
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
  valid: string;
  small?: boolean;
}

export default function OfferCard({
  color,
  icon,
  title,
  description,
  code,
  valid,
  small = false,
}: OfferCardProps) {
  const colorClasses =
    color === "orange"
      ? "bg-[#f37513] hover:bg-orange-500"
      : "bg-[#0056a4] hover:bg-blue-800";

  const headerColor =
    color === "orange" ? "bg-[#f37513]" : "bg-[#0056a4]";

  return (
    <div
      className={`bg-white rounded-2xl w-auto shadow-sm overflow-hidden border border-gray-200 ${
        small ? "scale-95" : ""
      }`}
    >
      <div
        className={`${headerColor} text-white flex flex-col items-center py-8`}
      >
        <div className="mb-3">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-6 text-left">
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="bg-gray-100 rounded-xl p-3 mb-4 flex items-center justify-between">
          <span className="text-gray-700 font-medium">Código:</span>
          <span className="text-lg font-bold text-gray-900">{code}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-5">
          <Calendar size={16} className="mr-2" />
          Válido hasta: {valid}
        </div>

        <button
          className={`w-full ${colorClasses} text-white font-semibold py-3 rounded-xl transition`}
        >
          Usar Esta Oferta
        </button>
      </div>
    </div>
  );
}