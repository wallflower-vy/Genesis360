import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'

const BuyNowModal = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-4xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Buy Now, Pay Later</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
    <p className='font-bold text-green text-2xl'>How it works</p>
        <div className=''>
        <div className='flex  '>
            <div className=' flex gap-3 w-[43%] items-center'>
              <h1 className='font-extrabold text-[100px] text-lightgreen'>1.</h1>
              <div>
                <p className='font-bold text-green text-2xl'>Shop and Pay Later </p>
                <p className='text-base font-medium text-green'>Get up to ₦300k in shopping credit to get your groceries.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end '>
            <div className=' flex gap-3 w-[60%] items-center'>
              <h1 className='font-extrabold text-[80px] text-lightgreen'>2.</h1>
              <div>
                <p className='font-bold text-green text-2xl'>Verify your Identity to access Offers </p>
                <p className='text-base font-medium text-green'>Complete our KYC Process to verify your identity and access some of our juicy offers.</p>
              </div>
            </div>
          </div>
          <div className='flex  '>
            <div className=' flex gap-3 w-[50%] items-center'>
              <h1 className='font-extrabold text-[80px] text-lightgreen'>3.</h1>
              <div>
                <p className='font-bold text-green text-2xl'>Select a Flexible Repayment Plan </p>
                <p className='text-base font-medium text-green'>We allows you with flexible payment plan terms, making it easier for you to start paying your invoices. No hassle. No stress</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end '>
            <div className=' flex gap-3 w-[60%] items-center'>
              <h1 className='font-extrabold text-[80px] text-lightgreen'>4.</h1>
              <div>
                <p className='font-bold text-green text-2xl'>Check out Successfully  </p>
                <p className='text-base font-medium text-green'>Check out successfully with your groceries on its way to your door step. </p>
              </div>
            </div>
          </div>

        </div>
        <div className='flex gap-3 mt-2'>
          <button className='w-1/2 text-center text-xl font-bold border-2 py-2 text-green border-green'>Cancel</button>
          <button className='w-1/2 text-center text-xl font-bold bg-lightgreen py-2 text-white '>Continue</button>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default BuyNowModal