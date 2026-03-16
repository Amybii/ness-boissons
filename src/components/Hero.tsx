import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-orange overflow-hidden">
      {/* Decorative yellow splash shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <svg
          viewBox="0 0 500 900"
          className="h-full w-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M200,0 Q350,200 300,400 Q250,500 350,650 Q400,750 300,900 L500,900 L500,0 Z"
            fill="#FFD51F"
            opacity="0.3"
          />
          <path
            d="M300,0 Q400,150 350,350 Q300,450 400,600 Q450,700 350,900 L500,900 L500,0 Z"
            fill="#FFD51F"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-jaune text-lg md:text-xl font-medium mb-4 uppercase tracking-widest">
            Service de livraison express
          </p>
          <h1 className="text-blanc text-5xl md:text-7xl font-bold leading-tight mb-6">
            Pas qu&apos;une histoire de prix&nbsp;!
          </h1>
          <p className="text-blanc/90 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Chez Ness Boissons, nous sommes déterminés à vous offrir une
            expérience de boissons exceptionnelle, alliant{" "}
            <strong>dynamisme</strong> et <strong>proximité</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-jaune text-noir px-8 py-4 rounded-full font-bold text-lg hover:bg-blanc transition-colors text-center"
            >
              Nous contacter
            </Link>
            <Link
              href="#services"
              className="border-2 border-blanc text-blanc px-8 py-4 rounded-full font-bold text-lg hover:bg-blanc hover:text-orange transition-colors text-center"
            >
              Nos services
            </Link>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <p className="text-jaune text-4xl md:text-5xl font-bold">15+</p>
              <p className="text-blanc/80 text-sm mt-1">
                ans d&apos;expertise
              </p>
            </div>
            <div>
              <p className="text-jaune text-4xl md:text-5xl font-bold">250+</p>
              <p className="text-blanc/80 text-sm mt-1">clients satisfaits</p>
            </div>
            <div>
              <p className="text-jaune text-4xl md:text-5xl font-bold">7750+</p>
              <p className="text-blanc/80 text-sm mt-1">références</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
