import Image from "next/image";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import card from '../../../public/assets/card.png'

const AddCard = () => {
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

          <div className="flex justify-between mt-3 gap-5">
            <div className='w-1/2 mt-3'>
                <p className="font-bold text-2xl text-green ">Add Card Details</p>
                <p className="font-medium text-base text-green">Kindly fill the fields below.</p>

                <form className="mt-[20px] ">
           
            

           <div className="mt-[30px]">
             <label
               htmlFor="Business Name *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
               Name on Card **
             </label>
             <input
               type="text"
               id="Full Name"
               name="Full Name"
               placeholder="Full Name"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>
          

           <div className="mt-[30px]">
             <label
               htmlFor="Business Category *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
              Card Number *
             </label>
             <input
               type="text"
               id="CardNumber"
               name="Address *"
               placeholder="0000   0000   0000   0000"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>

            <div className="flex gap-5">
            <div className="mt-[30px] w-1/2">
             <label
               htmlFor="Business Category *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
              Card Expiry *
             </label>
             <input
               type="text"
               id="CardNumber"
               name="Address *"
               placeholder="MM/YY"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>

           <div className="mt-[30px] w-1/2">
             <label
               htmlFor="Business Category *"
               className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
             >
              CVV *
             </label>
             <input
               type="text"
               id="CardNumber"
               name="Address *"
               placeholder="***"
               className="w-full py-3 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
             />
           </div>
               

            </div>

          

           <button className='w-full text-center text-xl mt-5 font-bold border-2 border-green py-2 text-green '>Continue</button>
         
        
       </form>
            </div>
            <div className='w-1/2 mt-6'>
                <p className="font-medium text-2xl text-green">Kindly provide the information of the Card you would want us to directly charge you from for your repayment.</p>
                    <Image src={card} alt='card'/>
                    <button className="bg-lightgreen w-full mt-3 text-white font-bold text-xl py-3 text-center">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
