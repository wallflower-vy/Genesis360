import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Sub from "../../public/assets/image 28.png";
import logo from "../../public/assets/Genesislogo.png";

const Statement = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-between">
        <div>
          <Image src={logo} alt="logo" className="max-md:w-[180px]" />
          <h2 className="text-[20px]  w-[440px] mt-[10px] text-[#183D36] leading-[25px] font-medium">Please find below wallet transaction report for the period: Feb. 12, 2023 to Feb. 25, 2023        </h2>
        </div>
        
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
      </div>

      <div className="border-2 border-[#90DD3E] px-4 py-6 mt-[36px]">
        <div className='flex justify-between'>
          <h2 className='text-[20px] leading-[20px] font-bold'>Opening Balance: <span className="font-normal"> ₦0</span></h2>
          <p  className='text-[20px] leading-[20px] font-bold'>Total Credit:  <span className="font-normal"> ₦0</span></p>
        </div>
        <div className='flex justify-between mt-[30px]'>
          <h2 className='text-[20px] leading-[20px] font-bold'>Closing Balance: <span className="font-normal"> ₦0</span></h2>
          <p  className='text-[20px] leading-[20px] font-bold'>Total Debit: <span className="font-normal"> ₦0</span></p>
        </div>
      </div>

      <table className="w-full border-collapse bg-gray-100 mt-[30px] bg-white">
        <thead className="">
          <tr className="text-left border-2 text-[15px] font-semibold  p-3 border-[#DFE5FF] bg-[#90DD3E]">
            <th className="p-3">Trans. Date</th>
            <th className="p-3">Ref. Number</th>
            <th className="p-3">Transaction Details</th>
            <th className="p-3">Credit (₦)</th>
            <th className="p-3">Debit (₦)</th>
            <th className="p-3">Balance (₦)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left border-2 border-[#DFE5FF] bg-[#90DD3E]">
            <td className="p-3">Feb. 12, 2023</td>
            <td className="p-3">25685654866</td>
            <td className="p-3">Transfer to @Matthew</td>
            <td className="p-3">-</td>
            <td className="p-3">₦5,000</td>
            <td className="p-3">₦25,000</td>
          </tr>

          <tr className="text-left border-2 border-[#DFE5FF] bg-[#90DD3E] ">
            <td className="p-3">Feb. 12, 2023</td>
            <td className="p-3">25685654866</td>
            <td className="p-3">Fund Wallet</td>
            <td className="p-3">₦5,000</td>
            <td className="p-3">-</td>
            <td className="p-3">₦25,000</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end  items-center mt-[40px] space-x-[30px]"> 
       <button className="w-[104px] font-bold  text-white text-[20px] bg-[#90DD3E]">Close</button>
        <h2  className='text-[20px] leading-[20px] font-bold text-[#9747FF]'>Export as PDF</h2>
        <h2  className='text-[20px] leading-[20px] font-bold'>Print</h2>
      </div>

    </div>
  );
};

export default Statement;
