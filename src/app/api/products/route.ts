import { NextResponse } from "next/server";

// Mock product data - Replace with database calls
const products = [
  {
    id: 1,
    name: "Summer Dress",
    category: "newborn",
    price: 29.99,
    image: "/products/summer-dress.jpg",
    badge: "New",
    description: "Comfortable summer dress for your little one",
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["Pink", "Blue", "White"],
    inStock: true,
  },
  {
    id: 2,
    name: "Winter Jacket",
    category: "kids",
    price: 49.99,
    image: "/products/winter-jacket.jpg",
    badge: "Sale",
    description: "Warm winter jacket to keep kids cozy",
    sizes: ["2T", "3T", "4T", "5T"],
    colors: ["Navy", "Red", "Black"],
    inStock: true,
  },
  {
    id: 3,
    name: "Cute T-Shirt",
    category: "kids",
    price: 19.99,
    image: "/products/t-shirt.jpg",
    description: "Soft cotton t-shirt with fun prints",
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["White", "Yellow", "Green"],
    inStock: true,
  },
  {
    id: 4,
    name: "Baby Romper",
    category: "newborn",
    price: 24.99,
    image: "/products/romper.jpg",
    badge: "Offer",
    description: "Adorable romper for newborns",
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["Pink", "Blue", "Mint"],
    inStock: true,
  },
  {
    id: 5,
    name: "Fashion Cap",
    category: "accessories",
    price: 14.99,
    image: "/products/cap.jpg",
    description: "Stylish cap to complete any outfit",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Blue", "Black"],
    inStock: true,
  },
  {
    id: 6,
    name: "Cozy Sweater",
    category: "winter",
    price: 39.99,
    image: "/products/sweater.jpg",
    badge: "New",
    description: "Warm and cozy sweater for cold days",
    sizes: ["2T", "3T", "4T", "5T"],
    colors: ["Gray", "Navy", "Burgundy"],
    inStock: true,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const id = searchParams.get("id");

  // Get single product by ID
  if (id) {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    }
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Filter by category
  let filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  // Filter by search term
  if (search) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json(filteredProducts);
}
