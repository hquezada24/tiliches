"use client";
import {
  Mail,
  ImageIcon,
  Quote,
  FileText,
  ShoppingCart,
  Calendar,
  BarChart3,
  Share2,
  Globe,
  Plus,
} from "lucide-react";
import { WizardCheckboxCards } from "./WizardField";
import { DESIRED_FEATURES } from "@/types/main/WizardForm/schema";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="w-5 h-5" />,
  Image: <ImageIcon className="w-5 h-5" />,
  Quote: <Quote className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Plus: <Plus className="w-5 h-5" />,
};

const StepFeatures = () => {
  return (
    <WizardCheckboxCards
      name="desiredFeatures"
      columns={3}
      options={DESIRED_FEATURES.map((f) => ({
        value: f.value,
        label: f.label,
        icon: iconMap[f.icon],
      }))}
    />
  );
};

export default StepFeatures;
