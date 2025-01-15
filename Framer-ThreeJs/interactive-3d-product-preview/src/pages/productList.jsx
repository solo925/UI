import React from "react";
import ProductList from "../componets/ProductList";

const ProductListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
