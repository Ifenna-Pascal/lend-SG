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
    <div className="">
      <div className=" w-full ">
        <div className="mx-auto w-[80%]  gap-2 justify-around px-6  lg:w-[800px] mt-9 xl:w-[1139px] h-[900px] lg:h-[900px] xl:h-[1073px] bg-[#1A1A1A] bg-opacity-[60%] border border-[#FFFFFF] border-opacity-10 shadow-xl  rounded-[15px]  items-center">
          <div className="flex mx-auto w-full px-4 md:px-4 md:w-[400px]  items-center lg:w-[450px] xl:w-[520px] h-[60px] md:h-[75px] lg:h-[80px] xl:h-[110px] bg-[#1A1A1A]    rounded-full mt-5">
            <Button
              className={`${activeTab === "stake" ? "bg-gradient-to-r from-[#019267] to-[#01F8AF]  w-[247px] xl:w-[250px] h-[5px] md:h-[50px] lg:h-[50px] xl:h-[80px] text-white text-[15px]/[15px] md:[20px]/[18px] lg:-text-[30px]/[28px] xl:text-[32px]/[37px] " : "transparent text-gray-300 text-[17px]/[15px] md:[22px]/[18px] lg:-text-[34px]/[28px] xl:text-[36px]/[37px]"} font-sora rounded-full font-bold py-5 md:py-7 px-3`}
              onClick={() => handleTabChange("stake")}
            >
              Stake
            </Button>
            <Button
              className={`${activeTab === "unstake" ? "bg-gradient-to-r from-[#019267] to-[#01F8AF] w-[247px] h-[5px] md:h-[50px] lg:h-[50px] xl:h-[80px] text-white text-[15px]/[15px] md:[20px]/[18px] lg:-text-[30px]/[28px] xl:text-[32px]/[37px] " : "transparent text-gray-300 text-[17px]/[15px] md:[22px]/[18px] lg:-text-[34px]/[28px] xl:text-[36px]/[37px]"} font-sora rounded-full font-bold py-5 md:py-7  px-3`}
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
