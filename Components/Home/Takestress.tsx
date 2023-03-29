
import takestressimg from '../../public/assets/takestressimg.png'
import Image from 'next/image'
import React from 'react'

const Takestress = () => {
  return (
    <div className='bg-background py-[4rem] px-[8rem]'>
        <div className='bg-aqua flex rounded-[50px] gap-5 justify-between p-10'>
            <div className='w-[45%]'>
                <Image src={takestressimg} alt='cardimg'/>
            </div>
            <div className=' w-[55%] mt-5'>
               <div className='w-[550px] mb-5'>
               <h1 className='text-6xl text-green font-extrabold leading-[80px] '>Take the <br/> stressout of Grocery Shopping</h1>
               </div>
                <p className='text-green text-xl font-semibold'>Get your groceries delivered monthly! Subscribe to our convenient Family Grocery Packages and never run out of essentials again. From pantry staples to fresh produce, we got you covered. Enjoy the convenience of having your groceries delivered right to your door. </p>
                <button className='border-green border-2 px-8 py-3 font-bold text-xl text-center bg-transparent mt-5 text-green'>How it Works</button>
            </div>
 
        </div>

    </div>
  )
}

export default Takestress