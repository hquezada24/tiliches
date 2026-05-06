import type { Metadata } from "next";
import TeamPage from "@/components/main/TeamPage";

export const metadata: Metadata = {
  title: "Team | Quezada Lawn Care",
};

export default function Page() {
  return <TeamPage />;
}
