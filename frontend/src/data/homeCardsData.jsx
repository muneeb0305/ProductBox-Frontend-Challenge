import { ListChecks, Plus, ShoppingCart } from "lucide-react";

export const cards = [
  {
    to: "/products",
    Icon: ShoppingCart,
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
    title: "Browse Products",
    description: "View all available items to add to your cart.",
  },
  {
    to: "/checkout",
    Icon: ListChecks,
    iconColor: "text-green-600",
    titleColor: "text-green-800",
    title: "Checkout",
    description: "See all items you’ve added to your cart.",
  },
  {
    to: "/add-product",
    Icon: Plus,
    iconColor: "text-purple-600",
    titleColor: "text-purple-800",
    title: "Add New Product",
    description: "Add a new item to your product list.",
  },
];
