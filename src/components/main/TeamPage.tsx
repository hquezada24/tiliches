"use client";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";
import { ImagePlaceholder } from "@/components/main/ImagePlaceholder";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const team = [
  {
    name: "David Quezada",
    role: "Founder & Crew Member",
    bio: "Built the company from the ground up. Obsessed with clean lines, consistency, and doing the job right the first time.",
    tag: "1+ year experience",
    placeholder: "Photo: crew leader portrait",
  },
  {
    name: "Hugo Quezada",
    role: "Founder & Crew Member",
    bio: "Precision-focused. Handles trimming, and detail work that makes a yard stand out.",
    tag: "Detail expert",
    placeholder: "Photo: trimming specialist",
  },
  // {
  //   name: "Andrés Torres",
  //   role: "Equipment Operator",
  //   bio: "Keeps every job efficient and consistent. Knows how to handle any terrain or lawn condition.",
  //   tag: "Efficiency & speed",
  //   placeholder: "Photo: mowing operator",
  // },
  // {
  //   name: "Miguel Santos",
  //   role: "Cleanup & Finishing",
  //   bio: "Final pass perfection. Makes sure every property looks spotless before we leave.",
  //   tag: "Final quality check",
  //   placeholder: "Photo: cleanup crew member",
  // },
];

const values = [
  {
    title: "Consistency",
    desc: "Same quality every visit. No shortcuts, no off-days.",
  },
  {
    title: "Respect",
    desc: "We treat your property like it’s our own.",
  },
  {
    title: "Reliability",
    desc: "We show up when we say we will. Every time.",
  },
  {
    title: "Pride in Work",
    desc: "Details matter — and we don’t ignore them.",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const TeamPage = () => {
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
          Our Team
        </div>

        <div className="overflow-hidden">
          <span className="animate hero-line-inner delay-1 block font-serif text-6xl md:text-7xl tracking-tight leading-none">
            The people behind
          </span>
        </div>
        <div className="overflow-hidden mt-1">
          <span className="animate hero-line-inner delay-2 block font-serif text-6xl md:text-7xl text-lime tracking-tight leading-none">
            every clean cut.
          </span>
        </div>

        <p className="animate fade-up delay-3 mt-8 text-cream/60 font-light text-lg max-w-xl">
          We’re not a random crew. Every person on our team is trained,
          consistent, and takes pride in the work we leave behind.
        </p>
      </section>

      {/* ── TEAM GRID ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`animate fade-up delay-${(i % 5) + 1}`}
            >
              {/* Image */}
              {/* <div className="mb-5">
                <ImagePlaceholder
                  label={member.placeholder}
                  height="h-[260px]"
                  className="rounded-2xl"
                />
              </div> */}

              {/* Tag */}
              <div className="text-lime text-sm uppercase tracking-wider mb-2">
                {member.tag}
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl text-cream">{member.name}</h3>

              {/* Role */}
              <div className="text-cream/50 text-lg mb-3">{member.role}</div>

              {/* Bio */}
              <p className="text-cream/60 text-lg font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM PHOTO STRIP ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="animate fade-up text-lime text-xs uppercase tracking-widest mb-3">
          In action
        </div>
        <h2 className="animate fade-up delay-1 font-serif text-4xl mb-8">
          A crew that actually <span className="text-lime">shows up.</span>
        </h2>

        {/* <div className="grid md:grid-cols-3 gap-4">
          {["On-site work", "Equipment prep", "Before/after results"].map(
            (label, i) => (
              <div key={label} className={`animate fade-up delay-${i + 1}`}>
                <ImagePlaceholder
                  label={`Photo: ${label}`}
                  height="h-[220px]"
                />
              </div>
            ),
          )}
        </div> */}
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="animate fade-up font-serif text-4xl mb-12">
            What we stand for
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`animate fade-up delay-${(i % 5) + 1} border-2 border-lime rounded-2xl p-6`}
              >
                <div className="text-cream text-lg uppercase tracking-wider mb-2">
                  {value.title}
                </div>
                <p className="text-cream/60 text-lg font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className=" py-20 text-center">
        <h2 className="animate fade-up font-serif text-5xl text-cream mb-4">
          Ready to work with a team
          <br />
          that actually cares?
        </h2>

        <p className="animate fade-up delay-1 text-cream/70 mb-8">
          We show up, do it right, and leave your yard better every time.
        </p>

        <Link
          href={"/contact"}
          className="animate fade-up delay-2 bg-lime text-cream px-8 py-3 rounded-full hover:bg-[#28a428] transition"
        >
          Book your first service →
        </Link>
      </section>
    </div>
  );
};

export default TeamPage;
