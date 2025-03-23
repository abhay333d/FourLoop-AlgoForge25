import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

  const { currency, addToCart } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  };

  const handleARView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // AR functionality would be implemented here
    console.log("AR view for product:", id);
  };

  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>
      <div className='flex flex-col h-full border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow'>
        <div className='h-48 overflow-hidden'>
          <img className='w-full h-full object-cover hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
        </div>

        <div className='p-3 flex flex-col flex-grow'>
          <p className='text-sm line-clamp-2 mb-1 flex-grow'>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
          
          <div className='grid grid-cols-2 gap-2 mt-3'>
            <button 
              onClick={handleAddToCart}
              className='bg-[#414141] text-white text-xs rounded px-3 py-1 hover:bg-black transition-colors'
            >
              Add to Cart
            </button>
            <button 
              onClick={handleARView}
              className='border border-[#414141] text-xs rounded px-3 py-1 hover:bg-gray-100 transition-colors'
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
