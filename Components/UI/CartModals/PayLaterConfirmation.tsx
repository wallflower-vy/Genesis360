import Image from 'next/image'
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import paylater from '../../../public/assets/image 28 (2).png'

const PayLaterConfirmation = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Buy Now, Pay Later</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
  
        <div className='flex justify-center'>
            <Image src={paylater} alt='kyc_img' className='w-[30%]'/>
        </div>
        <div className=''>
            <p className='text-xl font-medium text-green'>Thank you for Buy Now Pay Later request. We have received your application and we are pleased to inform you that we are currently processing your request.</p>
            <p className='text-xl font-medium mt-4 text-green'> We will contact you as soon as your request has been successfully approved. This may take a few business days, but we will keep you informed of any updates along the way.</p>
            <p className='text-xl font-medium mt-4 text-green'> Thank you for choosing our Buy Now Pay Later service.</p>
            <div className=' mt-5'>
         
          <button className='w-full text-center text-xl font-bold bg-lightgreen py-2 text-white '>Back to Homepage</button>
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default PayLaterConfirmation
