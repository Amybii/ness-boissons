export default function About() {
  const pillars = [
    {
      title: "Réactivité",
      description:
        "Nous nous adaptons à vos besoins en temps réel avec un service de livraison express 6j/7.",
    },
    {
      title: "Flexibilité",
      description:
        "Une gamme de plus de 7750 références adaptée à chaque type d'établissement.",
    },
    {
      title: "Proximité",
      description:
        "Une équipe dédiée, joignable 24h/24, entièrement à votre écoute.",
    },
  ];

  return (
    <section id="apropos" className="py-24 bg-orange text-blanc">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos 3 Piliers
          </h2>
          <div className="w-24 h-1 bg-jaune mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-blanc/10 backdrop-blur-sm rounded-2xl p-10 text-center hover:bg-blanc/20 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-jaune mb-4 uppercase tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-blanc/90 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blanc/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Chaque client est unique ! Chez Ness Boissons, nous sommes
            déterminés à vous offrir une expérience de boissons exceptionnelle.
          </p>
        </div>
      </div>
    </section>
  );
}
