import Image from "next/image";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";ippis
import card from '../../../public/assets/card.png'
import ippis from '../../../public/assets/image 25.png'



const EnterIppis = () => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity bg-gray-800 opacity-50'></div>

        <div className='z-20 w-full max-w-4xl py-8 px-6 mx-auto bg-white shadow-lg'>
          <div className='flex justify-between'>
            <h2 className='text-[32px]  text-[#90DD3E] leading-[40px] font-bold'>
            Buy Now, Pay Later
            </h2>
            <div className='flex justify-end'>
              <RiCloseCircleFill className='text-4xl cursor-pointer text-green' />
            </div>
          </div>
         <div className="mt-3 w-[50%]">
         <Image src={ippis} alt=''/>

         </div>
          <div className="flex justify-between mt-3 gap-5">
            <div className='w-1/2 '>
                <p className="font-bold text-2xl text-green ">Enter Your IPPIS Details</p>
                <p className="font-medium text-base text-green">Kindly fill the fields below.</p>

                <form className="mt-[20px] ">
           
            

           <div className="mt-[30px]">
             <label
               htmlFor="Business Name *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
              IPPIS Number *
             </label>
             <input
               type="text"
               id="IPPIS Number *"
               name="IPPIS Number *"
               placeholder="IPPIS Number *"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>
          

           <div className="mt-[30px]">
             <label
               htmlFor="Business Category *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
              Email Address *
             </label>
             <input
               type="email"
               id="Email Address *"
               name="Email Address  *"
               placeholder="Email Address *"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>

           <div className="mt-[30px]">
                <label htmlFor="Phone Number *" className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2">Phone Number *</label>
                <div className="flex">
                  <label  className="border-[#183D36] border-y-2 border-l-2 h-[100%] bg-[#B0FFFC] p-4 outline-[#183D36] outline-8"> 
                    +234
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="8122233345"
                    pattern=""
                    required
                    className="w-full py-4 px-3   border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

          

           <button className='w-full text-center text-xl mt-[30px] font-bold border-2 border-green py-2 text-green '>Continue</button>
         
        
       </form>
            </div>
            <div className='w-1/2 mt-[-3rem] '>
             <div className="  p-5 shadow-[0px_0px_5px_0px_#0000004D]">
             <div className="w-[70%]">
             <p className="font-bold text-2xl text-green">How to check the IPPIS number?</p>
             </div>
                   <div className="mt-3">
                    <p className="text-base text-green">If you are having difficulties checking your IPPIS number. Here are simple steps on how to go about it.</p>
                    <ol  className="text-base text-green">
                        <li> 1. Visit ippis.gov.ng.</li>
                        <li> 2. Choose the employee category.</li>
                        <li> 3.  Select your rank.</li>
                        <li> 4. Enter your civilian, AP or Force number. </li>
                        <li> 5. Click on <b>show</b> to reveal your Integrated Personnel Payroll Information System data page. </li>
                      
                    </ol>
                    <p className="text-base mt-5 text-green" >If you fail to access your IPPIS number after the steps above, you can get it by filling out the IPPIS complaint form or calling the Integrated Personnel Payroll Information System customer care line</p>
                   </div>
                  
             </div>
             <button className="bg-lightgreen w-full mt-3 text-white font-bold text-xl py-3 text-center">Continue</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterIppis
