import { Metadata } from "next";
import AboutPage from "@/components/main/AboutPage";

export const metadata: Metadata = {
  title: "About | NEXUS",
};
const Page = () => {
  return <AboutPage />;
};

export default Page;
