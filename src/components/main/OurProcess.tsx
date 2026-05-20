"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "I'll learn about your business goals, target audience, and project requirements to create the perfect solution.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "I'll create a detailed plan and design mockups for your approval before starting development.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "I build your website using modern technologies like Next.js, ensuring it's fast, secure, and scalable.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After thorough testing, I'll deploy your website and provide ongoing support and maintenance.",
  },
];
export function OurProcess() {
  return (
    <section id="process" className="py-32 relative">
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
            How I Work
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            A straightforward process to bring your website from idea to reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
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
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="relative"
            >
              <div
                className="mb-4"
                style={{
                  fontSize: "5rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: `${colors.primary}1A`,
                }}
              >
                {step.number}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  lineHeight: 1.7,
                  color: `${colors.text}99`,
                }}
              >
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5"
                  style={{
                    backgroundColor: `${colors.primary}33`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
