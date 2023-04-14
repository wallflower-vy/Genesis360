import Image from 'next/image'
import React from 'react'
import product1 from "../../public/assets/image 9.png";
import {AiFillCloseCircle} from 'react-icons/ai'
import {useState} from 'react'



const ProductModal = () => {
    const [displayText, setDisplayText] = useState("");
    const handleClick = () => {
        setDisplayText("This is the text to be displayed.");
      };
    
   
  return (
    
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]" >
      
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>
     
      <div className="z-20  py-16 flex px-6 mx-auto  w-[70rem] h-[48rem] shadow-lg">
        <div className="bg-background  w-[40%] flex items-center">
            <Image src={product1} alt ='product_img' className='w-full'/>
        </div>
        <div className=" bg-white w-[60%]  p-8">
            <div className=' border-b-4 pb-3' >
                <div className=' flex justify-between items-center'>
                <div className='w-[60%]'>
                <h1 className='text-3xl font-normal   text-green'>Golden Penny Premium Quality Semolina - 1kg</h1>
                </div>
                <AiFillCloseCircle  className='text-[3rem] text-green cursor-pointer' />
                </div>
                <p className='font-bold text-4xl text-green mt-5'>₦6,400</p>
            </div>

            <div className='mt-5'>
                <p className='font-semibold text-2xl text-green'>Description</p>

               
               <p className='font-normal   text-xl text-green'>Golden Penny Semovita is a superior quality brand of Semolina made from the finest quality wheat. It is fortified with proteins and vitamins, which makes it even more nutritious, providing the added vitality for your daily activities.</p>
              
            </div>
            <div className='mt-5'>
                    <p className='text-2xl mb-1 text-green font-semibold'>Unit of Measure (UoM)</p>

                    <label className="block text-gray-700 font-bold mb-2">
          <select
            className="block w-[45%] py-2 text-grey-300 px-3 border-2 border-green bg-white  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value=''
          >
            <option value="option1">Select UoM</option>
          </select>
        </label>
            </div>
            
            <div className='mt-5'>
                    <p className='text-2xl mb-1 text-green font-semibold'>Quatity </p>
                   <div className='flex gap-5 items-center'>
                    <p className='border border-green px-5 text-3xl cursor-pointer'>+</p>
                    <p className='text-2xl'>2</p>
                    <p className='border border-green px-5 text-3xl cursor-pointer' >-</p>
                   </div>
                
            </div>

            <button className='font-bold text-2xl mt-5 w-full p-3 text-white bg-green text-center'>Add to Cart</button>
         
        </div>
      </div>
     
    </div>
      
        </div>
  )
}

export default ProductModal