import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="overflow-x-auto  px-4 md:px-10 py-10 bg-[#01291D] ">
      <div className="border border-white border-opacity-10 bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px]">
        <div className="flex lg:block items-center justify-between px-4 lg:px-0 ">
          <h3 className="text-white mt-6 text-[14px]  md:text-[25px] xl:text-[30px] font-sora font-semibold px-0 lg:px-6">
            Biturbo Market Assets
          </h3>
          <div className="flex lg:hidden items mt-6 center text-white text-opacity-60 font-sora">
            <span className="text-[10px]">Hide</span>
            <Image
              src={images.hide}
              className="ml-2"
              alt="sort-icon"
              width={12}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <table className=" min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[12px]/[18px] xl:text-[16px]/[20px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Assets</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[10px] xl:w-[12px]"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[12px]/[18px] xl:text-[16px]/[20px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Total Supplied</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[10px] xl:w-[12px]"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[12px]/[18px] xl:text-[16px]/[20px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Supply APY</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[10px] xl:w-[12px]"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[12px]/[18px] xl:text-[16px]/[20px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Total Borrowed</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[10px] xl:w-[12px]"
                      alt="sort-icon"
                      width={12}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-5  text-left text-[10px]/[15px] md:text-[10px]/[15px] lg:text-[12px]/[18px] xl:text-[16px]/[20px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Borrow APY, Variable</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[10px] xl:w-[12px]"
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
                        <div className=" text-[12px]/[15px] lg:text-[14px]/[21px] xl:text-[18px]/[21px] ml-3 font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-7 whitespace-nowrap">
                      <div className="text-[12px]/[15px] font-normal  lg:text-[14px]/[21px] xl:text-[18px]/[21px] font-sora text-white ">
                        {data.collateral}
                      </div>
                    </td>
                    <td className="px-10 py-7 whitespace-nowrap">
                      <div className="text-[12px]/[15px] font-normal  lg:text-[14px]/[21px] xl:text-[18px]/[21px] font-sora text-white ">
                        {data.tvl}
                      </div>
                    </td>
                    <td className="px-10 py-7 whitespace-nowrap">
                      <div className="text-[12px]/[15px] font-normal ml-3 lg:text-[14px]/[21px] xl:text-[18px]/[21px] font-sora text-white ">
                        {data.mcr}
                      </div>
                    </td>
                    <td className="px-10 py-7 whitespace-nowrap">
                      <div className="text-[12px]/[15px] font-normal ml-6  lg:text-[14px]/[21px] xl:text-[18px]/[21px] font-sora text-white ">
                        {data.apr}
                      </div>
                    </td>
                    <td className="text-[12px]/[15px] font-normal text-center lg:text-[14px]/[21px] xl:text-[18px]/[21px] px-8 py-7 ">
                      {" "}
                      <button className="bg-[#FFFFFF1A] lg:w-[94px] xl:w-[99px] bg-opacity-10 border border-white border-opacity-10 lg:h-[35px] h-[41px]  font-sora  text-white text-opacity-60  py-1 rounded-[5px]">
                        {data.details}
                      </button>
                    </td>
                    {/* </Link> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center  min-w-full border border-t-[#FFFFFF1A] py-8 border-b-[#FFFFFF1A] border-l-[#FFFFFF1A] border-r-[#FFFFFF1A] border-opacity-10">
            <h3 className="text-white text-opacity-70  text-[14px] md:text-[18px]  xl:text-[26px]/[32px] font-sora font-normal px-6">
              Show Frozen or Paused Assets
            </h3>
            <div className="lg:w-[24px] xl:w-[27px] lg:h-[20px] xl:h-[24px] bg-white rounded-[5px]"></div>
            <div className="lg:w-[24px] xl:w-[27px] lg:h-[20px] xl:h-[24px] bg-[#01291D] rounded-r-[5px]"></div>
          </div>
        </div>
        <div className="">
          <div className="lg:hidden flex flex-col px-3  mb-9">
            {marketTable.map((data, index) => {
              return (
                <div
                  key={index}
                  className="hover:bg-[#FFFFFF0D]  cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className=" flex-col items-center">
                      <div className="w-full text-white text-opacity-20  mb-7 mt-5">
                        <hr />
                      </div>
                      <div className="flex items-center px-2">
                        <Image
                          src={data.icon}
                          alt="coin-icon w-[28px] h-[28px]"
                        />
                        <div className=" text-[14px]/[15px] md:text-[18px]/[16px] text-white text-opacity-90 ml-2 font-sora font-normal ">
                          {data.name}
                        </div>
                      </div>
                      <div className="flex-col ">
                        <div className="flex items-center justify-between mt-3">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[18px]/[15px]  font-sora text-white text-opacity-60 font-normal">
                            Total Supplied
                          </h3>
                          <div className=" text-[14px]/[15px] md:text-[18px]/[16px] text-white text-opacity-90 ml-2 font-sora font-normal ">
                            {data.collateral}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[18px]/[15px]  font-sora text-white text-opacity-60 font-normal">
                            Supply APY
                          </h3>
                          <div className=" text-[14px]/[15px] md:text-[18px]/[16px] text-white text-opacity-90 ml-2 font-sora font-normal ">
                            {data.tvl}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[18px]/[15px]  font-sora text-white text-opacity-60 font-normal">
                            Total Borrowed
                          </h3>
                          <div className=" text-[14px]/[15px] md:text-[18px]/[16px] text-white text-opacity-90 ml-2 font-sora font-normal ">
                            {data.mcr}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[18px]/[15px]  font-sora text-white text-opacity-60 font-normal">
                            Borrow APY, Variable
                          </h3>
                          <div className="text-[14px]/[15px] md:text-[18px]/[16px] text-white text-opacity-90 font-sora ">
                            {data.apr}
                          </div>
                        </div>
                        <button className="bg-[#FFFFFF0D] text-white text-opacity-60 border mt-4 border-white border-opacity-20  w-full  h-[39px] rounded-[5px]">
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
