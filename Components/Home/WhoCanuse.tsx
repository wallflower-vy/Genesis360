import Image from 'next/image'
import React from 'react'
import whocanuse1 from '../../public/assets/whocanuse1.png'
import whocanuse2 from '../../public/assets/whocanuse2.png'
import bicycle  from '../../public/svg/bicycle.svg';
import business  from '../../public/svg/business.svg'
import individuals  from '../../public/svg/individuals.svg'



const whocanusedata=[
    {
      image:individuals,
      title:'Individuals',
      text:'Get and enjoy hassle-free grocery shopping for you and your family with no hidden fees and avoid breaking bank using our Buy Now, Pay Later option. '
    },
    {
      image:business,
      title:'Businesses',
      text:'Businesses like hotels, restaurants can use our “buy now, pay later” to get food items in large quantity  with ease and get your orders delivered straight to your kitchen using our platform. '
    },
    {
      image:bicycle,
      title:'Farmers',
      text:'Connect with customers who are searching for high-quality, locally grown produce. With a simple and user-friendly setup, you can easily showcase your products, reach new customers, and grow your business'
    },
    
   
  ]
const WhoCanuse = () => {
  return (
    <div className='bg-green px-[8rem]  py-[2rem] flex gap-16  justify-between'>
       
       <div className='w-[60%]'>
            <h1 className='text-white text-5xl font-extrabold'>Who can use Genesis360?</h1>
            <div className=" flex flex-col gap-10 mt-8">
              {whocanusedata.map((item, index)=>{
                return<div key={index} className='gap-5 flex '>
                 
                 <div className='bg-lightgreen  h-[2rem] flex justify-center py-1'> <Image src={item.image} alt='cardimg'/> </div>
                  
                  
                  <div className='bg-green w-[70%]'>
                  <p className='text-3xl font-extrabold text-lightgreen'>{item.title}</p>
                  <p className='mt-3 text-xl font-semibold text-white'>{item.text}</p>

                  </div>
                    
                </div>
              })}

          </div>

        </div>
        <div className='w-[40%]'>
           
            <Image src={whocanuse1} alt=''/>
           
            <Image src={whocanuse2} alt='' className='absolute top-[95rem] left-[50rem]'/>
          
        </div>


     
    </div>
  )
}

export default WhoCanuse