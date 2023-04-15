import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";
import Subs from "../../public/assets/image 28 (2).png";

const Loanrepaymentmodal = () => {
  return (
    <div className="text-green w-[95%]  mx-auto">
      <div className='flex items-center justify-center'>
      <div className="flex items-center justify-center  bg-[#01C698] rounded-[50%] w-[40%]">
        <IoCheckmarkOutline className="text-[200px] cursor-pointer text-white" />
    </div>
      </div>
   

    <h2 className="text-[32px] leading-[40px] text-center font-semibold text-[#01C698] mt-[15px]">Repayment Successful</h2>

    <p className="text-[20px] mt-[5px] leading-[26px] font-semibold text-center">Your payment has been processed! Details of transaction are included below.</p>
    <button className="h-[50px] mt-[15px] bg-white w-[100%] font-bold  text-green text-[20px]  border-2 border-green">Transaction Number: 123456789</button>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Amount</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>₦8,000</p>
    </div>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Payment Channel</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>Card ****5468</p>
    </div>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Transaction Date</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>Feb. 25, 2023</p>
    </div>



    <button className="h-[50px] mt-[20px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">Close</button>
  </div>    
)
}

export default Loanrepaymentmodal