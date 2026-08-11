"use client";
import {
  Users,
  Briefcase,
  ShoppingBag,
  MessageSquare,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { WizardRadioCards } from "./WizardField";
import { WEBSITE_GOALS } from "@/types/main/WizardForm/schema";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const StepGoal = () => {
  return (
    <WizardRadioCards
      name="websiteGoal"
      columns={2}
      options={WEBSITE_GOALS.map((g) => ({
        value: g.value,
        label: g.label,
        icon: iconMap[g.icon],
      }))}
    />
  );
};

export default StepGoal;
