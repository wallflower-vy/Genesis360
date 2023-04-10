import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import Image from "next/image";
import showPass from "../public/svg/show.svg";
import { TfiArrowCircleRight} from "react-icons/tfi";
import { TfiArrowCircleLeft} from "react-icons/tfi";
import { BsFilterRight} from "react-icons/bs";

const Wallet = () => {
  return (
    <>
      <h2 className="text-[32px] leading-[40px] font-bold text-green">
        Wallet
      </h2>

      <div className="flex text-green mt-[21px] space-x-[30px]">
        <div className="shadow-[0px_0px_2px_0px_#0000004D] border-2 border-[#FFFFFF]  text-green py-4 px-4 ">
          <h2 className="text-[16px] font-semibold leading-[20px]">
            Wallet Balance
          </h2>
          <p className="text-[60px] font-bold leading-[88px]">₦1,190,000</p>
          <p className=" py-2 shadow-[0px_0px_2px_0px_#0000004D]  flex text-[24px] font-medium items-center justify-center ">
            Fund Wallet
          </p>
        </div>

        <div className=" flex space-x-[15px] ">
          <div className="space-y-[10px]">
            <div className="shadow-[0px_0px_2px_0px_#0000004D] border-[#FFFFFF] text-green py-8 px-6 ">
              <p className="font-bold  flex text-[24px] leading-[30px] ">
                Transfer Funds
              </p>
            </div>
            <div className="shadow-[0px_0px_2px_0px_#0000004D] border-[#FFFFFF] text-green py-8 px-6 ">
              <p className="font-bold  flex text-[24px] leading-[30px] ">
                Saved Cards
              </p>
            </div>
          </div>
          <div className="space-y-[10px]">
            <div className="shadow-[0px_0px_2px_0px_#0000004D] border-[#FFFFFF] text-green py-4 px-6">
              <p className="font-bold  flex text-[24px] leading-[30px] ">
                Request Acct. <br></br>Statement
              </p>
            </div>
            <div className="shadow-[0px_0px_2px_0px_#0000004D] border-[#FFFFFF] py-8 px-6 ">
              <p className="font-bold  flex text-[24px] leading-[30px] ">
                Refer a Friend
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]  shadow-[0px_0px_2px_0px_#0000004D] ">
        <h2 className="text-[24px] font-semibold p-4">Transaction History</h2>
        <table className="w-full">
          <thead className="">
            <tr className="text-left text-[15px] font-semibold border-[#DFE5FF] border-y-2  ">
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Recipient</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="  border-[#DFE5FF] border-y-2">
              <td className="p-3">12/02/2023</td>
              <td className="p-3">₦115,000</td>
              <td className="p-3">Genesis360</td>
              <td className="p-3">Groceries Settlement</td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Successful
                </button>
              </td>
              <td className="p-3">
                <Image src={showPass} alt="" />
              </td>
            </tr>

            <tr className="border-[#DFE5FF] border-y-2">
              <td className="p-3">12/02/2023</td>
              <td className="p-3">₦115,000</td>
              <td className="p-3">@Marvelous</td>
              <td className="p-3">Fund Transfered</td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Successful
                </button>
              </td>
              <td className="p-3">
                <Image src={showPass} alt="" />
              </td>
            </tr>

            <tr className="text-left border-[#DFE5FF] border-y-2">
              <td className="p-3">12/02/2023</td>
              <td className="p-3">₦115,000</td>
              <td className="p-3">Genesis360</td>
              <td className="p-3">Groceries Settlement</td>
              <td className="p-3">
                <button className="text-[#fff] px-[14px] py-1 font-bold text-center bg-[#FF3D00] text-[12px]">
                  Declined
                </button>
              </td>
              <td className="p-3">
                <Image src={showPass} alt="" />
              </td>
            </tr>

            <tr className="text-left border-[#DFE5FF] border-y-2 ">
              <td className="p-3">12/02/2023</td>
              <td className="p-3">₦115,000</td>
              <td className="p-3">@Babatunde</td>
              <td className="p-3">Fund Transfered</td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Successful
                </button>
              </td>
              <td className="p-3">
                <Image src={showPass} alt="" />
              </td>
            </tr>

            <tr className="text-left ">
              <td className="p-3">12/02/2023</td>
              <td className="p-3">₦115,000</td>
              <td className="p-3">@Babatunde</td>
              <td className="p-3">Fund Transfered</td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Successful
                </button>
              </td>
              <td className="p-3">
                <Image src={showPass} alt="" />
              </td>
            </tr>
        
          </tbody>
        </table>

        <div className="text-left   border-[#DFE5FF] border-t-2 px-2 py-6 justify-between flex">
            <div>
                <p className="text-[20px] font-medium flex items-center"><BsFilterRight style={{fontSize: '30px'}} />By Oldest to Newest</p>
            </div>
            <div className="flex items-center space-x-[10px]">
                <p className="text-[20px] font-semibold leading-[20px]">Page 1 of 2</p>

                <div className="flex gap-x-[10px]">
                    <TfiArrowCircleLeft  style={{fontSize: '30px'}} />
                    <TfiArrowCircleRight  style={{fontSize: '30px'}}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
