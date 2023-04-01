
import Image from 'next/image';
import React from 'react';
import farmersimg from '../../public/assets/farmersimg.png'


const FarmerHero = () => {
  return (
    <div className='px-[8rem] bg-background'>
        <div  className=''
        // style={{ backgroundImage: `url('../../assets/farmersimg.png')` }} className='h-[5rem]'
        >
            <Image src={farmersimg} alt='farmers_hero_img'/>
        </div>
        
    </div>
  )
}

export default FarmerHero