"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const testimonials = [
  {
    quote:
      "Working with him was great. He delivered exactly what I needed for my pallet business website and was very responsive throughout the project.",
    author: "Carlos Martinez",
    role: "Owner, QS Pallets",
    image:
      "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    quote:
      "Professional, reliable, and easy to work with. My lawn care website looks modern and I've been getting more inquiries since it launched.",
    author: "Roberto Quezada",
    role: "Owner, Quezada Lawn Care",
    image:
      "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-32 relative"
      style={{
        backgroundColor: "#F5F5F4",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
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
            Client Testimonials
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "1.125rem",
              color: `${colors.text}99`,
            }}
          >
            What clients have said about working with me
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.5,
            }}
            className="backdrop-blur-sm rounded-3xl p-12 border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: `${colors.text}14`,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  style={{
                    fill: colors.primary,
                    color: colors.primary,
                  }}
                />
              ))}
            </div>

            <p
              className="mb-8"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.6,
                fontWeight: 500,
                color: colors.text,
              }}
            >
              "{testimonials[currentTestimonial].quote}"
            </p>

            <div className="flex items-center gap-4">
              <ImageWithFallback
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                className="w-16 h-16 rounded-full object-cover border-2"
                style={{
                  borderColor: colors.primary,
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: colors.text,
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </div>
                <div
                  style={{
                    color: `${colors.text}99`,
                  }}
                >
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
              style={{
                borderColor: `${colors.text}33`,
                color: colors.text,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = `${colors.text}08`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
              style={{
                borderColor: `${colors.text}33`,
                color: colors.text,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = `${colors.text}08`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === currentTestimonial
                      ? colors.primary
                      : `${colors.text}33`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
