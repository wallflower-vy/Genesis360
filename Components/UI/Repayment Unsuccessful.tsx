import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Subs from "../../public/assets/image 28 (3).png";

const RepaymentUnsuccessful = () => {
  return (
    <div className="text-green w-[93%]   mx-auto">
    <div className="flex items-center justify-center">
        <RiCloseCircleFill className="text-[200px] cursor-pointer text-[#FF658C] " />
    </div>

    <h2 className="text-[32px] leading-[40px] text-center font-semibold text-[#FF658C]">Repayment Successful</h2>

    <p className="text-[20px] mt-[5px] leading-[26px] font-semibold text-center"> We&apos;re sorry, but your payment was not successful. Please check your payment information and try again. If you continue to experience issues, please contact our customer support team for assistance.</p>
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



    <button className="h-[50px] mt-[20px]  w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">Close</button>
  </div>   
   )
}

export default RepaymentUnsuccessful