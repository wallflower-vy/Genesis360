import React from 'react'

const Orders2 = () => {
  return (
        <>
    <h2 className="text-[32px] font-bold text-[#183D36]">Orders</h2>

    <div className=" shadow-[0px_0px_2px_0px_#0000004D] text-green mt-[20px] ">

    <h2 className="text-[24px] font-semibold p-4 text-[#183D36] ">View Order Details</h2>

    <div className='border-t-2 border-[#DFE5FF] flex justify-between px-4 py-7'>
        <div>
            <h2 className='text-[20px] font-bold leading-[25px] '>Order ID</h2>
            <p className='text-[20px]  font-medium leading-[25px] text-[#906D6D]'>GEN693256</p>
        </div>
        <div>
            <h2 className='text-[20px] font-bold leading-[25px] '>Total Amount</h2>
            <p className='text-[20px]  font-medium leading-[25px] text-[#906D6D]'>₦15,000</p>
        </div>
        <div>
            <h2 className='text-[20px] font-bold leading-[25px] '>Status</h2>
            <p className='text-[20px]  font-medium leading-[25px] text-[#906D6D]'>Delivered</p>
        </div>
        <div>
            <h2 className='text-[20px] font-bold leading-[25px] '>Delivery Date</h2>
            <p className='text-[20px]  font-medium leading-[25px] text-[#906D6D]'>Feb. 23, 2023</p>
        </div>
    </div>
    <table className="w-full ">
      <thead className="">
        <tr className="text-left text-[15px] font-bold border-[#DFE5FF] border-y-2  ">
          <th className="p-2">Product Name</th>
          <th className="p-2">Category</th>
          <th className="p-2">Brand</th>
          <th className="p-2">Unit Of Measure</th>
          <th className="p-2">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr className="  border-[#DFE5FF] border-y-2 text-[#183D36] font-medium">
          <td className="p-3">Golden Penny Premium<br></br> Quality Semolina - 1kg</td>
          <td className="p-3">Drink</td>
          <td className="p-3">Golden Penny</td>
          <td className="p-3">Carton</td>
          <td className="p-3">
          1
          </td>
       
        </tr>

        <tr className="border-[#DFE5FF] border-y-2 text-[#183D36] font-medium">
        <td className="p-3">Golden Penny Premium<br></br> Quality Semolina - 1kg</td>
        <td className="p-3">Drink</td>
          <td className="p-3">Golden Penny</td>
          <td className="p-3">Carton</td>
          <td className="p-3">
          1
          </td>
      
        </tr>

        <tr className="text-left border-[#DFE5FF] border-y-2 text-[#183D36] font-medium">
        <td className="p-3">Golden Penny Premium<br></br> Quality Semolina - 1kg</td>
        <td className="p-3">Drink</td>
          <td className="p-3">Golden Penny</td>
          <td className="p-3">Carton</td>
          <td className="p-3">
         1
          </td>
       
        </tr>

        <tr className="text-left border-[#DFE5FF] border-y-2 text-[#183D36] font-medium ">
        <td className="p-3">Golden Penny Premium<br></br> Quality Semolina - 1kg</td>
        <td className="p-3">Drink</td>
          <td className="p-3">Golden Penny</td>
          <td className="p-3">Carton</td>
          <td className="p-3">
         1
          </td>
       
        </tr>

        <tr className="text-left text-[#183D36] font-medium">
        <td className="p-3">Golden Penny Premium<br></br> Quality Semolina - 1kg</td>
          <td className="p-3">Drink</td>
          <td className="p-3">Golden Penny</td>
          <td className="p-3">Carton</td>
          <td className="p-3">
           1
          </td>
       
        </tr>
    
      </tbody>
    </table>

  </div>
  </>  )
}

export default Orders2