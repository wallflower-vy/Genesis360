
import SignUp from "@/Components/Forms/SignUp";
import React, { useState } from "react";
import logo from "../../public/assets/Genesislogo.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

interface MyAuthProps {
  text: string;
  description: string;
  linkPath:string
}

const FormHeader = ({text,description, linkPath}:MyAuthProps) => {
    const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  

  return (
    <div className=" bg-background">

    <div className=" bg-background h-[9rem] z-50  flex xl:relative justify-between max-lg:fixed top-0 right-0 left-0 w-full  items-center px-[8rem] relative  max-xl:px-[2rem] py-[1rem] max-lg:py-[0rem]  max-lg:h-[7rem]">
      <Link href="/">
        <Image src={logo} alt="logo" className="max-md:w-[180px]" />
      </Link>
  
      <div className=" max-lg:block hidden">
        <button onClick={toggleMobileMenu}>
          {isMobile ? ( <IoMdClose className="text-2xl" /> ) : (<RxHamburgerMenu className="text-3xl" />)}
        </button>
      </div>


      <div className={`  flex z-50 justify-center items-center relative max-lg:absolute ${ isMobile
        ? "left-0 top-[7rem] bg-white z-40 w-full  py-6 flex-col  duration-500"
        : " max-lg:left-[-6000px] "
        }`}
      >

      <p className=" font-bold text-green text-[20px] leading-[25px] mr-[30px]">{text}</p>
        
      <Link href={linkPath}>
        <button className="text-[#fff] py-2 px-16 font-bold text-center bg-lightgreen text-[20px]">{description}</button>
      </Link>
       
      </div>
    </div>

   
   
  </div>
  )
}

export default FormHeader