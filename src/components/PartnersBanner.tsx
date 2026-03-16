import Image from "next/image";

const partners: { src: string; alt: string; width: number; invert?: boolean }[] = [
  { src: "/partners/heineken.svg", alt: "Heineken", width: 150 },
  { src: "/partners/pernod-ricard.svg", alt: "Pernod Ricard", width: 140 },
  { src: "/partners/bacardi.svg", alt: "Bacardi", width: 120 },
  { src: "/partners/budweiser.png", alt: "Budweiser", width: 150 },
  { src: "/partners/coca-cola.svg", alt: "Coca-Cola", width: 130 },
  { src: "/partners/orangina.svg", alt: "Orangina", width: 120 },
  { src: "/partners/noailles.png", alt: "Noailles", width: 130, invert: true },
];

export default function PartnersBanner() {
  const allPartners = [...partners, ...partners];

  return (
    <section id="partenaires" className="py-20 bg-blanc overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-noir mb-4">
            Ils nous font confiance
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto rounded-full" />
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blanc to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blanc to-transparent z-10" />

        <div className="flex animate-marquee w-max items-center">
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              className="flex items-center justify-center mx-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={60}
                className={`h-14 w-auto object-contain ${partner.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-noir/50 text-sm mt-12 uppercase tracking-wider font-medium">
        + de 250 clients à nos côtés
      </p>
    </section>
  );
}
