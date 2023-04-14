import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import Subs from "../../public/assets/image 28 (2).png";

const SubscriptionsuccesfulModal = () => {
  return (
    <div className="text-green w-[90%] py-6 pl-12  ">
      <div className="flex items-center justify-center ">
        <Image src={Subs} alt="googleplay" className="cursor-pointer" />
      </div>

      <h2 className="text-[32px] leading-[40px] text-center font-semibold text-[#01C698]">Subscription Successful</h2>

      <p className="text-[20px] mt-[30px] leading-[26px] font-semibold text-center">
      Congratulations! You have successfully subscribe to the Family of Three Subscription Package. You will receive a confirmation email or SMS. 
      </p>
      <button className="h-[50px] mt-[20px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
      Close      </button>
    </div>
  );
};

export default SubscriptionsuccesfulModal;
