import Image from 'next/image'
import React from 'react';
import simplifyimg from '../../public/assets/Simplifyimg.png';
import googleplay from '../../public/assets/googleplay.png'
import appstore from '../../public/assets/appstore.png'

const Simplifygroceries = () => {
  return (
    <div className='bg-background  px-[8rem] py-[5rem] flex justify-between'>
        <div className='w-[50%]  mt-5 pt-[5rem]'>
            <h1 className='text-green font-extrabold text-5xl'>Simplify your groceries procurement. Download our app now! </h1>
            <div className='flex mt-8 gap-5'>
           <Image src={googleplay} alt='googleplay' className='cursor-pointer'/>
           <Image src={appstore} alt='appstore' className='cursor-pointer '/>
           </div>
        </div>
        <div className='w-[50%] flex justify-end '>
                <Image src={simplifyimg} alt='' className=''/>
        </div>
      
    </div>
  )
}

export default Simplifygroceries;