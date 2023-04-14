import Image from 'next/image'
import React from 'react'
import ProductImage from '../public/assets/image15.png'

const CurrentSubscription = () => {
  return (
    <div className='flex gap-5 mt-5'>
    <div className='bg-white shadow-sm p-4 '>
         <div className='bg-background '>
             <Image src={ProductImage} alt='' />
             
         </div>
        <div className='w-[200px] '>
             <p className='text-green text-base font-normal'>Family of Three Groceries Package Subscription</p>
             <p className='text-green text-[32px] font-bold'>₦6,400</p>
        </div>


     </div>
     <div className='bg-white shadow-sm p-4 '>
         <div className='bg-background'>
             <Image src={ProductImage} alt='' />
             
         </div>
        <div className='w-[200px]  '>
             <p className='text-green text-base font-normal'>Family of Three Groceries Package Subscription</p>
             <p className='text-green text-[32px] font-bold'>₦6,400</p>
        </div>


     </div>
    </div>
  )
}

export default CurrentSubscription