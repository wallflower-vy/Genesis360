import Image from 'next/image'
import React from 'react'
import user from '../public/assets/user.png'
import shop from '../public/assets/shop.png'
import {useState} from 'react'

const Profile = () => {
    const [isDropdownOpenforgender, setIsDropdownOpenforgender] = useState(false);
    const [isDropdownOpenforrole, setIsDropdownOpenforrole] = useState(false);
    const [selectedGender, setSelectedGender] = useState("");
    const Gender = [
        "Male",
        "Female",
       
        // Add more cities as needed
      ];
      const role = [
        "farmer",
        "buyer",
       
        // Add more cities as needed
      ];
      const toggleDropdownforgender = () =>
      setIsDropdownOpenforgender(!isDropdownOpenforgender);
      const toggleDropdownforrole = () =>
      setIsDropdownOpenforrole(!isDropdownOpenforrole);
    

  return (
    <div>
        <p className='text-[32px] text-green font-extrabold'>User Profile</p>
        <p className='font-medium text-green text-base'>Update your profile and personal information</p>
        <div className='flex justify-between gap-10 mt-10'>
            <div className='w-[30%]'>
                <Image src={user} alt='user'/>
                <form>
                <div className="mt-6">
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
                <div className="mt-6">
                  <label
                    htmlFor="Last Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    placeholder="Last Name"
                    type="email"
                    id="username"
                    name="username"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>
                <div className="mt-6">
                <label htmlFor="Phone Number *" className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2">Phone Number *</label>
                <div className="flex">
                  <label  className="border-[#183D36] border-y-2 border-l-2 h-[100%] bg-[#B0FFFC] p-2 outline-[#183D36] outline-8"> 
                    +234
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="8122233345"
                    pattern=""
                    required
                    className="w-full py-2 px-3  border-2 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
                </form>
            </div>
            <div className='w-[38%]'>
                <form>
                <div className="mt-5">
                  <label
                    htmlFor=" Email Address *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                  Email Address *
                  </label>
                  <input
                    placeholder="Email Address *"
                    type="email"
                    id="Email Address *"
                    name="Email Address *"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Username *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Username *
                  </label>
                  <input
                    placeholder="@Username"
                    type="text"
                    id="username"
                    name="username"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Date of Birth *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Date of Birth *
                  </label>
                  <input
                    placeholder="DD/MM/YYYY"
                    type="date"
                    id="date"
                    name="date"
                    className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="First Name *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Gender * *
                  </label>
                  <div className="relative">
                    <input
                      id="Gender"
                      name="Gender"
                      type="text"
                      placeholder="Select Gender *"
                    //   value={selectedgender}
                      onClick={toggleDropdownforgender}
                      readOnly
                      className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                    />
                     <div
                      className="absolute top-0 right-0 h-full w-10 text-center text-gray-600  flex items-center justify-center"
                      onClick={toggleDropdownforgender}
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
                    {isDropdownOpenforgender && (
                      <ul className="absolute top-full left-0 right-0 z-10 bg-white rounded-md shadow-md overflow-hidden">
                        {Gender.map((gender) => (
                          <li
                            key={gender}
                            className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                            // onClick={() => handleCitySelect(city)}
                          >
                            {gender}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div>

                    </div>
                
 

                </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Role *"
                    className="block text-[#183D36] text-[20px] font-bold leading-[25px] mb-2"
                  >
                    Role *
                  </label>
                  <div className="relative">
                    <input
                      id="Role"
                      name="Role"
                      type="text"
                      placeholder="Select Role *"
                    //   value={selectedgender}
                      onClick={toggleDropdownforrole}
                      readOnly
                      className="w-full py-2 px-3 border-green border-2 focus:outline-none focus:shadow-outline"
                    />
                     <div
                      className="absolute top-0 right-0 h-full w-10 text-center text-gray-600  flex items-center justify-center"
                      onClick={toggleDropdownforrole}
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
                    {isDropdownOpenforrole && (
                      <ul className="absolute top-full left-0 right-0 z-10 bg-white rounded-md shadow-md overflow-hidden">
                        {role.map((role) => (
                          <li
                            key={role}
                            className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                            // onClick={() => handleCitySelect(city)}
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div>

                    </div>
                
 

                </div>
                </div>

                <button className='font-bold text-xl bg-lightgreen w-full mt-5 p-3 text-white'>Save Changes</button>

                </form>

            </div>
            <div  className='w-[30%]'>
            <Image src={shop} alt='user'/>
          <div className='mt-5'>
          <button className='bg-green text-white text text-xl font-bold center w-full p-3'>Change Password</button>
          <button className='bg-green text-white  mt-3 text-xl font-bold  text center w-full p-3'>Address Book</button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Profile