import { User, MapPin, Clock, Star} from "lucide-react";
import type { ComponentType } from "react";


export interface statsItem{
  icon: ComponentType<{ className?: string }>;
  stat: string;
  description: string;
}

const statsData:statsItem[] = [
    {
      icon: User,
      stat: "50,000+",
      description: "Clientes Satisfechos",
    },
    {
      icon: MapPin,
      stat: "25+",
      description: "Ubicaciones",
    },
    {
      icon: Clock,
      stat: "15+",
      description: "Años de Experiencia",
    },
    {
      icon: Star,
      stat: "98%",
      description: "Satisfacción del Cliente",
    },
  ];

  export default statsData;