import { useState } from "react";
import Image from "next/image";
import hidePass from "../../public/svg/hidepassword.svg";
import showPass from "../../public/svg/showpassword.svg";
import sign from "../../public/assets/Vector (2).png";

function Forgetpassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // This function toggles the state of the password visibility flag between true and false
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className=" bg-background flex flex-col justify-center  py-[40px]  max-lg:pt-[190px]">
      <div className="mx-auto">
        <div className=" px-[70px] py-[50px]  bg-white  w-[600px]  max-md:w-[100%] max-md:px-0 max-lg:py-0 shadow-[0px_0px_10px_0px_#00000040]">
          <h2 className=" text-[40px] leading-[20px]  text-green font-bold">
            Forget Password{" "}
          </h2>
          <p className=" text-green mt-[15px] font-normal  text-[16px] leading-[25px]">
            We have sent a code to{" "}
            <span className=" text-[#1565C0]">example@gmail.com </span>for
            verification purposes. Kindly enter the code and continue to reset
            your password.{" "}
          </p>

          <form>
            <div className="">
              <div className="">
                <label
                  htmlFor="Enter OTP"
                  className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
                >
                  Enter OTP
                </label>

                <input
                  placeholder="Enter OTP"
                  type="email"
                  id="Enter OTP"
                  name="Enter OTP"
                  required
                  className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                />
              </div>

              <div className="">
                <label
                  htmlFor="Create New Password"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
                >
                  Create New Password
                </label>

                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="*****************"
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

              <div className="">
                <label
                  htmlFor="Confirm New Password"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
                >
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="*****************"
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

            <button className="h-[50px] mt-[20px] bg-green w-full font-bold  text-white text-[20px]">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
