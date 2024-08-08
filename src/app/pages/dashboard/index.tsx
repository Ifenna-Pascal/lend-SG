import Image from "next/image";
import { dashboardData } from "../../__mockdata__/market";
import { images } from "../../utilities/images";
import Borrowtable from "./components/borrow";
import Supplytable from "./components/supply-table";
import Button from "../../components/ui/button";

const Dashboard = () => {
  return (
    <div className="px-20  bg-gradient-to-t from-[#013B2A] to-[#030D0A] ">
      <div className=" w-full ">
        <div className="flex items-center  justify-between px-[4px] py-2">
          <h1 className="text-bold text-[64px] text-[#01F8AF] font-sora font-bold">
            Biturbo Market{" "}
          </h1>
        </div>
        <div className="flex justify-between mb-6 items-center">
          <div className="w-1/3 flex items-center rounded-md bg-[#013B2A] justify-between  py-6 ">
            <div className="text-white  flex-col px-6 cursor-pointer">
              <h3 className="font-sora text-[16px]/[24px]">Net Worth</h3>
              <div className="flex gap-3">
                <Image src={images.eth} alt="coinimage" />
                <h6 className="font-sora font-bold text-gray-400 text-[24px]">
                  $0.00
                </h6>
              </div>
            </div>
            <div className="text-white  flex-col px-6 cursor-pointer">
              <h3 className="font-sora text-[16px]/[24px]">Net APY</h3>
              <h6 className="font-sora font-bold text-[24px]">-----</h6>
            </div>
          </div>
          <div className="w-1/4 h-[54px] relative flex flex-col justify-center items-end gap-6  px-[15px] py-[20px]">
            <div>
              <Button variant={"primary"} className="w-[158px] h-[45px]">
                view transaction
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant={"primary"} className="w-[158px] h-[45px]">
                <Image src={images.plus} alt="coinimage" />
                Supply Eth
              </Button>
              <Button variant={"primary"} className="w-[158px] h-[45px]">
                <Image src={images.plus} alt="coinimage" />
                Borrow Eth
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-6 gap-14 items-center">
        <div className="w-1/2 flex flex-col rounded-md bg-[#013B2A]  px-6 py-6 ">
          <div className="flex items-center">
            <Image src={images.plus} alt="plus" />
            <h3 className="font-sora text-gray-200 font-medium text-[26px]/[39px]">
              Supply Eth
            </h3>
          </div>

          <h6 className="font-sora font-light text-gray-400 text-[20px]/[30px]">
            Nothing Supplied yet
          </h6>
        </div>
        <div className="w-1/2 flex flex-col  rounded-md bg-[#013B2A] px-6  py-6 ">
          <div className="flex items-center">
            <Image src={images.plus} alt="plus" />
            <h3 className="font-sora text-gray-200 font-medium text-[26px]/[39px]">
              Borrow Eth
            </h3>
          </div>
          <h6 className="font-sora font-light text-gray-400 text-[20px]/[30px]">
            Nothing Supplied yet
          </h6>
        </div>
      </div>

      <div className="flex justify-between gap-14">
        <Supplytable />
        <Borrowtable />
      </div>
    </div>
  );
};

export default Dashboard;
