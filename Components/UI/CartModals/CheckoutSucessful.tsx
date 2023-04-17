import Image from 'next/image'
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import paylater from '../../../public/assets/image 28 (2).png'

const CheckoutSucessful = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-lg py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Buy Now, Pay Later</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
  
        <div className='flex justify-center'>
            <Image src={paylater} alt='kyc_img' className='w-[30%]'/>
        </div>
        <div className=' text-center'>
            <p className='text-[32px] font-semibold text-[#01C698]'>Checkout Successful</p>
            <p className='text-xl font-medium  text-green'>Thank you for placing an order on Genesis360.</p>
            <p className='border-2 border-green text-xl text-green py-2 mt-3'>Order Number: GEN/23/58693</p>
            <p className='text-xl font-medium mt-4 text-green'>Congratulations! Your order  was successfully submitted. You will receive a confirmation email or SMS. </p>
            <div className=' mt-5'>
         
          <button className='w-full text-center text-xl font-bold bg-lightgreen py-2 text-white '>Back to Homepage</button>
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default CheckoutSucessful