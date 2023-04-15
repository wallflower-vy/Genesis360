import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import Subs from "../../public/assets/image 39.png";
import Image from "next/image";

const Addcard = () => {
  return (
    <div className="text-green w-[100%] py-2  ">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">
          Add New Card
        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <div className="flex">
        <form className=" w-[100%]">
          <div className="">
            <div className="">
              <label
                htmlFor="Name on Card *"
                className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
              >
                Name on Card *{" "}
              </label>

              <input
                placeholder="Full Name"
                type="text"
                id="Name on Card *"
                name="Name on Card *"
                required
                className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
              >
                Card Number *{" "}
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="0000   0000   0000   0000"
                  required
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className=" flex space-x-[20px] mt-[30px] w-[100%]">
              <div className="">
                <label
                  htmlFor="Card Expiry *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                >
                  Card Expiry *{" "}
                </label>
                <div className="relative">
                  <input
                    id="Card Expiry *"
                    name="Card Expiry *"
                    type="text"
                    placeholder="Select State *"
                    className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="CVV *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                >
CVV *                </label>
                <div className="relative">
                  <input
                    id="CVV *"
                    name="CVV *"
                    type="text"
                    placeholder="***"
                    className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="h-[50px] mt-[20px] bg-[#90DD3E] w-full font-bold  text-white text-[20px]">
          Continue          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcard;
