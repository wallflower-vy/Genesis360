import { RiCloseCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import { MdOutlineShareLocation } from "react-icons/md";
import location from "../../public/svg/Location.svg";

const Checknewsubscription = () => {
  return (
    <div className="text-green w-[90%] mx-auto  ">
      <div className="flex justify-between">
        {" "}
        <h2 className="text-[32px]  text-green leading-[40px] font-normal">
          Family of Three Groceries Package Subscription{" "}
        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <h2 className="text-[40px] font-bold">₦56,400</h2>

      <hr className="border-2 mt-[5px]"></hr>

      <h2 className="text-[#183D3666] text-[24px] font-bold mt-[5px]">
        What’s inside the Package?
      </h2>

      <div className="text-[20px] font-medium leading-[25px]">
        <li>1 Bag of Rice </li>
        <li>Palm Oil</li>
        <li>Groundnut Oil</li>
        <li>Bean </li>
        <li>5 Variety of Fruit </li>
        <li>Pepper and Tomatoes</li>
        <li>Maggi </li>
      </div>

      <form>
        <div className=" flex-col">
          <label
            htmlFor="start-date"
            className="block text-[#183D36]  mt-[13px] text-[20px] font-bold leading-[25px] mb-2"
          >
            Delivery Date
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
          />
        </div>

        <div>
          <label className="block  font-bold ">
            <label
              htmlFor="start-date"
              className="block text-[#183D36]  mt-[10px] text-[20px] font-bold leading-[25px] mb-2"
            >
              How Many Months?
            </label>
            <select
              className=" py-3 px-1 w-full border-green border-2 focus:outline-none focus:shadow-outline"
            >
              <option value="option1">Select No. of Months</option>
              <option value="option2">1</option>
              <option value="option3">2</option>
              <option value="option3">3</option>
            </select>
          </label>
        </div>
      </form>

      <button className="h-[50px] mt-[15px] bg-[#183D36] w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
        Subscribe to Package{" "}
      </button>
    </div>
  );
};

export default Checknewsubscription;
