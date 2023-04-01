import Image from 'next/image'
import React from 'react'
import Farmerstory from '../../public/assets/Farmerstory.png'


const Story = () => {
  return (
    <div className='bg-background px-[8rem] py-[5rem] flex justify-between gap-10'>
        <div className='w-[45%]'>
            <Image src={Farmerstory} alt='Farmerstory'/>
        </div>
        <div className='w-[55%]'>
            <h1 className='text-green text-5xl font-extrabold'>
            John’s Story
            </h1>
            <p className='text-2xl font-medium text-green mt-5'>John is a farmer who used to buy seeds and equipment from a local supplier but found it limiting by the suppliers selection, high prices, and inflexible payment options. But he discovered Genesis360 one day and was impressed with the wider selection, better prices, quality of the products, and flexible payment options.</p>
            <p className='text-2xl font-medium text-green mt-3'>When John placed and received the order, he was impressed. He planted the seeds in his field and used the planter to ensure proper spacing and depth. The result was a healthy crop of corn that grew taller and faster than any other crop he had grown before.</p>
            <p className='text-2xl font-medium text-green mt-3'>He found that he had more control over the products he purchased and was able to make informed decisions based on his specific needs. He also appreciated the convenience of being able to purchase his seeds and equipment online without leaving his farm.</p>
            <button className='text-[#fff] py-2 px-8 font-bold text-center mt-8 bg-lightgreen text-[20px] w-full'>Start Your Own Journey</button>
        </div>

    </div>
  )
}

export default Story