
import Image from 'next/image'
import React from 'react';
import product1 from "../../public/assets/image 9.png";
import { AiOutlineHeart } from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FiFilter} from 'react-icons/fi'


const productlist =[
    {
        id:1,
        productImage: product1,
        productdesc:'Golden Penny Premium Quality Semolina - 1kg',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Golden Penny Premium Quality Semolina - 1kg',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Golden Penny Premium Quality Semolina - 1kg',
        productPrice:'₦6,400',
    },
    {
        id:1,
        productImage: product1,
        productdesc:'Golden Penny Premium Quality Semolina - 1kg',
        productPrice:'₦6,400',
    },

]

const SearchedProResult = () => {
  return (
    <div className='px-[8rem] pb-10 bg-background'>
    <div className='flex justify-between items-center'>
    <p className='text-green text-4xl font-bold'>Search Result</p>
    <div className='text-green font-semibold text-xl px-3 py-1 cursor-pointer border-green border-2'> 
        <FiFilter  className='inline'/> Filter
    </div>
    </div>


    <div className='grid grid-cols-4 gap-4 mt-5'>
    {productlist.map((item, index) => {
        return (
          <>
          <div className='bg-white shadow-xl p-4 '>
            <div className='bg-background'>
                <Image src={item.productImage} alt='' />
                <AiOutlineHeart className='relative top-[-17rem] left-4 text-2xl cursor-pointer'/>
            </div>
           <div className=' '>
                <p className='text-green text-2xl font-normal'>{item.productdesc}</p>
                <p className='text-green text-[40px] font-bold'>{item.productPrice}</p>
           </div>


        </div>
          </>
        );
      })}

        
        

        
    </div>

    <div className='flex justify-center mt-9 '>
        <button className='bg-lightgreen  w-[50%] p-3 font-bold text-xl text-white'>See More Product <MdKeyboardArrowDown  className='inline text-xl'/></button>
    </div>
</div>
  )
}

export default SearchedProResult