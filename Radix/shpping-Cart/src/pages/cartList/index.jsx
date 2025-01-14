import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTile from '../../components/cartTile';
import { ShoppingCartContext } from '../../context';
import { Button, Text } from '@radix-ui/themes';

function CartListPage() {
  const navigate = useNavigate();
  const { cartItem } = useContext(ShoppingCartContext);

  return (
    <div className="py-4 mx-auto max-w-5xl max-md:max-w-xl">
      <Text as="h1" className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </Text>
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {cartItem?.length ? (
            cartItem.map((singleCartItem) => (
              <CartTile key={singleCartItem.id} singleCartItem={singleCartItem} />
            ))
          ) : (
            <Text as="h1">No items added to cart</Text>
          )}
        </div>
        <div className="p-4 bg-gray-100 rounded-sm h-max">
          <Text as="h3" className="text-xl font-extrabold border-b border-gray-300 text-gray-950 pb-2">
            Order Summary
          </Text>
          <ul className="mt-4 space-y-2 text-gray-700">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total<span>
                ${cartItem.reduce((acc, curr) => acc + curr.totalprice, 0).toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="flex gap-2 mt-5">
            <Button
              disabled={cartItem?.length === 0}
              className="px-4 py-3 text-sm font-extrabold text-white bg-black disabled:opacity-65"
            >
              Checkout
            </Button>
            <Button
              onClick={() => navigate("/products")}
              className="px-4 py-3 text-sm font-extrabold text-white bg-black"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListPage;
