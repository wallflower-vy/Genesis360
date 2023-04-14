import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Sub from "../../public/assets/image 28.png"

const SubscriptionConfirmationModal = () => {
  return (
    <div className="text-green w-[90%] py-6 pl-12  ">
        <div className="flex justify-between">
            <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Confirmation</h2>
            <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
        </div>

        <div className='flex items-center justify-center mt-[30px]'>
         <Image src={Sub} alt="googleplay" className="cursor-pointer"/>
        </div>

        <p className='text-[20px] mt-[30px] leading-[26px] font-semibold text-center'>You are about to subscribe to our <span className='text-[#254AA5]'> Family of Three Subscription Package </span>which would be delivered to you monthly on the <span className='text-[#254AA5]'>25th March</span>  for the <span className='text-[#254AA5]'>Next 3 Months</span> and you would be charged monthly for the goods and the delivery.</p>
        <button className="h-[50px] mt-[20px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
        Proceed to Pay        </button>
    </div>  
)
}

export default SubscriptionConfirmationModal