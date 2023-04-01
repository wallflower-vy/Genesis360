import Image from "next/image";
import React from "react";
import groceriesimg from "../../public/assets/groceriesimg.png";
import recevemoneyimg from "../../public/assets/recevemoneyimg.png";
import orderdeliveryimg from "../../public/assets/orderdeliveryimg.png";

const justEcoomercedata = [
  {
    image: groceriesimg,
    title: "Buy Groceries and Pay Later",
    text: "Get the convenience of shopping with deferred payment options",
  },
  {
    image: recevemoneyimg,
    title: "Send and Recieve Money",
    text: "Transfer funds quickly and securely with just a few clicks",
  },
  {
    image: orderdeliveryimg,
    title: "Order Delicious Foods",
    text: "Order  from the comfort of your own home and get food delivered to you! ",
  },
];
const MoreThanJust = () => {
  return (
    <div className="bg-background max-lg:pt-[100px]">

      <div className="py-[5rem] px-[8rem] max-lg:px-[13px]  max-lg:py-[0] ">

        <h1 className="text-green font-extrabold text-5xl text-center max-lg:text-[40px] max-lg:leading-[50px]">
          More Than Just Ecommerce
        </h1>

        <div className=" flex gap-5 mt-5 justify-center max-lg:flex-col max-lg:gap-[13px]">

          {justEcoomercedata.map((item, index) => {

            return (
              <div key={index} className="bg-lightblue p-6 max-lg:flex max-lg:items-center max-sm:justify-center max-lg:p-[0px] max-lg:px-2  max-lg:space-x-[10px] max-md:h-[180px]">
                <Image src={item.image} alt="cardimg" className=" max-sm:w-[111px] max-sm:h-[116px] " />

                <div className="mt-5 max-lg:mt-0">
                  <p className="text-xl font-extrabold text-green max-md:text-[20px] max-lg:leading-[30px] max-lg:w-fit">{item.title}</p>
                  <p className="mt-3 text-base font-semibold text-green max-md :text-[16px] max-lg:leading-[20px] max-lg:mt-[0px]"> {item.text}</p>
                </div>
              </div>
            );

          })}
        </div>
      </div>
    </div>
  );
};

export default MoreThanJust;
