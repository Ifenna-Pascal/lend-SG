import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";

const Table = () => {
  return (
    <div className="overflow-x-auto py-6 ">
      <div className="border border-[#030D0A] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px]">
        <h3 className="text-white mt-6 text-[30px] font-sora font-regular px-6">
          Biturbo Market Assets
        </h3>
        <table className="min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
          <thead className="bg-transparent">
            <tr className="h-[85px]">
              <th
                scope="col"
                className="px-6 py-5  text-left text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
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
                className="px-6 py-5 text-left text-[18px]/[21px] font-sora text-gray-400 text-light-200 font-semibold"
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
                <tr key={index} className="hover:bg-[#FFFFFF0D] cursor-pointer">
                  <td className="px-6 py-7 whitespace-nowrap">
                    <div className="ml-4 flex items-center">
                      <Image src={data.icon} alt="coin-icon" />
                      <div className="text-[16px]/[21px] ml-3 font-sora text-white">
                        {data.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-7 whitespace-nowrap">
                    <div className="text-[16px]/[21px] font-sora text-white ">
                      {data.collateral}
                    </div>
                  </td>
                  <td className="px-6 py-7 whitespace-nowrap">
                    <span className="text-[16px]/[21px] font-sora text-white ">
                      {data.tvl}
                    </span>
                  </td>
                  <td className="text-[16px]/[21px] px-6 py-7 font-sora text-white ">
                    {data.mcr}
                  </td>
                  <td className="text-[16px]/[21px] px-6 py-7 pl-12 font-sora text-white ">
                    {data.apr}
                  </td>
                  <td className="text-[18px]/[22px] px-6 py-7 pl-12 font-sora  text-white ">
                    {" "}
                    <button className="bg-[#082a20] text-gray-400 border border-gray-500 w-20  py-1 rounded-[5px]">
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

export default Table;
