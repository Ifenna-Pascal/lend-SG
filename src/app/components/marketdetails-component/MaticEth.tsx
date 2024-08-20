import Image from "next/image";
import { images } from "../../utilities/images";

export default function Matic() {
  return (
    <div className="px-8">
      <h3 className="text-white text-opacity-70 font-sora font-normal text-[10px]/[12px] md:text-[12px]/[14px] lg:text-[14px]/[18px] xl:text-[16px]/[24px] mt-6 md:mt-10">
        Wallet Balance
      </h3>
      <div className="flex items-center gap-3 mt-2">
        <Image
          src={images?.eth}
          width={14}
          height={14}
          alt="search-icon "
          className="w-[20px]  md:w-[30px]  lg:w-[42px]  xl:w-[50px]  bg-none"
        />
        <p className="text-[15px]/[20px] md:text-[17px]/220px] lg:text-[20px]/[24px] xl:text-[24px]/[30px] text-white font-sora font-semi-bold ">
          0<span className="text-white text-opacity-70">.000</span>
        </p>
      </div>
      <div className="flex gap-2 mt-6 md:mt-8 space-x-2 text-white">
        <h3 className="text-[10px] lg:text-[12px] border border-white border-opacity-10 rounded-[5px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-3 lg:py-2 xl:py-2  bg-[#444545]">
          Supply
        </h3>
        <h3 className=" text-[10px] lg:text-[12px] border border-white border-opacity-10  rounded-[5px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-4 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
          Borrow
        </h3>
        <h3 className="text-[10px] lg:text-[14px]  border border-white border-opacity-10  rounded-[5px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-4 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
          Charts
        </h3>
      </div>
      <div className="flex justify-between items-center py-2 md:py-3 mt-6 md:mt-8 border border-white border-opacity-50 rounded-[5px] px-4 bg-[#012016]">
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <Image
              src={images?.eth}
              width={14}
              height={14}
              alt="search-icon "
              className="w-[20px]  md:w-[30px]  lg:w-[40px]  xl:w-[50px]  bg-none"
            />
            <p className="text-[15px]/[20px] md:text-[17px]/220px] lg:text-[22px]/[24px] xl:text-[24px]/[30px] text-white text-opacity-90 font-sora font-semi-bold ">
              MaticEth
            </p>
          </div>
          <div className="border border-r-white border-opacity-40 h-7"></div>
          <div>
            <p className="text-[15px]/[20px] md:text-[17px]/220px] lg:text-[22px]/[24px] xl:text-[24px]/[30px] text-white text-opacity-90 font-sora font-semi-bold ">
              0.00
            </p>
          </div>
        </div>
        <div>
          <p className="text-[15px]/[20px] md:text-[17px]/220px] lg:text-[22px]/[24px] xl:text-[24px]/[30px] text-white text-opacity-70 font-sora font-semi-bold ">
            $0
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[#0E98C4] bg-opacity-40 py-2 md:py-3 mt-6 md:mt-10 px-3">
        <Image
          src={images?.caution}
          width={14}
          height={14}
          alt="search-icon "
          className="w-[10px]  md:w-[10px]  lg:w-[12px]  xl:w-[20px]  bg-none"
        />
        <p className="text-[8px]/[20px] md:text-[17px]/220px] lg:text-[10px]/[24px] xl:text-[14px]/[30px] text-white text-opacity-90 font-sora font-semi-bold ">
          Your Matic wallet is empty. Purchase or transfer assets.
        </p>
      </div>
    </div>
  );
}
