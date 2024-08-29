"use client";
import { fetchAssets } from "@/app/contract/market-data";
import { ethers } from "ethers";
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useAccount, useReadContracts } from "wagmi";
import { TOKEN_ABI } from "@/app/contract/abi/token-abi";
import { SUPPLY_ABI } from "@/app/contract/abi/supply-token";

interface IProp {
  marketData: any[];
  loading: boolean;
}

export const AppContext = createContext<IProp>({
  marketData: [],
  loading: false,
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [marketData, setMarketData] = useState<any[]>([]);
  const { address } = useAccount();

  const contracts = [
    {
      address: "0xe88942e18eceee177471f4f66e00c981bb752de8",
      abi: TOKEN_ABI,
      functionName: "balanceOf",
      args: [address],
    } as const,
    {
      address: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
      abi: TOKEN_ABI,
      functionName: "balanceOf",
      args: [address],
    } as const,
  ];

  const supplyContracts = [
    {
      address: "0x8ad5dc65094cff1698aedea9603353975a135f44",
      abi: SUPPLY_ABI,
      functionName: "balanceOf",
      args: [address],
    } as const,
    {
      address: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
      abi: SUPPLY_ABI,
      functionName: "balanceOf",
      args: [address],
    } as const,
  ];

  const borrowContracts = [
    {
      address: "0x8ad5dc65094cff1698aedea9603353975a135f44",
      abi: SUPPLY_ABI,
      functionName: "borrowBalanceCurrent",
      args: [address],
    } as const,
    {
      address: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
      abi: SUPPLY_ABI,
      functionName: "borrowBalanceCurrent",
      args: [address],
    } as const,
  ];

  const { data: walletBalance, isFetching } = useReadContracts({
    allowFailure: false,
    contracts: contracts as any,
  });

  const { data: supplyBalance, isFetching: isLoading } = useReadContracts({
    allowFailure: false,
    contracts: supplyContracts as any,
  });

  const { data: borrowBalance, isFetching: retrieving } = useReadContracts({
    allowFailure: false,
    contracts: borrowContracts as any,
  });

  const getMarket = async () => {
    const data = await fetchAssets();
    const updatedData = await Promise.all(
      data.map((token, index) => {
        if (walletBalance && supplyBalance && borrowBalance) {
          return {
            ...token,
            walletBalance: `${ethers.formatUnits(walletBalance[index] as any) ?? 0}`,
            supplyBalance: `${ethers.formatUnits(supplyBalance[index] as any, 19) ?? 0}`,
            borrowBalance: `${ethers.formatUnits(borrowBalance[index] as any) ?? 0}`,
          };
        }
        return {
          ...token,
          walletBalance: 0,
          supplyBalance: 0,
          borrowBalance: 0,
        };
      }),
    );

    setMarketData([...updatedData]);
  };

  useEffect(() => {
    getMarket();
  }, [walletBalance, supplyBalance]);

  return (
    <AppContext.Provider
      value={{ marketData, loading: isFetching || isLoading || retrieving }}
    >
      <div className="bg-black pb-24 min-h-screen w-full">{children}</div>
    </AppContext.Provider>
  );
};

export default ContextProvider;
