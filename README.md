# Bornage - Kids Fashion E-Commerce Store

A modern, responsive e-commerce website for children's fashion built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design matching Figma prototype
- 🛍️ Product catalog with categories
- 🔍 Search functionality
- 🛒 Shopping cart (coming soon)
- 👤 User authentication (coming soon)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── ProductGrid.tsx  # Product listing
    ├── ProductCard.tsx  # Individual product card
    └── Footer.tsx       # Footer section
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Categories

- Sale
- Offer
- Winter Collection
- New Born
- Kid's Fashion
- Accessories

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Icons**: Heroicons (SVG)

## Backend Features

- ✅ RESTful API routes for products, categories, and cart
- ✅ MongoDB database models (Product, User, Order)
- ✅ Product management with categories
- ✅ Shopping cart API
- ✅ Category pages (Sale, Offer, Winter, New Born, Kid's, Accessories)
- ✅ Product detail pages with size/color selection

## Database Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Copy `.env.example` to `.env.local`
3. Update `MONGODB_URI` with your connection string
4. The app will connect automatically when database operations are performed

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products?category=kids` - Get products by category
- `GET /api/products?id=1` - Get single product

### Categories

- `GET /api/categories` - Get all categories

### Cart

- `GET /api/cart?userId=guest` - Get cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart?userId=guest&productId=1` - Remove item from cart

## Upcoming Features

- [ ] User authentication with NextAuth
- [ ] Checkout process
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard
- [ ] Order management
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

## Deployment

The app can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- AWS, Google Cloud, or Azure

## License

Private - All rights reserved
