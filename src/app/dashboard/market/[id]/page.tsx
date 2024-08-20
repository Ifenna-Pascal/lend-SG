import Image from "next/image";
import { marketData } from "../../../__mockdata__/market";
import { images } from "../../../utilities/images";
import { GoArrowLeft } from "react-icons/go";
import Button from "@/app/components/ui/button";

import MarketDetailsTable from "@/app/components/tables/MarketDetailsTable";

const MarketDetailsPage = ({ params }: { params: any }) => {
  const marketId = params?.id;
  console.log(marketId, "this is the id needed");
  return (
    <div className="max-w-[2000px] mx-auto h-[220vh] md:h-[170vh] lg:h-[80vh] xl:h-[160vh]">
      <div className=" px-4 md:px-10   bg-[#02120D] font-sora h-[193px] md:h-[280px] lg:h-[250px] xl:h-[300px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto  ">
          <div className="py-0 md:py-10 flex flex-col md:flex-row gap-3 items-left md:items-center ">
            <Button
              variant={"primary"}
              className="w-[60px] md:w-[90px] lg:w-[120px] xl:w-[148px] h-[20px] font-sora font-light md:h-[35px] text-white text-opacity-50 border border-white border-opacity-40 lg:h-[45px] xl:h-[57px] text-[5px]/[10px] md:text-[10px] bg-transparent lg:text-[14px] xl:text-[18px]/[27px] rounded-[5px]"
            >
              <GoArrowLeft /> Go Back
            </Button>
            <div className="flex items-center gap-2 ml-0 md:ml-2 ">
              <Image
                src={images?.usdt}
                width={14}
                height={14}
                alt="search-icon "
                className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] xl:w-[60px] xl:h-[60px] bg-none"
              />
              <h1 className="text-bold text-[19px]/[24px] md:text-[24px]/[30px] lg:text-[36px]/[40px] xl:text-[48px]/[60px]  text-white font-sora font-medium">
                USDT
              </h1>

              <Image
                src={images?.wallet}
                width={14}
                height={14}
                alt="search-icon"
                className="w-[11px] h-[9px] ml-2 md:w-[15px] md:h-[13px] lg:h-[17px] lg:w-[20px] xl:w-[28px] xl:h-[22px]"
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-between  items-center">
            <div className="lg:w-3/5 xl:w-2/3 flex items-center lg:rounded-[7px] xl:rounded-[10px] bg-[#013B2A] justify-between lg:h-[85px]  xl:h-[115px]">
              {marketData?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" text-white  flex-col px-2 lg:px-6 cursor-pointer"
                  >
                    <h3 className="font-sora text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                      {data?.title}
                    </h3>
                    <h6 className="font-helvatica text-[8px]  font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                      <span className="text-white text-opacity-70  font-semibold">
                        {data?.sign}
                      </span>
                      {data?.amount}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:hidden mt-3 md:mt-0 ">
          <div className="flex justify-between  ">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Reserve Size
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  7.34B
                </div>
              </div>
              <div className="flex-col">
                <div className=" text-[6px] md:text-[10px] text-white">
                  Available Liquidity
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  2.34M
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-3">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Utilization Rate
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  80.27%
                </div>
              </div>
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Oracle Price
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  $3,334.13
                </div>
              </div>
            </div>
          </div>
        </div>
        <MarketDetailsTable />
      </div>
    </div>
  );
};

export default MarketDetailsPage;
