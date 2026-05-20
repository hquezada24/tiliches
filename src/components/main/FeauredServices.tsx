"use client";
import { motion } from "motion/react";
import { Code2, Zap, Target, TrendingUp } from "lucide-react";
import colors from "@/styles/colors";
const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Next.js Websites",
    description:
      "Modern, fast, and SEO-optimized websites built with Next.js and React. Perfect for businesses looking to establish a strong online presence.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive sales. Optimized for performance and user experience.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance & SEO",
    description:
      "Speed optimization and search engine optimization to help your website rank higher and load faster.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Website Maintenance",
    description:
      "Ongoing support and updates to keep your website running smoothly, secure, and up-to-date.",
  },
];
export function FeauredServices() {
  return (
    <section id="services" className="py-32 relative">
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
            Services I Offer
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            Focused on building fast, modern websites that help your business
            succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.2,
                },
              }}
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all cursor-pointer group"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: `${colors.text}14`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                className="mb-6 transition-colors"
                style={{
                  color: colors.primary,
                }}
              >
                {service.icon}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  lineHeight: 1.7,
                  color: `${colors.text}99`,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
