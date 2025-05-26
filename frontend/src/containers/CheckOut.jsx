import CheckoutSummary from "../components/CheckoutSummary/CheckoutSummary";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { handleClearItems } = useCart();

  // Clear the cart list
  const handleCheckout = (e) => {
    e.preventDefault();
    handleClearItems();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 p-6">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12 drop-shadow-lg">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Cart Summary */}
        <CheckoutSummary />

        {/* Checkout Button */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-2xl ring-1 ring-pink-200 w-full">
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
              Ready to place your order?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Click below to confirm your purchase.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
