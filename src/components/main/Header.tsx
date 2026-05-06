"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      <nav className="sticky top-0 z-50 bg-forest border-b border-white/10 flex items-center justify-between px-8 py-4">
        {/* <div className="font-serif text-2xl text-lime font-bold">
          <Link href={"/"}>
            Quezada<span className="italic text-cream/60">Lawn</span>
          </Link>
        </div> */}
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={120}
            height={120}
            alt="Quezada Lawn Care Logo"
          ></Image>
        </Link>
        <ul className="hidden md:flex gap-8 list-none text-cream/60">
          <li>
            <Link
              href="/services"
              className="text-cream/60 text-sm font-light tracking-wide hover:text-limetransition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-cream/60 text-sm font-light tracking-wide hover:text-limetransition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-cream/60 text-sm font-light tracking-wide hover:text-limetransition-colors"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-cream/60 text-sm font-light tracking-wide hover:text-limetransition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <button className="bg-lime text-forest text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:bg-lime-light">
          Get a Quote
        </button> */}
      </nav>
    </header>
  );
};

export { Header };
