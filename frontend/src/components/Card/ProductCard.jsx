import { ShoppingCart } from "lucide-react";

const ProductCard = ({ id, name, price, img }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-6 flex flex-col justify-between transform transition hover:scale-105 hover:shadow-2xl">
      {/* Product image */}
      <img
        src={`${"http://localhost:3000/"}${img}`}
        alt={name}
        className="h-48 w-full object-cover rounded-md mb-4"
      />

      {/* Product details */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">{name}</h2>
        <p className="text-green-700 font-bold text-lg">${price}</p>
      </div>

      {/* Add to cart button */}
      <button
        onClick={() => onAddToCart(id)}
        className={`mt-auto flex items-center justify-center gap-2 rounded-md px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700`}
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
