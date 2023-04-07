import Image from "next/image";
import React from "react";
import simplifyimg from "../../public/assets/Simplifyimg.png";
import googleplay from "../../public/assets/googleplay.png";
import appstore from "../../public/assets/appstore.png";
import appstore1 from "../../public/assets/image 7.png";
import appstore2 from "../../public/assets/image 8.png";

const Simplifygroceries = () => {
  return (
    <div className="bg-background px-[8rem] py-[5rem] flex justify-between max-lg:flex-col-reverse max-lg:px-2 max-lg:py-0">

      {/* The text div */}
      <div className="w-[50%] mt-5 pt-[5rem] max-lg:w-full max-lg:pt-0 max-lg:pb-[85px]">
        <h1 className="text-green font-extrabold text-5xl max-lg:text-[29.3px] max-lg:leading-[40px]">
          Simplify your groceries procurement. Download our app now!{" "}
        </h1>

        {/* DoWnload Apps button */}
        <div className="flex mt-8 gap-5 max-lg:mt-[12px]">
            <Image
              src={googleplay}
              alt="googleplay"
              className="cursor-pointer  max-lg:hidden"
            />
            <Image
              src={appstore}
              alt="googleplay"
              className="cursor-pointer  max-lg:hidden"
            />
            <Image
              src={appstore1}
              alt="googleplay"
              className="cursor-pointer  lg:hidden"
            />
            <Image
              src={appstore2}
              alt="googleplay"
              className="cursor-pointer  lg:hidden"
            />
        </div>
      </div>

      {/*  The big image*/}
      <div className="w-[40%] flex  max-lg:w-[100%] max-lg:flex  max-lg:items-center max-lg:justify-center">
        <Image src={simplifyimg} alt="" className="" />
      </div>
    </div>
  );
};

export default Simplifygroceries;