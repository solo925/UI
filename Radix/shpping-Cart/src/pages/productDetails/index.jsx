import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { Button, Text } from '@radix-ui/themes';

function ProductDetailPage() {
  const { productDetails, setProductDetails, setLoading, loading, handleAddToCart, cartItem } = useContext(ShoppingCartContext);
  const { id } = useParams();
  const navigate = useNavigate();


  async function fetchProductDetails() {
    setLoading(true);  
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json(); 
      
      if (result) {
        setProductDetails(result);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

 
  if (loading) return <Text>Fetching product details, please wait...</Text>;

 
  if (!productDetails) return <Text>Error: Product details not found.</Text>;

  return (
    <div>
      <div className='p-6 mx-auto max-w-4xl lg:max-w-7xl'>
        <div className='grid grid-cols-1 gap-12 p-6 shadow-lg item-center lg:grid-cols-5'>
          {/* Main Image Section */}
          <div className='top-0 w-full text-center lg:col-span-3 lg:sticky'>
            <div className='relative px-4 py-10 rounded-xl shadow-sm'>
              <img
                className='object-cover w-4/5 rounded'
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className='flex flex-wrap gap-6 justify-center mx-auto mt-6'>
              {/* Limit secondary images to 3 */}
              {productDetails?.images?.length > 0 ? 
                productDetails.images.slice(0, 3).map((imageItem, index) => (
                  <div className='p-4 rounded-xl shadow-lg' key={index}>
                    <img
                      src={imageItem}
                      className='w-24 cursor-pointer'
                      alt={`product secondary image ${index + 1}`}
                    />
                  </div>
                )) :
                <Text>No additional images available.</Text>
              }
            </div>
          </div>

          {/* Product Info Section */}
          <div className='lg:col-span-2'>
            <Text as="h2" className='text-2xl font-extrabold text-[#3333]'>
              {productDetails?.title}
            </Text>
            <div className='flex flex-wrap gap-4 mt-4'>
              <Text as="p" className='text-xl font-bold'>${productDetails?.price}</Text>
            </div>
            <div>
              <Button
                disabled={cartItem?.findIndex(cartItem => cartItem.id === productDetails.id) > -1}
                onClick={() => handleAddToCart(productDetails)}
                className='disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded'>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
