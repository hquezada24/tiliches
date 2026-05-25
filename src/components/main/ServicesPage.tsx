"use client";
import { useState } from "react";
import colors from "@/styles/colors";
import { motion } from "motion/react";
import {
  ArrowDown,
  Cpu,
  Layers,
  HeartHandshake,
  Search,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "High-Conversion Design: A single-page, responsive website designed to capture leads and drive action.",
    features: [
      "High-Conversion Design",
      "Responsive Design",
      "Fast Loading Speed",
      "SEO Optimized",
      "Contact Form",
    ],
    price: "$900",
  },
  {
    id: 2,
    title: "Multi-Page Business Websites",
    description:
      "Professional Presence: A complete multi-page site to showcase your brand, services, and expertise.",
    features: [
      "Custom navigation",
      "SEO-ready structure",
      "Contact forms",
      "Mobile optimization",
    ],
    price: "$1200",
  },
  {
    id: 3,
    title: "Custom Dashboards",
    description:
      "Operational Control: A private, secure administrative panel to manage your data, inventory, or customers.",
    features: [
      "Private Dashboard",
      "Real-time data visualization",
      "User management",
      "Custom integrations",
    ],
    price: "$1800",
  },
  {
    id: 4,
    title: "Custom APIs and Integrations",
    description:
      "Tailor-made APIs to connect your software and services seamlessly.",
    features: [
      "Custom API",
      "Real-time data synchronization",
      "Third-party integrations",
      "Scalable architecture",
    ],
    price: "$1500",
  },
  {
    id: 5,
    title: "Website Maintenance",
    description:
      "Ongoing support and updates to keep your website running smoothly, secure, and up-to-date.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Performance optimization",
      "Bug fixes",
    ],
    price: "$200 / month or $50 / hour",
  },
];

const reasons = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Modern Tech Stack",
    description:
      "Built with the latest technologies (Next.js, Spring Boot, PostgreSQL) for high performance.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Scalable Architecture",
    description:
      "My solutions grow with your business, ensuring you won't need a total rebuild in a few months.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Dedicated Support",
    description:
      "I offer post-launch maintenance to ensure your system stays fast, secure, and up-to-date.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimized",
    description:
      "Built with clean, semantic HTML and fast loading speeds to maximize your Google ranking and search visibility.",
  },
];

const faqs = [
  {
    question: "What do you need from me to start?",
    answer:
      "Ideally, your logo, brand colors, the text/copy for each page, any photos or images you want to use, and examples of sites you like. If you're missing some of these, that's okay, we can work around it. The more you can share upfront, the smoother and faster the process will be.",
  },
  {
    question: "Can I contact you before ordering?",
    answer:
      "Yes! Message me before placing an order so I can understand your requirements and ensure the project is scoped correctly.",
  },
  {
    question: "Can you work with an existing design or Figma file?",
    answer:
      "Yes. If you already have a design in Figma, Adobe XD, or even a rough sketch, I can build from it. Just share the file when you reach out so we can discuss the scope and timeline.",
  },
  {
    question: "Will you help me deploy the site?",
    answer:
      "Deployment guidance is included with every package. Once the build is ready, I'll walk you through connecting your own GitHub repository to your hosting account (like Vercel or Netlify) and getting your site live. You stay in full control of your infrastructure from day one.",
  },
  {
    question: "What if I need ongoing maintenance or updates?",
    answer:
      "I offer post-launch support and monthly maintenance packages to keep your website fast, secure, and up-to-date. If you need ad-hoc updates, I'm also available for hourly work.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, all projects include revision rounds during the design and development phases to ensure you are 100% satisfied with the final result before launch.",
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b transition-all duration-300"
      style={{ borderColor: `${colors.text}14` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left gap-4 group"
      >
        <span
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: colors.text,
          }}
          className="transition-colors duration-300 group-hover:text-[#EA580C]"
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: colors.primary }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p
          className="pb-6"
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            color: `${colors.text}99`,
          }}
        >
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
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
              My Services
            </h1>
            <p
              className="mb-12 max-w-2xl mx-auto"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.6,
                color: `${colors.text}B3`,
              }}
            >
              High-impact software solutions with transparent timelines and
              pricing. No surprises, just clean and scalable code.
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
                  document.getElementById("pricing").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Choose your service
                <ArrowDown className="w-5 h-5" />
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
                onClick={() =>
                  document.getElementById("faq").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Read FAQs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: colors.text,
              }}
              className="mb-4"
            >
              Plans & Pricing
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto"
            >
              Select the package that best fits your business needs. All plans
              can be customized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                // 1. Efecto Reveal (Desvelado)
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // 2. Efecto Staggering (Escalonado)
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                // 3. Efecto Hover
                whileHover={{
                  y: -10,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.2 },
                }}
                className={`p-8 rounded-2xl border text-left cursor-pointer group flex flex-col justify-between ${
                  index === services.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: `${colors.text}14`,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: colors.text,
                    }}
                    className="mb-2"
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: `${colors.text}99` }} className="mb-6">
                    {service.description}
                  </p>

                  {/* Características */}
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2"
                        style={{ color: `${colors.text}CC` }}
                      >
                        <span style={{ color: colors.primary }}>✓</span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="mt-auto pt-6 border-t flex items-center justify-between"
                  style={{ borderColor: `${colors.text}0A` }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: colors.primary,
                    }}
                  >
                    {service.price}
                  </span>
                  <span
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group-hover:bg-[#EA580C] group-hover:text-white"
                    style={{
                      backgroundColor: `${colors.primary}10`,
                      color: colors.primary,
                    }}
                  >
                    Get Started
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
              Why Work With Me?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
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
                  {reason.icon}
                </div>
                <div className="px-2">
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: colors.text,
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: `${colors.text}99`,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-32 relative border-t"
        style={{ borderColor: `${colors.text}0A` }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: colors.text,
              }}
              className="mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: `${colors.text}99`,
              }}
              className="max-w-2xl mx-auto"
            >
              Have questions about my services, design files, or deployment?
              Find answers here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
