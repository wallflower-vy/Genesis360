import Image from "next/image";
import Link from "next/link";
import React from "react";
import Genesis360green from "../../public/assets/Genesis360green.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-green flex px-[8rem] py-[5rem] gap-10 max-xl:px-[5rem] max-xl:py-12 max-lg:gap-0 max-lg:px-4 max-lg:py-5  max-lg:flex-col">
      <div className="w-[20%] flex flex-col justify-between max-lg:w-[100%] ">
        <div>
          <Image src={Genesis360green} alt="logo" className=" max-lg:w-[150px] max-lg:h-[28px]" />
        </div>

        <div className="flex gap-3 max-lg:hidden ">
          <Link href="" className="text-white text-2xl">
            <BsFacebook />
          </Link>
          <Link href="" className="text-white text-2xl">
            <AiFillInstagram />
          </Link>
          <Link href="" className="text-white text-2xl">
            <BsTwitter />
          </Link>
        </div>
      </div>

      <div className="w-[40%] max-lg:w-full max-lg:mt-[23px] ">
        <p className="text-white text-2xl font-semibold text-justify  max-lg:text-base max-lg:font-medium">
          Genesis360 is a digital retail company that provides consumer credit
          in the form of food loans. We enables farm-to-retail distribution for
          local/small-scale farmers. Aggregating supplies of farm produce and
          making it accessible to the final consumer. Our BNPL offering enables
          individuals to purchase food items immediately without payment or
          initial deposit and allow them to pay back before a 30-day period
          without interest, or in installments over 3 months with interest.
        </p>
      </div>

      <div className="w-[40%] flex flex-col pl-[3rem] max-lg:w-full max-lg:pl-0 max-lg:mt-[31px]">
        <div className="mt-0 lg:hidden ">
          <div className="text-white text-2xl font-[500]  max-lg:text-[18px] max-lg:leading-[22px] ">
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
        </div>

        <div className="mt-10 border border-lightgreen w-full  lg:hidden max-lg:mt-[5px]">
          <div className=" text-2xl font-[500] max-lg:text-[16px] flex items-center ">
            <input
              type="text"
              placeholder="Email Address"
              className="text-brown w-[70%]  p-5 text-xl font-[500] max-lg:h-[50px] max-lg:py-0 max-lg:text-[16px]"
            />
            <button className="bg-lightgreen text-green py-4 text-center w-[30%] max-lg:h-[50px] max-lg:py-0">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <div className="text-white text-2xl font-[500] max-lg:mt-[50px]  ">
            <p className="max-lg:text-[20px] max-lg:leading-[25.2px] max-lg:font-bold  ">
              Email Support
            </p>
            <p className="max-lg:text-[18px] max-lg:font-medium max-lg:leading-[25px]">
              info@genesis360.com.ng
            </p>
          </div>
        </div>

        <div className="mt-8 max-lg:mt-[20px]">
          <div className="text-white text-2xl font-[500] max-lg:text-[20px]">
            <p className=" max-lg:font-bold">Phone & WhatsApp Support</p>
            <p className=" max-lg:font-semibold max-lg:leading-[25px] max-lg:text-[18px]">
              +2349134995237
            </p>
          </div>
        </div>

        <div className="mt-8 max-lg:hidden">
          <div className="text-white text-2xl font-[500]">
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
        </div>

        <div className="mt-10 border border-lightgreen w-full  max-lg:hidden">
          <div className=" text-2xl font-[500] flex">
            <input
              type="text"
              placeholder="Email Address"
              className="text-brown w-[70%]  p-5 text-xl font-[500]"
            />
            <button className="bg-lightgreen text-green py-4 text-center w-[30%]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-3  lg:hidden  mt-[30px]  ">
          <Link href="" className="text-white text-2xl max-lg:text-[30px]">
            <BsFacebook  />
          </Link>
          <Link href="" className="text-white text-2xl max-lg:text-[30px]">
            <AiFillInstagram />
          </Link>
          <Link href="" className="text-white text-2xl max-lg:text-[30px]">
            <BsTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
