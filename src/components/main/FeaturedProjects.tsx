"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import { ImageWithFallback } from "./ImageWithFallback";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "QS Pallets",
    category: "Corporate Website",
    description:
      "Professional website for a pallet manufacturing company, showcasing their products and services.",
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "QS Pallets Dashboard",
    category: "Business Dashboard",
    description:
      "Internal dashboard for managing inventory, orders, and customer data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Quezada Lawn Care",
    category: "Service Website",
    description:
      "Modern landing page for a lawn care service business with online booking functionality.",
    image:
      "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="portfolio"
      className="py-32 relative"
      style={{
        backgroundColor: "#F5F5F4",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: colors.text,
            }}
          >
            Recent Projects
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            Here are some of the websites I've built for clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group cursor-pointer"
            >
              <div
                className="rounded-2xl overflow-hidden border mb-4 relative"
                style={{
                  borderColor: `${colors.text}14`,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div
                  className="aspect-video overflow-hidden"
                  style={{
                    backgroundColor: "#E7E5E4",
                  }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-linear-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  style={{
                    background: `linear-gradient(to top, ${colors.text}CC 0%, ${colors.text}33 50%, transparent 100%)`,
                  }}
                >
                  <div className="text-white flex items-center gap-2">
                    <span
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      View Project
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3
                  className="mb-1"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: colors.text,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "0.875rem",
                    color: colors.primary,
                  }}
                >
                  {project.category}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: `${colors.text}99`,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
