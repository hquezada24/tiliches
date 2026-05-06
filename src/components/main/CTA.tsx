import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="font-serif text-6xl text-cream tracking-tight leading-tight mb-4">
        Ready for a<br />
        <em className="not-italic">fresh cut?</em>
      </h2>
      {/* <p className="text-forest/60 font-light text-lg mb-10">
        Drop your address and we'll get back to you within 24 hours with a free
        quote.
      </p> */}
      <div className="flex gap-3 justify-center max-w-lg mx-auto px-4 flex-wrap">
        {/* <input
          type="text"
          placeholder="Your street address..."
          className="flex-1 min-w-48 px-6 py-3 rounded-full bg-forest text-cream placeholder-cream/30 text-lg font-light outline-none"
        /> */}
        <div className="mt-10">
          <Link
            href={"/contact"}
            className="bg-lime text-cream font-medium text-lg px-7 py-3 rounded-full btn-transition hover:bg-[#28a428] whitespace-nowrap"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
