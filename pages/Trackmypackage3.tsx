import React from 'react'
import Image from "next/image";
import img1 from "../public/assets/Rectangle 345 (1).png";
import img2 from "../public/assets/image 54 (1).png";
const Trackmypackage3 = () => {
  return (
    <div className='flex text-green space-x-[30px]'>

        <div>
            <h2 className='text-[32px] leading-[40px] font-extrabold'>Track My Package</h2>
            <p className='text-[24px] leading-[30px] font-semibold mt-[15px]'>Looking for your package?</p>
            <p className='text-[16px] leading-[20px] font-normal'>Search it using the tracking number of your purchase</p>

            <div className='flex items-center space-x-2 mt-[20px]'>
                <input type="text" id="GEN/25689652" name="GEN/25689652" placeholder="GEN/25689652" required className="w-full py-2 px-3 bg-[#F3F8FF] border-green border-[3px] focus:outline-none focus:shadow-outline" />
                <button className='text-[#fff] px-2 w-[153px]  py-2 font-bold text-center bg-lightgreen text-[20px]'>Track</button>
            </div>

            <h2 className='text-[24px] font-extrabold mt-[30px]'>Package Details</h2>
            <p>We couldn’t find any package that matches that tracking number</p>
            <Image src={img2} alt='d' className="cursor-pointer    mt-[20px]"/>

        </div>

        <Image src={img1} alt=""  className='w-[470px]'/>

    </div>
  )
}

export default Trackmypackage3