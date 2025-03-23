import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Free Design Consultation</p>
        <p className='text-gray-400'>Get expert advice on furniture selection and placement</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>30 Days Satisfaction Guarantee</p>
        <p className='text-gray-400'>Try our furniture at home with our risk-free trial</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>White Glove Delivery</p>
        <p className='text-gray-400'>Professional assembly and installation included</p>
      </div>

    </div>
  )
}

export default OurPolicy
