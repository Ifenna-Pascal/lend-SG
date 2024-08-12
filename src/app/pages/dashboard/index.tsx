"use client";

import Image from "next/image";
import { dashboardData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Borrowtable from "./components/borrow";
import Supplytable from "./components/supply-table";
import Button from "../../components/ui/button";
import { useState } from "react";
import logo from "../../assets/images/homapage/singlelogo.svg";
import ModalContainer from "@/app/components/modal";
import WalletConnectModal from "@/app/components/modal/connect-modal";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [activeTab, setActiveTab] = useState("supply");
  const [walletConnected, setWalletConnected] = useState(false);
  const handleTabChange = (tab: "supply" | "borrow") => {
    setActiveTab(tab);
  };

  const handleWalletConnect = () => {
    // Implement logic to connect wallet here
    // Once successful, set walletConnected to true
    setWalletConnected(true);
  };
  return (
    <div className="max-w-[2000px] mx-auto bg-gradient-to-b from-[black] to-[#02120D] h-screen ">
      <div className=" px-4 md:px-10   bg-[#02120D] font-sora h-[169px] md:h-[230px] lg:h-[290px] xl:h-[307px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto  ">
          <div className="py-4 md:py-6 xl:py-8 ">
            <h1 className="block lg:hidden text-bold text-[14px]/[20px] md:text-[28px]/[40px] lg:text-[34px]/[20px] text-white font-sora font-regular">
              Dashboard{" "}
            </h1>
            <h1 className="text-bold text-[24px]/[30px] md:text-[34px]/[30px] mt-0 md:mt-2 lg:text-[50px]/[80px] xl:text-[54px]/[80px] text-[#01F8AF] font-sora font-bold">
              Biturbo Market{" "}
            </h1>
          </div>
          <div className="flex justify-between mb-6 items-end md:items-center ">
            <div className="w-[136px] h-[44px] md:w-[230px] md:h-[80px] lg:w-[350px] xl:w-[358px] lg:h-[105px] xl:h-[115px] flex items-center px-2 md:px-4 rounded-md bg-[#013B2A] justify-between   ">
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[13px] lg:text-[14px]/[24px] xl:text-[16px]/[24px]">
                  Net Worth
                </h3>
                <div className="flex gap-1">
                  <Image
                    src={images.eth}
                    alt="coinimage"
                    className="w-2 md:w-4"
                  />
                  <h6 className="font-sora font-bold text-[10px] text-white text-opacity-70 md:text-[18px] lg:text-[22px]/[34px] xl:text-[24px]/[36px]">
                    $0.00
                  </h6>
                </div>
              </div>
              <div className="text-white  flex-col items-center px-1 cursor-pointer">
                <h3 className="font-sora text-[8px] md:text-[13px] lg:text-[14px]/[24px] xl:text-[16px]/[24px]">
                  Net APY
                </h3>
                <h6 className="font-sora font-bold text-[10px]  text-white text-opacity-70 md:text-[18px] lg:text-[22px]/[34px] xl:text-[24px]/[36px]">
                  -----
                </h6>
              </div>
            </div>
            <div className="h-[54px] relative flex flex-col justify-center items-end gap-3 ">
              <div>
                <Button
                  variant={"primary"}
                  className="w-[77px] md:w-[130px] lg:w-[137px] xl:w-[154px] bg-[#1A1A1A]  h-[17px]  md:h-[35px] lg:h-[40px] xl:h-[45px]  rounded-[4px] lg:rounded-[9px] xl:rounded-[10px] text-white text-opacity-70  border border-white border-opacity-30  text-[6px] md:text-[10px] lg:text-[12px] xl:text-[14px]"
                >
                  View Transactions
                </Button>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] flex items-center gap-1 xl:w-[157px] border-none bg-[#013B2A] text-white  rounded-[4px] lg:rounded-[6px] xl:rounded-[10px] text-opacity-50 h-[17px]  md:h-[35px] lg:h-[45px] xl:h-[54px] text-[6px] md:text-[10px] lg:text-[14px] xl:text-[16px]"
                >
                  <Image
                    src={images.plus}
                    alt="coinimage"
                    className="w-2 md:w-4 "
                  />
                  Supply Eth
                </Button>
                <Button
                  variant={"primary"}
                  className="w-[80px] md:w-[130px] flex items-center gap-1 xl:w-[159px] border-none bg-[#013B2A] rounded-[4px] lg:rounded-[6px] xl:rounded-[10px] h-[17px] text-white text-opacity-50 
                  md:h-[35px] lg:h-[45px] xl:h-[54px] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]"
                >
                  <Image
                    src={images.plus}
                    alt="coinimage"
                    className="w-2 md:w-4"
                  />
                  Borrow Eth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:hidden flex flex-col bg-[#01291D]  pt-5 px-4 md:px-10  ">
        <div className="flex justify-between bg-[#012016] w-full md:w-[680px] h-[39px] mx-auto shadow-lg ">
          <Button
            className={`${activeTab === "supply" ? "bg-[#01F8AF] text-[#012016] w-full md:w-[341px]" : "bg-[#012016] w-full md:w-[339px] text-[#01F8AF]"} rounded-[3px] `}
            onClick={() => handleTabChange("supply")}
          >
            Supply
          </Button>
          <Button
            className={`${activeTab === "borrow" ? "bg-[#01F8AF] text-[#012016] w-full md:w-[341px]" : "bg-[#012016] w-full md:w-[339px] text-[#01F8AF]"} rounded-[3px]`}
            onClick={() => handleTabChange("borrow")}
          >
            Borrow
          </Button>
        </div>
        <div className="mt-4">
          {activeTab === "supply" ? <Supplytable /> : <Borrowtable />}
        </div>
      </div>

      <div className=" hidden lg:flex justify-between gap-2 lg:gap-7 xl:gap-14 bg-[#01291D]  px-4 md:px-10 mx-auto ">
        <Supplytable />
        <Borrowtable />
      </div> */}

      <div className=" flex flex-col bg-[#01291D]  p-6 m-10    rounded-[10px]  md:p-10 justify-center items-center ">
        <Image
          src={logo}
          width={14}
          height={14}
          alt="search-icon"
          className="w-[48px] md:w-[75px] lg:w-[120px] xl:w-[136px]"
        />
        <p className="text-[8px]/[12px] md:text-[18px] lg:text-[24px]/[34px] mt-2  text-white font-sora font-medium xl:text-[28px]/[42px]">
          Please, connect your wallet
        </p>
        <p className="w-[80%] md:w-full text-[8px]/[12px] md:text-[18px]/[20px] text-center lg:text-[20px]/[38px] mt-2 md:mt-4 lg:mt-0 text-white text-opacity-70 font-medium font-sora mb-6 xl:text-[28px]/[42px]">
          Please connect your wallet to see your supplies, borrowings, and open
          positions.
        </p>
        <Button
          variant={"primary"}
          className="w-[65px] md:w-[130px] lg:w-[200px] xl:w-[238px]  bg-[#033426]  h-[18px]  md:h-[50px] lg:h-[60px] xl:h-[70px]  rounded-[5px] lg:rounded-[9px] xl:rounded-[10px] text-white text-opacity-70 border-none   text-[6px] md:text-[14px] lg:text-[18px] xl:text-[24px]"
          onClick={() => setOpen(true)}
        >
          Connect Wallet
        </Button>
      </div>

      <ModalContainer open={open} close={close}>
        <WalletConnectModal close={close} />
      </ModalContainer>
    </div>
  );
};

export default Dashboard;
