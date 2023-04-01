import Image from 'next/image'
import React from 'react';
import businesshero from '../../public/assets/businesshero.png'
import Button from '../Button';

const BusinessHero = () => {
  return (
    <div className='flex px-[8rem] py-10 bg-background gap-10 justify-between'>
      <div className='w-[60%] pt-20'>
      <h1 className='text-6xl font-extrabold text-green leading-[82px]'>Simplify and Streamline Your Restaurants Grocery Shopping</h1>
      <div className='mt-5 w-[90%]'>
        <p className='text-green font-medium text-2xl'>We offers a straightforward solution for hotels and restaurants to access top-notch products at competitive prices, keep track of your inventory, so that you can focus on serving delicious food to your patrons.</p>
       <div className='mt-5'> 
       <Button />
       </div>
      </div>
      </div>
      <div className='w-[40%]'>
        <Image src={businesshero} alt='business_heroimg'/>
      </div>
      
    </div>
  )
}

export default BusinessHero
