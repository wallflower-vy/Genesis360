import Image from 'next/image'

import product1 from "../../public/assets/image15.png";

import {MdKeyboardArrowDown} from 'react-icons/md'
import React from 'react'
const productlist =[
    {
        id:1,
        productImage: product1,
        productdesc:'Family of Three Groceries Package Subscription',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Family of Three Groceries Package Subscription',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Family of Three Groceries Package Subscription',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Family of Three Groceries Package Subscription',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Family of Three Groceries Package Subscription',
        productPrice:'₦6,400',
    },
]
const SubscriptionPackages = () => {
  return (
    <div className='px-[8rem] pt-[5rem] pb-[2rem] bg-background'>
    <p className='text-green text-4xl font-bold'>Subscription Packages</p>


    <div className='grid grid-cols-5 gap-4 mt-5 p-8 bg-white'>
    {productlist.map((item, index) => {
        return (
          <>
          <div className='bg-white shadow-sm p-4 '>
            <div className='bg-background'>
                <Image src={item.productImage} alt='' />
                
            </div>
           <div className=' '>
                <p className='text-green text-base font-normal'>{item.productdesc}</p>
                <p className='text-green text-[32px] font-bold'>{item.productPrice}</p>
           </div>


        </div>
          </>
        );
      })}

        
        

        
    </div>

    <div className='flex justify-center mt-9 mb-10'>
        <button className='bg-lightgreen  w-[50%] p-3 font-bold text-xl text-white'>See More Product <MdKeyboardArrowDown  className='inline text-xl'/></button>
    </div>
</div>
  )
}

export default SubscriptionPackages