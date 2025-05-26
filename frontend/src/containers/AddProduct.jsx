import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../services/apis";

const AddProduct = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img: "",
  });

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      alert("Product added successfully!");
      setFormData({ name: "", price: "", img: "" });
    },
    onError: (error) => {
      alert(error.message || "Something went wrong");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceNum = parseFloat(formData.price);
    if (!formData.name || !formData.img || isNaN(priceNum)) {
      alert("Please fill all fields correctly.");
      return;
    }

    mutation.mutate({
      name: formData.name,
      price: priceNum,
      img: formData.img,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 drop-shadow-lg">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <label className="block mb-4">
          <span className="text-blue-800 font-semibold">Product Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-blue-800 font-semibold">Price ($)</span>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-blue-800 font-semibold">Image URL</span>
          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="https://example.com/image.jpg"
            required
          />
        </label>

        <button
          type="submit"
          disabled={mutation.isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
        >
          {mutation.isLoading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
