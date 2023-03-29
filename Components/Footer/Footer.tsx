import Image from "next/image";
import Link from "next/link";
import React from "react";
import Genesis360green from "../../public/assets/Genesis360green.png";
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-green flex justify-between px-[8rem] py-[5rem] gap-10'>
      <div className='w-[20%] flex flex-col justify-between'>
        <div>
          <Image src={Genesis360green} alt='logo' />
        </div>
        <div className="flex gap-3">
            <Link href='' className="text-white text-2xl"><BsFacebook /></Link>
            <Link href='' className="text-white text-2xl"><AiFillInstagram /></Link>
            <Link href='' className="text-white text-2xl"><BsTwitter/></Link>
        </div>
      </div>
      <div className="w-[40%] ">
        <p className="text-white text-2xl font-semibold text-justify">
          Genesis360 is a digital retail company that provides consumer credit
          in the form of food loans. We enables farm-to-retail distribution for
          local/small-scale farmers. Aggregating supplies of farm produce and
          making it accessible to the final consumer. Our BNPL offering enables
          individuals to purchase food items immediately without payment or
          initial deposit and allow them to pay back before a 30-day period
          without interest, or in installments over 3 months with interest.
        </p>
      </div>
      <div className="w-[40%] flex flex-col pl-[3rem]">
        <div>
            <div className="text-white text-2xl font-[500]">
                <p>Email Support</p>
                <p >info@genesis360.com.ng</p>
            </div>
        </div>
        <div className="mt-8">
            <div className="text-white text-2xl font-[500]">
                <p>Phone & WhatsApp Support</p>
                <p >+2349134995237</p>
            </div>
        </div>
        <div className="mt-8">
            <div className="text-white text-2xl font-[500]">
                <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                
            </div>
        </div>
        <div className="mt-10 border border-lightgreen w-full ">
            <div className=" text-2xl font-[500]">
               <input type='text' placeholder="Email Address"  className="text-brown w-[70%]  p-5 text-xl font-[500]"/>
               <button className="bg-lightgreen text-green py-4 text-center w-[30%]">Subscribe</button>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
