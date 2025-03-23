import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to DreamNest, a platform designed to make home decor shopping smarter, immersive, and fun. This website was developed during a 24-hour hackathon with a mission to enhance the interior design experience using cutting-edge Augmented Reality (AR) technology. We aim to solve the common challenge of uncertainty when purchasing home decor by allowing users to visualize furniture, wall textures, and floor designs in their own space before making a purchase. With seamless integration of AR and e-commerce, we make it easy to preview, customize, and shop with confidence.</p>
          <p>Our solution empowers users to experiment with different styles and designs in real-time, offering a more personalized and interactive way to decorate their living spaces. Whether you want to see how a new sofa fits in your living room or find the perfect wall texture, our platform helps you bridge the gap between imagination and reality. We are proud of what we've accomplished in just 24 hours and hope to inspire the future of interior design through this innovative project. Happy designing!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at DreamNest is to transform the way people shop for furniture and home decor by leveraging AR technology to create a more confident, engaging, and personalized shopping experience. We're dedicated to helping you make informed decisions about your living space without the guesswork.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>AR Visualization:</b>
          <p className='text-gray-600'>See exactly how furniture and decor will look in your space before making a purchase, eliminating uncertainty.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Innovative Design Tools: </b>
          <p className='text-gray-600'>Experiment with different styles, colors, and textures in real-time to find your perfect match.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Seamless Shopping Experience:</b>
          <p className='text-gray-600'>From visualization to purchase, enjoy a smooth and intuitive interface designed with your needs in mind.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
