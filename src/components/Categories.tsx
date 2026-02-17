import Link from "next/link";

const categories = [
  {
    name: "Sale",
    href: "/sale",
    icon: "🏷️",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Offer",
    href: "/offer",
    icon: "✨",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Winter",
    href: "/winter",
    icon: "❄️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "New Born",
    href: "/newborn",
    icon: "👶",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Kid's",
    href: "/kids",
    icon: "👕",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Accessories",
    href: "/accessories",
    icon: "🎀",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Browse our curated collections for every occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl aspect-square flex flex-col items-center justify-center text-center`}
              >
                <div className="text-4xl md:text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
