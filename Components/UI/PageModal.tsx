
import { useState } from 'react';
import {MdOutlineShareLocation} from 'react-icons/md'
import React, { ReactNode } from "react";


// interface ModalProps {
//   children: ReactNode ;
// }
const PageModal = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsModalOpen(false);

    // Set isModalOpen to false to close the modal
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity bg-gray-800 opacity-50"></div>

            <div className="z-20 w-full max-w-2xl py-16 px-6 mx-auto bg-white shadow-lg">
              
              <div className="flex justify-center  flex-col items-center">
                <h2 className="text-3xl text-lightgreen font-bold">
                  Choose Your Location
                </h2>
                <p className="text-center text-2xl font-medium">
                  Please choose your location to ensure accurate product
                  availability and pricing
                </p>
              </div>
              <div className="mt-10">
                <form>
                  <label className="block text-gray-700 font-bold mb-2">
                    <select
                      className="block w-full py-4 text-[#183D36] px-3 border-2 border-green bg-white  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedValue}
                      onChange={handleSelectChange}
                      placeholder="Location"
                    >
                      <option value="option1">
                        <MdOutlineShareLocation />
                        Location
                      </option>
                      <option value="option2"> Lagos</option>
                      <option value="option3">Ogun</option>
                      <option value="option3">Ibadan</option>
                    </select>
                  </label>
                  <button
                    className="bg-lightgreen mt-3 w-full text-xl font-bold text-white text-center p-3"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default PageModal;
