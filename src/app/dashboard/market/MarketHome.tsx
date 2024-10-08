import Image from "next/image";
import { marketData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Table from "../../components/tables/MarketTable";
import Button from "@/app/components/ui/button";
import { useContext, useMemo } from "react";
import { AppContext } from "@/app/providers/context/context-provider";
import { compactNumberFormat } from "@/app/utilities/amount-fomatter";

const MarketHome = () => {
  const { marketData: data } = useContext(AppContext);
  const dataInfo = useMemo(() => {
    if (data) {
      return data.reduce(
        (accmulator, token) => {
          return {
            totalBorrows:
              accmulator.totalBorrows + Number(token.totalBorrowsUsd),
            totalSupply: accmulator.totalSupply + Number(token.totalSupplyUsd),
          };
        },
        {
          totalBorrows: 0,
          totalSupply: 0,
        },
      );
    }
  }, [data]);
  console.log(dataInfo, "data-info");

  return (
    <div className="max-w-[2000px] mx-auto">
      <div className=" px-4 md:px-10   bg-[#02120D] font-sora h-[186px] md:h-[255px] lg:h-[255px] xl:h-[300px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto  ">
          <div className="py-0 md:py-4 lg:py-6 xl:py-8 ">
            <h1 className="block lg:hidden text-bold text-[14px]/[20px] md:text-[28px]/[40px] lg:text-[34px]/[20px] text-white font-sora font-regular">
              Markets{" "}
            </h1>
            <h1 className="text-bold text-[24px]/[30px] md:text-[34px]/[30px] mt-1 xl:mt-4 lg:text-[48px]/[80px]  text-[#01F8AF] font-sora font-bold">
              Biturbo Market{" "}
            </h1>
          </div>
          <div className="hidden lg:flex justify-between  items-center">
            <div className="lg:w-3/5 xl:w-2/3 flex items-center lg:rounded-[7px] xl:rounded-[10px] bg-[#013B2A] justify-between lg:h-[85px]  xl:h-[115px]">
              <div className=" text-white  flex-col px-2 lg:px-6 cursor-pointer">
                <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  Total Market Size
                </h3>
                <h6 className="font-helvatica text-[8px]  font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  10.54B
                </h6>
              </div>
              <div className=" text-white  flex-col px-2 lg:px-6 cursor-pointer">
                <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  Total Available
                </h3>
                <h6 className="font-helvatica text-[8px]  font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  {compactNumberFormat(dataInfo?.totalSupply, true) ?? 0}
                </h6>
              </div>
              <div className=" text-white  flex-col px-2 lg:px-6 cursor-pointer">
                <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  Total Borrows
                </h3>
                <h6 className="font-helvatica text-[8px]  font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  {compactNumberFormat(dataInfo?.totalBorrows, true) ?? 0}
                </h6>
              </div>
              <div className=" text-white  flex-col px-2 lg:px-6 cursor-pointer">
                <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  Collateralization
                </h3>
                <h6 className="font-helvatica text-[8px]  font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                  133.19%
                </h6>
              </div>
            </div>

            <div className="w-1/4 xl:h-[48px] relative bg-[#FFFFFF0D] flex items-center border border-white border-opacity-30 lg:h-[40px] gap-2  rounded-[5px]">
              <Image
                src={images.searchIcon}
                width={18}
                height={18}
                alt="search-icon"
                className="absolute left-3"
              />
              <input
                type="text"
                className="w-full ml-10 bg-transparent placeholder:text-light-200  focus:outline-none font-montserrat text-light-200 lg:text-[10px] xl:text-[14px]"
                placeholder="Search assets name, symbol or address "
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-2 mt-2 md:mt-0">
          <div className="flex justify-between items-center ">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Total Market Size
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  10.54B
                </div>
              </div>
              <div className="flex-col">
                <div className=" text-[6px] md:text-[10px] text-white">
                  Total Available
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  5.64B
                </div>
              </div>
            </div>
            <div className="w-[40px] h-[10px] relative bg-[#FFFFFF0D] flex items-center justify-center  border border-white border-opacity-30 rounded-[4px]  py-[15px]">
              <Image
                src={images.searchIcon}
                width={14}
                height={14}
                alt="search-icon"
                className="absolute "
              />
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Total Borrows
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  3.19B
                </div>
              </div>
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Collateralization
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  133.19%
                </div>
              </div>
            </div>

            <Button
              variant={"primary"}
              className="w-[110px] md:w-[130px] lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] bg-[#FFFFFF0D]  border border-white border-opacity-30 text-[8px] md:text-[10px] lg:text-[15px]"
            >
              View Transactions
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default MarketHome;
