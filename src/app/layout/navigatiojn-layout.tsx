import { Link, useLocation } from "react-router-dom";
import { dashbaordLinks } from "../utilities/links";
import Button from "../components/ui/button";
import { useState } from "react";
import ModalContainer from "../components/modal";
import { images } from "../utilities/images";
import logo from "../assets/images/homapage/grouped-logo.svg";
import WalletConnectModal from "../components/modal/connect-modal";
import Image from "next/image";

const NavigationLayout = () => {
  const router = useLocation();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="px-20 py-4 flex items-center justify-between">
      <div className="flex items-center justify-between gap-x-10">
        <Link to={"/"} className="mr-2">
          <Image src={logo} width={189} height={40} alt="logo-image" />
        </Link>
        {dashbaordLinks.map((link, index) => {
          const active = router.pathname.includes(link.href);
          return (
            <Link to={link.href} key={index}>
              <span
                className={`${active && "border-b border-[#01F8AF]"} pb-3 font-montserrat text-white font-semibold text-[16px]/[20px]`}
              >
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-x-1">
        <Button
          variant={"primary"}
          className="w-[190px] h-[45px] text-[15px]"
          onClick={() => setOpen(true)}
        >
          <Image src={images.eth} width={19} height={40} alt="switch" />
          Switch tokens
          <Image src={images.swap} width={19} height={40} alt="switch" />
        </Button>
        <Button
          variant={"primary"}
          className="w-[158px] h-[45px]"
          onClick={() => setOpen(true)}
        >
          Connect Wallet
        </Button>
      </div>
      <ModalContainer open={open} close={close}>
        <WalletConnectModal close={close} />
      </ModalContainer>
    </div>
  );
};

export default NavigationLayout;
