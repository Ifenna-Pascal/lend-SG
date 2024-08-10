import Image from "next/image";
import { marketTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const SingleTable = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
            <div className="flex space-x-2 mt-3">
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
          <div className="flex px-6 justify-between items-center mt-6 w-full lg:w-2/3">
            <div className="">
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[16px]">
                <span className="text-[#01F8AF] text-[30px]">.</span>Supply APR
              </p>
            </div>
            <div className="flex justify-between space-x-2 text-white">
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2  bg-[#181919]">
                1D
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2 bg-[#444545]">
                7Ds
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2 bg-[#181919]">
                30s
              </h3>
            </div>
          </div>

          <div style={{ height: 300 }} className="mt-7 w-full px-7 lg:w-2/3">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className=" text-gray-400 mt-8 px-6">
          <hr />
        </div>
        <div>
          <div className="flex space-x-2 text-white justify-center md:justify-start px-6 mt-8">
            <p className="text-[12px] md:text-[16px] font-sora text-center md:text-left font-regular text-gray-400">
              Borrow Info
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
            <div className="flex space-x-2 mt-3">
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
          <div className="flex px-6 justify-between items-center mt-6 w-full lg:w-2/3">
            <div className="">
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[16px]">
                <span className="text-[#01F8AF] text-[30px]">.</span>Supply APR
              </p>
            </div>
            <div className="flex justify-between space-x-2 text-white">
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2  bg-[#181919]">
                1D
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2 bg-[#444545]">
                7Ds
              </h3>
              <h3 className="text-[16px] text-white font-sora font-regular shadow-lg px-3 md:px-4 py-1 md:py-2 bg-[#181919]">
                30s
              </h3>
            </div>
          </div>

          <div style={{ height: 300 }} className="mt-7 w-full px-7 lg:w-2/3">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTable;
