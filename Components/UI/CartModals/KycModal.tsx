import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import kycmodal from '../../../public/assets/kycmodal.png'
import Image from 'next/image'

const KycModal = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-2xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Buy Now, Pay Later</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
   
        <div className='flex justify-center'>
            <Image src={kycmodal} alt='kyc_img'/>
        </div>
        <div className='text-center'>
            <p className='text-2xl font-extrabold text-green'>You are yet to fill your KYC!</p>
            <p className='text-xl font-medium text-green'>For us to assess if you are eligible to our “Buy Now, Pay Later” Payment Option, you have to complete your KYC. Kindly pay N450 to start your KYC.</p>
            <div className='flex gap-3 mt-2'>
          <button className='w-1/2 text-center text-xl font-bold border-2 py-2 text-green border-green'>Cancel</button>
          <button className='w-1/2 text-center text-xl font-bold bg-lightgreen py-4 text-white '>Pay N450</button>
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default KycModal