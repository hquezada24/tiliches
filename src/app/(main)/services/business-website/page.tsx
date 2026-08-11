import type { Metadata } from "next";
import WizardForm from "@/components/main/Wizard";

export const metadata: Metadata = {
  title: "Start Your Project | NEXUS",
  description:
    "Tell us about your project and receive a personalized proposal within 24 hours.",
};

export default function Page() {
  return <WizardForm />;
}
