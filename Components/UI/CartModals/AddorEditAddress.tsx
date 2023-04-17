import { RiCloseCircleFill } from "react-icons/ri"
import {useState} from 'react'


const AddorEditAddress = () => {
    const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenforcity, setIsDropdownOpenforcity] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
 
    const handleStateSelection = (state:any) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
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

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

      <div className="z-20 w-full max-w-xl py-8 px-6 mx-auto bg-white shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">Add/Edit Address</h2>
        <div className="flex justify-end"><RiCloseCircleFill className="text-4xl cursor-pointer text-green" /></div>
    </div>

    <form className="mt-[20px] ">
           
            

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
                  className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mt-[30px]">
                <label htmlFor="Phone Number *" className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2">Phone Number *</label>
                <div className="flex">
                  <label  className="border-[#183D36] border-y-2 border-l-2 h-[100%] bg-[#B0FFFC] p-4 outline-[#183D36] outline-8"> 
                    +234
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="8122233345"
                    pattern=""
                    required
                    className="w-full py-4 px-3   border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="mt-[30px]">
                <label
                  htmlFor="Business Category *"
                  className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2 "
                >
                  Address *
                </label>
                <input
                  type="text"
                  id="Address * *"
                  name="Address *"
                  placeholder="Address * *"
                  className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                />
              </div>


              <div className=" flex gap-4 mt-[30px]">
                <div className="relative w-1/2">
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
                      className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
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

                <div className=" w-1/2">
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
                    //   value={selectedCity}
                    //   onClick={toggleDropdownforcity}
                      readOnly
                      className="w-full py-4 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute top-0 right-0 h-full w-10 text-center text-gray-600  flex items-center justify-center"
                    //   onClick={toggleDropdownforcity}
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
                            // onClick={() => handleCitySelect(city)}
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <button className='w-full text-center text-xl mt-5 font-bold bg-lightgreen py-3 text-white '>Continue</button>
            
           
          </form>
  
     
        
      </div>
    </div>
  </div>
  )
}

export default AddorEditAddress