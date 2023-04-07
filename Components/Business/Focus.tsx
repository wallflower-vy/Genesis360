import Image from 'next/image'
import React from 'react';
import arrow from '../../public/assets/arrow.png'

const Focus = () => {
  return (
    <div className='bg-background px-[8rem] py-[5rem]'>
        <div className='bg-aqua px-[5rem] py-[4rem] rounded-xl'>
            <div className='w-[60%]'>
            <h1 className='font-extrabold text-5xl text-green leading-[60px]'>Focus Your Attention to What is More Important</h1>
            </div>
            <div className='flex mt-6 justify-between'>
               <div className='w-[60%]'>
               <p className='text-2xl text-green font-medium'>Let’s help you ease the procurement stress while you concentrate on creating delightful dishes and providing exceptional service.</p>
               </div>
                <div className=' w-[50%] flex justify-end pt-[4rem] gap-5 items-center'>
                    <div>
                    <Image src={arrow} alt='arrow' className='inline-block ' />
                    </div>
                    <div><button className='text-[#fff] py-2 px-8 font-bold  text-center bg-green text-[20px]'>Get Started</button></div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Focus