import Image from "next/image";
import { supplyTable } from "../../../__mockdata__/tables";
import { images } from "../../../utilities/images";

const Supplytable = () => {
  return (
    <div className="overflow-x-auto py-6 w-1/2">
      <div className="border border-[#030D0A] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px] ">
        <h3 className="text-white mt-6 text-[16px] font-sora font-semibold px-6">
          Assets to Supply
        </h3>
        <table className="min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
          <thead className="bg-transparent">
            <tr className="h-[85px]">
              <th
                scope="col"
                className="px-6 py-5  text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[10px]/[10px] font-sora text-gray-400 text-light-200 font-semibold"
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
                <tr key={index} className="hover:bg-[#FFFFFF0D] cursor-pointer">
                  <td className="px-6 py-7 whitespace-nowrap">
                    <div className="ml-4 flex items-center">
                      <Image src={data.icon} alt="coin-icon" />
                      <div className="text-[11px]/[13px] ml-3 font-sora text-white">
                        {data.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-7 whitespace-nowrap">
                    <div className="text-[11px]/[13px] font-sora text-white ">
                      {data.balance}
                    </div>
                  </td>
                  <td className="px-6 py-7 whitespace-nowrap">
                    <span className="text-[11px]/[13px] font-sora text-white ">
                      {data.apy}
                    </span>
                  </td>

                  <td className="text-[10px]/[13px] px-6 py-7 pl-12 font-sora text-white ">
                    <button className="bg-[#0F5440] w-12 py-1 rounded-[5px] ">
                      {data.status}
                    </button>
                  </td>
                  <td className="text-[10px]/[13px] px-6 py-7 font-sora  text-white ">
                    <button className="bg-[#0F5440] w-12 py-1 text-gray-400 rounded-[5px]">
                      {data.supply}
                    </button>
                  </td>
                  <td className="text-[10px]/[13px] px-6 py-7 pl-12 font-sora  text-white ">
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
    </div>
  );
};

export default Supplytable;
