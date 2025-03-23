import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {

        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))

    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"Best"} text2={"Seller"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Our most popular furniture pieces that have been transforming homes with their exceptional design and quality.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {
                    bestSeller.map((item, index) => (
                        <div key={index} className="h-full">
                            <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
