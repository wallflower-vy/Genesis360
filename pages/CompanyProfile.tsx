 import React from 'react'
 
 const CompanyProfile = () => {
   return (
     <div >
        <p className='text-[32px] text-green font-extrabold'>Company Profile</p>
        <div className='shadow-[0px_0px_5px_0px_#0000004D] p-5 mt-10'>
            <p className='text-2xl text-green font-bold'>Company Overview</p>
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
     </div>
   )
 }
 
 export default CompanyProfile   