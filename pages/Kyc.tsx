import Image from "next/image";
import React from "react";

import idcard from "../public/assets/image 45.png";

const Kyc = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='font-extrabold text-[32px] text-green'>KYC</p>
        <p className='text-xl text-green font-medium'>
          <span>Status: </span>
          <span className='font-extrabold'>PENDING</span>
        </p>
      </div>
     
     
      <div className='shadow-[0px_0px_5px_0px_#0000004D] p-5 mt-10'>
        <p className='text-2xl font-bold text-green'>Company Information</p>
        
       <div className="flex justify-between mt-5">

       <div className=''>
          <div className=''>
            <p className='font-bold text-xl'>Business Name</p>
            <p className='font-medium text-brown text-xl'>
              Amala Corner 
            </p>
          </div>
          <div className='mt-3'>
            <p className='font-bold text-xl'>Business Category </p>
            <p className='font-medium text-brown text-xl'>Restaurant</p>
          </div>
    
        </div>

        <div>
        <div className=''>
            <p className='font-bold text-xl'>Years in Business </p>
            <p className='font-medium  text-brown text-xl'>5 Years</p>
          </div>
          <div className='mt-3'>
            <p className='font-bold text-xl'>Is the Company Registered?</p>
            <p className='font-medium  text-brown text-xl'>Yes</p>
          </div>
          
        </div>
       
        <div className=''>
        
        <div className=''>
            <p className='font-bold text-xl'>RC Number</p>
            <p className='font-medium text-brown text-xl'>RN58963259</p>
          </div>
          <div className='mt-3'>
            <p className='font-bold text-xl'>Address</p>
            <p className='font-medium text-brown text-xl'>
              5, Embassy Street, Off FUTA Junction, <br/>
              FUTA South Gate, Akure, Ondo State.
            </p>
          </div>
        </div>
       
       
       
       </div>
      </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      <div className='shadow-[0px_0px_5px_0px_#0000004D] p-5 mt-10'>
        <p className='text-2xl font-bold text-green'>Director’s Information</p>

        <div className='flex justify-between  gap-5 mt-5'>
          <div className=' w-[60%] gap-5 flex justify-between'>
            <div>
              <div className=''>
                <p className='text-xl font-bold text-green'>First Name</p>
                <p className='font-medium  text-brown text-xl'>Adekunle</p>
              </div>
              <div className=' mt-3'>
                <p className='text-xl font-bold text-green'>Last Name</p>
                <p className='font-medium  text-brown text-xl'>Adewale</p>
              </div>
              <div className=' mt-3'>
                <p className='text-xl font-bold text-green'>Phone Number</p>
                <p className='font-medium  text-brown text-xl'>
                  +2348122233345
                </p>
              </div>
            </div>

            <div>
              <div>
                <p className='text-xl font-bold text-green'>Email Address</p>
                <p className='font-medium  text-brown text-xl'>
                  adewaleadekunle@gmail.com
                </p>
              </div>
              <div className=' mt-3'>
                <p className='text-xl font-bold text-green'>Date of Birth</p>
                <p className='font-medium  text-brown text-xl'>25/04/1995</p>
              </div>
              <div className=' mt-3'>
                <p className='text-xl font-bold text-green'>Gender</p>
                <p className='font-medium  text-brown text-xl'>Male</p>
              </div>
            </div>
          </div>
          <div className='w-[40%]'>
            <p className='text-xl font-bold text-green'>
              Means of Identification
            </p>
            <Image src={idcard} alt='idcard' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
