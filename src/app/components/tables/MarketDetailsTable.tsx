"use client";

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
import Button from "@/app/components/ui/button";
import { useState } from "react";
import Matic from "../marketdetails-component/Matic";
import MaticEth from "../marketdetails-component/MaticEth";

const data = [
  { name: "July 8", uv: 8 },
  { name: "July 12", uv: 8 },
  { name: "July 14", uv: 4 },
  { name: "July 20", uv: 2 },
  { name: "July 22", uv: 0 },
];

const MarketDetailsTable = () => {
  // Custom tick component to add margin above X-axis labels
  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <text x={x} y={y + 16} textAnchor="middle" fill="#666" fontSize={12}>
        {payload.value}
      </text>
    );
  };
  const [activeTab, setActiveTab] = useState("matic");

  const handleTabChange = (tab: "matic" | "maticEth") => {
    setActiveTab(tab);
  };
  return (
    <div className="overflow-x-auto py-6  mt-8 flex flex-col lg:flex-row gap-6">
      <div className="border border-white border-opacity-10 bg-[#030D0A] shadow-md rounded-[10px] w-full lg:w-1/2 xl:w-1/2  px-3 md:px-6 lg:px-6 xl:px-8">
        <h3 className="text-white mt-6 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[26px] font-sora font-regular px-6">
          Reserve status & configuration
        </h3>
        <div className="  mt-5 px-6">
          <hr className="text-gray-500" />
        </div>
        <div>
          <div className="flex space-x-2 text-white justify-center items-center md:justify-start px-6 mt-5">
            <p className="text-[12px] lg:text-[10px] xl:[16px] font-sora text-center md:text-left font-regular text-gray-400">
              Supply Info
            </p>
            <Image
              src={images.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
            />
          </div>
          <div className=" flex flex-col md:flex-row space-x-4 items-center px-6  text-white mt-3">
            <div className="flex">
              <h3 className="text-[14px] lg:text-[10px] xl:text-[16px] text-[#012016] font-sora font-medium px-3 py-3 bg-[#01F8AF]">
                45.72%
              </h3>
              <h3 className="text-[14px] lg:text-[10px] xl:text-[16px] text-[#01F8AF] font-sora font-medium px-4 py-3 bg-[#012016]">
                54.28%
              </h3>
            </div>
            <div className="flex space-x-2 mt-3 ">
              <div>
                <div className="flex text-white items-center">
                  <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[12px] font-sora  font-regular text-white text-opacity-60">
                    Total supplied
                  </p>
                  <Image
                    src={images.caution}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-3 md:w-4 lg:w-4 text-white text-opacity-60"
                  />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[10px] xl:text-[16px] font-sora  font-medium text-white">
                  802.60K of 1.80M
                </p>
                <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[14px] font-sora  font-normal text-white text-opacity-60">
                  $2.74B of $6.14B
                </p>
              </div>
              <div className="flex  space-x-2">
                <div className="border border-r-white"></div>
                <div>
                  <p className="text-[8px]  lg:text-[10px] xl:text-[16px] font-sora   font-normal text-white">
                    APY
                  </p>
                  <p className="text-[10px]  lg:text-[10px] xl:text-[16px]] font-sora  font-normal text-white text-opacity-60">
                    1.73%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-6 justify-between items-center mt-6 w-full ">
            <div className="">
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[10px] lg:text-[10px] xl:text-[16px]">
                <span className="text-[#01F8AF] text-[30px]">.</span>Supply APR
              </p>
            </div>
            <div className="flex justify-between space-x-2 text-white">
              <h3 className="text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
                1D
              </h3>
              <h3 className=" text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#444545]">
                7Ds
              </h3>
              <h3 className="text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
                30s
              </h3>
            </div>
          </div>

          <div
            style={{ height: 250 }}
            className="mt-7 w-full px-6  text-[14px] "
          >
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line type="natural" dataKey="uv" stroke="" />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={false} axisLine={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="px-3">
            <div className="flex space-x-2 text-white  items-center md:justify-start px-6 mt-5">
              <p className="text-[10px] lg:text-[10px] xl:[16px] font-sora text-center md:text-left font-regular text-gray-400">
                Collateral usage, Can be collateral
              </p>
              <Image
                src={images.caution}
                width={14}
                height={14}
                alt="caution-icon"
                className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
              />
            </div>
            <div className="flex flex-col md:flex-row px-6 gap-3 mt-3">
              <div className="px-3 flex flex-col justify-center  border border-white border-opacity-10 rounded-[5px]  bg-[#FFFFFF0D] w-[82px] h-[33px] md:w-[80px] lg:w-[100px] xl:w-[130px] md:h-[40px] lg:h-[45px] xl:h-[60px]">
                <p className="text-[8px] md:text-[9px]  xl:text-[16px] font-sora text-white  font-normal">
                  Max LTV
                </p>
                <p className="text-[9px] md:text-[9px]  xl:text-[16px] font-sora text-white  font-normal text-opacity-60">
                  80.50%
                </p>
              </div>
              <div className="px-3 flex flex-col justify-center border border-white border-opacity-10 rounded-[5px]  bg-[#FFFFFF0D] w-[122px] h-[33px] md:w-[130px] lg:w-[200px] xl:w-[242px] md:h-[40px] lg:h-[45px] xl:h-[60px]">
                <p className="text-[8px] md:text-[9px]   xl:text-[16px] font-sora text-white  font-normal">
                  Liquidation threshold
                </p>
                <p className="text-[9px] md:text-[9px]  xl:text-[16px] font-sora text-white  font-normal text-opacity-60">
                  83.00%
                </p>
              </div>
              <div className="px-3 flex flex-col justify-center  border border-white border-opacity-10  rounded-[5px]  bg-[#FFFFFF0D] w-[122px] h-[33px] md:w-[120px] lg:w-[160px] xl:w-[220px] md:h-[40px] lg:h-[45px] xl:h-[60px]">
                <p className="text-[8px] md:text-[8px]  xl:text-[16px] font-sora font-normal text-white ">
                  Liquidation penalty
                </p>
                <p className="text-[9px] md:text-[9px]  xl:text-[16px] font-sora font-normal text-white text-opacity-60">
                  5.00%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-400 mt-8 px-8">
          <hr />
        </div>
        <div className="px-8">
          <div className="flex space-x-2 text-white justify-center items-center md:justify-start  mt-5">
            <p className="text-[12px] lg:text-[10px] xl:[16px] font-sora text-center md:text-left font-regular text-gray-400">
              Borrow Info
            </p>
            <Image
              src={images.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
            />
          </div>
          <div className=" flex flex-col md:flex-row space-x-4 items-center   text-white mt-3">
            <div className="flex">
              <h3 className="text-[14px] lg:text-[10px] xl:text-[16px] text-[#012016] font-sora font-medium px-3 py-3 bg-[#01F8AF]">
                45.72%
              </h3>
              <h3 className="text-[14px] lg:text-[10px] xl:text-[16px] text-[#01F8AF] font-sora font-medium px-4 py-3 bg-[#012016]">
                54.28%
              </h3>
            </div>
            <div className="flex space-x-2 items-center mt-3">
              <div>
                <div className="flex text-white items-center">
                  <p className="text-[8px] md:text-[12px] lg:text-[8px] xl:text-[12px] font-sora  font-regular text-white text-opacity-60">
                    Total supplied
                  </p>
                  <Image
                    src={images.caution}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-3 md:w-4 lg:w-4 text-white text-opacity-60"
                  />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[9px] xl:text-[16px] font-sora  font-medium text-white">
                  802.60K of 1.80M
                </p>
                <p className="text-[8px] md:text-[12px] lg:text-[8px] xl:text-[14px] font-sora  font-normal text-white text-opacity-60">
                  $2.74B of $6.14B
                </p>
              </div>
              <div className="flex  space-x-2">
                <div className="border border-r-white"></div>
                <div>
                  <p className="text-[8px]  lg:text-[10px] xl:text-[16px] font-sora  font-normal text-white">
                    APY
                  </p>
                  <p className="text-[10px]  lg:text-[10px] xl:text-[16px]] font-sora  font-normal text-white text-opacity-60">
                    1.73%
                  </p>
                </div>
              </div>
              <div className="flex  space-x-2">
                <div className="border border-r-white"></div>
                <div>
                  <p className="text-[8px]  lg:text-[10px] xl:text-[16px] font-sora   font-normal text-white">
                    Borrow cap
                  </p>
                  <p className="text-[10px]  lg:text-[10px] xl:text-[16px]] font-sora  font-normal text-white text-opacity-60">
                    3.14M
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-between items-center mt-6 w-full ">
            <div className="">
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[10px] lg:text-[10px] xl:text-[16px]">
                <span className="text-[#01F8AF] text-[30px]">.</span>Supply APR
              </p>
            </div>
            <div className="flex justify-between space-x-2 text-white">
              <h3 className="text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
                1D
              </h3>
              <h3 className=" text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#444545]">
                7Ds
              </h3>
              <h3 className="text-[10px] lg:text-[12px] xl:text-[16px] text-white font-sora font-normal shadow-lg px-3 md:px-2 py-1  md:py-2 lg:px-2 lg:py-2 xl:py-2  bg-[#FFFFFF0D]">
                30s
              </h3>
            </div>
          </div>

          <div style={{ height: 250 }} className="mt-7 w-full  text-[14px] ">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line type="natural" dataKey="uv" stroke="" />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={false} axisLine={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="flex space-x-2 text-white  items-center md:justify-start  mt-5">
              <p className="text-[10px] lg:text-[10px] xl:[16px] font-sora text-center md:text-left font-regular text-gray-400">
                Collateral info
              </p>
              <Image
                src={images.caution}
                width={14}
                height={14}
                alt="caution-icon"
                className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
              />
            </div>
            <div className="flex flex-col md:flex-row  gap-3 mt-3 mb-10">
              <div className="px-3 flex flex-col  justify-center border border-white border-opacity-10  rounded-[5px]  bg-[#FFFFFF0D] w-[100px] h-[33px] md:w-[120px] lg:w-[160px] xl:w-[220px] md:h-[40px] lg:h-[45px] xl:h-[60px]">
                <p className="text-[8px] md:text-[11px]  xl:text-[16px] font-sora text-white  font-normal">
                  Reserve factor
                </p>
                <p className="text-[8px] md:text-[9px]  xl:text-[16px] font-sora text-white  font-normal text-opacity-60">
                  15.50%
                </p>
              </div>
              <div className="px-3 flex flex-col justify-center border border-white border-opacity-10 rounded-[5px]  bg-[#FFFFFF0D] w-[120px] h-[33px] md:w-[140px] lg:w-[200px] xl:w-[242px] md:h-[40px] lg:h-[45px] xl:h-[60px]">
                <p className="text-[8px] md:text-[11px]  xl:text-[16px] font-sora text-white  font-normal">
                  Collector Contract
                </p>
                <p className="text-[8px] md:text-[9px]  xl:text-[16px] font-sora text-white  font-normal text-opacity-60">
                  83.00%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white border-opacity-10 bg-[#030D0A] shadow-md rounded-[10px] w-full lg:w-1/2 xl:w-1/2  px-3 md:px-6 lg:px-0 h-[40vh] ">
        <h3 className="text-white mt-6 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[26px] font-sora font-regular px-6">
          Your Info
        </h3>
        <div className="flex justify-start w-full items-center h-[39px] md:h-[45px] mx-auto shadow-lg mt-5 md:mt-7 px-8  ">
          <Button
            className={`${activeTab === "matic" ? "bg-gradient-to-r from-[#019267] to-[#01F8AF] w-1/2   h-[35px] md:h-[50px] lg:h-[50px] xl:h-[80px] text-[14px]/[15px] md:[15px]/[18px] lg:-text-[20px]/[28px] xl:text-[20px]/[37px]  text-[#012016] " : "bg-[#012016] text-[#01F8AF] text-[14px]/[15px] md:[15px]/[18px] lg:-text-[20px]/[28px] w-1/2 xl:text-[20px]/[37px]   h-[35px] md:h-[50px] lg:h-[50px] xl:h-[80px]"} font-sora 
               font-regular `}
            onClick={() => handleTabChange("matic")}
          >
            Matic
          </Button>
          <Button
            className={`${activeTab === "maticEth" ? "bg-gradient-to-r from-[#019267] to-[#01F8AF] w-1/2  h-[35px] md:h-[50px] lg:h-[50px] xl:h-[80px] text-[#012016] text-[14px]/[15px] md:[15px]/[18px] lg:-text-[20px]/[28px] xl:text-[20px]/[37px] " : "bg-[#012016] text-[#01F8AF] text-[14px]/[15px] md:[15px]/[18px] lg:-text-[20px]/[28px] xl:text-[20px]/[37px]  w-1/2 h-[35px] md:h-[50px] lg:h-[50px] xl:h-[80px]"} font-sora 
               font-regular `}
            onClick={() => handleTabChange("maticEth")}
          >
            MaticEth
          </Button>
        </div>
        <div className="mt-4">
          {activeTab === "matic" ? <Matic /> : <MaticEth />}
        </div>
      </div>
    </div>
  );
};

export default MarketDetailsTable;
