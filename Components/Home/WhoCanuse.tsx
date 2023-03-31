import Image from "next/image";
import React from "react";
import whocanuse1 from "../../public/assets/whocanuse1.png";
import whocanuse2 from "../../public/assets/whocanuse2.png";
import bicycle from "../../public/assets/Group 80.png";
import business from "../../public/assets/Group 81.png";
import individuals from "../../public/assets/Group 82 (1).png";

const whocanusedata = [
  {
    image: individuals,
    title: "Individuals",
    text: "Get and enjoy hassle-free grocery shopping for you and your family with no hidden fees and avoid breaking bank using our Buy Now, Pay Later option. ",
  },
  {
    image: business,
    title: "Businesses",
    text: "Businesses like hotels, restaurants can use our “buy now, pay later” to get food items in large quantity  with ease and get your orders delivered straight to your kitchen using our platform. ",
  },
  {
    image: bicycle,
    title: "Farmers",
    text: "Connect with customers who are searching for high-quality, locally grown produce. With a simple and user-friendly setup, you can easily showcase your products, reach new customers, and grow your business",
  },
];
const WhoCanuse = () => {
  return (
    <div className="bg-green px-[8rem] py-[2rem] flex gap-16  justify-between max-lg:py-16 max-lg:px-4 max-lg:flex-col">

      <div className="w-[60%] max-lg:w-full">

        <h1 className="text-white text-5xl font-extrabold max-md:text-[40px]">
          Who can use Genesis360?
        </h1>


        {/* FoR Mobile */}
        <div className="w-[100%] lg:hidden  max-lg:block max-lg:mt-[48px] h-[364px]">
          <Image src={whocanuse1} alt=""  className=" w-[100%] h-[100%]"/>

          <Image  src={whocanuse2}  alt="" className=" w-[200px] h-[132px] relative top-[-320px] left-[-30px]"/>
        </div>

        <div className=" flex flex-col gap-10 mt-8">

          {whocanusedata.map((item, index) => {
            return (
              <div key={index} className="gap-5 flex">

                <Image src={item.image}  className=' h-[30px] w-[30px] max:h-[25px] max:w-[25px]' alt="cardimg" />{" "}
            
                <div className="  w-[70%] max-lg:w-full">
                  <p className="text-3xl font-extrabold text-lightgreen max-lg:text-[20px]  max-lg:leading-[25px]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white max-md:text-[16px] max-lg:mt-2 max-md:leading-[20px]">
                    {item.text}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

          {/* FoR Destop */}
      <div className="w-[40%] max-lg:hidden h-[641px] ">
        <Image src={whocanuse1} alt="" className="h-[641px]" />

        <Image
          src={whocanuse2}
          alt=""
          className="relative top-[-35rem] left-[-10rem]"
        />
      </div>
    </div>
  );
};

export default WhoCanuse;
