"use client";
import colors from "@/styles/colors";
import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 border-t"
      style={{ borderColor: `${colors.text}14` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span
                style={{
                  color: colors.text,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                NEXUS
              </span>
            </div>
            <p style={{ lineHeight: 1.7, color: `${colors.text}99` }}>
              Freelance web developer building modern Next.js websites.
            </p>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{ fontWeight: 600, color: colors.text }}
            >
              Services
            </h4>
            <div className="space-y-2">
              <a
                href="#services"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                Next.js Websites
              </a>
              <a
                href="#services"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                Landing Pages
              </a>
              <a
                href="#services"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                Performance & SEO
              </a>
              <a
                href="#services"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                Website Maintenance
              </a>
            </div>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{ fontWeight: 600, color: colors.text }}
            >
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                Email
              </a>
              <a
                href="#"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                GitHub
              </a>
              <a
                href="#about"
                className="block transition-colors"
                style={{ color: `${colors.text}99` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${colors.text}99`)
                }
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: `${colors.text}14` }}
        >
          <p style={{ color: `${colors.text}66` }}>
            © {currentYear} Hugo Quezada Software SAS de CV. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors"
              style={{ color: `${colors.text}66` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}66`)
              }
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: `${colors.text}66` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}66`)
              }
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
