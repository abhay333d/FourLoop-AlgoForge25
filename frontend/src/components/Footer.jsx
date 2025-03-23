import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <h1 className='text-2xl font-bold'>DreamNest</h1>
          <p className='w-full md:w-2/3 text-gray-600'>Our aim at DreamNest is to transform houses into stylish, functional, and personalized spaces. We focus on quality, innovation, and customer satisfaction to bring your dream home to life.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/')}>Home</li>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/collection')}>Shop</li>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/about')}>About us</li>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/contact')}>Contact us</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/contact')}>+1-212-456-7890</li>
            <li className='cursor-pointer hover:text-black transition-colors' onClick={() => navigate('/contact')}>Contact@foreveryou.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
