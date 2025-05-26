import { useState } from "react";
import ProductCard from "../components/Card/ProductCard";

const Products = () => {
  const cartItems = [
    { id: 1, name: "King Size Bed", price: "300", img: "./img/bed.jpg" },
    {
      id: 2,
      name: "Comfy Slippers",
      price: "15",
      img: "./img/slippers.jpg",
    },
    { id: 3, name: "CD Rack", price: "100", img: "./img/rack.jpg" },
    {
      id: 4,
      name: "Glow Stick Bundle",
      price: "10",
      img: "./img/sticks.jpg",
    },
    { id: 5, name: "Cookie Jar", price: "25", img: "./img/cookies.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-blue-700 drop-shadow-lg text-center">
        Our Products
      </h1>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cartItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
