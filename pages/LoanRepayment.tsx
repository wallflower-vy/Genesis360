import React from "react";
import Image from "next/image";
import showPass from "../public/svg/show.svg";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { BsFilterRight } from "react-icons/bs";

const LoanRepayment = () => {
  return (
    <div className="text-green">
      <h2 className="text-[32px] font-bold leading-[40.32px] text-green">
        Loan Repayment
      </h2>

      <div className="shadow-[0px_0px_2px_#0000004D] px-2 py-2 flex justify-between mt-[30px]">
        <div>
          <h2 className="text-[16px] leading-[20.16px] font-semibold">
            Outstanding Debt
          </h2>
          <p className="text-[32px] font-bold leading-[40px] mt-[5px]">
            -₦90,000
          </p>
        </div>
        <div>
          <h2 className="text-[16px] leading-[20.16px] font-medium">
            Next Repayment Date
          </h2>
          <p className="text-[32px] font-bold leading-[40px] mt-[5px]">
            03/12/2023
          </p>
        </div>
        <div>
          <h2 className="text-[16px] leading-[20.16px] font-medium">
            Repayment Amount
          </h2>
          <p className="text-[32px] font-bold leading-[40px] mt-[5px]">
            ₦15,000
          </p>
        </div>
        <div>
          <h2 className="text-[16px] leading-[20.16px] font-medium">
            Payment Channel
          </h2>
          <p className="text-[32px] font-bold leading-[40px] mt-[5px]">
            Card ****4576
          </p>
        </div>
      </div>

      <div className="shadow-[0px_0px_5px_#0000004D] mt-[32px]">
        <h2 className="text-[24px] leading-[32px] font-semibold p-3">
          Payment Schedule
        </h2>
        <table className="w-full ">
          <thead className="">
            <tr className="text-left text-[15px] font-semibold border-[#DFE5FF] border-y-2  ">
              <th className="p-3">Payment Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment Channel</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="  border-[#DFE5FF] border-y-2">
              <td className="p-3 ">12/02/2023</td>
              <td className="p-3">₦15,000</td>
              <td className="p-3">Card ****4758 </td>
              <td className="p-3 text-[16px] font-semibold text-[#135FDC]">
                Pay Now
              </td>
            </tr>

            <tr className="border-[#DFE5FF] border-y-2">
              <td className="p-3">19/04/2023</td>

              <td className="p-3">₦15,000</td>
              <td className="p-3">Card ****4758 </td>
              <td className="p-3 text-[16px] font-semibold text-[#135FDC]">
                Pay Now
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-left border-[#DFE5FF] px-2 py-3 justify-between flex">
          <div>
            <p className="text-[16px] font-medium flex items-center">
              <BsFilterRight style={{ fontSize: "25px" }} />
              By Oldest to Newest
            </p>
          </div>
          <div className="flex items-center space-x-[10px]">
            <p className="text-[16px] font-semibold leading-[20px]">
              Page 1 of 2
            </p>

            <div className="flex gap-x-[10px]">
              <TfiArrowCircleLeft style={{ fontSize: "25px" }} />
              <TfiArrowCircleRight style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-[0px_0px_5px_#0000004D] mt-[32px]">
        <h2 className="text-[24px] leading-[32px] font-semibold p-3">
          Repayment History{" "}
        </h2>
        <table className="w-full ">
          <thead className="">
            <tr className="text-left text-[15px] font-semibold border-[#DFE5FF] border-y-2  ">
              <th className="p-3">Payment Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment Channel</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="  border-[#DFE5FF] border-y-2">
              <td className="p-3 ">12/02/2023</td>
              <td className="p-3">₦15,000</td>
              <td className="p-3">Card ****4758 </td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Approved{" "}
                </button>
              </td>
            </tr>

            <tr className="border-[#DFE5FF] border-y-2">
              <td className="p-3">19/04/2023</td>

              <td className="p-3">₦15,000</td>
              <td className="p-3">Card ****4758 </td>
              <td className="p-3">
                <button className="text-[#fff] px-2 py-1 font-bold text-center bg-[#12E3BB] text-[12px]">
                  Approved{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-left border-[#DFE5FF] px-2 py-3 justify-between flex">
          <div>
            <p className="text-[16px] font-medium flex items-center">
              <BsFilterRight style={{ fontSize: "25px" }} />
              By Oldest to Newest
            </p>
          </div>
          <div className="flex items-center space-x-[10px]">
            <p className="text-[16px] font-semibold leading-[20px]">
              Page 1 of 2
            </p>

            <div className="flex gap-x-[10px]">
              <TfiArrowCircleLeft style={{ fontSize: "25px" }} />
              <TfiArrowCircleRight style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRepayment;
