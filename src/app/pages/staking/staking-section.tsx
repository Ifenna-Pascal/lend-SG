import Image from "next/image";
import { images } from "../../utilities/images";
import logo from "../../assets/images/homapage/singlelogo.svg";
import { useState } from "react";
import Button from "../../components/ui/button";
import Stake from "./stake";
import Unstake from "./unstake";

function Stakingsection() {
  const [activeTab, setActiveTab] = useState("stake");

  const handleTabChange = (tab: "stake" | "unstake") => {
    setActiveTab(tab);
  };

  return (
    <div className="px-3 md:px-8 lg:px-10 xl:px-20  ">
      <div className=" w-full  py-14">
        <div className="mx-auto w-full lg:w-2/3 mb-6 bg-[#181b19] shadow-xl  rounded-[15px] border border-gray-400  items-center">
          <div className="flex mx-auto w-full items-center lg:w-2/4 bg-[#373737] border border-gray-500  px-4  py-4 rounded-full mt-5">
            <Button
              className={`${activeTab === "stake" ? "bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] text-white text-[15px]/[15px] md:[20px]/[18px] lg:-text-[26px]/[28px] xl:text-[32px]/[37px] " : "transparent text-gray-300 text-[17px]/[15px] md:[22px]/[18px] lg:-text-[28px]/[28px] xl:text-[34px]/[37px]"} w-1/2 text-gray-400 font-sora rounded-full font-bold py-7 px-3`}
              onClick={() => handleTabChange("stake")}
            >
              Stake
            </Button>
            <Button
              className={`${activeTab === "unstake" ? "bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] text-white text-[15px]/[15px] md:[20px]/[18px] lg:-text-[26px]/[28px] xl:text-[32px]/[37px] " : "transparent text-gray-300 text-[17px]/[15px] md:[22px]/[18px] lg:-text-[28px]/[28px] xl:text-[34px]/[37px]]"} w-1/2 text-gray-400 font-sora rounded-full font-bold py-7 px-3`}
              onClick={() => handleTabChange("unstake")}
            >
              Unstake
            </Button>
          </div>
          <div className="mt-4">
            {activeTab === "stake" ? <Stake /> : <Unstake />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stakingsection;
