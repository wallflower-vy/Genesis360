import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'

const KycDirector = () => {
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
                <p className="font-bold text-2xl text-green ">Director’s Information</p>
                <p className="font-medium text-base text-green">Kindly fill the fields below.</p>

                <form className="mt-[30px] ">
         
              <div className=" flex  gap-5 items-center">
                <div className=" w-1/2">
                  <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                  First Name *
                  </label>
                  <input
                    placeholder="First Name *"
                    type="text"
                    id="First Name *"
                    name="First Name *"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="RC Number*"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                  >
                   Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="Date of Birth *"
                    name="Date of Birth *"
                    placeholder="Date of Birth *"
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
                    Last Name *
                  </label>
                  <input
                    placeholder="Last Name *"
                    type="text"
                    id="Last Name *"
                    name="Last Name *"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="RC Number*"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                  >
                  Gender *
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
              <div className="w-1/2">
                <label htmlFor="Phone Number *" className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2">Phone Number *</label>
                <div className="flex">
                  <label  className="border-[#183D36] border-y-2 border-l-2 h-[100%] bg-[#B0FFFC] p-2 outline-[#183D36] outline-8"> 
                    +234
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="8122233345"
                    pattern=""
                    required
                    className="w-full py-2 px-3   border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className=" w-1/2">
                 <div>
                 <label
                    htmlFor="Business Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                  Means of Identification *
                  </label>
                  <input
                    placeholder="Last Name *"
                    type="file"
                    id="Last Name *"
                    name="Last Name *"
                    className="w-full py-1 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                 </div>
                <div className='mt-2'>
                <input type="checkbox" id="option1" name="option1" value="Option 1"/>
  <label htmlFor="option1" className=' text-[#183D36] ml-2 text-sm font-bold leading-[25px] mb-2'>I declare that the information provided in this form is accurate and complete. </label>
                </div>
                </div>

                

              </div>



            <div className='flex gap-5  items-center'> 
            <div className="w-1/2">
                <label
                  htmlFor="Email Address *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                 Email Address * *
                </label>
                <input
                  type="text"
                  id="Email Address *"
                  name="Business Category *"
                  placeholder="Email Address *"
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

export default KycDirector
