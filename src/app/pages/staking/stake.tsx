import Image from "next/image";
import { images } from "../../utilities/images";
import logo from "../../assets/images/homapage/singlelogo.svg";
import { useState } from "react";
import Button from "../../components/ui/button";
import ProgressBar from "@/app/components/progressbar";

export default function Stake() {
  return (
    <div>
      <div className="mx-auto flex items-center gap-5 shadow-lg rounded-[15px]  justify-around px-2 md:px-9 lg:px-0 xl:px-9  mt-9">
        <div className="bg-[#1A1A1A]  rounded-[15px] my-auto border border-white border-opacity-50 py-4 px-4 text-left w-1/2 md:w-[310px] lg:w-[280px] xl:w-[368px] xl:h-[123px] lg:h-[95px] md:h-[80px] h-[75px]">
          <h1 className="font-sora text-gray-300 font-semibold text-[12px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px]">
            Token Balance
          </h1>
          <div className="flex items-center gap-2 mt-2 md:mt-3 lg:mt-5">
            <Image src={logo} alt="logo" className="w-4 md:w-6" />
            <p className="text-gray-400 font-sora font-semibold text-[12px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px] ">
              212.00
            </p>
          </div>
        </div>
        <div className="bg-[#1A1A1A]  rounded-[15px] my-auto border border-white border-opacity-50 py-4 px-4 text-left w-1/2 md:w-[310px] lg:w-[280px] xl:w-[368px] xl:h-[123px] lg:h-[95px] md:h-[80px] h-[75px]">
          <h1 className="font-sora text-gray-300 font-semibold text-[12px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px]">
            APY
          </h1>
          <p className="text-gray-400 font-sora font-semibold text-[12px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px] mt-2 md:mt-3 lg:mt-5">
            33.64%
          </p>
        </div>
      </div>
      <div className="flex-col  justify-around mt-12 px-4 md:px-10 xl:px-24 ">
        <div className="flex justify-between items-center text-md text-white text-opacity-70">
          <h5 className="font-sora text-[14px]/[15px] md:text-[14px]/[18px] lg:text-[16px]/[22px] xl:text-[24px]/[32px] font-meduim font-meduim">
            Stake Balance
          </h5>
          <h5 className="font-sora text-[14px]/[15px] md:text-[14px]/[18px] lg:text-[16px]/[22px] xl:text-[24px]/[32px] font-meduim">
            8.47 TP
          </h5>
        </div>
        <div className="flex justify-between mt-10 lg:mt-12 xl:mt-14 items-center text-md text-white text-opacity-70">
          <h5 className="font-sora text-[14px]/[15px] md:text-[14px]/[18px] lg:text-[16px]/[22px] xl:text-[24px]/[32px] font-meduim ">
            Rewards
          </h5>
          <h5 className="font-sora  text-[14px]/[15px] md:text-[14px]/[18px] lg:text-[16px]/[22px] xl:text-[24px]/[32px] font-meduim">
            7.03 TP
          </h5>
        </div>
        <div className=" mt-10 lg:mt-14 mb-8 lg:mb-12 text-white text-opacity-20">
          <hr />
        </div>
        <div className=" mx-auto flex flex-col  rounded-md bg-[#1A1A1A]  border border-white border-opacity-50 text-white text-opacity-70 justify-between h-[130px] lg:h-[180px] xl:h-[215px] py-auto ">
          <div className="flex justify-between mt-2 lg:mt-6 px-1 md:px-3 ">
            <div className="text-white space-y-6 lg:space-y-10 mt-5  flex-col px-3 md:px-6 cursor-pointer ">
              <h6 className="font-sora font-bold text-white text-opacity-80  text-[14px]/[15px] md:text-[18px]/[18px] lg:text-[22px]/[18px] xl:text-[40px]/[32px]">
                0
              </h6>

              <h6 className="font-sora font-light text-white text-opacity-80 mt-3 text-[14px]/[15px] md:text-[18px]/[18px] lg:text-[22px]/[18px] xl:text-[30px]/[32px]">
                $0.00
              </h6>
            </div>
            <div className="text-white  flex-col px-3 md:px-6 cursor-pointer  ">
              <div className="flex gap-3 mt-5 items-center">
                <Image src={logo} alt="logo" className="w-5 md:w-10 " />
                <h6 className="font-sora font-bold text-white text-opacity-80  text-[14px]/[15px] md:text-[18px]/[18px] lg:text-[22px]/[18px] xl:text-[40px]/[32px]">
                  TP
                </h6>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-8 mb-5 ">
            <ProgressBar progress={40} />
          </div>
        </div>
        <div className=" flex  justify-between gap-3 md:gap-0 mt-12  mb-9">
          <Button
            variant={"primary"}
            className="lg:w-[320px] xl:w-[405px] lg:h-[80px] h-[50px] xl:h-[97px] text-[14px]/[15px] text-white text-opacity-30 hover:text-white md:text-[18px]/[18px] lg:text-[22px]/[18px] xl:text-[36px]/[37px] border border-[#00A675] hover:border hover:border-[#019267] bg-[#072018] bg-opacity-[49%] hover:bg-gradient-to-r from-[#019267] to-[#01F8AF] font-sora font-semibold"
          >
            Stake
          </Button>
          <Button
            variant={"primary"}
            className="lg:w-[320px] xl:w-[405px] lg:h-[80px] h-[50px] xl:h-[97px] text-[12px]/[15px] text-white text-opacity-30 hover:text-white md:text-[18px]/[18px] lg:text-[22px]/[18px] xl:text-[36px]/[37px] border border-[#00A675] hover:border hover:border-[#019267] bg-[#072018] bg-opacity-[49%] hover:bg-gradient-to-r from-[#019267] to-[#01F8AF] font-sora font-semibold"
          >
            Claim Rewards
          </Button>
        </div>
      </div>
    </div>
  );
}
