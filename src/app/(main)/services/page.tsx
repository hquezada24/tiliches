import type { Metadata } from "next";
import ServicesPage from "@/components/main/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Quezada Lawn Care",
};

export default function Page() {
  return <ServicesPage />;
}
