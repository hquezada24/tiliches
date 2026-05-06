import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center gap-2 text-lime text-xs font-medium tracking-widest uppercase mb-5">
          <span className="block w-6 h-px bg-lime "></span> Your neighborhood
          crew
        </div>
        <h1 className="font-serif text-6xl leading-tight tracking-tight text-cream mb-6">
          We cut grass.
          <br />
          You cut <em className="text-lime not-italic">stress.</em>
        </h1>
        <p className="text-cream/65 font-light text-lg leading-relaxed mb-8 max-w-md">
          A local team of hardworking neighbors ready to keep your yard looking
          sharp — at prices that make sense.
        </p>

        <nav className="flex gap-4 flex-wrap ">
          <div className="text-cream">
            <Link
              href={"/contact"}
              className="bg-lime font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-[#28a428] hover:-translate-y-0.5"
            >
              Book a Cut →
            </Link>
          </div>
          <div className="text-cream">
            <Link
              href={"/pricing"}
              className="border border-cream/30 font-light px-8 py-3 rounded-full transition-all duration-200 hover:border-cream/50"
            >
              See pricing
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-forest border-2 border-lime rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-lime/5 translate-x-6 translate-y-6"></div>
          <span className="text-5xl block mb-4">🌿</span>
          <h3 className="font-serif text-2xl text-cream mb-2">
            Freshly cut, every time
          </h3>
          <p className="text-cream/55 font-light text-lg leading-relaxed">
            Professional-grade results from a crew that takes pride in the work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-forest border-2 border-lime rounded-2xl p-5">
            <div className="font-serif text-3xl text-cream mb-1">48h</div>
            <div className="text-cream/50 text-lg font-light">
              Booking turnaround
            </div>
          </div>
          <div className="bg-forest border-2 border-lime rounded-2xl p-5">
            <div className="font-serif text-3xl text-cream mb-1">$0</div>
            <div className="text-cream/50 text-lg font-light">
              Cancellation fee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
