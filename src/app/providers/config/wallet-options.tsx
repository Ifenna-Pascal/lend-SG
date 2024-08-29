import { wallets } from "@/app/__mockdata__/tables";
import Image from "next/image";
import React, { useMemo } from "react";
import { useConnect } from "wagmi";
interface IProp {
  img: string;
  name: string;
  onClick: () => void;
}

const Wallet = ({ img, name, onClick }: IProp) => {
  return (
    <div
      className="mb-4 py-2 cursor-pointer px-5 flex items-center justify-between mt-6 bg-gray-300 rounded-[7px] max-w-[80%] mx-auto"
      onClick={onClick}
    >
      <span className="text-[#000000] text-[11px] md:text-[15px] lg:text-[16px] xl:text-[22px] py-3 flex items-center justify-center text-center font-sora">
        {name}
      </span>
      <Image
        src={img}
        alt="wallet-icon"
        width={45}
        height={45}
        className="w-[30px] md:w-[40px] h-[40px]"
      />
    </div>
  );
};

const WalletOptions = () => {
  const { connectors, connect } = useConnect();
  const walletOptions = useMemo(() => {
    return connectors.slice(0, 3).map((wallet, index) => {
      return {
        ...wallet,
        img: wallets[index]?.icon ?? "",
        title: wallets[index]?.name ?? "",
      };
    });
  }, [connectors]);

  return walletOptions.map((connector) => (
    <Wallet
      key={connector.uid}
      name={connector.title}
      img={connector.img}
      onClick={() => connect({ connector })}
    />
  ));
};

export default WalletOptions;
