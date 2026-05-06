"use client";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";

// ---------------------------------------------------------------------------
// Contact Info (edit these)
// ---------------------------------------------------------------------------

const contact = {
  phone: "(903) 609-9079",
  email: "quezadadavid001@gmail.com",
  facebook: "https://facebook.com/quezadalawnservices",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const ContactPage = () => {
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
          Contact
        </div>

        <div className="overflow-hidden">
          <span className="animate hero-line-inner delay-1 block font-serif text-6xl md:text-7xl tracking-tight leading-none">
            Let’s get your yard
          </span>
        </div>
        <div className="overflow-hidden mt-1">
          <span className="animate hero-line-inner delay-2 block font-serif text-6xl md:text-7xl text-lime tracking-tight leading-none">
            looking right.
          </span>
        </div>

        <p className="animate fade-up delay-3 mt-8 text-cream/60 font-light text-lg max-w-xl">
          Call, email, or message us — we’ll respond fast.
        </p>
      </section>

      {/* ── MAIN CONTACT BLOCK ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-8 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: CONTACT OPTIONS */}
        <div className="animate fade-right space-y-8">
          {/* Phone */}
          <div className="border-2 border-lime rounded-2xl p-6">
            <div className="text-lime text-xs uppercase tracking-widest mb-2">
              Call or Text
            </div>
            <div className="font-serif text-3xl text-cream mb-3">
              {contact.phone}
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="inline-block bg-lime text-cream text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#28a428] transition"
            >
              Call now →
            </a>
          </div>

          {/* Email */}
          <div className="border-2 border-lime rounded-2xl p-6">
            <div className="text-lime text-xs uppercase tracking-widest mb-2">
              Email
            </div>
            <div className="text-cream text-lg mb-3 break-all">
              {contact.email}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block border border-lime/35 text-lime text-sm font-medium px-6 py-2.5 rounded-full hover:bg-lime/10 transition"
            >
              Send email →
            </a>
          </div>

          {/* Social */}
          {/* <div className="border-2 border-lime rounded-2xl p-6">
            <div className="text-lime text-xs uppercase tracking-widest mb-2">
              Social
            </div>
            <p className="text-cream/60 text-sm mb-4">
              See our latest work and message us directly.
            </p>

            <a
              href={contact.facebook}
              target="_blank"
              className="inline-flex items-center gap-3 text-lime hover:text-lime-light transition"
            >
             
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.8.9-1.8 1.7V12h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12z" />
              </svg>
              Facebook
            </a>
          </div> */}
        </div>

        {/* RIGHT: VISUAL / TRUST */}
        <div className="animate fade-left space-y-6">
          {/* <ImagePlaceholder
            label="Photo: team on-site helping customer"
            height="h-[260px]"
          />

          <ImagePlaceholder
            label="Photo: completed lawn result"
            height="h-[160px]"
          /> */}

          <div className="bg-lime/10 border border-lime/20 rounded-2xl p-6">
            <div className="text-lime text-sm uppercase tracking-wider mb-2">
              Quick response
            </div>
            <p className="text-cream/70 text-sm font-light leading-relaxed">
              Most calls and messages are answered within a few hours. If we’re
              on a job, we’ll get back to you the same day.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="border-2 border-lime py-20 text-center">
        <h2 className="animate fade-up font-serif text-5xl text-cream mb-4">
          Want a fast quote?
        </h2>

        <p className="animate fade-up delay-1 text-cream/60 mb-8">
          Send us a message or call — we’ll give you a clear price right away.
        </p>

        {/* <a
          href={`tel:${contact.phone}`}
          className="animate fade-up delay-2 inline-block bg-forest text-lime px-8 py-3 rounded-full hover:bg-forest-mid transition"
        >
          Call now →
        </a> */}
      </section>
    </div>
  );
};

export default ContactPage;
