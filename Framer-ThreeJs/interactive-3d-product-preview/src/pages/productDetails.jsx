import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/productsDummy";
import ProductViewer from "../componets/productViiewer";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mb-4"
      >
        Back to Products
      </button>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
        <div className="flex-1">
          <ProductViewer modelUrl={product.modelUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
