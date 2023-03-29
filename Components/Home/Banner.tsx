import Image from 'next/image'
import homebannerimg from '../../public/assets/homebannerimg.png'
import googleplay from '../../public/assets/googleplay.png'
import appstore from '../../public/assets/appstore.png'

const Banner = () => {
  return (
    <div className=" w-full flex justify-between px-[8rem] pt-[5rem] pb-[5rem] bg-background">
        <div className="w-[50%] ">
            <h1 className="text-green font-plus text-[68px] font-[800] leading-[100px]">Alternative Financing for food</h1>
           <div className='mt-5'>
           <p className='text-green font-medium text-xl'>Genesis360 offers to finance food items allowing you to purchase needed food items that support dietary requirements. Credit financing will enable you to pay in installments over a period of three months with little or no interest at all.</p>
           <div className='flex mt-8 gap-5'>
           <Image src={googleplay} alt='googleplay' className='cursor-pointer'/>
           <Image src={appstore} alt='appstore' className='cursor-pointer '/>
           </div>
           </div>
          
        </div>
        <div className="w-[52%]  flex justify-end ">
               <Image src={homebannerimg} alt='homebannerimg'/>
        </div>
        
       
    </div>
  )
}

export default Banner