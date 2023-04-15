import React from 'react'
import Image from "next/image";
import img2 from "../public/assets/Rectangle 691 (1).png";
import img1 from "../public/assets/Rectangle 345 (1).png";
import img3 from "../public/assets/Vector 39.png";
import img4 from "../public/assets/Rectangle 692 (1).png";

const Trackmypackage2 = () => {
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

            <div className='shadow-[0px_0px_4px_0px_#0000004D] py-4 px-4 mt-[10px]  space-x-2'>
               <div className='flex items-center space-x-3'>
                    <Image src={img2} alt="" />
                    <div>
                        <h2 className='text-[20px] leading-[21px] font-bold'>Package Name</h2>
                        <p className='mt-[1px]'>Tracking ID: <span className='font-semibold'> 5486325695</span></p>
                    </div>
               </div>
                
                <p className='text-[20px] font-extrabold leading-[25.2px] mt-[20px]'>Location</p>

                <div className='mt-[10px] flex space-x-3 '>
                    <Image src={img3} alt="" />

                    <div className=' justify-between flex-col'>
                        <div>  
                          <p className='text-[14px] font-normal'>From</p>
                          <h2 className='text-[20px] leading-[25px] font-semibold'>Genesis360 Warehouse, Abeokuta</h2>
                        </div>

                        <div>  
                             <p className='text-[14px] font-normal mt-[10px]'>To</p>
                             <h2 className='text-[20px] leading-[25px] font-semibold'>Oba-Ile, Akure, Ondo State.</h2>
                        </div>
                    </div>
                </div> 
            </div>


            <h2 className='text-[24px] font-extrabold mt-[30px]'>Transport</h2>
            <div className='shadow-[0px_0px_4px_0px_#0000004D] py-4 px-4 mt-[10px]  space-x-2'>

               <div className='flex items-center space-x-4'>
                    <Image src={img4} alt="" />
                    <div>
                        <h2 className='text-[20px] leading-[21px] font-bold'>Package Name</h2>
                        <p className='mt-[1px]'>Status: <span className='font-semibold'> Package in Akure</span></p>
                    </div>
               </div>
            
            </div>
        </div>

        <Image src={img1} alt=""  className='w-[470px]'/>

    </div>
  )
}

export default Trackmypackage2