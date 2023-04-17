import React, { useState } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'

const PayLaterCheckout = () => {
    const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-5xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Buy Now, Pay Later</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>


    <div className='flex justify-between gap-5 '>
        <div className='w-1/2'>
            <div className='w-full bg-white mt-5 shadow-[0px_0px_5px_0px_#0000004D]'>
                <div className='p-5'>
                <h1 className='font-bold text-xl text-green'>AMOUNT</h1>
                <p className='font-extrabold text-[48px] text-green'>₦90,000</p>
                </div>
                <hr className='text-[#A68787] text-3xl'/>
                <div className='px-5 py-8'>
                <h1 className='font-bold text-xl text-green'>PAYMENT PLAN</h1>
               <div className='flex justify-between'>
               <p className='font-medium text-xl text-green'>Pay in 30 days installments</p>
               <button className='font-medium px-3 py-1 text-white bg-green'>Change</button>
               </div>
                </div>
            </div>

           <p className='font-bold text-2xl text-green mt-5'>Loan Repayment Breakdown</p>

           <div className='bg-[#bbe093] rounded-sm p-3 mt-5'>
                <div className='flex justify-between '>
                    <p className='text-[18px] font-bold text-green'>Amount</p>
                    <p className='text-[18px] font-bold text-green'>Due Date</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-[18px] font-bold text-green'>₦23,000</p>
                    <p className='text-[18px] font-bold text-green'>03/04/2023</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-[18px] font-bold text-green'>₦23,000</p>
                    <p className='text-[18px] font-bold text-green'>03/04/2023</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-[18px] font-bold text-green'>₦23,000</p>
                    <p className='text-[18px] font-bold text-green'>03/04/2023</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-[18px] font-bold text-green'>₦23,000</p>
                    <p className='text-[18px] font-bold text-green'>03/04/2023</p>
                </div>

                

           </div>
           <button className='border-2 border-green w-full text-green py-2 mt-5 font-bold text-xl'>Cancel</button>

        </div>
        <div className='w-1/2 mt-5 px-5 '>
            <p className='font-semibold text-2xl'>Note *</p>

            <p className='text-green font-normal text-xl mt-3'>As a business, we require an upfront payment of 60% of the total amount before you can access our “Buy Now, Pay Later” service. </p>
            <p className='text-green font-normal text-xl mt-5'>The amount divided into installments in your Loan Repayment Breakdown details is the remaining balance if you do decide to pay the 60%.</p>

            <p className='font-bold text-2xl text-green mt-5'>Expected Mode of Payment</p>
            <div className='border-green border-2 mt-5 p-5 rounded-lg'>
            <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-indigo-500'
                  name='option'
                  value='option2'
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <span className='ml-2 font-semibold text-xl text-green'>Saved Card</span>
              </label>
              <p className="px-5 text-base text-green">
              Choosing this method means your loan repayment would be automatically recovered from your saved card. 
              </p>
            </div>
            <p className='text-base font-normal text-green mt-5'>By proceeding, I confirm that I have read, understood and agreed to the Genesis360’s Terms and Conditions.. </p>
            <button className='bg-lightgreen w-full text-white py-2 mt-5 font-bold text-xl'>Cancel</button>

        </div>
    </div>
    
       
        
      </div>
    </div>
  </div>
  )
}

export default PayLaterCheckout
