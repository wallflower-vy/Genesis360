import React from "react";
import { useState } from "react";
import OrderSummary from "./OrderSummary";


const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='px-[8rem] pt-[2rem] pb-[5rem] bg-background'>
      <p className=' text-green px-5 text-[32px] font-bold'>Checkout</p>
      <div className='flex gap-10'>
        <div className='shadow-[0px_0px_5px_0px_#0000004D] mt-10  bg-white w-[60%]  pt-8 pb-[8rem] px-[4rem]'>
          <p className='text-green text-2xl font-bold'>Shipping Address</p>
          <div className='border-2 p-5 mt-3 border-[#000000]'>
            <p className='text-green text-xl font-bold'>
              Amala Corner Restaurants
            </p>
            <p className='text-green text-xl font-medium'>
              25, Embassy Lodge, FUTA South Gate
            </p>
            <p className='text-green text-xl font-medium'>Akure, Ondo State.</p>
            <div className='flex items-center justify-between'>
              <p className='text-green text-xl font-medium'>+23422233345</p>
              <button className='bg-lightgreen text-xl px-8 py-1 text-center font-bold text-white'>
                Change
              </button>
            </div>
          </div>

          <div className='mt-20'>
            <p className='text-2xl font-bold text-green'>Delivery Method</p>
            <p className='text-base font-semibold text-green'>
              How do you want your orders delivered?
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
                <p className='ml-2 font-semibold text-xl text-green'>Door Delivery</p>
                <br />
              </label>
              <p className="px-5 text-base">Your items should be delivered to you in about 2 days.</p>
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
                <span className='ml-2 font-semibold text-xl text-green'>Pickup at Genesis Warehouse</span>
              </label>
              <p className="px-5 text-base">
                2, Matt Avenue, Abeokuta - Ibadan expressway, Asero Abeokuta.
                +234 9134 9952 37 info@genesis360.com.ng
              </p>
            </div>
          </div>
        </div>


        <div className="  w-[40%] h-full">
        <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
