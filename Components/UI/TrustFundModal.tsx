import React from "react";
import { useState } from "react";
import Image from "next/image";
import hidePass from "../../public/svg/hidepassword.svg";
import showPass from "../../public/svg/showpassword.svg";

import { RiCloseCircleFill } from "react-icons/ri";

const TrustFundModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="text-green w-[70%] mx-auto py-6 ">
      <div className="flex justify-between">
        {" "}
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">
          Transfer Fund
        </h2>

        <div className="flex justify-end">
        <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
      </div>
      </div>
      

      <div className="shadow-[0px_0px_2px_0px_#0000004D] mt-[30px] px-6 py-6">
        <h2 className="text-[16px] leading-[20px] font-normal">
          Wallet Balance
        </h2>
        <p className="text-[50px] leading-[63px] font-semibold">₦190,000</p>
      </div>
      <form>
        <div className="">
          <div className="">
            <label
              htmlFor="Reciever’s Username"
              className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
            >
              Reciever’s Username
            </label>
            <input
              placeholder="Reciever’s Username"
              type="text"
              id="Reciever’s Username"
              name="Reciever’s Username"
              required
              className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
            />
          </div>

          <div className="">
            <label
              htmlFor="Amount"
              className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
            >
              Amount{" "}
            </label>

            <input
              placeholder="₦50"
              type="email"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="*****************"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
              />

              <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                <button
                  type="button"
                  className="focus:outline-none focus:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    // If the password visibility flag is true, show the "eye with a line through it" icon
                    <Image src={showPass} alt="" width={20} height={20} />
                  ) : (
                    // Otherwise, show the "eye" icon
                    <Image src={hidePass} alt="" width={20} height={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="h-[50px] mt-[20px] bg-green w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
          Transfer Fund{" "}
        </button>
      </form>
    </div>
  );
};

export default TrustFundModal;
