"use client";

import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import { useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto px-4 md:px-10 py-10 bg-[#01291D]">
      <div className="border border-white border-opacity-10 bg-[#030D0A] shadow-md min-h-[400px] rounded-lg">
        <div className="flex flex-row items-center justify-between px-4 lg:px-6">
          <h3 className="text-white mt-6 text-[14px] md:text-[25px] xl:text-[30px] font-sora font-semibold">
            Biturbo Market Assets
          </h3>
          <div className="lg:hidden flex items-center mt-6 text-white text-opacity-60 font-sora">
            <span className="text-[10px]">Hide</span>
            <Image
              src={images.hide}
              className="ml-2"
              alt="hide-icon"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <table className="min-w-full divide-y  divide-[#FFFFFF1A]">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                {[
                  "Assets",
                  "Total Supplied",
                  "Supply APY",
                  "Total Borrowed",
                  "Borrow APY, Variable",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-5 text-left text-[10px] md:text-[12px] xl:text-[16px] text-white text-opacity-60 font-semibold"
                  >
                    <span className="flex items-center">
                      {header}
                      <Image
                        src={images.colleteral}
                        className="ml-2 w-[10px] xl:w-3"
                        alt="sort-icon"
                        width={16}
                        height={16}
                      />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FFFFFF1A]">
              {marketTable.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#FFFFFF0D] cursor-pointer"
                  onClick={() => router.push(`/dashboard/market/${index}`)}
                >
                  <td className="px-6 py-5 flex items-center">
                    <Image
                      src={data.icon}
                      alt="coin-icon"
                      width={24}
                      height={24}
                    />
                    <span className="ml-3 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                      {data.name}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.collateral}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.tvl}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.mcr}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.apr}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="bg-[#FFFFFF1A] border border-white border-opacity-10 text-white text-opacity-60 px-4 py-2 rounded">
                      {data.details}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col px-3 mb-9">
          {marketTable.map((data, index) => (
            <div
              key={index}
              className="hover:bg-[#FFFFFF0D] cursor-pointer mb-4 p-4 bg-[#030D0A] rounded-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={data.icon}
                  className="w-7 h-7"
                  alt="coin-icon"
                  width={28}
                  height={28}
                />
                <span className="ml-3 text-[14px] md:text-[18px] text-white text-opacity-90">
                  {data.name}
                </span>
              </div>
              {[
                { label: "Total Supplied", value: data.collateral },
                { label: "Supply APY", value: data.tvl },
                { label: "Total Borrowed", value: data.mcr },
                { label: "Borrow APY, Variable", value: data.apr },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-2"
                >
                  <h3 className="text-[14px] md:text-[18px] text-white text-opacity-60 font-normal">
                    {item.label}
                  </h3>
                  <div className="text-[14px] md:text-[18px] text-white text-opacity-90">
                    {item.value}
                  </div>
                </div>
              ))}
              <button
                onClick={() => router.push(`/dashboard/market/${index}`)}
                className="bg-[#FFFFFF0D] text-white text-opacity-60 border mt-4 border-white border-opacity-20 w-full h-[39px] rounded"
              >
                {data.details}
              </button>
              <div className="mt-9">
                <hr />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-[#FFFFFF1A] py-8 px-6">
          <h3 className="text-white text-opacity-70 text-[14px] md:text-[18px] xl:text-[26px] font-sora font-normal">
            Show Frozen or Paused Assets
          </h3>
          <div className="flex space-x-1">
            <div className="w-6 h-5 bg-white rounded-lg"></div>
            <div className="w-6 h-5 bg-[#01291D] rounded-r-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
