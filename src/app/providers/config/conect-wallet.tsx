import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useAccount } from "wagmi";
import { Account } from "./account";
import Button from "@/app/components/ui/button";

interface IProp {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const WalletConnect = ({ setOpen }: IProp) => {
  const { isConnected } = useAccount();
  useEffect(() => {
    setOpen(false);
  }, [isConnected, setOpen]);

  return (
    <div>
      {isConnected ? (
        <Account />
      ) : (
        <Button
          variant={"primary"}
          className="w-[65px] ml-4 md:w-[100px] lg:w-[134px] h-[15px] md:h-[30px] border-none rounded-[3px] lg:rounded-[5px] bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] lg:h-[40px] text-white text-[5px] md:text-[10px] lg:text-[14px]"
          onClick={() => setOpen(true)}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;
