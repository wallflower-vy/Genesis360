import Image from 'next/image'
import React from 'react'
import trackimg from '../public/assets/trackimg.png'
const TrackMyPackage = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-1/2'>
            <p className='font-extrabold text-[32px] text-green'>Track My Package</p>
            <div className='mt-5'>
                <p  className='font-bold text-2xl text-green'>Looking for your package?</p>
                <p  className='font-medium text-base text-green'>Search it using the tracking number of your purchase</p>
              <div className='flex gap-2 mt-4'>
              <input type="text" placeholder='Enter Tracking Number'className='font-normal w-[70%] p-2 border-2 bg-background border text-xl text-green' />
              <button className='bg-lightgreen text-xl text-center font-bold text-white w-[25%]'>Track</button>
              </div>
            </div>
        </div>
        <div className='w-1/2'>
            <Image src={trackimg} alt='track_img'/>

        </div>
    </div>
  ) 
}

export default TrackMyPackage