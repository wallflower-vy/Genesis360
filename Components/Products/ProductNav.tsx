import React from 'react'
import logo from '../../public/assets/Genesislogo.png'
import Image from 'next/image'
import businesspropic from '../../public/assets/businesspropic.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductNav = () => {
  return (
    <div className='bg-background px-[8rem] py-6 flex gap-5  items-center'>
      <div className=' w-[40%] '>
      <Image src={logo} alt='logo'/>
      </div>
      <div className='w-[40%] '>
        <div className='flex gap-2'>
                <input type='text'  placeholder='Search  for Products & Brands' className='text-green border-4 p-2 w-[75%]'/>
                <button className='bg-lightgreen  text-white w-[25%]'>Search</button>
        </div>
        
        <div>

        </div>

      </div>
      <div className=' flex gap-4  justify-center items-center w-[20%]'>
           <div className='flex gap-4 items-center'>
           <div>
                <Image src={businesspropic} alt=''/>
            </div>
            <div ><span className='text-green text-xl font-bold'>Adewale</span></div>
           </div>
           <div className='flex gap-2 items-center'>
           <div className='text-2xl text-green font-bold'>
               <AiOutlineShoppingCart />
            </div>
            <div ><span className='text-green text-xl font-bold'>Cart</span></div>
           </div>
        </div>
    </div>
  )
}

export default ProductNav;