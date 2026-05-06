const Team = () => {
  return (
    <section id="team" className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
        <div>
          {/* <div className="text-cream text-xs font-medium tracking-widest uppercase mb-3">
            Meet the crew
          </div> */}
          <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight">
            Real neighbors.
            <br />
            <em className="text-lime not-italic">Real work.</em>
          </h2>
        </div>
        <p className="text-cream font-light text-lg leading-relaxed">
          We're a group of folks from the same community who wanted to build
          something together. No big corporate boss — just a team that shows up
          and does right by every customer.
        </p>
      </div>
      {/* className="grid grid-cols-2 md:grid-cols-4 gap-4" */}

      <div className="flex justify-evenly">
        {/* <div className="bg-forest-mid border border-lime/15 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-lime/15 flex items-center justify-center text-2xl mx-auto mb-4">
            👤
          </div>
          <div className="text-cream font-medium text-sm mb-1">
            David Quezada
          </div>
          <div className="text-cream/40 text-xs font-light">Crew Lead</div>
        </div> */}
        {/* <div className="bg-forest-mid border border-lime/15 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-lime/15 flex items-center justify-center text-2xl mx-auto mb-4">
            👤
          </div>
          <div className="text-cream font-medium text-sm mb-1">Dani R.</div>
          <div className="text-cream/40 text-xs font-light">
            Equipment & Edging
          </div>
        </div> */}
        {/* <div className="bg-forest-mid border border-lime/15 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-lime/15 flex items-center justify-center text-2xl mx-auto mb-4">
            👤
          </div>
          <div className="text-cream font-medium text-sm mb-1">Luis V.</div>
          <div className="text-cream/40 text-xs font-light">
            Customer Relations
          </div>
        </div> */}
        {/* <div className="bg-forest-mid border border-lime/15 rounded-2xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-lime/15 flex items-center justify-center text-2xl mx-auto mb-4">
            👤
          </div>
          <div className="text-cream font-medium text-sm mb-1">Jordan K.</div>
          <div className="text-cream/40 text-xs font-light">
            Hauling & Cleanup
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
