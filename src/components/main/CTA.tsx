"use client";
import { motion } from "motion/react";
import colors from "@/styles/colors";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm rounded-3xl p-16 border relative overflow-hidden"
          style={{
            backgroundColor: `${colors.primary}0D`,
            borderColor: `${colors.primary}33`,
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
              }}
            />
          </div>

          <div className="relative z-10">
            <h2
              className="mb-6"
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.1,
                color: colors.text,
              }}
            >
              Ready to build your
              <br />
              website?
            </h2>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.6,
                color: `${colors.text}B3`,
              }}
            >
              Let's discuss your project and I'll help bring your vision to
              life.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                className="px-10 py-4 rounded-lg text-white transition-all flex items-center gap-2"
                style={{
                  backgroundColor: colors.primary,
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  boxShadow: `0 8px 24px ${colors.primary}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.secondary;
                  e.currentTarget.style.boxShadow = `0 12px 32px ${colors.secondary}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primary;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary}40`;
                }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              className="mt-12 flex items-center justify-center gap-8"
              style={{ color: `${colors.text}99` }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: colors.primary }}
                />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: colors.primary }}
                />
                <span>Quick response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: colors.primary }}
                />
                <span>Honest pricing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
