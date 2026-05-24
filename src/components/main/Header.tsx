"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

const colors = {
  background: "#FAFAF9",
  text: "#111111",
  primary: "#EA580C",
  secondary: "#FDBA74",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location === path;
  };
  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{
          backgroundColor: "rgba(250, 250, 249, 0.9)",
          borderColor: "rgba(17, 17, 17, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              NEXUS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="transition-colors"
              style={{ color: `${colors.text}CC` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}CC`)
              }
            >
              Home
            </Link>
            <Link
              href="/services"
              className="transition-colors"
              style={{ color: `${colors.text}CC` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}CC`)
              }
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="transition-colors"
              style={{ color: `${colors.text}CC` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}CC`)
              }
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors"
              style={{ color: `${colors.text}CC` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `${colors.text}CC`)
              }
            >
              About
            </Link>
          </div>

          <button
            className="px-6 py-2.5 rounded-lg text-white transition-all"
            style={{
              backgroundColor: colors.primary,
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(234, 88, 12, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.secondary;
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(253, 186, 116, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary;
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(234, 88, 12, 0.2)";
            }}
          >
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Header };
