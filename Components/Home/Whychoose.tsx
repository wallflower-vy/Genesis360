import Image from 'next/image'
import convenienceimg from '../../public/assets/convenienceimg.png'
import timesavingimg from '../../public/assets/timesavingimg.png'
import wideselectionimg from '../../public/assets/wideselectionimg.png'
import betterpricingimg from '../../public/assets/betterpricingimg.png'
import easypaymentimg from '../../public/assets/easypaymentimg.png'

const choicedata=[
  {
    image:convenienceimg,
    title:'Convenience',
    text:'Shop for groceries from the comfort of your own home and having the items delivered to your door.'
  },
  {
    image:timesavingimg,
    title:'Time Saving',
    text:'Save time that would otherwise be spent traveling to a physical store and waiting in line to checkout.'
  },
  {
    image:wideselectionimg,
    title:'Wide Selection',
    text:'We offers wider selection of products than physical store, allowing you to find the exact items you need.'
  },
  {
    image:betterpricingimg,
    title:'Better Pricing',
    text:'We offers lower and better pricing in the market than any other competitor. '
  },
  {
    image:easypaymentimg,
    title:'Easy Payment',
    text:'With our "Buy Now Pay Later" option, you can buy groceries without having to pay upfront.'
  }

]

const Whychoose = () => {
  
  return (
    <div className='px-[8rem] py-[6rem] bg-background ' >
       <div className="">
          <h1 className='text-green text-5xl font-extrabold'>Why choose Genesis360?</h1>

          <div className=" flex gap-5 mt-5">
              {choicedata.map((item, index)=>{
                return <div key={index} className='bg-aqua w-[350px] p-8'>
                  <Image src={item.image} alt='cardimg'/> 
                  <div className='mt-5'>
                  <p className='text-xl font-extrabold text-green'>{item.title}</p>
                  <p className='mt-3 text-base text-green'>{item.text}</p>

                  </div>
                    
                </div>
              })}

          </div>
       </div>
    </div>
  )
}

export default Whychoose;