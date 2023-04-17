import Image from "next/image";
import dustbin from "../../public/svg/dustbin.svg";
import favorite from "../../public/svg/favorite.svg";

const MainCart = () => {
  return (
    <div className='px-[8rem] pt-[2rem] pb-[5rem] bg-background '>
      <div className='flex gap-5'>
        <p className='bg-aqua text-green px-5 text-xl font-bold'>Cart</p>
        <p className=' text-xl text-green font-bold'>Saved Items</p>
      </div>
      <div className='shadow-[0px_0px_5px_0px_#0000004D] mt-10  bg-white w-full py-8 px-[4rem]'>
        <p className='text-green text-2xl font-bold'>Purchase Order Cart</p>
        <table className='w-full border-collapse bg-gray-100 mt-[30px]'>
          <thead className=''>
            <tr className='text-left border-2 text-[15px] font-semibold  border-[#DFE5FF]'>
              <th className='p-2'>Product</th>
              <th className='p-2'>Unit Price (₦)</th>
              <th className='p-2'>Quantity</th>
              <th className='p-2'>Unit Of Measure (UOM)</th>
              <th className='p-2'>Total Price (₦) </th>
              <th className='p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3'>
                Golden Penny Premium Quality Semolina - 1kg
              </td>
              <td className='p-3'>₦6,000</td>
              <td className='p-3'>
                <div className='border text-green flex gap-1 justify-center items-center border-[#DFE5FF]'>
                  <button className='text-2xl'>-</button>{" "}
                  <span className='text-2xl'>1</span>{" "}
                  <button className='text-2xl'>+</button>
                </div>
              </td>
              <td className='p-3'>Carton</td>
              <td className='p-3'>₦6,000 </td>
              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3'>
                Golden Penny Premium Quality Semolina - 1kg
              </td>
              <td className='p-3'>₦6,000</td>
              <td className='p-3'>
                <div className='border text-green flex gap-1 justify-center items-center border-[#DFE5FF]'>
                  <button className='text-2xl'>-</button>{" "}
                  <span className='text-2xl'>1</span>{" "}
                  <button className='text-2xl'>+</button>
                </div>
              </td>
              <td className='p-3'>Pack</td>
              <td className='p-3'>₦6,000 </td>
              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3'>
                Golden Penny Premium Quality Semolina - 1kg
              </td>
              <td className='p-3'>₦6,000</td>
              <td className='p-3'>
                <div className='border text-green flex gap-1 justify-center items-center border-[#DFE5FF]'>
                  <button className='text-2xl'>-</button>{" "}
                  <span className='text-2xl'>1</span>{" "}
                  <button className='text-2xl'>+</button>
                </div>
              </td>
              <td className='p-3'>Carton</td>
              <td className='p-3'>₦6,000 </td>

              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3'>
                Golden Penny Premium Quality Semolina - 1kg
              </td>
              <td className='p-3'>₦6,000</td>
              <td className='p-3'>
                <div className='border text-green flex gap-1 justify-center items-center border-[#DFE5FF]'>
                  <button className='text-2xl'>-</button>{" "}
                  <span className='text-2xl'>1</span>{" "}
                  <button className='text-2xl'>+</button>
                </div>
              </td>
              <td className='p-3'>Pack</td>
              <td className='p-3'>₦6,000 </td>

              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col items-end mt-[7rem] justify-end ">
           <div> <h1 className="text-[32px] text-green font-bold">Total Amount: ₦9,000</h1></div>
            <div className="mt-2">
            <button className="border-2 border-green text-green text-xl font-bold px-8 mr-3 py-3">Continue to Shopping</button>
            <button className="bg-lightgreen text-white text-xl font-bold px-12 py-3"> Checkout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
