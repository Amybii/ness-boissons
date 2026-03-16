import Image from "next/image";

const services = [
  {
    icon: "/icons/livraison.png",
    title: "Livraison Express",
    description:
      "Livraison 6/7J, dimanche inclus. Dépannage à tout moment de la journée.",
  },
  {
    icon: "/icons/accompagnement.png",
    title: "Accompagnement Personnalisé",
    description:
      "Proposition d'une gamme adaptée à votre établissement.",
  },
  {
    icon: "/icons/joignable.png",
    title: "Joignable 24/24",
    description:
      "Commerciaux disponibles et dédiés entièrement aux clients.",
  },
  {
    icon: "/icons/confiance.png",
    title: "Mise en Relation avec les Industriels",
    description:
      "Possibilité d'être accompagnée auprès des groupes industriels.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-noir mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-blanc rounded-2xl p-8 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-noir mb-3 group-hover:text-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-noir/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
