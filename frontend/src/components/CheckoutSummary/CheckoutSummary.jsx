import { useCart } from "../../context/CartContext";

export default function CheckoutSummary() {
  const { cartItems } = useCart();

  // Sum of all product prices
  const total = cartItems?.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl ring-1 ring-purple-200">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Order Summary</h2>
      {cartItems?.length === 0 ? (
        <p className="text-gray-500 text-lg">No items in cart.</p>
      ) : (
        <ul className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 pb-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`${"http://localhost:3000/"}${item.img}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow"
                />
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: 1</p>
                </div>
              </div>
              <p className="font-bold text-blue-700 text-lg">
                ${Number(item?.price)?.toFixed(2)}
              </p>
            </li>
          ))}
          <li className="flex justify-between pt-6 text-xl font-bold text-blue-900">
            <span>Total</span>
            <span>${total?.toFixed(2)}</span>
          </li>
        </ul>
      )}
    </div>
  );
}
