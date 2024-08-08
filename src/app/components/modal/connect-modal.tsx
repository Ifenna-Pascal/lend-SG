import Image from "next/image";
import { wallets } from "../../__mockdata__/tables";
import logo from "../../assets/images/homapage/singlelogo.svg";
import { images } from "../../utilities/images";

interface IProp {
  img: string;
  name: string;
}

const Wallet = ({ img, name }: IProp) => {
  return (
    <div className=" mb-4  py-2 cursor-pointer px-2 flex items-center justify-between  bg-gray-300 rounded-[7px] max-w-[80%] mx-auto ">
      <span className="text-[#000000] text-[11px] md:text-[15px] lg:text-[19px] py-3 flex items-center justify-center text-center  font-sora">
        {name}
      </span>
      <Image
        src={img}
        alt="wallet-icon"
        width={45}
        height={45}
        className="w-[30px] md:w-[40px] h-[40px] mr-4"
      />
    </div>
  );
};

const WalletConnectModal = ({ close }: { close: () => void }) => {
  return (
    <div className="border border-[#FFFFFF66] min-h-[500px]  rounded-md w-[360px] mx-auto md:w-[70%] lg:w-[550px]   px-4 md:px-0 bg-[#FFFFFF]">
      <div className="w-full border-b  py-4 relative border-[#FFFFFF66] ">
        <h1
          className="absolute top-6 right-6 cursor-pointer text-2xl ml-4 "
          onClick={close}
        >
          X
        </h1>
        <Image
          src={logo}
          alt="wallet-icon"
          width={50}
          height={50}
          className="w-[50px] h-[50px] mx-auto mt-6"
        />
        <h2 className="font-sora text-[20px] md:text-[30px] lg:text-[38px] text-black text-center font-semibold">
          Connect a Wallet
        </h2>
        <h3 className="font-sora text-[12px] md:text-[15px] lg:text-[20px] text-gray-500 text-center font-light">
          To start using Protocol
        </h3>
      </div>
      {/* <span className="text-[#FFFFFFCC] text-[16px] py-5 flex items-center justify-center text-center  font-montserrat">Choose a wallet to connect</span> */}
      {wallets.map((wallet, index) => (
        <Wallet key={index} img={wallet.icon} name={wallet.name} />
      ))}
      <span className="text-black flex items-center justify-center pb-8 pt-5 py-16 font-semibold text-[8px] md:text-[10px] lg:text-[14px]">
        By connecting, I accept Compound's
        <p className="text-[#17863F] ml-2">Terms of Service</p>
      </span>
    </div>
  );
};

export default WalletConnectModal;
