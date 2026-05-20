"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import { Code2, Zap, Target, Users } from "lucide-react";

const aboutPoints = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Modern Stack",
    description:
      "I specialize in Next.js and React to build fast, SEO-friendly websites that rank well and convert visitors.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance First",
    description:
      "Every website I build is optimized for speed and performance. Fast loading times lead to better user experience and SEO.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Direct Communication",
    description:
      "You'll work directly with me throughout the entire project. No middlemen, no confusion, just clear communication.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Tailored Solutions",
    description:
      "I don't use templates. Every project is custom-built to match your specific needs and business goals.",
  },
];
export function AboutMe() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            Why work with me as your freelance web developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="p-8 rounded-2xl backdrop-blur-sm border flex gap-6"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: `${colors.text}14`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: `${colors.primary}1A`,
                  color: colors.primary,
                }}
              >
                {point.icon}
              </div>
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: colors.text,
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    lineHeight: 1.7,
                    color: `${colors.text}99`,
                  }}
                >
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
