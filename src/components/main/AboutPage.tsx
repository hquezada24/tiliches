"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import {
  ArrowDown,
  Code2,
  Zap,
  Users,
  Target,
  ArrowUpRight,
  Check,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Availability", value: "Remote / Global" },
];

const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance First",
    description:
      "A fast website is critical for keeping user engagement high and search engine algorithms happy. I optimize every single asset, query, and bundle size.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean & Maintainable Code",
    description:
      "I write clean, modular, and well-structured code. Your website will be easily scalable and prepared to grow alongside your business.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Direct & Honest Communication",
    description:
      "No middlemen or account managers. You deal directly with me, guaranteeing faster responses, clear alignments, and full transparency.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Tailored Solutions Only",
    description:
      "Your business is unique. I build bespoke software systems that match your exact workflow and requirements, never generic templates.",
  },
];

const toolbox = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Vercel / Netlify"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "We discuss your ideas, business requirements, and budget to scope out a clear plan. We detail timelines and price points before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design & Blueprinting",
    description:
      "We design the user flow, layout structure, and aesthetics. Whether building from your Figma file or my custom mockups, we finalize the visual direction first.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "I build the project using modern technologies (Next.js, React, Spring Boot). I write unit tests, secure endpoints, and verify features to ensure flawless behavior.",
  },
  {
    step: "04",
    title: "SEO Optimization & Launch",
    description:
      "I apply comprehensive SEO, optimize loading speeds, and connect your custom domain. I help you connect your GitHub to Vercel so you keep full deployment control.",
  },
];

const AboutPage = () => {
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
              Who is behind NEXUS
            </h1>
            <p
              className="mb-12 max-w-2xl mx-auto"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.6,
                color: `${colors.text}B3`,
              }}
            >
              Hi, I'm Hugo. I help businesses turn complex requirements into
              clean, modern, and incredibly fast web solutions.
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
                  document.getElementById("story").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Learn More
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story / Biography Section */}
      <section
        id="story"
        className="py-32 relative border-t"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Col: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="mb-6"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: colors.text,
                }}
              >
                My Story
              </h2>
              <p
                className="mb-6"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: `${colors.text}99`,
                }}
              >
                I am a fullstack web developer specializing in Next.js, React,
                and Java/Spring Boot. I started my engineering path driven by
                the challenge of crafting systems that streamline business
                tasks.
              </p>
              <p
                className="mb-8"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: `${colors.text}99`,
                }}
              >
                Today, I build everything from landing pages for local
                businesses to custom administrative panels and scalable APIs. I
                strongly believe that web applications should not only look
                premium but should also be robust, secure, and load instantly.
              </p>

              {/* Minimal Check Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check
                    className="w-5 h-5"
                    style={{ color: colors.primary }}
                  />
                  <span style={{ color: colors.text, fontWeight: 500 }}>
                    100% custom codebase, no generic templates.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    className="w-5 h-5"
                    style={{ color: colors.primary }}
                  />
                  <span style={{ color: colors.text, fontWeight: 500 }}>
                    SEO optimization and page speed auditing included.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    className="w-5 h-5"
                    style={{ color: colors.primary }}
                  />
                  <span style={{ color: colors.text, fontWeight: 500 }}>
                    Offline-ready setups and microservice capabilities.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl border-2 border-dashed flex flex-col items-center justify-center p-8 overflow-hidden group"
              style={{
                borderColor: `${colors.primary}40`,
                background: `linear-gradient(135deg, ${colors.primary}0D 0%, ${colors.secondary}05 100%)`,
                backgroundColor: "#FFFFFF",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.03)",
              }}
              whileHover={{
                y: -6,
                borderColor: colors.primary,
                boxShadow: `0 20px 40px ${colors.primary}12`,
              }}
            >
              {/* Decorative background ambient glows */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${colors.primary}0A 0%, transparent 70%)`,
                }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: `${colors.primary}1A`,
                  color: colors.primary,
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>

              <h4
                className="mb-1 text-center font-semibold"
                style={{ color: colors.text, fontSize: "1.125rem" }}
              >
                Portrait or Setup Image
              </h4>
              <p
                className="text-xs text-center max-w-[240px]"
                style={{ color: `${colors.text}66`, lineHeight: 1.4 }}
              >
                Upload a professional photo or workspace setup. Recommended: 800
                × 1000px
              </p>
            </motion.div>
          </div>

          {/* Key Facts Horizontal Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 p-8 rounded-3xl border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: `${colors.text}14`,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.02)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 transition-transform duration-300 hover:scale-105"
                >
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: colors.primary,
                      display: "block",
                    }}
                    className="mb-1"
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: `${colors.text}80`,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-32 relative border-t bg-stone-50"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: colors.text,
              }}
            >
              What Guides My Work
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto"
            >
              I follow a strict set of principles to ensure every web project
              reaches outstanding quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border bg-white flex gap-6"
                style={{
                  borderColor: `${colors.text}14`,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${colors.primary}10`,
                    color: colors.primary,
                  }}
                >
                  {value.icon}
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
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: `${colors.text}99`,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Toolbox Section */}
      <section
        className="py-32 relative border-t"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Title / Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2
                className="mb-4"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: colors.text,
                }}
              >
                My Toolbox
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: `${colors.text}99`,
                }}
              >
                My stack is modern, fast, and scalable. I choose tools that
                provide clean developer ergonomics while giving visitors the
                best UX.
              </p>
            </motion.div>

            {/* Toolbox Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {toolbox.map((box, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border"
                  style={{
                    borderColor: `${colors.text}12`,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <h3
                    className="mb-4 pb-2 border-b font-semibold"
                    style={{
                      borderColor: `${colors.text}0A`,
                      color: colors.primary,
                      fontSize: "1.125rem",
                    }}
                  >
                    {box.category}
                  </h3>
                  <ul className="space-y-2">
                    {box.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.875rem",
                          color: `${colors.text}CC`,
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Work Process Section */}
      <section
        className="py-32 relative border-t bg-stone-50"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: colors.text,
              }}
            >
              My Development Process
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto"
            >
              Here is how we work together, step-by-step, to take your project
              from a raw concept to a live product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border bg-white flex flex-col justify-between"
                style={{
                  borderColor: `${colors.text}14`,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.02)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: `${colors.primary}20`,
                      display: "block",
                    }}
                    className="mb-4"
                  >
                    {step.step}
                  </span>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: colors.text,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: `${colors.text}99`,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Let's Build Something Together
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto mb-10"
            >
              Have an app idea or website that needs engineering? Contact me and
              let's discuss your next project.
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

export default AboutPage;
