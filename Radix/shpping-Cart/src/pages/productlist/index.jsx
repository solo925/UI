import React, { useContext } from 'react';
import ProductTile from '../../components/productTile';
import { ShoppingCartContext } from '../../context';
import { Text } from '@radix-ui/themes';

function ProductListPage() {

  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  if (loading) return <Text>Loading data! Please wait...</Text>;

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
      <div className='px-4 mx-auto sm:py-4 lg:px-8 max-w-7xl'>
        <div className='mx-auto max-w-md text-center'>
          <Text as="h2" className='text-3xl font-extralight text-gray-950 sm:text-4xl'>
            Our Featured Products
          </Text>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
          {
            listOfProducts && listOfProducts.length > 0 ?
              listOfProducts.map(singleProductTile =>
                <ProductTile singleProductTile={singleProductTile} key={singleProductTile.id} />) :
              <Text as="h3" className="col-span-full text-center text-gray-600">
                No products found
              </Text>
          }
        </div>
      </div>
    </section>
  );
}

export default ProductListPage;
