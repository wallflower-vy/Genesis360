import Image from "next/image";
import homebannerimg from "../../public/assets/homebannerimg.png";
import googleplay from "../../public/assets/googleplay.png";
import appstore from "../../public/assets/appstore.png";
import appstore1 from "../../public/assets/image 7.png";
import appstore2 from "../../public/assets/image 8.png";


const Banner = () => {
  return (
    <div className=" w-full flex justify-between px-[8rem] pt-[5rem] pb-[5rem] bg-background max-xl:px-4 max-lg:pt-0 max-lg:pb-0 max-lg:flex-col-reverse">

      {/* Hero text */}
      <div className="w-[50%] max-xl:w-[100%] ">

        <h1 className="text-green font-plus text-[68px] font-[800] leading-[100px] max-lg:text-[48px] max-lg:leading-[60px] max-lg:mt-[50px]">
          Alternative Financing for food
        </h1>

        <div className="mt-5 max-lg:mt-[10px]">

          <p className="text-green font-medium text-xl max-lg:leading-[20.16px] max-lg:text-[16px] ">
            Genesis360 offers to finance food items allowing you to purchase
            needed food items that support dietary requirements. Credit
            financing will enable you to pay in installments over a period of
            three months with little or no interest at all.
          </p>

          <div className="flex mt-8 gap-5 max-lg:mt-[10px]">
            <Image src={googleplay} alt="googleplay" className="cursor-pointer max-lg:hidden"/>
            <Image src={appstore} alt="appstore" className="cursor-pointer max-lg:hidden " />
            <Image src={appstore1} alt="appstore" className="cursor-pointer lg:hidden " />
            <Image src={appstore2} alt="googleplay" className="cursor-pointer lg:hidden"/>
          </div>
        </div>

      </div>

      {/* The ImAGE Div */}
      <div className="w-[52%]  flex justify-end max-lg:justify-start max-lg:w-full max-lg:h-[452px]">
        <Image src={homebannerimg} alt="homebannerimg" />
      </div>
    </div>
  );
};

export default Banner;
