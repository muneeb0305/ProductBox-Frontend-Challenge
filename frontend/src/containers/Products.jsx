import { useState } from "react";
import ProductCard from "../components/Card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/Searchbar/Searchbar";
import { fetchProducts } from "../services/Apis";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { cartItems, addToCart } = useCart();

  // Search and sort states
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on sortOrder
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;

    return 0; // default (no sorting)
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-blue-700 drop-shadow-lg text-center">
        Our Products
      </h1>

      {/* SearchBar */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        sortOrder={sortOrder}
        onSortChange={(e) => setSortOrder(e.target.value)}
      />

      {/* Product Cards */}
      {sortedProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isAdded={cartItems.some((item) => item.id === product.id)}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
