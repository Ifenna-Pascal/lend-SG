import Image from "next/image";
import { wallets } from "../../__mockdata__/tables";
import { images } from "../../utilities/images";
import WalletOptions from "@/app/providers/config/wallet-options";

const WalletConnectModal = ({
  close,
  onWalletSelect,
}: {
  close: () => void;
  onWalletSelect: () => void;
}) => {
  return (
    <div className="border border-[#FFFFFF66] min-h-[450px] rounded-md w-[90%] mx-auto md:w-[80%] lg:w-[500px] xl:w-[550px] px-0 md:px-0 bg-[#FFFFFF]">
      <div className="w-full py-4 relative">
        <h1
          className="absolute top-6 right-6 cursor-pointer text-2xl ml-4"
          onClick={close}
        >
          X
        </h1>
        <Image
          src={images.blacklogo}
          alt="wallet-icon"
          width={60}
          height={60}
          className="w-[60px] h-[60px] mx-auto mt-6"
        />
        <h2 className="font-sora text-[15px] md:text-[30px] lg:text-[32px] xl:text-[32px] text-black text-center font-medium">
          Connect a Wallet
        </h2>
        <h3 className="font-sora text-[12px] md:text-[15px] lg:text-[20px] xl:text-[22px] text-gray-500 text-center font-light">
          To start using Protocol
        </h3>
      </div>
      <WalletOptions />
      <span className="text-black flex items-center justify-center pb-8 pt-5 py-16 font-medium text-[7px] md:text-[10px] lg:text-[14px] xl:text-[14px]">
        By connecting, I accept Compounds
        <p className="text-[#17863F] cursor-pointer ml-2">Terms of Service</p>
      </span>
    </div>
  );
};

export default WalletConnectModal;
