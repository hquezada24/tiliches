"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const technologies = [
  { name: "TypeScript", icon: <BiLogoTypescript size={100} /> },
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={100} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
  { name: "MongoDB", icon: <SiMongodb size={100} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={100} /> },
];
export function Technologies() {
  return (
    <section className="py-32 relative">
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
            Technologies I Use
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            Modern tools and frameworks to build fast, scalable websites
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="p-6 rounded-2xl border text-center"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: `${colors.text}14`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="mb-3 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${colors.primary}1A`,
                    color: colors.primary,
                    fontWeight: 700,
                  }}
                >
                  {tech.icon}
                </div>
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
