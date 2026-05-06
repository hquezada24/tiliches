import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-8 py-24">
      <div className="text-lime text-xs font-medium tracking-widest uppercase mb-3">
        What we do
      </div>

      <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight mb-12">
        Everything your
        <br />
        lawn <em className="text-lime not-italic">needs.</em>
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Image Card */}
        <div className="group relative overflow-hidden rounded-2xl border-2 border-lime bg-forest">
          <Image
            width={500}
            height={500}
            src="/mowing.png"
            alt="Lawn mowing service"
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end p-5">
            <div className="text-white bg-linear-to-r from-black/70 to-transparent font-bold font-lexend p-5 rounded">
              <h4 className="text-lg">Lawn Mowing</h4>
              <p className="text-lg">Clean, even cuts every time.</p>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="group relative overflow-hidden rounded-2xl border-2 border-lime bg-forest">
          <Image
            width={500}
            height={500}
            src="/debris-hauling.png"
            alt="Debris hauling service"
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end p-5">
            <div className="text-white bg-linear-to-r from-black/70 to-transparent font-bold font-lexend p-5 rounded">
              <h4 className="text-lg">Debris Hauling</h4>
              <p className="text-lg">We leave your yard spotless.</p>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="group relative overflow-hidden rounded-2xl border-2 border-lime bg-forest">
          <Image
            width={500}
            height={500}
            src="/estimates.png"
            alt="Free estimate service"
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end p-5">
            <div className="text-white bg-linear-to-r from-black/70 to-transparent font-bold font-lexend p-5 rounded">
              <h4 className="text-lg">Free Estimates</h4>
              <p className="text-lg">No pressure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
