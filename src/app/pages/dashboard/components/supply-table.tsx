import Image from "next/image";
import { supplyTable } from "../../../__mockdata__/tables";
import { images } from "../../../utilities/images";
import Button from "@/app/components/ui/button";

const Supplytable = () => {
  return (
    <div className="overflow-x-auto py-6 w-full lg:w-1/2">
      <div className=" flex flex-col rounded-md border border-[#3b3c3c] bg-[#030D0A] mb-6 px-2 md:px-6 py-6 ">
        <div className="flex items-center gap-1">
          <Image src={images.plus} alt="plus" />
          <h3 className="font-sora text-gray-200 font-medium text-[12px] md:text-[26px]/[39px]">
            Supply Eth
          </h3>
        </div>

        <h6 className="font-sora font-light text-gray-400 text-[11px] mt-5 md:text-[20px]/[30px]">
          Nothing Supplied yet
        </h6>
      </div>
      <div className="border border-[#3b3c3c] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px] ">
        <h3 className="text-white mt-6 text-[16px] font-sora font-semibold px-6">
          Assets to Supply
        </h3>
        <div className="hidden lg:block">
          <table className=" min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                <th
                  scope="col"
                  className="lg:px-5 xl:px-6 py-5 ml-3 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
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
                  className="lg:px-1 xl:px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Balance</span>
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
                  className="lg:px-1 xl:px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>APY</span>
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
                  className="lg:px-1 xl:px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <span>Status</span>
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
              {supplyTable.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-[#FFFFFF0D] cursor-pointer"
                  >
                    <td className="lg:px-1 xl:px-6 py-7 whitespace-nowrap">
                      <div className="md:ml-0 lg:ml-4 flex items-center">
                        <Image src={data.icon} alt="coin-icon" />
                        <div className="text-[11px]/[13px] ml-3 font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                    </td>
                    <td className="lg:px-1 xl:px-6 py-7 whitespace-nowrap">
                      <div className="text-[11px]/[13px] font-sora text-white ">
                        {data.balance}
                      </div>
                    </td>
                    <td className="lg:px-1 xl:px-6 py-7 whitespace-nowrap">
                      <span className="text-[11px]/[13px] font-sora text-white ">
                        {data.apy}
                      </span>
                    </td>

                    <td className="text-[10px]/[13px] lg:px-1 xl:px-6 py-7 pl-12 font-sora text-white ">
                      <button className="bg-[#0F5440] w-12 py-1 rounded-[5px] ">
                        {data.status}
                      </button>
                    </td>
                    <td className="text-[10px]/[13px] lg:px-1 xl:px-6 py-7 font-sora  text-white ">
                      <button className="bg-[#0F5440] w-12 py-1 text-gray-400 rounded-[5px]">
                        {data.supply}
                      </button>
                    </td>
                    <td className="text-[10px]/[13px] lg:px-1 xl:px-6 py-7 pl-12 font-sora  text-white ">
                      {" "}
                      <button className="bg-[#082a20] text-gray-400 border border-gray-500 w-12 py-1 rounded-[5px]">
                        {data.details}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="">
          <div className="lg:hidden flex flex-col px-3  mb-9">
            {supplyTable.map((data, index) => {
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
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Value
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.balance}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Supply APY
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            {data.apy}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className=" py-2 text-left text-[14px]/[15px] md:text-[10px]/[15px] lg:text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold">
                            Status
                          </h3>
                          <div className="text-[14px]/[15px] lg:text-[16px]/[21px] font-sora text-white ">
                            <button className="bg-[#0F5440] w-12 py-1 rounded-[5px] ">
                              {data.status}
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button className="bg-[#082a20] border border-gray-500  h-[34px] text-gray-400 rounded-[5px]">
                            {data.supply}
                          </Button>
                          <Button className=" bg-[#171818] text-gray-400 border border-gray-500 h-[34px] rounded-[5px]">
                            {data.details}
                          </Button>
                        </div>
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

export default Supplytable;
