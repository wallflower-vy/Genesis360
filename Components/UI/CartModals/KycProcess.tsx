
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'

const KycProcess = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-3xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">KYC Process</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>

    <div className='mt-2'>
                <p className="font-bold text-2xl text-green ">Add Card Details</p>
                <p className="font-medium text-base text-green">Kindly fill the fields below.</p>

                <form className="mt-[30px] ">
         
              <div className=" flex  gap-5 items-center">
                <div className=" w-1/2">
                  <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    placeholder="Busness Name"
                    type="text"
                    id="BusnessName"
                    name="BusnessName"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="RC Number*"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                  >
                    RC Number *
                  </label>
                  <input
                    type="text"
                    id="RCNumber"
                    name="RCNumber"
                    placeholder="RCNumber"
                    className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className=" flex  mt-[30px] gap-5 items-center">
                <div className=" w-1/2">
                  <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    placeholder="Busness Name"
                    type="text"
                    id="BusnessName"
                    name="BusnessName"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="RC Number*"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                  >
                   Address *
                  </label>
                  <input
                    type="text"
                    id="Address *"
                    name="Address *"
                    placeholder="*****************"
                    className="w-full py-2 px-3  border-green border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className='flex mt-[30px] gap-5'>
              <div className=" w-1/2">
                  <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    placeholder="Busness Name"
                    type="text"
                    id="BusnessName"
                    name="BusnessName"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className='w-1/2 flex gap-5'>
                    <div className='w-1/2'>
                    <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                   State *
                  </label>
                  <input
                    placeholder="State"
                    type="text"
                    id="BState"
                    name="BusnessName"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />

                    </div>
                    <div className='w-1/2'>
                    <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    City *
                  </label>
                  <input
                    placeholder="Busness Name"
                    type="text"
                    id="BusnessName"
                    name="BusnessName"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />

                    </div>

                </div>

              </div>



            <div className='flex gap-5 mt-[30px] items-center'> 
            <div className="w-1/2">
                <label
                  htmlFor="Business Category *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Is the Company Registered? *
                </label>
                <input
                  type="text"
                  id="Business Category *"
                  name="Business Category *"
                  placeholder="Business Category *"
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div  className="w-1/2">
              <label
                  htmlFor="Business Category *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                
                </label>
                <button className='bg-lightgreen  text-white font-bold w-full text-xl text-center p-2 mt-5'>Continue</button>
              </div>

             </div>
          </form>
    </div>
      
        
      </div>
    </div>
  </div>
  )
}

export default KycProcess