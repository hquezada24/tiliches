"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";
import { ImagePlaceholder } from "./ImagePlaceholder";
import LawnButton from "./LawnButton";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ServiceRow {
  id: string;
  number: string;
  title: string;
  titleAccent: string;
  description: string;
  cta: string;
  price?: string;
  imageSrc?: string;
  imageAlt: string;
  imagePlaceholderLabel: string;
  detail: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const services: ServiceRow[] = [
  {
    id: "mowing",
    number: "Service 01",
    title: "Lawn",
    titleAccent: "Mowing",
    description:
      "Consistent, clean cuts using commercial-grade mowers. We adapt to your yard's terrain, grass type, and your preferred height. No scalping, no missed strips — just a sharp, even finish every single time.",
    cta: "Book this service",
    imagePlaceholderLabel: "Photo: crew mowing a lawn",
    imageAlt: "Crew mowing a lawn",
    // imageSrc: '/images/services/mowing.jpg', // ← uncomment and set your path
    detail: (
      <div className="space-y-3 mb-8">
        {[
          { label: "Front & backyard coverage", width: 100 },
          // { label: "Clipping cleanup included", width: 100 },
          { label: "Scheduling flexibility", width: 95 },
        ].map(({ label, width }) => (
          <div key={label}>
            <div className="flex justify-between text-lg text-cream/60 font-light mb-1">
              <span>{label}</span>
              <span className="text-lime">{width}%</span>
            </div>
            <div className="h-0.75 rounded-full bg-lime/20 overflow-hidden">
              <div
                className="progress-fill h-full bg-lime rounded-full"
                style={{ width: "0%", transition: "width 1.2s ease" }}
                data-width={width}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  // {
  //   id: "edging",
  //   number: "Service 02",
  //   title: "Edging &",
  //   titleAccent: "Trimming",
  //   description:
  //     "The detail work that separates a good yard from a great one. We edge along driveways, sidewalks, and beds — leaving razor-clean lines that make the whole property look intentional.",
  //   cta: "Book this service",
  //   price: "included in Full Service",
  //   imagePlaceholderLabel: "Photo: edging along walkway",
  //   imageAlt: "Edging along walkway",
  //   // imageSrc: '/images/services/edging.jpg',
  //   detail: (
  //     <div className="grid grid-cols-2 gap-3 mb-8">
  //       {[
  //         { title: "Driveways", sub: "Crisp edge, no overhang" },
  //         { title: "Garden Beds", sub: "Clean separation every time" },
  //         { title: "Sidewalks", sub: "Straight lines, both sides" },
  //         { title: "Fences", sub: "Trimmed right to the base" },
  //       ].map(({ title, sub }) => (
  //         <div
  //           key={title}
  //           className="bg-forest-mid border border-lime/15 rounded-xl p-4"
  //         >
  //           <div className="text-lime text-xs font-medium uppercase tracking-wider mb-1">
  //             {title}
  //           </div>
  //           <div className="text-cream/55 text-lg font-light">{sub}</div>
  //         </div>
  //       ))}
  //     </div>
  //   ),
  // },
  // {
  //   id: "leaf-cleanup",
  //   number: "Service 02",
  //   title: "Leaf",
  //   titleAccent: "Cleanup",
  //   description:
  //     "When fall hits, leaves pile up fast. We blow, rake, bag, and haul — leaving your lawn clear before the first frost. No half-job, no leftover piles by the curb.",
  //   cta: "Book this service",
  //   price: "add-on, included in Full-Service",
  //   imagePlaceholderLabel: "Photo: leaf cleanup in progress",
  //   imageAlt: "Leaf cleanup in progress",
  //   // imageSrc: '/images/services/leaf-cleanup.jpg',
  //   detail: (
  //     <div className="flex flex-wrap gap-2 mb-8">
  //       {[
  //         "Blowing",
  //         "Raking",
  //         "Bagging",
  //         "Haul-away",
  //         "Gutter edge clear",
  //         "Same-day service",
  //       ].map((tag) => (
  //         <span
  //           key={tag}
  //           className="bg-forest-mid border border-lime/20 text-cream/70 text-xs font-light px-3 py-1.5 rounded-full"
  //         >
  //           {tag}
  //         </span>
  //       ))}
  //     </div>
  //   ),
  // },
  // {
  //   id: "fertilization",
  //   number: "Service 04",
  //   title: "Lawn",
  //   titleAccent: "Fertilization",
  //   description:
  //     "A green lawn doesn't happen by accident. Our seasonal treatments give your grass the nutrients it needs to stay thick, healthy, and resilient through heat, drought, and foot traffic.",
  //   cta: "Book this service",
  //   price: "seasonal plan available",
  //   imagePlaceholderLabel: "Photo: fertilization treatment",
  //   imageAlt: "Fertilization treatment",
  //   // imageSrc: '/images/services/fertilization.jpg',
  //   detail: (
  //     <div className="flex flex-col gap-3 mb-8">
  //       {[
  //         {
  //           title: "Spring starter treatment",
  //           sub: "Wakes up grass after winter dormancy",
  //         },
  //         {
  //           title: "Summer slow-release blend",
  //           sub: "Heat-resistant formula for dry months",
  //         },
  //         { title: "Fall winterizer", sub: "Prepares roots for cold weather" },
  //       ].map(({ title, sub }) => (
  //         <div key={title} className="flex items-start gap-3">
  //           <span className="mt-1 w-5 h-5 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs shrink-0">
  //             ✓
  //           </span>
  //           <div>
  //             <div className="text-cream text-lg font-medium">{title}</div>
  //             <div className="text-cream/45 text-xs font-light">{sub}</div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   ),
  // },
];

const galleryItems = [
  {
    label: "Before photo",
    caption: "Oak Street — before service",
    placeholderLabel: "Photo: before",
  },
  {
    label: "After photo",
    caption: "Oak Street — after service",
    placeholderLabel: "Photo: after",
  },
  {
    label: "Team at work",
    caption: "Maple Ave — full service day",
    placeholderLabel: "Photo: team",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ServiceImage({
  src,
  alt,
  placeholderLabel,
}: {
  src?: string;
  alt: string;
  placeholderLabel: string;
}) {
  if (src) {
    return (
      <div className="relative w-full h-85 rounded-2xl overflow-hidden">
        <Image
          src={src}
          fill
          className="object-cover"
          alt={alt}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }
  return <ImagePlaceholder label={placeholderLabel} />;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
const ServicesPage = () => {
  // Wire up IntersectionObserver across the whole page
  const pageRef = useScrollAnimationAll(".animate", { threshold: 0.12 });

  return (
    <div
      ref={pageRef}
      className="bg-forest text-cream font-sans overflow-x-hidden"
    >
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-8 pt-20 pb-16 overflow-hidden">
        {/* Decorative orb */}
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-lime/5 translate-x-32 -translate-y-20" />

        {/* Badge */}
        <div className="animate pill-in inline-flex items-center gap-2 bg-lime/10 border border-lime/20 text-cream text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-lime inline-block" />
          What we offer
        </div>

        {/* Headline — line-by-line reveal */}
        <div className="overflow-hidden">
          <span className="animate hero-line-inner delay-1 block font-serif text-6xl md:text-7xl text-cream tracking-tight leading-none">
            Every lawn.
          </span>
        </div>
        <div className="overflow-hidden mt-1">
          <span className="animate hero-line-inner delay-2 block font-serif text-6xl md:text-7xl tracking-tight leading-none text-lime">
            Every service.
          </span>
        </div>

        <p className="animate fade-up delay-3 mt-8 text-cream/60 font-light text-lg leading-relaxed max-w-xl">
          From a quick weekly mow to a full seasonal overhaul — we&apos;ve got
          the crew, the equipment, and the work ethic to make your yard the best
          on the block.
        </p>

        {/* Stats */}
        <div className="animate fade-up delay-4 flex gap-6 mt-10 flex-wrap">
          {[
            { value: "6", label: "Core services" },
            { value: "48h", label: "Response time" },
            { value: "100%", label: "Satisfaction guarantee" },
          ].map(({ value, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="w-px bg-cream/10 self-stretch" />}
              <div className="text-center">
                <div className="font-serif text-4xl text-lime">{value}</div>
                <div className="text-cream/45 text-xs font-light mt-1">
                  {label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── HERO IMAGE ──────────────────────────────────────────── */}
      {/* <div className="animate fade-up max-w-6xl mx-auto px-8 pb-20">
        <ImagePlaceholder
          label="Your best team photo goes here"
          hint="Recommended: 1400 × 600px, landscape"
          height="h-[400px]"
          className="rounded-3xl"
        />
      </div> */}

      {/* ── SERVICE ROWS ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-8 pb-24 flex flex-col gap-28">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;

          const textBlock = (
            <div className={`animate ${isEven ? "fade-right" : "fade-left"}`}>
              {/* Number badge */}
              <div className="inline-flex items-center gap-2 bg-lime/10 text-lime text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                {service.number}
              </div>

              {/* Title */}
              <h2 className="font-serif text-5xl text-cream leading-tight tracking-tight mb-4">
                {service.title}
                <br />
                <em className="not-italic text-cream">{service.titleAccent}</em>
              </h2>

              {/* Description */}
              <p className="text-cream/60 font-light text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Detail block (progress bars, tags, checklist) */}
              {service.detail}

              {/* CTA */}
              <div className="flex items-center gap-3">
                {/* <div className="text-forest">
                  <Link
                    href={"/contact"}
                    className="bg-lime  text-lg font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-lime-light hover:-translate-y-0.5"
                  >
                    {service.cta}
                  </Link>
                </div> */}
                <LawnButton text={service.cta} />
                <span className="text-cream/40 text-lg font-light">
                  {service.price}
                </span>
              </div>
            </div>
          );

          // const imageBlock = (
          //   <div className={`animate ${isEven ? "fade-left" : "fade-right"}`}>
          //     <ServiceImage
          //       src={service.imageSrc}
          //       alt={service.imageAlt}
          //       placeholderLabel={service.imagePlaceholderLabel}
          //     />
          //   </div>
          // );

          return (
            <div
              key={service.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {isEven ? <>{textBlock}</> : <>{textBlock}</>}
            </div>
          );
        })}
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────── */}
      {/* <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="animate fade-up text-lime text-xs font-medium tracking-widest uppercase mb-3">
          Our work
        </div>
        <h2 className="animate fade-up delay-1 font-serif text-4xl text-cream tracking-tight mb-8">
          Before &amp; <em className="not-italic text-lime">after.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map(({ label, caption, placeholderLabel }, i) => (
            <div key={label} className={`animate fade-up delay-${i + 1}`}>
              <ImagePlaceholder
                label={placeholderLabel}
                hint={label}
                height="h-[220px]"
              />
              <p className="mt-3 text-cream/50 text-xs font-light">{caption}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className="bg-forest py-20 text-center">
        {/* <h2 className="animate fade-up font-serif text-5xl text-forest tracking-tight leading-tight mb-4">
          Not sure which service
          <br />
          you <em className="not-italic">need?</em>
        </h2> */}
        <h2 className="animate fade-up font-serif text-5xl text-cream tracking-tight leading-tight mb-4">
          Ready to book
          <br />a <em className="not-italic">visit?</em>
        </h2>
        {/* <p className="animate fade-up delay-1 text-forest/60 font-light text-base mb-8">
          We&apos;ll come out for free and tell you exactly what your yard needs
          — no upsell, no pressure.
        </p> */}
        <div className="text-cream">
          <Link
            href={"/contact"}
            className="animate fade-up delay-2 bg-lime  font-medium text-lg px-8 py-3 rounded-full transition-all duration-200 hover:bg-[#28a428] hover:-translate-y-0.5"
          >
            Book an appointment →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
