import Image from "next/image";
import { images } from "../../utilities/images";
import logo from "../../assets/images/homapage/singlelogo.svg";
import { useState } from "react";
import Button from "../../components/ui/button";

export default function Stake() {
  return (
    <div>
      <div className="mx-auto flex items-center gap-5 shadow-lg rounded-[15px]  justify-between  py-10 px-3 md:px-8 lg:px-10 xl:px-20   ">
        <div className="bg-[#072018] rounded-[15px] border border-gray-400 py-4 px-4 text-left w-1/2">
          <h1 className="font-sora text-gray-300 font-semibold text-[16px]/[15px] md:[18px]/[18px] lg:[24px]/[18px] xl:text-[30px]/[37px]">
            Token Balance
          </h1>
          <div className="flex items-center gap-2 mt-5">
            <Image src={logo} alt="logo" className="w-6" />
            <p className="text-gray-400 font-sora font-semibold text-[16px]/[15px] md:[18px]/[18px] lg:[24px]/[18px] xl:text-[30px]/[37px]">
              212.00
            </p>
          </div>
        </div>
        <div className="bg-[#072018] rounded-[15px] border border-gray-400 py-4 px-4 text-left w-1/2">
          <h1 className="font-sora text-gray-300 font-semibold text-[16px]/[15px] md:[18px]/[18px] lg:[24px]/[18px] xl:text-[30px]/[37px]  ">
            APY
          </h1>
          <p className="text-gray-400 font-sora font-semibold text-[16px]/[15px] md:[18px]/[18px] lg:[24px]/[18px] xl:text-[30px]/[37px] mt-5">
            33.64%
          </p>
        </div>
      </div>
      <div className="flex-col mx-auto bg-[#181b19] px-20 border-gray-400">
        <div className="flex justify-between items-center text-md text-gray-300">
          <h5 className="font-sora text-[26px]/[32px] font-meduim">
            Stake Balance
          </h5>
          <h5 className="font-sora text-[26px]/[32px] font-meduim">8.47 TP</h5>
        </div>
        <div className="flex justify-between mt-6 items-center text-md text-gray-300">
          <h5 className="font-sora text-[26px]/[32px] font-meduim ">Rewards</h5>
          <h5 className="font-sora text-[26px]/[32px] font-meduim">7.03 TP</h5>
        </div>
        <div className="mt-8 mb-8 text-gray-500">
          <hr />
        </div>
        <div className=" mx-auto flex  rounded-md bg-[#072018] border border-gray-400 justify-between  py-6 ">
          <div className="text-white  flex-col px-6 cursor-pointer">
            <h3 className="font-sora text-[16px]/[24px]">0</h3>

            <h6 className="font-sora font-bold text-gray-400 text-[24px]">
              $0.00
            </h6>
          </div>
          <div className="text-white  flex-col px-6 cursor-pointer">
            <div className="flex gap-3">
              <Image src={logo} alt="logo" className="w-6" />
              <h6 className="font-sora font-bold text-gray-400 text-[24px]">
                TP
              </h6>
            </div>
          </div>
        </div>
        <div className="flex mx-auto  mt-6 gap-10 mb-9">
          <Button
            variant={"primary"}
            className="w-1/2 h-[50px] text-[10px]/[15px] md:[14px]/[18px] lg:[18px]/[18px] xl:text-[30px]/[37px] font-sora font-semibold"
          >
            Stake
          </Button>
          <Button
            variant={"primary"}
            className="w-1/2 h-[50px] text-[10px]/[15px] md:[14px]/[18px] lg:[18px]/[18px] xl:text-[30px]/[37px] font-sora font-semibold"
          >
            Claim Reward
          </Button>
        </div>
      </div>
    </div>
  );
}