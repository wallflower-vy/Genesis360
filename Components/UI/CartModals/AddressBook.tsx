import Image from 'next/image'
import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import add from '../../../public/svg/add.svg'
import dustbin from '../../../public/svg/dustbin.svg'
import edit from '../../../public/svg/edit.svg'
import {useState} from 'react'
import { FiEdit2 } from 'react-icons/fi'

const AddressBook = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event: any) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-3xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Address Book</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>
       <div className='flex gap-2 mt-8'>
        <Image src={add} alt=''/>
       <p className='font-bold text-green text-xl'> ADD NEW ADDRESS</p>
       </div>
       <div className='flex mt-3 items-center justify-between'>
        <div className=''>
        <p className='font-bold text-green text-2xl'> Default Address</p>
        <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-green text-2xl'
                  name='option'
                  value='option1'
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <p className='ml-2 font-bold text-xl text-green'>Amala Corner Restaurants</p>
                <br />
              </label>
              <p className="px-5 text-xl font-medium">25, Embassy Lodge, FUTA South Gate</p>
              <p className="px-5 text-xl font-medium">Akure, Ondo State.</p>
              <p className="px-5 text-xl font-medium">+23422233345</p>
        </div>
        <div className=''>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Edit</p> <Image src={edit} alt='delete' /></div>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Remove</p> <Image src={dustbin} alt='delete' /></div>
        </div>

       </div>

       <div className='flex mt-3 items-center justify-between'>
        <div className=''>
        <p className='font-bold text-green text-2xl'> Other Addresses</p>
        <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-green text-2xl'
                  name='option'
                  value='option1'
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <p className='ml-2 font-bold text-xl text-green'>Amala Corner Restaurants</p>
                <br />
              </label>
              <p className="px-5 text-xl font-medium">25, Embassy Lodge, FUTA South Gate</p>
              <p className="px-5 text-xl font-medium">Akure, Ondo State.</p>
              <p className="px-5 text-xl font-medium">+23422233345</p>
        </div>
        <div className=''>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Edit</p> <Image src={edit} alt='delete' /></div>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Remove</p> <Image src={dustbin} alt='delete' /></div>
        </div>

       </div>

       <div className='flex mt-3 items-center justify-between'>
        <div className=''>
        <label className='inline-flex items-center'>
                <input
                  type='radio'
                  className='form-radio text-green text-2xl'
                  name='option'
                  value='option1'
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <p className='ml-2 font-bold text-xl text-green'>Amala Corner Restaurants</p>
                <br />
              </label>
              <p className="px-5 text-xl font-medium">25, Embassy Lodge, FUTA South Gate</p>
              <p className="px-5 text-xl font-medium">Akure, Ondo State.</p>
              <p className="px-5 text-xl font-medium">+23422233345</p>
        </div>
        <div className=''>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Edit</p> <Image src={edit} alt='delete' /></div>
               <div className='flex gap-4 cursor-pointer'> <p className='font-semibold text-xl text-green '>Remove</p> <Image src={dustbin} alt='delete' /></div>
        </div>

       </div>
       <button className='bg-lightgreen text-white w-full mt-10 text-center p-3 font-bold text-xl'>Use This Address</button>
        
      </div>
    </div>
  </div>
  )
}

export default AddressBook