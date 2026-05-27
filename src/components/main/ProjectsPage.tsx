"use client";
import { useState } from "react";
import colors from "@/styles/colors";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ExternalLink,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "QS Pallets Website",
    category: "Websites",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    description:
      "A high-performance corporate website designed for a pallet manufacturing and logistics firm. Showcases products, technical specifications, and location data with optimal page speed.",
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveUrl: "https://qspallets.com",
    githubUrl: "https://github.com/hquezada24/qs-pallets",
  },
  {
    id: 2,
    title: "QS Pallets Dashboard",
    category: "Dashboards",
    tags: ["React", "Spring Boot", "PostgreSQL", "Recharts"],
    description:
      "Internal ERP dashboard built to track real-time inventory levels, orders, customer shipments, and key financial analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveUrl: "https://dashboard.qspallets.com",
    githubUrl: "https://github.com/hquezada24/qs-pallets-dashboard",
  },
  {
    id: 3,
    title: "Quezada Lawn Care",
    category: "Websites",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description:
      "Modern, user-friendly landing page featuring an online booking widget, custom lawn size pricing estimator, and smooth interactive UI components.",
    image:
      "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveUrl: "https://quezadalawncare.com",
    githubUrl: "https://github.com/hquezada24/quezada-lawncare",
  },
  {
    id: 4,
    title: "Nexus API Gateway",
    category: "APIs",
    tags: ["Spring Boot", "Docker", "Redis", "OAuth2"],
    description:
      "Custom microservices API Gateway designed to handle centralized request routing, security, rate limiting, and analytics with sub-millisecond overhead.",
    image: "", // Triggers custom geometric placeholder
    liveUrl: "https://api.nexus.dev",
    githubUrl: "https://github.com/hquezada24/nexus-api-gateway",
  },
  {
    id: 5,
    title: "Taskflow SaaS Platform",
    category: "Dashboards",
    tags: ["Next.js", "Zustand", "Prisma", "Socket.io"],
    description:
      "Collaborative project management tool for remote teams featuring real-time board updates, automated email summaries, and active workspace tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveUrl: "https://taskflow-app.demo",
    githubUrl: "https://github.com/hquezada24/taskflow-saas",
  },
  {
    id: 6,
    title: "Smart Sync Engine",
    category: "APIs",
    tags: ["Node.js", "GraphQL", "RabbitMQ", "MongoDB"],
    description:
      "Fast database synchronization queue that resolves multi-tenant database conflicts and provides offline-first sync states for mobile apps.",
    image: "", // Triggers custom geometric placeholder
    liveUrl: "https://sync.nexus.dev",
    githubUrl: "https://github.com/hquezada24/smart-sync-engine",
  },
];

const categories = ["All", "Websites", "Dashboards", "APIs"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const renderPlaceholder = (title: string, category: string) => (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${colors.primary}1A 0%, ${colors.secondary}0D 100%)`,
        backgroundColor: `${colors.text}05`,
      }}
    >
      <div
        className="absolute top-[-20%] right-[-20%] w-48 h-48 rounded-full opacity-5"
        style={{
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-40 h-40 rounded-full opacity-5"
        style={{
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
        }}
      />

      <FolderGit2
        className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ color: colors.primary }}
      />
      <span
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          color: colors.text,
        }}
        className="mb-1 text-center"
      >
        {title}
      </span>
      <span
        style={{
          fontSize: "0.75rem",
          color: `${colors.text}66`,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {category}
      </span>
    </div>
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
            }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="mb-6"
              style={{
                fontSize: "4.5rem",
                fontWeight: 700,
                lineHeight: 1.1,
                color: colors.text,
              }}
            >
              My Projects
            </h1>
            <p
              className="mb-12 max-w-2xl mx-auto"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.6,
                color: `${colors.text}B3`,
              }}
            >
              Discover my recent work, custom builds, microservices APIs, and
              interactive dashboard interfaces.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-lg text-white transition-all flex items-center gap-2"
                style={{
                  backgroundColor: colors.primary,
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  boxShadow: "0 4px 16px rgba(234, 88, 12, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.secondary;
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(253, 186, 116, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primary;
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(234, 88, 12, 0.25)";
                }}
                onClick={() =>
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Browse Projects
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative cursor-pointer"
                  style={{
                    backgroundColor: isActive
                      ? colors.primary
                      : `${colors.text}08`,
                    color: isActive ? "#FFFFFF" : `${colors.text}CC`,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = `${colors.text}0D`;
                      e.currentTarget.style.color = colors.text;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = `${colors.text}08`;
                      e.currentTarget.style.color = `${colors.text}CC`;
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.08)",
                  }}
                  className="rounded-2xl border bg-white flex flex-col justify-between overflow-hidden group cursor-pointer"
                  style={{
                    borderColor: `${colors.text}14`,
                  }}
                >
                  {/* Image Block */}
                  <div
                    className="h-56 w-full overflow-hidden relative border-b"
                    style={{ borderColor: `${colors.text}0A` }}
                  >
                    {project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      renderPlaceholder(project.title, project.category)
                    )}
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${colors.primary}1A`,
                        color: colors.primary,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: colors.text,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-6 flex-1"
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: `${colors.text}99`,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium"
                          style={{
                            backgroundColor: `${colors.text}08`,
                            color: `${colors.text}80`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA Buttons */}
                  <div
                    className="px-6 py-4 border-t flex items-center justify-between gap-3 bg-stone-50"
                    style={{ borderColor: `${colors.text}08` }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border transition-all duration-300 hover:bg-stone-100"
                      style={{
                        borderColor: `${colors.text}22`,
                        color: colors.text,
                      }}
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg text-white transition-all duration-300"
                      style={{
                        backgroundColor: colors.primary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          colors.secondary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primary;
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Let's Collaborate Section */}
      <section
        className="py-32 relative border-t"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: colors.text,
              }}
              className="mb-4"
            >
              Start Your Project Today
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto mb-10"
            >
              Let's build a fast, responsive, and SEO-optimized website or
              dashboard that helps your business grow.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all"
              style={{
                backgroundColor: colors.primary,
                boxShadow: "0 4px 16px rgba(234, 88, 12, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondary;
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(253, 186, 116, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(234, 88, 12, 0.25)";
              }}
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { ProjectsPage };
