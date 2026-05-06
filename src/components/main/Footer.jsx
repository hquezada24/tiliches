import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest border-t-2 border-lime px-8 py-6 flex flex-wrap items-center justify-between gap-4">
      {/* <div className="font-serif text-xl text-lime font-bold">
        Quezada<span className="italic text-cream">Lawn Care</span>
      </div> */}
      <Image
        src={"/logo.png"}
        width={80}
        height={80}
        alt="Quezada Lawn Care Logo"
      ></Image>
      <div className="text-cream text-xs font-light">
        © {currentYear} Quezada Lawn Care. Local. Honest. Hardworking.
      </div>
    </footer>
  );
};

export { Footer };
