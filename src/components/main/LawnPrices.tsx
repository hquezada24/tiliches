"use client";
import Link from "next/link";
import { useState } from "react";
import IServices from "@/types/main/services";

// Services data
const services: IServices[] = [
  {
    title: "1/4 acre (~11,000 ft²)",
    price: ["$45", "$70"],
    meta: "per visit",
    featured: true,
    badge: "Most Popular",
    placeholder: "Photo: standard lawn mowing",
    features: [
      "Lawn Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
    ],
  },
  {
    title: "1/2 acre (21780 ft²)",
    price: ["$80", "$125"],
    meta: "per visit",
    featured: false,
    placeholder: "Photo: standard lawn mowing",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
    ],
    discount: [12, 11],
  },
  {
    title: "1 acre",
    price: ["$160", "$250"],
    meta: "per visit",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
    ],
    discount: [12, 11],
  },
  {
    title: "2 acres",
    price: ["$320", "$500"],
    meta: "per visit",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      //   "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
      "12% discount",
    ],
    discount: [12, 11],
  },
];

const LawnPricing = () => {
  const [plans, setPlans] = useState("maintenance");
  return (
    <>
      <div className="mb-10">
        <div className="flex flex-col items-center">
          <label
            htmlFor="lawn-status"
            className="block text-lg font-serif font-medium text-[#1a1a1a] mb-2"
          >
            Lawn condition
          </label>

          <div className="relative">
            <select
              name="lawn-status"
              id="lawn-status"
              value={plans}
              onChange={(e) => setPlans(e.target.value)}
              className="w-full font-serif appearance-none rounded-xl border border-[#d9e5d6] bg-[#f7fbf6] px-4 py-3 pr-10 text-[#1a1a1a] text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32] transition"
            >
              <option value="maintenance">Regular Maintenance</option>
              <option value="obstacles">
                Heavy Obstacles / Uneven Terrain / Overgrown
              </option>
            </select>

            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#5c6b5c]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card  */}
        {services.map((service) => (
          <div
            key={service.title}
            className={`${service.featured ? "bg-[#f7fbf6] shadow-xl scale-105 relative" : "bg-forest"} border-2 border-[#32cd32] rounded-2xl p-8`}
          >
            {service.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#32cd32] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {service.badge}
              </span>
            )}

            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
              {service.title}
            </h3>

            <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
              {plans === "maintenance" && `${service.price[0]}`}
              {plans === "obstacles" && `${service.price[1]}`}
            </div>

            <div className="text-[#5c6b5c] text-lg mb-6">{service.meta}</div>

            <ul className="space-y-3 mb-8">
              {service.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#1a1a1a]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                  ✓
                </span>
                {service.discount
                  ? plans === "maintenance"
                    ? `${service.discount[0]}% discount`
                    : plans === "obstacles"
                      ? `${service.discount[1]}% discount`
                      : ""
                  : ""}
              </li>
            </ul>

            <Link
              href="/contact"
              className="block w-full py-3 rounded-full text-center font-semibold border-2 border-[#32cd32] text-[#32cd32] hover:bg-[#32cd32] hover:text-black transition"
            >
              Book this service
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default LawnPricing;
