import Image from "next/image"
import { RiCloseCircleFill } from "react-icons/ri"
import dustbin from "../../../public/svg/dustbin.svg";
import bama from "../../../public/assets/bama.png";
import garri from "../../../public/assets/garri.png";
import knorr from "../../../public/assets/knorr.png";
import favorite from "../../../public/svg/add.svg";



const SavedItems = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-2xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-green leading-[40px] font-bold">Saved Items</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
    <table className='w-full border-collapse bg-gray-100 mt-[30px]'>
          <thead className=''>
            <tr className='text-left border-2 text-[15px] font-semibold  border-[#DFE5FF]'>
              <th className='p-2'>Items</th>
              <th className='p-2'>Price (₦)</th>
              <th className='p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3 text-xl flex gap-2 items-center'>
              <Image src={bama} alt='' className='cursor-pointer' />
              Bama Real Mayonnaise - 946ml
              </td>
              <td className='p-3'>₦2,200</td>
              
              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3 text-xl flex gap-2 items-center'>
              <Image src={knorr} alt='' className='cursor-pointer' />
              Knorr Beef Seasoning Cubes -25x8g
              </td>
              <td className='p-3'>₦6,00</td>
              
             
              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

            <tr className='text-left border-2 border-[#DFE5FF]'>
              <td className='p-3 text-xl flex gap-2 items-center'>
              <Image src={garri} alt='' className='cursor-pointer' />
              Homemade Garri ijebu 15kg
              </td>
              <td className='p-3'>₦6,000</td>
             

              <td className='p-3 flex gap-2'>
                <Image src={dustbin} alt='' className='cursor-pointer' />{" "}
                <Image src={favorite} alt='' className='cursor-pointer' />
              </td>
            </tr>

           
          </tbody>
        </table>

        <button className="mt-[10rem] border-2 py-3 border-green w-full text-green font-bold text-xl text-center">Close</button>

   
        
        
      </div>
    </div>
  </div>
  )
}

export default SavedItems