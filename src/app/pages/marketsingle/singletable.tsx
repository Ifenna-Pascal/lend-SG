import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";

const SingleTable = () => {
  return (
    <div className="overflow-x-auto py-6">
      <div className="border border-[#030D0A] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px] w-full md:w-2/3 xl:w-1/2">
        <h3 className="text-white mt-6 text-[16px] md:text-[25px] lg:text-[30px] font-sora font-regular px-6">
          Reserve status & configuration
        </h3>
        <div className=" text-gray-400 mt-5 px-6">
          <hr />
        </div>
        <div>
          <div className="flex space-x-2 text-white justify-center md:justify-start px-6 mt-5">
            <p className="text-[12px] md:text-[16px] font-sora text-center md:text-left font-regular text-gray-400">
              Supply Info
            </p>
            <Image
              src={images.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-5 lg:w-6 text-gray-400"
            />
          </div>
          <div className=" flex flex-col md:flex-row space-x-4 items-center px-6  text-white mt-3">
            <div className="flex">
              <h3 className="text-[16px] text-[#012016] font-sora font-regular px-4 py-3 bg-[#01F8AF]">
                45.72%
              </h3>
              <h3 className="text-[16px] text-[#01F8AF] font-sora font-regular px-4 py-3 bg-[#012016]">
                54.28%
              </h3>
            </div>
            <div className="flex mt-3">
              <div>
                <div className="flex text-white">
                  <p className="text-[10px] md:text-[14px] font-sora  font-regular text-gray-400">
                    Total supplied
                  </p>
                  <Image
                    src={images.caution}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-3 md:w-5 lg:w-6 text-gray-400"
                  />
                </div>
                <p className="text-[12px] md:text-[16px] font-sora  font-regular text-white">
                  802.60K of 1.80M
                </p>
                <p className="text-[10px] md:text-[14px] font-sora  font-regular text-gray-400">
                  $2.74B of $6.14B
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="border border-r-white"></div>
                <div>
                  <p className="text-[12px] md:text-[16px] font-sora  font-regular text-white">
                    APY
                  </p>
                  <p className="text-[12px] md:text-[16px] font-sora  font-regular text-gray-400">
                    1.73%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-6 justify-between mt-6 w-full lg:w-2/3">
            <div className="">
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[16px]">
                <span className="text-[#01F8AF] text-[30px]">.</span>Supply APR
              </p>
            </div>
            <div className="flex justify-between space-x-2 text-white">
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-4 py-2 bg-[#181919]">
                1D
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-4 py-2 bg-[#444545]">
                7Ds
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-4 py-2 bg-[#181919]">
                30s
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTable;
