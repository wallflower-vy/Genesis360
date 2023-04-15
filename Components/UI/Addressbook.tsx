import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Sub from "../../public/assets/image 28.png"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdModeEditOutline} from "react-icons/md";
import { BsTrash} from "react-icons/bs";

const Addressbook = () => {
  return (
    <div className="text-green w-[96%] py-2 pl-6  ">
        <div className="flex justify-between w-[100%]">
            <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Address Book</h2>
            <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
        </div>

        <div className='flex mt-[10px] space-x-[10px] items-center'>
            <AiOutlinePlusCircle className="text-2xl cursor-pointer text-green" />
            <p className='text-[20px] font-bold '>ADD NEW ADDRESS</p>
        </div>

        <p className='text-[20px] font-bold mt-[10px]'>Default Address</p>

        <div className='bg-[#0000000D] px-2 py-2 mt-[10px]'>
          <p className='text-[20px] font-bold'>Amala Corner Restaurants</p>
          <div className='flex justify-between mt-[4px] items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>25, Embassy Lodge, FUTA South Gate</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Edit<MdModeEditOutline className='pl-2 text-[30px]' /></p>
          </div>
          <h2 className='text-[20px] font-medium leading-[25px] '>Akure, Ondo State.</h2>
          <div className='flex justify-between  items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>+23422233345</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Remove<BsTrash className='pl-2 text-[30px]' /></p>
          </div>
        </div>

        <p className='text-[20px] font-bold mt-[20px]'>Default Address</p>

        <div className='bg-[#0000000D] px-2 py-2 mt-[5px]'>
            <p className='text-[20px] font-bold'>Amala Corner Restaurants</p>
            <div className='flex justify-between mt-[4px] items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>25, Embassy Lodge, FUTA South Gate</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Edit<MdModeEditOutline className='pl-2 text-[30px]' /></p>
            </div>
            <h2 className='text-[20px] font-medium leading-[25px] '>Akure, Ondo State.</h2>
            <div className='flex justify-between  items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>+23422233345</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Remove<BsTrash className='pl-2 text-[30px]' /></p>
            </div>
        </div>

        
        <div className='bg-[#0000000D] px-2 py-2 mt-[13px] w-[100%]'>
            <p className='text-[20px] font-bold'>Amala Corner Restaurants</p>
            <div className='flex justify-between mt-[4px] items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>25, Embassy Lodge, FUTA South Gate</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Edit<MdModeEditOutline className='pl-2 text-[30px]' /></p>
            </div>
            <h2 className='text-[20px] font-medium leading-[25px] '>Akure, Ondo State.</h2>
            <div className='flex justify-between  items-center'>
                <h2 className='text-[20px] font-medium leading-[25px] '>+23422233345</h2>
                <p  className='text-[20px] flex leading-[25px] font-semibold items-center '>Remove<BsTrash className='pl-2 text-[30px]' /></p>
            </div>
        </div>


        
 

    </div>    
)}

export default Addressbook