import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="overflow-x-auto py-6">
      <div className="border border-[#030D0A] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px]">
        <h3 className="text-white mt-6 text-[16px] md:text-[25px] lg:text-[30px] font-sora font-regular px-6">
          Biturbo Market Assets
        </h3>
        <div className="hidden md:block">
          <table className=" min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Assets</span>
                    <Image
                      src={images.collaterralIcon}
                      className="ml-2"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Total Supplied</span>
                    <Image
                      src={images.collaterralIcon}
                      className="ml-2"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[16px]/[21px] xl:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Supply APY</span>
                    <Image
                      src={images.collaterralIcon}
                      className="ml-2"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Total Borrowed</span>
                    <Image
                      src={images.collaterralIcon}
                      className="ml-2"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Borrow APY, Variable</span>
                    <Image
                      src={images.collaterralIcon}
                      className="ml-2"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-[#FFFFFF1A]">
              {marketTable.map((data, index) => {
                return (
                  <tr className="hover:bg-[#FFFFFF0D] cursor-pointer">
                    {/* <Link className= "" key={index} to={`/dashboard/market/${index}`}> */}
                    <td className="px-2 py-7 whitespace-nowrap">
                      <div className="ml-4 flex items-center">
                        <Image src={data.icon} alt="coin-icon" />
                        <div className=" text-[12px]/[15px] lg:text-[16px]/[21px] ml-3 font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-7 whitespace-nowrap">
                      <div className="text-[12px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                        {data.collateral}
                      </div>
                    </td>
                    <td className="px-6 py-7 whitespace-nowrap">
                      <span className="text-[12px]/[15px] lg:text-[16px]/[21px]font-sora text-white ">
                        {data.tvl}
                      </span>
                    </td>
                    <td className="text-[12px]/[15px] lg:text-[16px]/[21px] px-6 py-7 font-sora text-white ">
                      {data.mcr}
                    </td>
                    <td className="text-[12px]/[15px] lg:text-[16px]/[21px] px-6 py-7 pl-12 font-sora text-white ">
                      {data.apr}
                    </td>
                    <td className="text-[12px]/[15px] lg:text-[16px]/[21px] px-6 py-7 pl-12 font-sora  text-white ">
                      {" "}
                      <button className="bg-[#082a20] text-gray-400 border border-gray-500 w-20  py-1 rounded-[5px]">
                        {data.details}
                      </button>
                    </td>
                    {/* </Link> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="md:hidden flex flex-col px-3  mb-9">
            {marketTable.map((data, index) => {
              return (
                <div
                  key={index}
                  className="hover:bg-[#FFFFFF0D]  cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className=" flex-col items-center">
                      <div className="w-full text-gray-400 mb-7 mt-5">
                        <hr />
                      </div>
                      <div className="flex items-center px-2">
                        <Image src={data.icon} alt="coin-icon" />
                        <div className=" text-[16px]/[15px] lg:text-[16px]/[21px] ml-3 font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                      <div className="flex-col mt-5">
                        <div className="flex items-center justify-between">
                          <h3 className=" py-5 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Total Supplied
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.collateral}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <h3 className=" py-5 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Supply APY
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.tvl}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className=" py-5 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Total Borrowed
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.mcr}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className=" py-5 text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Borrow APY, Variable
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.apr}
                          </div>
                        </div>
                        <button className="bg-[#082a20] text-gray-400 border border-gray-500 w-full  py-1 rounded-[5px]">
                          {data.details}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
