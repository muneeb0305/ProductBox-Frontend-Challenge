import AddProduct from "../containers/AddProduct";
import CheckOut from "../containers/CheckOut";
import Home from "../containers/Home";
import Products from "../containers/Products";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/checkout", element: <CheckOut /> },
  { path: "/products", element: <Products /> },
  { path: "/add-product", element: <AddProduct /> },
];
