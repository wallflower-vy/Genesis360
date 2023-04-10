import React from "react";
import img1 from "../public/assets/Rectangle 297.png";
import Image from "next/image";


const Subscription = () => {
  const Package = [
    {
      Description: "Family of Three Groceries Package Subscription",
      Price: "₦6,400",
      fhoto: img1,
    },
    {
      Description: "Family of Three Groceries Package Subscription",
      Price: "₦6,400",
      fhoto: img1,
    },
  ];
  return (
    <div>
      <div className=" flex items-center space-x-[25px] text-green">
        <h2 className="text-[32px] font-bold">Subscription</h2>
        <h2 className="bg-[#B0FFFC] px-2 py-2 text-[20px] font-semibold">
          My Current Subscription
        </h2>
        <h2 className="text-[20px] leading-[25px]">
          Other Subscription Packages
        </h2>
      </div>

      <div className="mt-[40px] flex">
        <div className="flex space-x-[30px]">
          {Package.map((items, index) => {
            return(
              <div className="shadow-[0px_0px_10px_0px_#0000001A] px-2 py-2 ">
                <Image src={items.fhoto}  className=' ' alt="cardimg" />
                <h2 className="w-[242px] text-[16px] leading-[20px] font-medium mt-[5px]">{items.Description}</h2>
                <p className="text-[32px] leading-[40px] font-semibold mt-[10px]">{items.Price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
