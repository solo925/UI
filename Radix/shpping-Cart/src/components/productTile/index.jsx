import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { Text, Button } from "@radix-ui/themes";

function ProductTile({ singleProductTile }) {
  const navigate = useNavigate();
  const { handleAddToCart, cartItem } = useContext(ShoppingCartContext);

  // Navigation handler
  function handleNavigateToProductDetailsPage(getProductId) {
    navigate(`/product-detail/${getProductId}`);
  }

  const isInCart =
    cartItem?.findIndex((item) => item.id === singleProductTile?.id) > -1;

  return (
    <div className="relative flex flex-col border border-gray-300 rounded-md overflow-hidden shadow-sm group">
      {/* Product Image */}
      <div className="overflow-hidden aspect-w-1 aspect-h-1 bg-gray-100">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col p-4 space-y-2">
        {/* Title */}
        <Text className="text-sm font-semibold text-gray-900 truncate">
          {singleProductTile?.title}
        </Text>

        {/* Price */}
        <Text className="text-lg font-bold text-gray-700">
          ${singleProductTile?.price}
        </Text>

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-4">
          <Button
            onClick={() =>
              handleNavigateToProductDetailsPage(singleProductTile?.id)
            }
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            View Details
          </Button>

          <Button
            disabled={isInCart}
            onClick={() => handleAddToCart(singleProductTile)}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
              isInCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
