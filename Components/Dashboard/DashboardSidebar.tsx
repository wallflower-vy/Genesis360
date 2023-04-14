
import { MdOutlineDashboard } from 'react-icons/md';
import { GoFile} from 'react-icons/go';
import { MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { BsTag } from 'react-icons/bs';
import { BsPatchCheck} from 'react-icons/bs';
import { MdShareLocation} from 'react-icons/md';
import { HiUsers} from 'react-icons/hi';
import { CiBank} from 'react-icons/ci';
// import Link from 'next/link';


interface clickProps {
    activeLink: string;
    onClickLink: (link: string) => void;
  }
const DashboardSidebar = ({activeLink, onClickLink}:clickProps) => {
  return (
    

        <div className='bg-white px-8 py-4 w-[25%] flex flex-col shadow-[0px_0px_5px_0px_#0000004D] text-[18px] leading-[25px] font-medium cursor-pointer text-green '>
          <p  className={`${activeLink === 'dashboard' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('dashboard')}><MdOutlineDashboard style={{fontSize: '30px'}} />Dashboard</p>
          <p className={`${activeLink === 'orders' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`}  onClick={() => onClickLink('orders')}><GoFile  style={{fontSize: '30px'}} />Orders</p>
          <p className={`${activeLink === 'wallet' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`}onClick={() => onClickLink('wallet')}><MdOutlineAccountBalanceWallet style={{fontSize: '30px'}} />Wallet</p>
          <p className={`${activeLink === 'subscription' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('subscription')}><BsTag style={{fontSize: '30px'}} />Subscription</p>
          <p className={`${activeLink === 'kyc' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('kyc')}><GoFile  style={{fontSize: '30px'}} />KYC</p>
          <p className={`${activeLink === 'loan' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('loan')}><BsPatchCheck  style={{fontSize: '30px'}} />Loan Repayment</p>
          <p className={`${activeLink === 'track' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('track')}><MdShareLocation style={{fontSize: '30px'}} />Track My Package</p>
          <p className={`${activeLink === 'userprofile' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('userprofile')}><HiUsers style={{fontSize: '30px'}} />User Profile</p>
          <p className={`${activeLink === 'companyprofile' ? 'active' : '' } py-4 flex items-center gap-x-[9px]  cursor-pointer`} onClick={() => onClickLink('companyprofile')}><CiBank style={{fontSize: '30px'}} />Company Profile</p>
          <button className='text-[#fff] py-4 px-8 font-bold text-center bg-lightgreen text-[20px] mt-[90px]'>LOG OUT</button>
        </div>

        
   
  )
}

export default DashboardSidebar