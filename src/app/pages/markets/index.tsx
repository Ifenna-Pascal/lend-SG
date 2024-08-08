import Image from "next/image";
import { marketData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Table from "./market-table";
import Button from "@/app/components/ui/button";

const MarketDashboard = () => {
  return (
    <div className="px-4 md:px-10  bg-gradient-to-t from-[#013B2A] to-[#030D0A] ">
      <div className="max-w-[2000px]   mx-auto   py-[5rem] md:py-[0.5rem]  ">
        <div className="  flex flex-col  my-auto  ">
          <div className="py-0 md:py-12 mb-6">
            <h1 className="text-bold text-[14px]/[20px] md:text-[38px]/[40px] lg:text-[44px]/[20px] text-white font-sora font-regular">
              Markets{" "}
            </h1>
            <h1 className="text-bold text-[24px]/[30px] md:text-[34px]/[30px] mt-4 lg:text-[54px]/[80px] text-[#01F8AF] font-sora font-bold">
              Biturbo Market{" "}
            </h1>
          </div>
          <div className="hidden md:flex justify-between mb-6 items-center">
            <div className="w-2/3 flex items-center rounded-md bg-[#013B2A] justify-between  py-6 ">
              {marketData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" text-white  flex-col px-2 lg:px-6 cursor-pointer"
                  >
                    <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[16px]">
                      {data.title}
                    </h3>
                    <h6 className="font-helvatica font-bold text-[8px] md:text-[10px] lg:text-[16px]]">
                      <span className="text-gray-400  font-bold">
                        {data.sign}
                      </span>
                      {data.amount}
                    </h6>
                  </div>
                );
              })}
            </div>
            <div className="w-1/4 h-[54px] relative flex items-center rounded-[8px] border border-light-400 px-[15px] py-[20px]">
              <Image
                src={images.searchIcon}
                width={18}
                height={18}
                alt="search-icon"
                className="absolute left-6"
              />
              <input
                type="text"
                className="w-full ml-10 bg-transparent placeholder:text-light-200 focus:outline-none font-montserrat text-light-200 text-[14px]"
                placeholder="Search assets name, symbol or address "
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-5">
          <div className="flex justify-between items-center ">
            <div className="w-2/4 flex  items-center rounded-md bg-[#013B2A] justify-between px-2 py-3">
              <div className="flex-col">
                <div className="text-[8px] text-white">Total Market Size</div>
                <div className="text-[10px] text-white">
                  <span className="text-gray-400">$</span>10.54B
                </div>
              </div>
              <div className="flex-col">
                <div className="text-[8px] text-white">Total Available</div>
                <div className="text-[10px] text-white">
                  <span className="text-gray-400">$</span>5.64B
                </div>
              </div>
            </div>
            <div className="w-[40px] h-[10px] relative flex items-center justify-center  rounded-[4px] border border-light-400  py-[15px]">
              <Image
                src={images.searchIcon}
                width={14}
                height={14}
                alt="search-icon"
                className="absolute "
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-2/4 flex  items-center rounded-md bg-[#013B2A] justify-between px-4 py-3">
              <div className="flex-col">
                <div className="text-[8px] text-white">Total Borrows</div>
                <div className="text-[10px] text-white">
                  <span className="text-gray-400">$</span>3.19B
                </div>
              </div>
              <div className="flex-col">
                <div className="text-[8px] text-white">Collateralization</div>
                <div className="text-[10px] text-white">133.19%</div>
              </div>
            </div>

            <Button
              variant={"primary"}
              className="w-[90px] md:w-[130px] lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[15px]"
            >
              View Transactions
            </Button>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default MarketDashboard;
