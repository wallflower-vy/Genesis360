import Link from 'next/link'
import React from 'react'




const Dropdown = () => {
  return (
    <div className='bg-white shadow-sm w-[300px] flex p-6 flex-col gap-4 position absolute left-[2rem]  max-md:left-[-4rem]'>
        <p className=''>
             <Link href='#' className='text-[20px]  font-bold text-green'>About Us
             <small className='block text-[14px] font-bold'>What is Genesis360? who are we and what we do?</small>
             </Link>
        </p>
        <p>
             <Link href='#' className=' text-[20px] font-bold text-green'>Contact Us
             <small className='block font-semibold'>Get in touch with us</small>
             </Link>
        </p>
        <p>
             <Link href='#' className='text-[20px] font-bold text-green'>FAQS
             <small className='block font-semibold'>still have questions? check out our FAQs to learn more!</small>
             </Link>
        </p>
      
    </div>
  )
}

export default Dropdown
