import { Metadata } from "next";
import PricingPage from "@/components/main/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Quezada Lawn Care",
};

const page = () => {
  return <PricingPage />;
};

export default page;
