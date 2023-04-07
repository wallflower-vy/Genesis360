import React from "react";
import image6 from "../../public/assets/image 9.png";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className='bg-[#000000] h-screen flex justify-center   items-center'>
      <div className='bg-white h-[30rem] w-[50%]'>
        <div>
          <Image src={image6} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
