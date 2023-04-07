import takestressimg from "../../public/assets/takestressimg.png";
import Image from "next/image";
import React from "react";

const Takestress = () => {
  return (
    <div className="bg-background  py-[4rem] px-[8rem] max-xl:py-20 max-xl:px-2">

      <div className="bg-aqua flex rounded-[50px] gap-5 justify-between p-10  max-lg:rounded-[20px] max-lg:px-4 max-lg:py-[25px] max-lg:flex-col">

        <div className="w-[45%] max-lg:w-[100%] ">
          <Image src={takestressimg} alt="cardimg"/>
        </div>

        <div className=" w-[55%] mt-5 max-lg:w-[100%] max-lg:mt-[0px]">

          <div className="w-[550px] mb-5 max-lg:w-[100%] max-lg:mb-[10px] max-lg:hidden">
            <h1 className="text-6xl text-green font-extrabold leading-[80px] max-lg:text-[40px] max-lg:leading-[50px]">
              Take the <br /> stressout of Grocery Shopping
            </h1>
          </div>

          <div className="w-[550px] mb-5 max-lg:w-[100%] max-lg:mb-[10px] max-lg:block lg:hidden">
            <h1 className="text-6xl text-green font-extrabold leading-[80px] max-lg:text-[35px] max-lg:leading-[50px]">
              Take the stressout of Grocery Shopping
            </h1>
          </div>

          <p className="text-green text-xl font-semibold max-lg:text-[16px] max-lg:leading-[20px]">
            Get your groceries delivered monthly! Subscribe to our convenient
            Family Grocery Packages and never run out of essentials again. From
            pantry staples to fresh produce, we got you covered. Enjoy the
            convenience of having your groceries delivered right to your door.{" "}
          </p>

          <button className="border-green border-4 px-8 py-3 font-bold text-xl text-center bg-transparent mt-5 text-green max-lg:py-[9px] max-lg:px-[12px] max-lg:mt-[10px] max-lg:leading-[20px]">
            How it Works
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Takestress;
