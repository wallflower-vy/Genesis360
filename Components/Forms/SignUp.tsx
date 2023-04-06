import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import hidePass from "../../public/svg/hidepassword.svg";
import showPass from "../../public/svg/showpassword.svg";
import sign from "../../public/assets/Vector (2).png";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenforcity, setIsDropdownOpenforcity] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  // This function toggles the state of the password visibility flag between true and false

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const cities = [
    "Lagos",
    "Abuja",
    "Kano",
    "Ibadan",
    "Port Harcourt",
    // Add more cities as needed
  ];

  const states = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi"];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdownforcity = () =>
    setIsDropdownOpenforcity(!isDropdownOpenforcity);

  const handleStateSelection = (state) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpenforcity(false);
  };

  return (
    <>
      <div className=" bg-background flex flex-col justify-center  py-[40px]  max-lg:pt-[190px]">
        <div className="  mx-auto px-[70px] py-[50px] bg-white shadow-[0px_0px_10px_0px_#00000040]">
          <h2 className=" text-green font-bold text-[40px] leading-[50px]">
            Create an account?
          </h2>
          <p className=" text-[20px] leading-[25px]">
            Start your journey with Genesis360
          </p>

          <form className="mt-[30px] flex space-x-[50px]">
            <div className=" flex-1">
              <div className=" flex space-x-[20px] items-center">
                <div className="">
                  <label
                    htmlFor="First Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    placeholder="First Name"
                    type="email"
                    id="username"
                    name="username"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="Last Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="Last Name"
                    name="Last Name"
                    placeholder="Last  Name"
                    className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="Username *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Username
                </label>
                <input
                  type="text"
                  id="@Username"
                  name="@Username"
                  placeholder="@Username"
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="Business Name *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Business Name *
                </label>
                <input
                  type="text"
                  id="Business Name"
                  name="@Username"
                  placeholder="Business Name"
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="Business Category *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Business Category *
                </label>
                <input
                  type="text"
                  id="Business Category *"
                  name="Business Category *"
                  placeholder="Business Category *"
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mt-[30px]">
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
                  required
                  className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex-2">

              <div className="mt-[0px]">
                <label htmlFor="Phone Number *" className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2">Phone Number *</label>
                <div class="flex">
                  <label for="phone_number" class="border-[#183D36] border-y-2 border-l-2 h-[100%] bg-[#B0FFFC] p-2 outline-[#183D36] outline-8"> 
                    +234
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="8122233345"
                    pattern=""
                    required
                    class="w-full py-2 px-3  border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="Business Address *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Business Address *
                </label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className=" flex space-x-[20px] mt-[30px]">
                <div className="relative">
                  <label
                    htmlFor="state"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    State *
                  </label>
                  <div className="relative">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="Select State *"
                      value={selectedState}
                      onClick={toggleDropdown}
                      readOnly
                      className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-10 text-center text-gray-600  flex items-center justify-center"
                      onClick={toggleDropdown}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="chevron-down w-6 h-6 cursor-pointer"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <ul className="absolute top-full left-0 right-0 z-10 bg-white rounded-md shadow-md overflow-hidden">
                        {states.map((state) => (
                          <li
                            key={state}
                            className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleStateSelection(state)}
                          >
                            {state}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="city"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    City *
                  </label>
                  <div className="relative">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Select City *"
                      value={selectedCity}
                      onClick={toggleDropdownforcity}
                      readOnly
                      className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-10 text-center text-gray-600  flex items-center justify-center"
                      onClick={toggleDropdownforcity}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="chevron-down w-6 h-6 cursor-pointer"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {isDropdownOpenforcity && (
                      <ul className="absolute top-full left-0 right-0 z-10 bg-white rounded-md shadow-md overflow-hidden">
                        {cities.map((city) => (
                          <li
                            key={city}
                            className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleCitySelect(city)}
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="password"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 mt-[25px]"
                >
                  {" "}
                  Password
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

              <div className="mt-[30px]">
                <input
                  type="checkbox"
                  id="example"
                  name="example"
                  className="h-4 w-4 bg-green checked:bg-green"
                />
                <span className="text-green pl-[4px] text-[20px] leading-[25px] font-medium">
                  I read and consented to the{" "}
                  <span className=" text-[#1565C0]"> Terms & Conditions</span>
                </span>

                <button className="py-[7.1px] bg-green w-full font-bold  text-white text-[20px] mt-[6px]">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
