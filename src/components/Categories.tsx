const categories = [
  { name: "Bières", emoji: "🍺" },
  { name: "Vins", emoji: "🍷" },
  { name: "Spiritueux", emoji: "🥃" },
  { name: "Soft Drinks", emoji: "🥤" },
  { name: "Eaux", emoji: "💧" },
  { name: "Jus de Fruits", emoji: "🍊" },
  { name: "Sirops", emoji: "🫗" },
  { name: "Boissons Chaudes", emoji: "☕" },
  { name: "Arts de la Table", emoji: "🍽️" },
  { name: "Hygiène", emoji: "🧴" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-noir mb-4">
            Plus de 7750 Références
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto rounded-full mb-4" />
          <p className="text-noir/60 text-lg">
            Tout ce dont votre établissement a besoin
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-blanc rounded-xl p-6 text-center hover:shadow-md transition-shadow group cursor-default"
            >
              <span className="text-4xl block mb-3">{cat.emoji}</span>
              <p className="font-medium text-noir group-hover:text-orange transition-colors">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
