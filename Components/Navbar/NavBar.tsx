import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/assets/Genesislogo.png'
import {IoIosArrowDown, IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import Dropdown from './Dropdown';
import Button from '../Button';

const NavBar= () => {
  const [dropdown, setDropdown] = useState(false);
  const[ismobile, setisMobile] =useState(false);

  return (
    <div className='bg-background h-[9rem] flex md:relative justify-between sm:fixed sm:top-0 sm:right-0 sm:left-0 w-full  sm:z-10 items-center md:px-[8rem] px-[2rem] md:py-[2rem] py-[1rem]'>
     <div className=''>
     <Link  href='/'>
        <Image src={logo}  alt='logo'/>
      </Link>
     </div>
      <div className='md:hidden'>
        <button onClick={()=>setisMobile(!ismobile)}>
          {ismobile ?<IoMdClose  className='text-2xl'/>  : <GiHamburgerMenu className='text-2xl'/>}
        </button>

      </div>
     
     <div  className={`md:flex md:flex-row z-50 justify-center items-center md:w-auto md:relative absolute   ${
          ismobile
            ? "left-[0px] top-[4.8rem] bg-white  z-40 md:p-10 w-[300px] h-[100vh]  transition-all duration-500 ease-in overflow-y-auto  scrollbar-thumb-white scrollbar-track-white scrollbar-thin pb-28"
            : " left-[-800px] top-[4.8rem] transition-all duration-500 ease-in md:top-0 md:left-0"
        }`}>
        <Link href='/home' className='p-4 text-[20px] font-bold text-green'>For Farmers</Link>
        <Link href='/business' className='p-4 text-[20px] font-bold text-green'>For Businesses</Link>
        <Link href='#'className='p-4 text-[20px] position relative font-bold font-bold text-green'onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}>Company <IoIosArrowDown className='inline'/>
               {dropdown && <Dropdown />} 
               </Link>
        <Button/>
     </div>
    </div>
  )
}

export default NavBar;
