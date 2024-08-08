import Image from "next/image";
import { marketData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Table from "./market-table";

const MarketDashboard = () => {
  return (
    <div className="px-20  bg-gradient-to-t from-[#013B2A] to-[#030D0A] ">
      <div className=" w-full ">
        <div className="flex items-center  justify-between px-[4px] py-2">
          <h1 className="text-bold text-[64px] text-[#01F8AF] font-sora font-bold">
            Biturbo Market{" "}
          </h1>
        </div>
        <div className="flex justify-between mb-6 items-center">
          <div className="w-2/3 flex items-center rounded-md bg-[#013B2A] justify-between  py-6 ">
            {marketData.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" text-white  flex-col px-6 cursor-pointer"
                >
                  <h3 className="font-sora text-[16px]">{data.title}</h3>
                  <h6 className="font-helvatica font-bold text-[24px]">
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

      <Table />
    </div>
  );
};

export default MarketDashboard;
