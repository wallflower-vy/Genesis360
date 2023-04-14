import React from "react";
import Image from "next/image";
import Sub from "../../public/assets/image 53.png";
import { RiCloseCircleFill } from "react-icons/ri";

const ReferafriendModal = () => {
  return (
    <div className="text-green w-[90%] py-6 pl-12  ">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">
        Refer a Friend        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <p className="text-[20px] mt-[30px] leading-[26px] font-semibold ">
      Invite your friends and family to join using your referral link and earn a reward. Both you and your invited friends will receive N1000 in your Genesis360 Wallet Balance.
      </p>

      <div className="flex space-x-[8px]"> 
        <button className="h-[50px] mt-[20px] bg-green w-[171px]  cursor-pointer font-bold  text-white text-[16px] bg-[#90DD3E]">Referral Link</button>
        <button className="h-[50px] mt-[20px] bg-[#FFFFFF] cursor-pointer w-[100%] font-normal  text-green border-4 border-green text-[16px] bg-[#90DD3E]">genesis360.com.ng/toby</button>
     </div>

     <div className="relative">
     <Image src={Sub} alt="googleplay" className="cursor-pointer"/>
     <button className=" absolute  top-0 h-[50px] mt-[20px] bg-[#183D36] w-[133px]  cursor-pointer font-bold  left-[23rem] text-white text-[16px] bg-[#90DD3E]">Copy</button>

     </div>
      
    </div>
  );
};

export default ReferafriendModal;
