
import React from 'react';
import image5 from '../../public/assets/image5.png'
import image6 from '../../public/assets/image6.png'
import Image from 'next/image';




const ProductListHero = () => {
  return (
    <div className='px-[8rem] py-[3rem] bg-background w-full h-[40rem] flex gap-10'>
        <div className='w-[80%] Section_top'>
           
        </div>
        <div className='w-[20%] flex flex-col justify-between'>
            <Image src={image5} alt=''/>
            <Image src={image6} alt=''/>

        </div>

    </div>
  )
}

export default ProductListHero