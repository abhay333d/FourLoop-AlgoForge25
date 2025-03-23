import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>DESIGN INTERIOR</p>
                    </div>

                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Design Your Space</h1>
                    
                    <p className='text-sm md:text-base py-2 max-w-md'>Transform your home with our designer products and visualize it in your space with our AR technology</p>

                    <div className='flex items-center gap-4 pt-3'>
                        <Link to='/collection'>
                            <button className='bg-[#414141] text-white px-6 py-2 rounded text-sm font-medium'>SHOP NOW</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <img 
                className='w-full sm:w-1/2 object-cover h-80 sm:h-auto' 
                src="https://www.godrejinterio.com/imagestore/B2C/56101515SD00684/56101515SD00684_A2_803x602.jpg" 
                alt="King size bed" 
            />
        </div>
    )
}

export default Hero
