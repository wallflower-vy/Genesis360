import React from 'react'

const OrderSummary = () => {
  return (
   <div>
     <div className='shadow-[0px_0px_5px_0px_#0000004D] mt-10  bg-white h-full py-8 px-[3rem]'>
          <p className='text-green text-2xl font-bold'>Order Summary</p>
          <table className=' bg-gray-100 mt-[30px]'>
            <thead className=''>
              <tr className='text-left border-2 text-[15px] font-semibold  border-[#DFE5FF]'>
                <th className='p-2 '>Item</th>
                <th className='p-2 '> Price (₦)</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-left border-2 border-[#DFE5FF]'>
                <td className='p-3 '>
                  Golden Penny Premium Quality Semolina - 1kg
                </td>
                <td className='p-3'>₦6,000</td>
              </tr>

              <tr className='text-left border-2 border-[#DFE5FF]'>
                <td className='p-3'>
                  Golden Penny Premium Quality Semolina - 1kg
                </td>
                <td className='p-3'>₦6,000</td>
              </tr>
              <tr className='text-left border-2 border-[#DFE5FF]'>
                <td className='p-3'>
                  Golden Penny Premium Quality Semolina - 1kg
                </td>
                <td className='p-3'>₦6,000</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-10 flex justify-between">
            <div>
                <p className="font-medium text-xl text-green leading-10">Sub Total</p>
                <p  className="font-medium text-xl text-green leading-10">Delivery Fee</p>
                <p  className="font-bold text-2xl text-green leading-10">Total Amount</p>
            </div>
            <div>
                <p className="font-medium text-xl text-green leading-10">₦8,000</p>
                <p  className="font-medium text-xl text-green leading-10">₦1,200</p>
                <p  className="font-bold text-2xl text-green leading-10">₦9,200</p>
            </div>
          </div>
        </div>

            <div className="mt-[5rem] flex gap-2">
            <button className="border-2 border-green text-green text-xl font-bold w-1/2 px-28 mr-3 py-3">Back</button>
            <button className="bg-lightgreen text-white text-xl font-bold w-1/2 py-3"> Continue</button>
            </div>
        
   </div> 
  )
}

export default OrderSummary