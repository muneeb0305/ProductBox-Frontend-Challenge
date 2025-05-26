import axios from "axios";

const HOST = "http://localhost:3000";

// Fetch Products
export const fetchProducts = async () => {
  const { data } = await axios.get(`${HOST}/items`);
  return data;
};
