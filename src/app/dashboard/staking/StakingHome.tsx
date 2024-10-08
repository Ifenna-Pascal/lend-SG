import Stakingsection from "@/app/components/staking-component/StakingSection";

const StakingHome = () => {
  return (
    <div className=" ">
      <div className=" w-full  ">
        <div className="mx-auto w-[80%] flex gap-2 justify-around px-6  lg:w-[800px] mt-8 md:mt-14 xl:w-[1139px] h-[120px] lg:h-[170px] xl:h-[200px] bg-[#1A1A1A] bg-opacity-[60%] border border-[#FFFFFF] border-opacity-10 shadow-xl  rounded-[15px]  items-center">
          <div className="bg-[#072018] bg-opacity-[49%] rounded-[15px] border border-[#FFFFFF] border-opacity-10   text-center w-[150px] md:w-[180px] lg:w-[230px] xl:w-[335px] h-[80px] lg:h-[105px] xl:h-[129px]">
            <h1 className="font-sora text-white text-opacity-[70%]  font-semibold text-[10px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px] mt-5 xl:mt-4">
              Token Prices
            </h1>
            <p className="text-white text-opacity-[85%] font-sora font-semibold text-[8px]/[10px] md:text-[10px]/[15px] lg:text-[14px]/[26px] xl:text-[26px]/[31px] mt-4 xl:mt-4 ">
              $0.0232
            </p>
          </div>
          <div className="bg-[#072018] bg-opacity-[49%] rounded-[15px] border border-[#FFFFFF] border-opacity-10   text-center w-[150px] md:w-[180px] lg:w-[230px] xl:w-[335px] h-[80px] lg:h-[105px] xl:h-[129px]">
            <h1 className="font-sora text-white text-opacity-[70%]  font-semibold text-[10px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px] mt-5 xl:mt-4">
              Totals Stake
            </h1>
            <p className="text-white text-opacity-[85%] font-sora font-semibold text-[8px]/[10px] md:text-[10px]/[15px] lg:text-[14px]/[26px] xl:text-[26px]/[31px] mt-4 xl:mt-4 ">
              439k TP
            </p>
          </div>
          <div className="bg-[#072018] bg-opacity-[49%] rounded-[15px] border border-[#FFFFFF] border-opacity-10   text-center w-[150px] md:w-[180px] lg:w-[230px] xl:w-[335px] h-[80px] lg:h-[105px] xl:h-[129px]">
            <h1 className="font-sora text-white text-opacity-[70%]  font-semibold text-[10px]/[15px] md:text-[14px]/[18px] lg:text-[18px]/[22px] xl:text-[30px]/[37px] mt-5 xl:mt-4">
              Total Stakers
            </h1>
            <p className="text-white text-opacity-[85%] font-sora font-semibold text-[8px]/[10px] md:text-[10px]/[15px] lg:text-[14px]/[26px] xl:text-[26px]/[31px] mt-4 xl:mt-4 ">
              318
            </p>
          </div>
        </div>
      </div>

      <Stakingsection />
    </div>
  );
};

export default StakingHome;
