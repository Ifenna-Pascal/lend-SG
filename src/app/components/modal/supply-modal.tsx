import { SUPPLY_ABI } from "@/app/contract/abi/supply-token";
import { getBigNumber } from "@/app/utilities/amount-fomatter";
import { formatAmount } from "@/app/utilities/formater";
import { ethers } from "ethers";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

const SupplyModal = ({
  marketArray,
  id,
  close,
}: {
  marketArray: any[];
  id: string;
  close: () => void;
}) => {
  const [active, setActive] = useState<"supply" | "withdraw">("supply");
  const [inputValue, setInputValue] = useState("0");
  const router = useRouter();
  const pathname = usePathname();
  const market = useMemo(() => {
    return marketArray.find((x) => x.id === id);
  }, [marketArray, id]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const setMax = () => {
    const max = getBigNumber(
      active === "supply" ? market.walletBalance : (market.supplyBalance ?? 0),
    )
      .dp(2, 1)
      .toString(10);
    setInputValue(max);
  };

  const {
    data: hash,
    isPending,
    writeContract,
    error: errorData,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error,
    isError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const contractAction = () => {
    if (active === "supply") {
      writeContract({
        address: market.supplyAddress,
        abi: SUPPLY_ABI,
        functionName: "mint",
        args: [ethers.parseUnits(inputValue)],
      });
    } else {
      writeContract({
        address: market.supplyAddress,
        abi: SUPPLY_ABI,
        functionName: "redeem",
        args: [ethers.parseUnits(inputValue)],
      });
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      alert("Joined");
      router.replace(pathname);
      toast.success("Supplied succesfully");
      close();
    }
  }, [isConfirmed, close, router, pathname]);

  useEffect(() => {
    console.log(error);
    console.log(errorData);
    toast.error(error?.name);
  }, [isError, error, errorData]);

  return (
    <div className="rounded-[12px]  bg-[#0e2921] w-[500px] min-h-[300px] py-6 px-8">
      <div className="flex  items-center mb-5">
        <h2
          onClick={() => setActive("supply")}
          className={`cursor-pointer font-mono text-[24px] mr-12 ${active === "supply" ? "text-orange-400 border-b border-orange-400" : "text-white"}`}
        >
          Supply
        </h2>
        <h2
          onClick={() => setActive("withdraw")}
          className={`cursor-pointer font-mono text-[24px] mr-12 ${active === "withdraw" ? "text-orange-400 border-b border-orange-400" : "text-white"}`}
        >
          Withdraw
        </h2>
      </div>

      <div className="w-full rounded-[8px] py-3 flex items-center relative  bg-[#2d413b]">
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="0"
          type="text"
          className="text-gray-100 w-[100%] text-[24px]   bg-[#2d413b] rounded-[8px] px-6 focus:outline-none h-[50px]"
        />
        <button
          onClick={setMax}
          className="uppercase mr-4 h-[30px] rounded-[4px] bg-orange-400 w-[65px] right-3  text-white font-[15px]"
        >
          Max
        </button>
      </div>
      <div className="flex py-2 items-center">
        <span className="text-gray-400 text-[15px]">
          {active === "supply" ? "Wallet Balance:" : "Supply Balance:"}
        </span>
        <Image
          src={market.img}
          alt="coin-icon"
          className="w-[24px] mx-1 md:w-[24px]"
          width={24}
          height={124}
        />
        <span className="text-gray-400 text-[15px]">
          {formatAmount(
            getBigNumber(
              active === "supply"
                ? market.walletBalance
                : (market.supplyBalance ?? 0),
            )
              .dp(2, 1)
              .toString(10),
          )}
        </span>
        <span className="text-gray-400 ml-1 text-[15px]">
          {market.name ?? "Token"}
        </span>
      </div>
      <button
        disabled={isPending || inputValue === "0" || inputValue === ""}
        className="w-full mt-4 capitalize flex items-center justify-center h-[50px] rounded-[4px] bg-orange-500  text-white font-[15px]"
        onClick={contractAction}
      >
        {active}
        {(isPending || isConfirming) && (
          <div className="w-4 h-4 border-2 ml-2 border-dashed rounded-full animate-spin border-white"></div>
        )}
      </button>
    </div>
  );
};

export default SupplyModal;
