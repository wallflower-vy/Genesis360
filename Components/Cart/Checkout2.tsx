import React from "react";
import { useState } from "react";
import OrderSummary from "./OrderSummary";

const Checkout2 = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event: any) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div className='px-[8rem] pt-[2rem] pb-[5rem] bg-background'>
    <p className=' text-green px-5 text-[32px] font-bold'>Checkout</p>
    <div className='flex gap-10'>
      <div className='shadow-[0px_0px_5px_0px_#0000004D] mt-10  bg-white w-[60%]  pt-8 pb-[8rem] px-[2rem]'>
        <div className=''>
          <p className='text-2xl font-bold text-green'>Payment Method</p>
          <p className='text-base font-semibold text-green'>
          How would you like to pay for your orders?
          </p>

          <div  className="mt-6">
            <label className='inline-flex items-center'>
              <input
                type='radio'
                className='form-radio text-indigo-500'
                name='option'
                value='option1'
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <p className='ml-2 font-semibold text-xl text-green'>Pay with Cards</p>
              <br />
            </label>
            <p className="px-5 text-base">Secured with Paystack</p>
          </div>
          <div className="mt-6">
            <label className='inline-flex items-center'>
              <input
                type='radio'
                className='form-radio text-indigo-500'
                name='option'
                value='option2'
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <span className='ml-2 font-semibold text-xl text-green'>Pay with Wallet</span>
            </label>
            <p className="px-5 text-base">
            Pay with your digital wallet
            </p>
          </div>
          <div className="mt-6">
            <label className='inline-flex items-center'>
              <input
                type='radio'
                className='form-radio text-indigo-500'
                name='option'
                value='option2'
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <span className='ml-2 font-semibold text-xl text-green'>Pay Later</span>
            </label>
            <p className="px-5 text-base">
            Buy now, Pay later with a 60% initial deposit and pay back your remaining balance within a 30-day period.
            </p>
          </div>

        </div>
      </div>


      <div className="  w-[40%] h-full">
      <OrderSummary />
      </div>
    </div>
  </div>
  )
}

export default Checkout2