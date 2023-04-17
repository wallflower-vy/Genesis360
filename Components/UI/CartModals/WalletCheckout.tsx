import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import wallet from '../../../public/svg/wallet.svg'
import Image from "next/image";
import hidePass from "../../../public/svg/hidepassword.svg";
import showPass from "../../../public/svg/showpassword.svg";

import {useState} from 'react'

const WalletCheckout = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
      };
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity bg-gray-800 opacity-50'></div>

        <div className='z-20 w-full max-w-xl py-8 px-6 mx-auto bg-white shadow-lg'>
          <div className='flex justify-between'>
            <h2 className='text-[32px]  text-[#90DD3E] leading-[40px] font-bold'>
              Wallet Checkout
            </h2>
            <div className='flex justify-end'>
              <RiCloseCircleFill className='text-4xl cursor-pointer text-green' />
            </div>
          </div>

          <div className="bg-white mt-5 flex items-center gap-2  justify-center py-3 shadow-[0px_0px_5px_0px_#0000004D]">
          <div className="h-[3rem] w-[3rem] flex justify-center rounded-full  bg-aqua"><Image src={wallet} alt='wallet'/></div>
               <div>
               <p className="text-base font-medium text-green">Wallet Balance</p>
               <p className="text-[50px] font-bold text-green">₦190,000</p>
               </div>
          </div>

          <form >
          <div className="mt-[30px]">
                <label
                  htmlFor="Amount *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="Amount"
                  name="Amount"
                  placeholder="₦253.685"
                  className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="*****************"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                  />

                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                    <button
                      type="button"
                      className="focus:outline-none focus:text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        // If the password visibility flag is true, show the "eye with a line through it" icon
                        <Image src={showPass} alt="" width={20} height={20} />
                      ) : (
                        // Otherwise, show the "eye" icon
                        <Image src={hidePass} alt="" width={20} height={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button className="bg-lightgreen w-full text-white p-4 font-bold text-xl mt-4">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WalletCheckout;
