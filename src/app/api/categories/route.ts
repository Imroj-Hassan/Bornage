import { NextResponse } from "next/server";

// Mock categories
const categories = [
  {
    id: "sale",
    name: "Sale",
    description: "Great deals on kids fashion",
    image: "/categories/sale.jpg",
  },
  {
    id: "offer",
    name: "Special Offers",
    description: "Limited time offers",
    image: "/categories/offer.jpg",
  },
  {
    id: "winter",
    name: "Winter Collection",
    description: "Warm clothing for cold days",
    image: "/categories/winter.jpg",
  },
  {
    id: "newborn",
    name: "New Born",
    description: "Comfortable clothes for newborns",
    image: "/categories/newborn.jpg",
  },
  {
    id: "kids",
    name: "Kid's Fashion",
    description: "Trendy outfits for kids",
    image: "/categories/kids.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete the look",
    image: "/categories/accessories.jpg",
  },
];

export async function GET() {
  return NextResponse.json(categories);
}
