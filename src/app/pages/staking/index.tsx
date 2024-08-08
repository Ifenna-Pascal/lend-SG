import Image from "next/image";
import { marketData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Stakingsection from "./staking-section";

const Staking = () => {
  return (
    <div className="px-20  ">
      <div className=" w-full  py-14">
        <div className="mx-auto w-2/3  mb-6 bg-[#181b19] shadow-xl  rounded-[15px] border border-gray-400 items-center">
          <div className="mx-auto flex items-center gap-5 shadow-lg rounded-[15px]  justify-between  py-10 px-10 ">
            <div className="bg-[#072018] rounded-[15px] border border-gray-400 py-8  text-center w-1/2">
              <h1 className="font-sora text-gray-300 font-semibold text-[30px]/[37px]">
                Token Prices
              </h1>
              <p className="text-gray-400 font-sora font-semibold text-[26px]/[31px] mt-5">
                $0.0232
              </p>
            </div>
            <div className="bg-[#072018] rounded-[15px] border border-gray-400 py-8 text-center w-1/2">
              <h1 className="font-sora text-gray-300 font-semibold text-[30px]/[37px]">
                Token Prices
              </h1>
              <p className="text-gray-400 font-sora font-semibold text-[26px]/[31px] mt-5">
                $0.0232
              </p>
            </div>
            <div className="bg-[#072018] rounded-[15px] border border-gray-400 py-8 text-center w-1/2">
              <h1 className="font-sora text-gray-300 font-semibold text-[30px]/[37px]">
                Token Prices
              </h1>
              <p className="text-gray-400 font-sora font-semibold text-[26px]/[31px] mt-5">
                $0.0232
              </p>
            </div>
          </div>
        </div>
      </div>

      <Stakingsection />
    </div>
  );
};

export default Staking;
