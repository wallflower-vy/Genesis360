import { useState } from "react";
import Image from "next/image";
import hidePass from "../../public/svg/hidepassword.svg";
import showPass from "../../public/svg/showpassword.svg";
import sign from "../../public/assets/Vector (2).png"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // This function toggles the state of the password visibility flag between true and false
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className=" bg-gray-100 flex flex-col justify-center  py-[40px]">

      <div className="mx-auto">
        <div className=" px-[70px] py-[50px]  bg-white  w-[600px] max-md:px-0 max-lg:py-0 shadow-[0px_0px_10px_0px_#00000040]">
          <h2 className=" text-[40px] leading-[20px]  text-green font-bold">
            Log In
          </h2>
          <p className=" text-green mt-[15px] font-normal leading-[25px]">
            Enter your information
          </p>

          <form>
            <div className="">

              <div className="">

                <label
                  htmlFor="Email Address"
                  className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
                >
                  Email Address
                </label>

                <input
                  placeholder="Email Address"
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
                        <Image src={hidePass} alt="" width={20} height={20} />
                      ) : (
                        // Otherwise, show the "eye" icon
                        <Image src={showPass} alt="" width={20} height={20} />
                      )}
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          
            <div className=" mt-[15px] flex justify-between items-center">
              <p className=" text-green  font-medium leading-[20px] text-[20px]">Forget Password?</p>
              <p className=" text-[#003DB5] text-[20px] font-bold">Reset</p>
            </div>

            <button className="h-[50px] mt-[20px] bg-green w-full font-bold  text-white text-[20px]">Login</button>
          </form>

          <div className="flex mt-[90px] justify-center space-x-2">
            <p className=" text-[20px] text-green font-medium">Don’t have an account?</p>
            <p className=" text-lightgreen text-[20px] font-extrabold">Sign Up
            
            <Image src={sign} alt="logo" className="max-md:w-[180px]" />
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
