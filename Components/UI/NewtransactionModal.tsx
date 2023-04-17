import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";

import Image from "next/image";
import Sub from "../../public/assets/image 28.png"

const NewtransactionModal = () => {
  return (
    
    <div className="text-green w-[90%] py-6 pl-12  ">
        
    <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">View Transaction</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>

    <div className=''>
        <div className='flex justify-between mt-[40px]'>
            <div>
                <h2 className='text-[20px] leading-[25px] font-bold'>Transaction Date</h2>
                <p  className='text-[20px] leading-[20px] font-medium mt-[5px] '>12/04/2023</p>
            </div>
            <div>
                <h2   className='text-[20px] leading-[25px] font-bold  text-right '>Transaction Date</h2>
                <p  className='text-[20px] leading-[20px] text-right  font-medium mt-[5px]'>c13b702ec07eea8ef1abc13b7<br />02ec07eea8ef1ab</p>
            </div>
        </div>

        <div className='flex justify-between mt-[30px]'>
            <div>
                <h2 className='text-[20px] leading-[25px] font-bold'>Sender</h2>
                <p  className='text-[20px] leading-[20px] font-medium mt-[5px] '>Adewale Adekunle</p>
            </div>
            <div>
                <h2   className='text-[20px] leading-[25px] font-bold  text-right '>Recipient</h2>
                <p  className='text-[20px] leading-[20px] text-right  font-medium mt-[5px]'>Genesis306</p>
            </div>
        </div>

        <div className='flex justify-between mt-[30px]'>
            <div>
                <h2 className='text-[20px] leading-[25px] font-bold'>Amount</h2>
                <p  className='text-[20px] leading-[20px] font-medium mt-[5px] '>Adewale Adekunle</p>
            </div>
            <div>
                <h2   className='text-[20px] leading-[25px] font-bold  text-right '>Description</h2>
                <p  className='text-[20px] leading-[20px] text-right  font-medium mt-[5px]'>Groceries Settlement</p>
            </div>
        </div>

        
        <div className='flex justify-between mt-[30px] items-center'>
            <div>
            <h2 className='text-[20px] leading-[25px] font-bold'>Transaction Type</h2>
                <p  className='text-[20px] leading-[20px] font-medium mt-[5px] '>Debit</p>
            </div>
            <div>
                <h2   className='text-[20px] leading-[25px] font-bold  text-right '>Transaction Status</h2>
                <p  className='text-[20px] leading-[20px] text-right  font-medium mt-[5px]'>Successful</p>
            </div>
        </div>
    </div>


    <button className="h-[50px] mt-[50px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">Close</button>
    </div> 
     
)}

export default NewtransactionModal