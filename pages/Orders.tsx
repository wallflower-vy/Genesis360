import React from "react";
import Image from "next/image";
import showPass from "../public/svg/show.svg";

const Orders = () => {
  return (
    <>
    <h2 className="text-[32px] font-bold">Orders</h2>
    <table className="w-full border-collapse bg-gray-100 mt-[30px]">
      <thead className="">
        <tr className="text-left border-2 text-[15px] font-semibold  border-[#DFE5FF]">
          <th className="p-2">Order ID</th>
          <th className="p-2">Date</th>
          <th className="p-2">Amount Paid</th>
          <th className="p-2">Payment Channel</th>
          <th className="p-2">Delivery Method</th>
          <th className="p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-left border-2 border-[#DFE5FF]">
          <td className="p-3">GEN693256</td>
          <td className="p-3">12/02/2023</td>
          <td className="p-3">₦15,000</td>
          <td className="p-3">BNPL</td>
          <td className="p-3">Door Delivery</td>
          <td className="p-3"><button className='text-[#fff] px-2 py-1 font-bold text-center bg-[#F44336] text-[12px]'>Cancelled</button></td>
          <td className="p-3"><Image src={showPass} alt=""  /></td>
        </tr>
        
        <tr className="text-left border-2 border-[#DFE5FF]">
          <td className="p-3">GEN693256</td>
          <td className="p-3">12/02/2023</td>
          <td className="p-3">₦15,000</td>
          <td className="p-3">BNPL</td>
          <td className="p-3">Door Delivery</td>
          <td className="p-3"><button className='text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]'>Delivered</button></td>
          <td className="p-3"><Image src={showPass} alt=""  /></td>
        </tr>

        <tr className="text-left border-2 border-[#DFE5FF]">
          <td className="p-3">GEN693256</td>
          <td className="p-3">12/02/2023</td>
          <td className="p-3">₦15,000</td>
          <td className="p-3">BNPL</td>
          <td className="p-3">Door Delivery</td>
          <td className="p-3"><button className='text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]'>Delivered</button></td>
          <td className="p-3"><Image src={showPass} alt=""  /></td>
        </tr>

        <tr className="text-left border-2 border-[#DFE5FF]">
          <td className="p-3">GEN693256</td>
          <td className="p-3">12/02/2023</td>
          <td className="p-3">₦15,000</td>
          <td className="p-3">BNPL</td>
          <td className="p-3">Door Delivery</td>
          <td className="p-3"><button className='text-[#fff] px-2 py-1 font-bold text-center bg-[#F44336] text-[12px]'>Cancelled</button></td>
          <td className="p-3"><Image src={showPass} alt=""  /></td>
        </tr>
      </tbody>
    </table>

    
    </>
  );
};

export default Orders;
