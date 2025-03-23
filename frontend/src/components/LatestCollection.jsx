import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {

        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10))
        }

    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"DESIGNS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our newest furniture pieces designed to bring elegance and functionality to your living space.</p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {
                    latestProducts.map((item, index) => (
                        <div key={index} className="h-full">
                            <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default LatestCollection
