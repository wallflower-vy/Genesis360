import React from "react";
import Image from "next/image";
import hidePass from "../../public/svg/hidepassword.svg";
import showPass from "../../public/svg/showpassword.svg";

import { RiCloseCircleFill } from "react-icons/ri";

const Requeststatementmodal = () => {
  return (
    <div className="text-green w-[90%] py-6 pl-12   ">
      <div className="flex justify-between">
        {" "}
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">
          Transfer Fund
        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <form>
        <div className="">
          <div className=" flex-col mt-[40px]">
            <label
              htmlFor="start-date"
              className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
            >
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
            />
          </div>

          <div className=" flex-col mt-[20px]">
            <label
              htmlFor="start-date"
              className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
            >
              End Date:
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              placeholder="Select Start Date"
              className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
            />
          </div>
        </div>

        <div>
        <input type="checkbox" id="example" name="example" className="h-4 w-4 bg-green checked:bg-green mt-[40px]"/>
        <span className="text-green  mt-[20px] pl-[4px] text-[20px] leading-[25px] font-medium">Send Statement to Email</span>
        </div>
      
        <button className="h-[50px] mt-[10px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Requeststatementmodal;
