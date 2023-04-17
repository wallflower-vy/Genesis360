import Image from 'next/image'
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import paylater from '../../../public/assets/failed.png'
const CheckoutUnsuccessful = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-lg py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-end">
       
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
  
        <div className='flex justify-center'>
            <Image src={paylater} alt='kyc_img' className='w-[30%]'/>
        </div>
        <div className=' text-center mt-5'>
            <p className='text-[32px] font-semibold text-[#FF658C]'>Checkout Unsuccessful</p>
            <p className='text-xl font-medium  text-green'>We are sorry, but your purchase was not successful. The Payment is declined for some reason. .</p>
            
            <p className='text-xl font-medium mt-4 text-green'>Alternatively, you can choose a different payment method and try again. If you need assistance, please feel free to contact us.</p>
            <div className=' mt-5'>
         
          <button className='w-full text-center text-xl font-bold bg-lightgreen py-2 text-white '>Back to Homepage</button>
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default CheckoutUnsuccessful
