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
    <div className="px-4 md:px-4 lg:px-10  bg-gradient-to-t from-[#013B2A] to-[#02120D] ">
      <div className="max-w-[2000px]   mx-auto   py-[5rem] md:py-[0.5rem]  ">
        <div className="  flex flex-col w-full  my-auto  ">
          <div className="py-0 md:py-12 mb-6">
            <h1 className="text-bold text-[14px]/[20px] md:text-[38px]/[40px] lg:text-[44px]/[20px] text-white font-sora font-regular">
              Dashboard{" "}
            </h1>
            <h1 className="text-bold text-[24px]/[30px] md:text-[34px]/[30px] mt-4 lg:text-[54px]/[80px] text-[#01F8AF] font-sora font-bold">
              Biturbo Market{" "}
            </h1>
          </div>
          <div className="flex justify-between mb-6 items-center">
            <div className="w-[40%] md:w-1/3 flex items-center px-2 md:px-4 rounded-md bg-[#013B2A] justify-between  py-6 ">
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[15px] lg:text-[16px]/[24px]">
                  Net Worth
                </h3>
                <div className="flex gap-1">
                  <Image
                    src={images.eth}
                    alt="coinimage"
                    className="w-2 md:w-4"
                  />
                  <h6 className="font-sora font-bold text-[10px] text-gray-400 md:text-[20px] lg:text-[24px]">
                    $0.00
                  </h6>
                </div>
              </div>
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[15px] lg:text-[16px]/[24px]">
                  Net APY
                </h3>
                <h6 className="font-sora font-bold text-[10px] text-gray-400 md:text-[20px] lg:text-[24px]">
                  -----
                </h6>
              </div>
            </div>
            <div className="w-[20%] md:w-1/4 h-[54px] relative flex flex-col justify-center items-end gap-3 px-[3px] md:px-[15px] py-[20px]">
              <div>
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[15px]"
                >
                  view transaction
                </Button>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] flex items-center gap-1 lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[15px]"
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
                  className="w-[80px] md:w-[130px] flex items-center gap-1 lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[15px]"
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

        <div className="lg:hidden flex flex-col ">
          <div className="flex justify-between gap-5 bg-[#012016] shadow-lg lg:gap-14">
            <Button
              className={`${activeTab === "supply" ? "bg-[#01F8AF]" : "bg-transparent"} text-white px-4 py-2 rounded`}
              onClick={() => handleTabChange("supply")}
            >
              Supply
            </Button>
            <Button
              className={`${activeTab === "borrow" ? "bg-[#01F8AF]" : "bg-transparent"} text-white px-4 py-2 rounded`}
              onClick={() => handleTabChange("borrow")}
            >
              Borrow
            </Button>
          </div>
          <div className="mt-4">
            {activeTab === "supply" ? <Supplytable /> : <Borrowtable />}
          </div>
        </div>

        <div className=" hidden lg:flex justify-between gap-2 lg:gap-14">
          <Supplytable />
          <Borrowtable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
