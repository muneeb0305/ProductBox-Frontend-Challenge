import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/menu-items";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-blue-700 tracking-wide cursor-pointer select-none">
            Shop
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {menuItems.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Cart Icon */}
            <Link to={"/checkout"} className="relative cursor-pointer group">
              <ShoppingCart className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-blue-100 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-7 h-7 text-blue-600" />
              ) : (
                <Menu className="w-7 h-7 text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {menuItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-semibold hover:text-blue-600 transition"
            >
              {name}
            </Link>
          ))}

          <Link
            to={"/checkout"}
            className="flex items-center gap-3 pt-2 border-t border-gray-200"
          >
            <ShoppingCart className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Cart ({cartItems.length})
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
