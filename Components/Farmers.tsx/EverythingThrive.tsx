import Image from 'next/image'
import React from 'react'
import cart1 from '../../public/assets/cart1.png'
import cart2 from '../../public/assets/cart2.png'
// import cart3 from '../../public/assets/cart3.png'

const EverythingThrive = () => {
  return (
    <div className=''>
        <div className='bg-background px-[8rem] py-[5rem] '>
     <div className='w-[80%]'>
     <h1 className='text-6xl text-green font-extrabold leading-[80px]'>Everything to Help You Thrive</h1>
     </div>
     <div className='flex gap-8 mt-8'>
      <div className='bg-lime p-6  rounded-2xl w-1/2'>
          <Image src={cart1} alt='card'/>
          <h1 className='text-3xl font-extrabold text-green mt-5'>Quality Seeds</h1>
          <p className='text-lg font-medium text-green mt-3'>We understand the importance of high-quality seeds in ensuring a successful harvest. That is why we offer a wide range of seeds from trusted brands to meet your specific needs. Whether you are looking for corn, wheat, soybean, or other crops, we have the seeds you need to get the most out of your land.</p>
      </div>
      <div className='bg-lime p-6 rounded-2xl w-1/2'>
          <Image src={cart2} alt='card'/>
          <h1 className='text-3xl font-extrabold text-green mt-5'>Durable Equipment</h1>
          <p className='text-lg font-medium text-green mt-3'>We know that farming requires hard work, which is why we offer durable equipment that will withstand the toughest conditions. Our equipment includes tractors, planters, and tillage tools from leading manufacturers. You can trust that our equipment will help you get the job done efficiently and effectively.</p>
      </div>

     </div>
     <div className='flex gap-8 mt-8'>
      <div className='bg-lime p-6  rounded-2xl w-1/2'>
          <Image src={cart1} alt='card'/>
          <h1 className='text-3xl font-extrabold text-green mt-5'>Expert Support</h1>
          <p className='text-lg font-medium text-green mt-3'>We understand that farming can be challenging, and that is why we are here to help. Our team of experts is available to answer your questions and provide support throughout the entire process. Whether you need help selecting the right seeds or equipment, or you have questions about planting or harvesting, we are here to help</p>
      </div>
      <div className='bg-lime p-6 rounded-2xl w-1/2'>
          <Image src={cart2} alt='card'/>
          <h1 className='text-3xl font-extrabold text-green mt-5'>Competitive Pricing</h1>
          <p className='text-lg font-medium text-green mt-3'>We believe that high-quality seeds and equipment should be accessible to everyone. That is why we offer competitive pricing that allows you to get the products you need without breaking the bank. You can trust that you are getting the best value for your money when you choose us.</p>
      </div>

     </div>


     
    </div>

    </div>
  )
}

export default EverythingThrive