"use client";
import Link from "next/link";

const LawnButton = ({ text, link = "", variant = "light" }) => {
  const styling =
    variant === "light"
      ? ["text-cream", "bg-lime"]
      : ["text-lime", "bg-forest"];
  return (
    <div className={`${styling[0]}`}>
      <Link
        href={link}
        className={`${styling[1]} text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-[#28a428] hover:-translate-y-0.5`}
      >
        {text}
      </Link>
    </div>
  );
};

export default LawnButton;
