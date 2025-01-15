import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
