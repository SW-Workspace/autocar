import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  ClipboardCheck,
  Eye,
} from "lucide-react";
import type { ComponentType } from "react";

export interface ValueItem {
  icon: ComponentType<{ size?: number; className?: string }>;
  value: string;
}

// TODO: Optimize

const valuesData: ValueItem[] = [
  {
    icon: ShieldCheck,
    value: "Integridad",
  },
  {
    icon: Award,
    value: "Excelencia",
  },
  {
    icon: Lightbulb,
    value: "Innovación",
  },
  {
    icon: Handshake,
    value: "Compromiso",
  },
  {
    icon: ClipboardCheck,
    value: "Responsabilidad",
  },
  {
    icon: Eye,
    value: "Transparencia",
  },
];

export default valuesData;
