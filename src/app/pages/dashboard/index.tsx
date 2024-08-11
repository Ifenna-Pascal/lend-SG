"use client";

import Image from "next/image";
import { dashboardData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Borrowtable from "./components/borrow";
import Supplytable from "./components/supply-table";
import Button from "../../components/ui/button";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("supply");

  const handleTabChange = (tab: "supply" | "borrow") => {
    setActiveTab(tab);
  };
  return (
    <div className="">
      <div className="max-w-[2000px]  px-4 md:px-10   bg-[#02120D] font-sora h-[169px] md:h-[230px] lg:h-[290px] xl:h-[307px]  mx-auto   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto  ">
          <div className="py-4 md:py-6 xl:py-8 ">
            <h1 className="block lg:hidden text-bold text-[14px]/[20px] md:text-[28px]/[40px] lg:text-[34px]/[20px] text-white font-sora font-regular">
              Dashboard{" "}
            </h1>
            <h1 className="text-bold text-[24px]/[30px] md:text-[34px]/[30px] mt-0 md:mt-2 lg:text-[50px]/[80px] xl:text-[54px]/[80px] text-[#01F8AF] font-sora font-bold">
              Biturbo Market{" "}
            </h1>
          </div>
          <div className="flex justify-between mb-6 items-end md:items-center ">
            <div className="w-[136px] h-[44px] md:w-[230px] md:h-[80px] lg:w-[350px] xl:w-[358px] lg:h-[105px] xl:h-[115px] flex items-center px-2 md:px-4 rounded-md bg-[#013B2A] justify-between   ">
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[13px] lg:text-[14px]/[24px] xl:text-[16px]/[24px]">
                  Net Worth
                </h3>
                <div className="flex gap-1">
                  <Image
                    src={images.eth}
                    alt="coinimage"
                    className="w-2 md:w-4"
                  />
                  <h6 className="font-sora font-bold text-[10px] text-white text-opacity-70 md:text-[18px] lg:text-[22px]/[34px] xl:text-[24px]/[36px]">
                    $0.00
                  </h6>
                </div>
              </div>
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[13px] lg:text-[14px]/[24px] xl:text-[16px]/[24px]">
                  Net APY
                </h3>
                <h6 className="font-sora font-bold text-[10px]  text-white text-opacity-70 md:text-[18px] lg:text-[22px]/[34px] xl:text-[24px]/[36px]">
                  -----
                </h6>
              </div>
            </div>
            <div className="h-[54px] relative flex flex-col justify-center items-end gap-3 ">
              <div>
                <Button
                  variant={"primary"}
                  className="w-[77px] md:w-[130px] lg:w-[137px] xl:w-[154px] bg-[#1A1A1A]  h-[17px]  md:h-[35px] lg:h-[40px] xl:h-[45px]  rounded-[4px] lg:rounded-[9px] xl:rounded-[10px] text-white text-opacity-70  border border-white border-opacity-30  text-[6px] md:text-[10px] lg:text-[12px] xl:text-[14px]"
                >
                  View Transactions
                </Button>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] flex items-center gap-1 xl:w-[157px] border-none bg-[#013B2A] text-white  rounded-[4px] lg:rounded-[6px] xl:rounded-[10px] text-opacity-50 h-[17px]  md:h-[35px] lg:h-[45px] xl:h-[54px] text-[6px] md:text-[10px] lg:text-[14px] xl:text-[16px]"
                >
                  <Image
                    src={images.plus}
                    alt="coinimage"
                    className="w-2 md:w-4 "
                  />
                  Supply Eth
                </Button>
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] flex items-center gap-1 xl:w-[159px] border-none bg-[#013B2A] rounded-[4px] lg:rounded-[6px] xl:rounded-[10px] h-[17px] text-white text-opacity-50 
                  md:h-[35px] lg:h-[45px] xl:h-[54px] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]"
                >
                  <Image
                    src={images.plus}
                    alt="coinimage"
                    className="w-2 md:w-4"
                  />
                  Borrow Eth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col bg-[#01291D]  pt-5 px-4 md:px-10  ">
        <div className="flex justify-between bg-[#012016] w-[379px] md:w-[680px] h-[39px] mx-auto shadow-lg ">
          <Button
            className={`${activeTab === "supply" ? "bg-[#01F8AF] text-[#012016] w-[190px] md:w-[341px]" : "bg-[#012016] w-[189px] md:w-[339px] text-[#01F8AF]"} rounded-[3px] `}
            onClick={() => handleTabChange("supply")}
          >
            Supply
          </Button>
          <Button
            className={`${activeTab === "borrow" ? "bg-[#01F8AF] text-[#012016] w-[190px] md:w-[341px]" : "bg-[#012016] w-[189px] md:w-[339px] text-[#01F8AF]"}  px-4 py-2 rounded-[3px]`}
            onClick={() => handleTabChange("borrow")}
          >
            Borrow
          </Button>
        </div>
        <div className="mt-4">
          {activeTab === "supply" ? <Supplytable /> : <Borrowtable />}
        </div>
      </div>

      <div className=" hidden lg:flex justify-between gap-2 lg:gap-7 xl:gap-14 bg-[#01291D]  px-4 md:px-10 mx-auto ">
        <Supplytable />
        <Borrowtable />
      </div>
    </div>
  );
};

export default Dashboard;
