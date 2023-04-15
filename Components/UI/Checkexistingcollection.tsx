import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";

const Checkexistingcollection = () => {
  return (
<div className="text-green w-[90%] mx-auto py-2 ">
    <div className="flex justify-between">
        {" "}
        <h2 className="text-[32px]  text-green leading-[40px] font-normal">
        Family of Three Groceries Package Subscription        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <h2 className='text-[40px] font-bold'>₦56,400</h2>

      <hr className='border-2 mt-[10px]'></hr>
  
      <h2 className='text-[#183D3666] text-[24px] font-bold mt-[10px]'>What’s inside the Package?</h2>

        <div className='flex justify-between'>
        <div className='text-[20px] font-medium leading-[25px]'>
                <li>1 Bag of Rice </li>
                <li>Palm Oil</li>
                <li>Groundnut Oil</li>
                <li>Bean </li>
                <li>5 Variety of Fruit </li>
                <li>Pepper and Tomatoes</li>
                <li>Maggi </li>
              </div>
              <div className='text-[20px] font-medium leading-[25px]'>
                <li>1 Bag of Rice </li>
                <li>Palm Oil</li>
                <li>Groundnut Oil</li>
                <li>Bean </li>
                <li>5 Variety of Fruit </li>
                <li>Pepper and Tomatoes</li>
                <li>Maggi </li>
              </div>
        </div>    

        <div>
          <h2 className='text-[#183D3666] text-[24px] font-bold mt-[10px]'>Date of Subscription</h2>
          <h2 className='text-[20px] font-medium leading-[25px]'>5th November, 2023</h2>       
        </div>


        <div>
          <h2 className='text-[#183D3666] text-[24px] font-bold mt-[10px]'>Delivery Date</h2>
          <h2 className='text-[20px] font-medium leading-[25px]'>5th of The Next 3 Months</h2>       
        </div>

      <button className="h-[50px] mt-[20px] bg-[#183D36] w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
        Cancel Subscription        </button>
    
    </div>  
    )
}

export default Checkexistingcollection