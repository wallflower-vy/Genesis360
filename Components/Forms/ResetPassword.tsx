import { useState } from "react";
import Image from "next/image";

import Forgetpassword from "./ForgetPassword";

function Resetpassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // This function toggles the state of the password visibility flag between true and false
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setFormSubmitted(true);
      // Render another component or do some other action
    } else {
      alert("Input field is empty.");
    }
  };
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  if (formSubmitted) {
    return <Forgetpassword />;
  }
  return (
    <div className=" bg-background flex flex-col justify-center h-[85vh] py-[40px]  max-lg:pt-[190px]">
      <div className="mx-auto">
        <div className=" px-[70px] py-[50px]  bg-white  w-[600px]  max-md:w-[100%] max-md:px-0 max-lg:py-0 shadow-[0px_0px_10px_0px_#00000040]">
          <h2 className=" text-[40px] leading-[20px]  text-green font-bold">
            Forget Password{" "}
          </h2>
          <p className=" text-green mt-[15px] font-normal  text-[16px] leading-[25px]">
            To reset your password, please enter the email address that is
            linked to your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <label
                  htmlFor="Email Address"
                  className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
                >
                  Email Address{" "}
                </label>

                <input
                  placeholder="Email Address"
                  type="email"
                  id="EEmail Address"
                  name="Email Address"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                />
              </div>
            </div>

            <button
              className="h-[50px] mt-[20px] bg-green w-full font-bold  text-white text-[20px]"
              onClick={handleSubmit}
            >
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
