import Image from 'next/image';
import React from 'react';
import groceriesimg from '../../public/assets/groceriesimg.png'
import recevemoneyimg from '../../public/assets/recevemoneyimg.png'
import orderdeliveryimg from '../../public/assets/orderdeliveryimg.png'


const justEcoomercedata=[
  {
    image:groceriesimg,
    title:'Buy Groceries and Pay Later',
    text:'Get the convenience of shopping with deferred payment options'
  },
  {
    image:recevemoneyimg,
    title:'Send and Recieve Money',
    text:'Transfer funds quickly and securely with just a few clicks'
  },
  {
    image:orderdeliveryimg,
    title:'Order Delicious Foods',
    text:'Order  from the comfort of your own home and get food delivered to you! '
  },
  

]
const MoreThanJust = () => {
  return (
    <div className='bg-background'>
       <div className='py-[5rem] px-[8rem]'>
       <h1 className='text-green font-extrabold text-5xl text-center'>More Than Just Ecommerce</h1>
       <div className=" flex gap-5 mt-5 justify-center">
              {justEcoomercedata.map((item, index)=>{
                return <div key={index} className='bg-lightblue p-6'>
                  <Image src={item.image} alt='cardimg'/> 
                  <div className='mt-5'>
                  <p className='text-xl font-extrabold text-green'>{item.title}</p>
                  <p className='mt-3 text-base font-semibold text-green'>{item.text}</p>

                  </div>
                    
                </div>
              })}

          </div>
       </div>
    </div>
  )
}

export default MoreThanJust