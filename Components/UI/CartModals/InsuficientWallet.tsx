import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import paylater from '../../../public/assets/image 40.png'
import Image from 'next/image'
import {useState} from 'react'

const InsuficientWallet = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event: any) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-lg py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Wallet Checkout</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
  
        <div className='flex justify-center'>
            <Image src={paylater} alt='kyc_img' className=''/>
        </div>
        <div className=''>
            {/* <p className='text-[32px] font-semibold text-[#01C698]'>Checkout Successful</p> */}
            <p className='text-xl font-medium  text-green'>Oops! Your Genesis360 Wallet Balance has insufficient funds. Please tup-up your wallet balance and try again. again</p>
                <div className='w-[70%] mt-5'>
                    <p className='text-xl font-bold text-green'>You can proceed with any of the option below</p>
                </div>
              <div>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-green text-2xl'
                  name='option'
                  value='option1'
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <p className='ml-2 font-bold text-xl text-green'>Pay with Card</p>
                <br />
              </label>
              </div>
              <div>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-green text-2xl'
                  name='option'
                  value='option1'
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <p className='ml-2 font-bold text-xl text-green'>Pay Later</p>
                <br />
              </label>
              </div>

            <div className=' flex gap-5 mt-5'>
            <button className='w-full text-center border-2 border-green text-xl font-bold py-2 text-green '>Cancel</button>
          <button className='w-full text-center text-xl font-bold bg-lightgreen py-2 text-white '>Proceed</button>
        </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default InsuficientWallet