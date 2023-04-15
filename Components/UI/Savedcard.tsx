import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Sub from "../../public/assets/Card 1.png"

const Savedcard = () => {
  return (
    <div className="text-green w-[90%] py-6  pl-16">
    <div className="flex justify-between w-[95%]">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Saved Cards</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>

    <div className='mt-[30px]'>
     <Image src={Sub} alt="googleplay" className="cursor-pointer"/>
    </div>

    <button className="h-[50px] mt-[40px]  w-[95%] font-bold  text-white text-[20px] bg-[#90DD3E]">
    Proceed to Pay        </button>
</div>    )
}

export default Savedcard