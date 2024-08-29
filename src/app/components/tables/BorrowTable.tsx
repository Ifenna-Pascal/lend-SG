"use client";
import Image from "next/image";
import { borrowTable } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import Button from "@/app/components/ui/button";
import { getBigNumber } from "@/app/utilities/amount-fomatter";
import { useState } from "react";
import ModalContainer from "../modal";
import BorrowModal from "../modal/borrow-modal";

const BorrowTable = ({
  marketData,
  callback,
  loading,
}: {
  marketData: any[];
  callback: () => void;
  loading: boolean;
}) => {
  const [borrowModal, setBorrowModal] = useState(false);
  const [seletedId, setSelectedId] = useState("");

  const onBorrow = (id: string) => {
    setSelectedId(id);
    setBorrowModal(true);
  };

  const closeAction = () => {
    setBorrowModal(false);
    callback();
  };

  return (
    <div className=" py-6 basis-[50%]">
      <div className="w-full flex flex-col px-4 justify-center mb-16 mt-3 gap-1  border-none bg-[#030D0A] text-white border border-white border-opacity-15  rounded-[6px] lg:rounded-[11px] text-opacity-50 h-[102px]  md:h-[133px] lg:h-[150px] xl:h-[183px] text-[6px] md:text-[10px] lg:text-[16px]">
        <div className="flex items-center gap-1">
          <Image
            src={images.plus}
            alt="plus"
            width={40}
            height={40}
            className="w-4 md:w-7  lg:w-8 xl:w-10"
          />
          <h3 className="font-sora text-white text-opacity-90 font-medium text-[14px]/[21px] md:text-[18px]/[30px] lg:text-[20px]/[35px] xl:text-[26px]/[39px]">
            Borrow Eth
          </h3>
        </div>

        <h6 className="font-sora font-light text-gray-400 text-[11px]/[16px] mt-5 md:text-[14px]/[20px] lg:text-[14px]/[26px] xl:text-[20px]/[30px]">
          Nothing Supplied yet
        </h6>
      </div>
      <div className="border border-[#3b3c3c] bg-[#030D0A] shadow-md min-h-[350px] rounded-[10px] ">
        <h3 className="text-white mt-6 text-[14px] xl:text-[16px] font-sora px-6 md:px-10 lg:px-3">
          Assets to Borow
        </h3>
        <div className="hidden lg:block">
          <table className=" divide-y font-sora  divide-[#FFFFFF1A] ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                <th
                  scope="col"
                  className=" lg:px-3 py-5   text-left lg:text-[14px]/[18px] xl:text-[14px]/[18px] font-sora text-white text-opacity-60 "
                >
                  <span className="flex items-center">
                    <span>Assets</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 lg:px-3 py-5 text-left lg:text-[14px]/[18px] xl:text-[14px]/[18px] font-sora text-white text-opacity-60"
                >
                  <span className="flex items-center">
                    <span>Balance</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 lg:px-3 py-5 text-left lg:text-[14px]/[18px] xl:text-[14px]/[18px] font-sora text-white text-opacity-60"
                >
                  <span className="flex items-center">
                    <span>Borrowed</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 lg:px-3 py-5 text-left lg:text-[14px]/[18px] xl:text-[14px]/[18px] font-sora text-white text-opacity-60"
                >
                  <span className="flex items-center">
                    <span>APY</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 lg:px-3 py-5 text-left lg:text-[14px]/[18px] xl:text-[14px]/[18px] font-sora text-white text-opacity-60"
                >
                  <span className="flex items-center">
                    <span>Status</span>
                    <Image
                      src={images.colleteral}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-[#FFFFFF1A]">
              {marketData && marketData.length > 0 ? (
                marketData.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className="hover:bg-[#FFFFFF0D] cursor-pointer"
                    >
                      {borrowModal && seletedId === data.id && (
                        <ModalContainer open={borrowModal} close={closeAction}>
                          <BorrowModal
                            marketArray={marketData}
                            close={closeAction}
                            key={index}
                            id={data.id}
                          />
                        </ModalContainer>
                      )}
                      <td className="lg:px-4 lg:px-3 py-7 whitespace-nowrap">
                        <span className=" flex items-center ">
                          <Image
                            src={data.img}
                            alt="coin-icon"
                            width={26}
                            height={26}
                            className="lg:w-[26px] xl:w-[26px]"
                          />
                          <span className="lg:text-[14px]/[18px] xl:text-[14px]/[18px] ml-2 xl:ml-3 font-sora text-white">
                            {data.name}
                          </span>
                        </span>
                      </td>
                      <td className="lg:px-0 lg:px-3 py-7 whitespace-nowrap">
                        <span className="lg:text-[14px]/[18px] xl:text-[14px]/[18px]  font-sora text-white">
                          {loading
                            ? "..."
                            : getBigNumber(data.walletBalance ?? 0)
                                .dp(2, 1)
                                .toString(10)}
                        </span>
                      </td>
                      <td className="lg:px-0 lg:px-3 py-7 whitespace-nowrap">
                        <span className="lg:text-[14px]/[18px] xl:text-[14px]/[18px]  font-sora text-white">
                          {loading
                            ? "..."
                            : getBigNumber(data.borrowBalance ?? 0)
                                .dp(2, 1)
                                .toString(10)}
                        </span>
                      </td>
                      <td className="lg:px-0 lg:px-3 py-7 whitespace-nowrap">
                        <span className="lg:text-[14px]/[18px] xl:text-[14px]/[18px]  font-sora text-white">
                          {getBigNumber(data.borrowApy ?? 0)
                            .dp(3, 1)
                            .toString(10) ?? 0}
                          %
                        </span>
                      </td>

                      <td className=" lg:text-[8px]/[11px] xl:text-[10px]/[13px] lg:px-1 lg:px-3 py-7 pl-12 font-sora text-white ">
                        <button className="bg-[#1F8885] bg-opacity-[49%] lg:w-[58px] h-[20px] xl:w-[68px] xl:h-[23px] rounded-[3px] ">
                          Live
                        </button>
                      </td>
                      <td className="lg:text-[8px]/[11px] xl:text-[10px]/[13px]  lg:px-1 lg:px-3 py-7 font-sora  text-white text-opacity-60  ">
                        <button
                          onClick={() => onBorrow(data.id)}
                          className="bg-[#0F5440] lg:w-[46px] h-[20px] xl:w-[56px] xl:h-[23px]  border border-white border-opacity-15 rounded-[3px] "
                        >
                          Borrow
                        </button>
                      </td>
                      <td className="lg:text-[8px]/[11px] xl:text-[10px]/[13px] lg:px-1 lg:px-3 py-7 pl-12 font-sora text-white text-opacity-60   ">
                        {" "}
                        <button className="bg-[#FFFFFF0D] lg:w-[45px] h-[20px] xl:w-[55px] xl:h-[23px]  rounded-[3px] border border-white border-opacity-30 ">
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="w-8 h-8 border-2 ml-2 border-dashed rounded-full animate-spin border-white"></div>
              )}
            </tbody>
          </table>
        </div>

        <div className="">
          <div className="lg:hidden flex flex-col px-0 md:px-3  mb-9">
            {borrowTable.map((data, index) => {
              return (
                <div key={index} className=" cursor-pointer">
                  <div className="flex flex-col">
                    <div className=" flex-col items-center px-6">
                      <div className="w-full text-white text-opacity-50 mb-7  mt-5">
                        <hr />
                      </div>
                      <div className="flex items-center px-2">
                        <Image
                          src={data.icon}
                          alt="coin-icon"
                          width={100}
                          height={100}
                          className="w-[20px] md:w-[24px]"
                        />
                        <div className=" text-[18px]/[18px] md:text-[20px]/[22px] ml-3 font-medium font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                      <div className="flex-col mt-5">
                        <div className="flex items-center justify-between">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white text-opacity-60 font-normal">
                            Value
                          </h3>
                          <div className="text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white ">
                            {data.balance}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora  text-white text-opacity-60 font-normal">
                            Borrow APY
                          </h3>
                          <div className="text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white ">
                            {data.apy}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora  text-white text-opacity-60 font-normal">
                            Status
                          </h3>
                          <div className="text-[14px]/[18px] md:text-[10px]/[15px] font-sora text-white ">
                            <button className="bg-[#0F5440] w-[58px] h-[22px] md:w-[70px] md:h-[22px] py-1 rounded-[4px] ">
                              {data.status}
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-8 mt-4 mb-1">
                          <Button className="bg-[#106157]   h-[31px] text-[12px] md:text-[14px] text-white md:h-[34px] text-opacity-50 rounded-[4px] md:w-full">
                            {data.borrow}
                          </Button>
                          <Button className="  border border-white border-opacity-30 bg-[#FFFFFF0D]  h-[31px] text-[12px] md:h-[34px] md:text-[14px] md:w-full text-white text-opacity-50 rounded-[4px]">
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

export default BorrowTable;
