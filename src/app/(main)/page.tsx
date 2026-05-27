import Hero from "@/components/main/Hero";
import { FeauredServices } from "./../../components/main/FeauredServices";
import { FeaturedProjects } from "./../../components/main/FeaturedProjects";
import { OurProcess } from "./../../components/main/OurProcess";
import { Testimonials } from "./../../components/main/Testimonials";
import { Technologies } from "./../../components/main/Technologies";
import { AboutMe } from "./../../components/main/AboutMe";
import CTA from "@/components/main/CTA";

export default function App() {
  // Color palette
  const colors = {
    background: "#FAFAF9",
    text: "#111111",
    primary: "#EA580C",
    secondary: "#FDBA74",
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Featured Services */}
      <FeauredServices />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Our Process */}
      <OurProcess />

      {/* Testimonials */}
      <Testimonials />

      {/* Technologies */}
      <Technologies />

      {/* About Me */}
      <AboutMe />

      {/* Final CTA */}
      <CTA />
    </div>
  );
}
