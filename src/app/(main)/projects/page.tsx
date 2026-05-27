import type { Metadata } from "next";
import { ProjectsPage } from "@/components/main/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | NEXUS",
};

export default function Page() {
  return <ProjectsPage />;
}
