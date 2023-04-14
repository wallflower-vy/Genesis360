import React from 'react'
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { FaExclamation } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className=''>

        <h2 className='text-[32px] leading-[40px] font-bold'>Dashboard</h2>

        <div className=' shadow-[0px_0px_2px_0px_#0000004D] py-[35px] mt-[21px] px-8 '>
            <h1 className=' text-[24px] font-bold leading-[30px]'>Account Overview</h1>
            <div className='flex justify-between'>

                <div className='flex items-center space-x-[10px] mt-[15px]'>
                  <MdOutlineAccountBalanceWallet style={{fontSize: '50px', color: '#1FCC6C', border: '2px solid #DAFEEA', borderRadius: '50%', backgroundColor: '#DAFEEA', padding: '10px'}} />
                  <div>
                    <h2 className='text-[16px] font-medium leading-[30px]'>Wallet Balance</h2>
                    <h2 className='text-[32px] font-bold leading-[30px]'>₦90,000</h2>
                  </div>  
                </div>

                <div className='flex items-center space-x-[10px] mt-[15px]'>
                  <MdOutlineAccountBalanceWallet style={{fontSize: '50px', color: '#1FCC6C', border: '2px solid #DAFEEA', borderRadius: '50%', backgroundColor: '#DAFEEA', padding: '10px'}} />
                  <div>
                    <h2 className='text-[16px] font-medium leading-[30px]'>Loan Limit</h2>
                    <h2 className='text-[32px] font-bold leading-[30px]'>₦15,000</h2>
                  </div>  
                </div>

                <div className='flex items-center space-x-[10px] mt-[15px]'>
                  <FaExclamation style={{fontSize: '50px', color: '#FF1818', border: '2px solid #DAFEEA', borderRadius: '50%', backgroundColor: '#DAFEEA', padding: '10px'}} />
                  <div>
                    <h2 className='text-[16px] font-medium leading-[30px]'>Outstanding Debt</h2>
                    <h2 className='text-[32px] font-bold leading-[30px]'>₦15,000</h2>
                  </div>  
                </div>
            </div>
        </div>

        <h2 className=' mt-[50px] w-[252px] text-[24px] font-bold leading-[30px]'>Current Loan Repayment Schedule</h2>

        <div className=' mt-[15px] shadow-[0px_0px_2px_0px_#0000004D] px-4 py-6  w-[400px]'>

            <div className='flex justify-between'>
               <div> 
                <h1 className='text-[18px] font-bold'>Amount</h1>
                <p className='py-2 font-semibold text-[17px]'>₦23,000</p>
                <p className='py-2 font-semibold text-[17px]'>₦23,000</p>
                <p className='py-2 font-semibold text-[17px]'>₦23,000</p>
                <p className='py-2 font-semibold text-[17px]'>₦23,000</p>
                <p className='py-2 font-semibold text-[17px]'>₦23,000</p>     
              </div>

              <div> 
                <h1 className='text-[18px] font-bold'>Due Date</h1>
                <p className='py-2 text-[16px] font-medium'>03/04/2023</p>
                <p className='py-2 text-[16px] font-medium'>10/04/2023</p>
                <p className='py-2 text-[16px] font-medium'>17/04/2023</p>
                <p className='py-2 text-[16px] font-medium'>24/04/2023</p>
                <p className='py-2 text-[16px] font-medium'>10/04/2023</p>
              </div>
            </div>
            
            <button className='text-[#fff] py-4 px-8 w-[100%] mt-[30px] font-bold text-center bg-lightgreen text-[20px]'>Make a Repayment Now</button>
        </div>

    </div>
  )
}

export default DashboardPage