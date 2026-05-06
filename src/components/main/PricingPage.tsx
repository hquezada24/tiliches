"use client";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import LawnPricing from "./LawnPrices";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const plans = [
  {
    badge: "Single Visit",
    title: "Up to 1/2 acre (21780 ft²)",
    price: "$55",
    meta: "per visit",
    cta: "Book Appointment",
    featured: true,
    placeholder: "Photo: standard lawn mowing",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      //"Priority scheduling",
    ],
  },
  {
    badge: "Most Popular",
    title: "Up to 1 acres",
    price: "$90",
    meta: "per visit",
    cta: "Book Appointment",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
      "15% discount",
    ],
  },
  {
    badge: "Most Popular",
    title: "Up to 2 acres",
    price: "$140",
    meta: "per visit",
    cta: "Book Appointment",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
      "15% discount",
    ],
  },
  // {
  //   badge: "Monthly",
  //   title: "Monthly Basic",
  //   price: "$165",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Basic Monthly",
  //   featured: false,
  //   placeholder: "Photo: residential lawn maintenance",
  //   features: [
  //     "Mowing + blowing each visit",
  //     "4 visits per month",
  //     "Approx. 15% savings",
  //   ],
  // },
  // {
  //   badge: "Monthly",
  //   title: "Full Monthly",
  //   price: "$255",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Full Monthly",
  //   featured: false,
  //   placeholder: "Photo: premium lawn care",
  //   features: [
  //     "Everything in Full Service",
  //     "4 visits per month",
  //     "High priority scheduling",
  //     "Approx. 18% savings",
  //   ],
  // },
  // {
  //   badge: "For Businesses",
  //   title: "Commercial Plan",
  //   price: "$295",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Commercial Plan",
  //   featured: false,
  //   placeholder: "Photo: commercial landscaping",
  //   features: [
  //     "Professional Full Service",
  //     "4 visits per month",
  //     "Priority attention",
  //     "Perfect for offices & stores",
  //   ],
  // },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const PricingPage = () => {
  const pageRef = useScrollAnimationAll(".animate", { threshold: 0.12 });

  return (
    <div
      ref={pageRef}
      className="bg-forest text-cream font-sans overflow-x-hidden"
    >
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-8 pt-20 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-lime/5 translate-x-32 -translate-y-20" />
        <div className="animate pill-in inline-flex items-center gap-2 bg-lime/10 border border-lime/20 text-cream text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Pricing
        </div>

        <div className="overflow-hidden">
          <span className="animate hero-line-inner delay-1 block font-serif text-6xl md:text-7xl tracking-tight leading-none">
            Simple.
          </span>
        </div>
        <div className="overflow-hidden mt-1">
          <span className="animate hero-line-inner delay-2 block font-serif text-6xl md:text-7xl text-lime tracking-tight leading-none">
            Transparent.
          </span>
        </div>

        <p className="animate fade-up delay-3 mt-8 text-cream/60 font-light text-lg max-w-xl">
          No hidden fees. No surprises. Just clear pricing for clean, reliable
          work.
        </p>
      </section>

      <section id="pricing" className="bg-forest py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-lime text-xs font-medium tracking-widest uppercase mb-3">
            Simple pricing
          </div>
          <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight mb-12">
            No surprises.
            <br />
            Just <em className="text-lime not-italic">good rates.</em>
          </h2>

          <LawnPricing />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-forest py-20 text-center">
        <h2 className="animate fade-up font-serif text-5xl text-cream mb-4">
          Ready to book an appointment?
        </h2>
        {/* <p className="animate fade-up delay-1 text-forest/60 mb-8">
          We’ll guide you to the right plan — no pressure.
        </p> */}
        <div className="text-cream mt-10">
          <Link
            href={"/contact"}
            className="bg-lime font-medium text-lg px-7 py-3 rounded-full transition-all duration-200 hover:bg-[#28a428] whitespace-nowrap"
          >
            Get a recommendation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
