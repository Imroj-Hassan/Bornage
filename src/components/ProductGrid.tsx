import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Summer Dress",
    category: "New Born",
    price: 29.99,
    image: "/placeholder-product.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Winter Jacket",
    category: "Kids",
    price: 49.99,
    image: "/placeholder-product.jpg",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Cute T-Shirt",
    category: "Kids",
    price: 19.99,
    image: "/placeholder-product.jpg",
  },
  {
    id: 4,
    name: "Baby Romper",
    category: "New Born",
    price: 24.99,
    image: "/placeholder-product.jpg",
    badge: "Offer",
  },
  {
    id: 5,
    name: "Fashion Cap",
    category: "Accessories",
    price: 14.99,
    image: "/placeholder-product.jpg",
  },
  {
    id: 6,
    name: "Cozy Sweater",
    category: "Winter",
    price: 39.99,
    image: "/placeholder-product.jpg",
    badge: "New",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest collection of trendy and comfortable kid's
            fashion
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
