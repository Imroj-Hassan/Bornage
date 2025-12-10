"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Sale":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "New":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Offer":
        return "bg-gradient-to-r from-orange-500 to-yellow-500";
      default:
        return "bg-gradient-to-r from-pink-500 to-purple-500";
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative">
        {/* Product Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-blue-50 mb-3 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-400 font-medium">Product Image</p>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${getBadgeColor(
                  product.badge
                )}`}
              >
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-full bg-white text-gray-900 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-900 text-base group-hover:text-pink-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 pt-1">
            <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
