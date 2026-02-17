import { NextResponse } from "next/server";

// Simple in-memory cart (in production, use database and sessions)
let carts: Record<string, any[]> = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "guest";

  return NextResponse.json(carts[userId] || []);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId = "guest", productId, quantity = 1 } = body;

  if (!carts[userId]) {
    carts[userId] = [];
  }

  const existingItem = carts[userId].find(
    (item) => item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[userId].push({ productId, quantity });
  }

  return NextResponse.json({ success: true, cart: carts[userId] });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "guest";
  const productId = searchParams.get("productId");

  if (carts[userId]) {
    carts[userId] = carts[userId].filter(
      (item) => item.productId !== parseInt(productId || "0")
    );
  }

  return NextResponse.json({ success: true, cart: carts[userId] || [] });
}
