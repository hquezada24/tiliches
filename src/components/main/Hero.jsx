"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/main/ImageWithFallback";
const colors = {
  background: "#FAFAF9",
  text: "#111111",
  primary: "#EA580C",
  secondary: "#FDBA74",
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
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
            I build modern websites
            <br />
            that grow your business
          </h1>
          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: `${colors.text}B3`,
            }}
          >
            Freelance web developer specializing in Next.js, React, and
            performance optimization.
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
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              className="px-8 py-4 rounded-lg border transition-all"
              style={{
                borderColor: `${colors.text}33`,
                color: colors.text,
                fontWeight: 600,
                fontSize: "1.125rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = `${colors.text}08`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Get a Quote
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 rounded-2xl overflow-hidden border"
          style={{
            borderColor: `${colors.text}1A`,
            background: `linear-gradient(135deg, ${colors.primary}0D 0%, ${colors.secondary}08 100%)`,
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Modern dashboard interface"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
