import React from 'react'
import ProductNav from '../Products/ProductNav'
import { MdOutlineDashboard } from 'react-icons/md';
import { GoFile} from 'react-icons/go';
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { BsTag } from 'react-icons/bs';
import { BsPatchCheck} from 'react-icons/bs';
import { MdShareLocation} from 'react-icons/md';
import { HiUsers} from 'react-icons/hi';
import { CiBank} from 'react-icons/ci';
import DashboardPage from '@/pages/DashboardPage';


const Dashboard = () => {
  return (
    <div>
      <ProductNav />

      <div className='bg-background px-[8rem] py-[2rem] flex space-x-[60px]'>

        <div className='bg-white px-8 py-4 w-[25%] flex flex-col shadow-[0px_0px_5px_0px_#0000004D] text-[20px] leading-[25px] font-medium cursor '>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><MdOutlineDashboard style={{fontSize: '30px'}} />Dashboard</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><GoFile  style={{fontSize: '30px'}} />Orders</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><MdOutlineAccountBalanceWallet style={{fontSize: '30px'}} />Wallet</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><BsTag style={{fontSize: '30px'}} />Subscription</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><GoFile  style={{fontSize: '30px'}} />KYC</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><BsPatchCheck  style={{fontSize: '30px'}} />Loan Repayment</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><MdShareLocation style={{fontSize: '30px'}} />Track My Package</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><HiUsers style={{fontSize: '30px'}} />User Profile</a>
          <a className='py-5 active:text-[#90DD3E] flex items-center gap-x-[9px]'><CiBank style={{fontSize: '30px'}} />Company Profile</a>
          <button className='text-[#fff] py-4 px-8 font-bold text-center bg-lightgreen text-[20px] mt-[90px]'>LOG OUT</button>
        </div>

        <div className='shadow-[0px_0px_5px_0px_#0000004D] bg-white w-[80%] py-8 px-8'>
          <DashboardPage />
        </div>
      </div>

    </div>

  )
}

export default Dashboard