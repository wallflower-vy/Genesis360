import React, { useState } from 'react'
import ProductNav from '../Products/ProductNav'
import { MdOutlineDashboard } from 'react-icons/md';
import { GoFile} from 'react-icons/go';
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { BsTag } from 'react-icons/bs';
import { BsPatchCheck} from 'react-icons/bs';
import { MdShareLocation} from 'react-icons/md';
import { HiUsers} from 'react-icons/hi';
import { CiBank} from 'react-icons/ci';
import CompanyProfile from '@/pages/CompanyProfile';
import Link from 'next/link';
import DashboardSidebar from './DashboardSidebar';
import DashboardComponents from './DashboardComponents';
import type { ReactNode } from "react";
import Profile from '@/pages/Profile';
import DashboardPage from '@/pages/DashboardPage';
import Orders from '@/pages/Orders';
import Wallet from '@/pages/Wallet';
import Subscription from '@/pages/Subscription';
import Kyc from '@/pages/Kyc';
import TrackMyPackage from '@/pages/TrackMyPackage';
import LoanRepayment from '@/pages/LoanRepayment';

// className='  p-2 text-xl font-semibold text-green '

const Dashboard = () => {
  const [content, setContent] = useState('dashboard');

  const handleLinkClick = (link: string) => {
    setContent(link);
  };

  const renderContent = () => {
    switch (content) {
      case 'dashboard':
        return <DashboardPage />;
        case 'orders':
        return <Orders/>;
        case 'wallet':
        return <Wallet />;
        case 'subscription':
        return <Subscription />;
        case 'kyc':
        return <Kyc />;
        case 'loan':
        return <LoanRepayment />;
      case 'profile':
        return <Profile />;
      case 'track':
        return <TrackMyPackage />;
        case 'userprofile':
        return <Profile/>;
        case 'companyprofile':
        return <CompanyProfile />;
        
        

      default:
        return null;
    }
  }
  return (
    <div>
      <ProductNav />
      <div className='bg-background px-[8rem] py-[2rem] flex space-x-[40px]'>
        <DashboardSidebar onClickLink={handleLinkClick} activeLink={content} />
        <div className='shadow-[0px_0px_5px_0px_#0000004D] bg-white w-[80%] py-8 px-8'>
        {/* {content === 'dashboard' && <DashboardPage />} */}
          {renderContent()}
        </div>
      </div>
    
        

     

   

    </div>

  )
}

export default Dashboard