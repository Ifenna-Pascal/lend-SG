import { Link, useLocation } from "react-router-dom";
import { dashbaordLinks } from "../utilities/links";
import Button from "../components/ui/button";
import { useState } from "react";
import ModalContainer from "../components/modal";
import { images } from "../utilities/images";
import logo from "../assets/images/homapage/grouped-logo.svg";
import WalletConnectModal from "../components/modal/connect-modal";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";

const NavigationLayout = () => {
  const router = useLocation();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const [showMenu, setShowMenu] = useState(false);
  const [isXIcon, setIsXIcon] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsXIcon(!isXIcon);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setIsXIcon(false);
  };

  return (
    <nav className="bg-[#010101] px-[1rem] h-[38px] md:h-[53px] lg:h-[66px] md:py-2 lg:py-0 w-full md:px-[2rem]  border-b border-gray- lg:px-8 fixed top-0 z-50">
      <div className="max-w-[2000px] mx-auto flex justify-between ">
        <div className="  flex justify-between items-center gap-4">
          <Link to={"/"}>
            <div className="w-[80px] h-[34px] lg:w-[151px] lg:h-[64px]">
              <Image src={logo} alt="logo" className="" />
            </div>
          </Link>
          <div className="hidden md:flex font-sora font-light space-x-[0.5rem] md:space-x-[1rem] lg:space-x-[2rem]  ">
            {dashbaordLinks.map((link, index) => {
              const active = router.pathname.includes(link.href);
              return (
                <Link to={link.href} key={index}>
                  <span
                    className={`${active ? "border-b-2 border-[#01F8AF] pb-[15px] lg:pb-[22px]" : "pb-3"} pb-3 font-montserrat text-white font-semibold text-[10px]/[12px] md:text-[12px]/[15px] lg:text-[14px] 
              xl:text-[16px]/[20px]`}
                  >
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-around gap-4">
          <div className="flex items-center gap-x-1">
            <Button
              variant={"primary"}
              className="hidden lg:flex md:w-[160px] lg:w-[179px] bg-[#1A1A1A] border border-[#FFFFFF] border-opacity-10 h-[41px] text-[8px] md:text-[12px] lg:text-[15px]"
              onClick={() => setOpen(true)}
            >
              <div className="border border-gradient-to-r from-[#269981] to-[#142D44] rounded-full">
                <Image
                  src={images.eth}
                  width={18}
                  height={18}
                  alt="coin border border-gradient-to-r from-[#269981] to-[#142D44]"
                />
              </div>
              Switch tokens
              <Image src={images.swap} width={16} height={16} alt="switch" />
            </Button>
            <Button
              variant={"primary"}
              className="flex lg:hidden w-[35px] md:w-[45px] border border-[#FFFFFF] border-opacity-10  h-[15px] md:h-[29px]  text-[8px] md:text-[12px] lg:text-[15px]"
              onClick={() => setOpen(true)}
            >
              <Image
                src={images.eth}
                alt="coin"
                className="w-[8px] h-[8px] md:w-[13px] md:h-[13px] "
              />

              <Image
                src={images.swap}
                alt="switch"
                className="w-[9px] h-[9px] md:w-[15px] md:h-[15px] "
              />
            </Button>
            <Button
              variant={"primary"}
              className="w-[73px] md:w-[100px] lg:w-[134px] h-[15px] md:h-[30px] border-none rounded-[3px] lg:rounded-[5px]   bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] lg:h-[40px] text-white text-[7px] md:text-[10px] lg:text-[14px]"
              onClick={() => setOpen(true)}
            >
              Connect Wallet
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              {isXIcon ? (
                <div className="2xl">x</div>
              ) : (
                <div className=" ">
                  <RxHamburgerMenu className="w-[16px] h-[13px]" />
                </div>
              )}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden fixed flex flex-col inset-y-0  right-0 z-50 bg-[#060A14] mt-[4rem] shadow-lg w-full h-screen p-4 transform transition-transform duration-2000 ease-in-out">
            {dashbaordLinks.map((link, index) => {
              const active = router.pathname.includes(link.href);
              return (
                <Link to={link.href} key={index}>
                  <span
                    className={`${active && "text-[#01F8AF]"} pb-3 font-montserrat text-white font-semibold text-[10px]/[12px] lg:text-[16px]/[20px]`}
                    onClick={closeMenu}
                  >
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <ModalContainer open={open} close={close}>
        <WalletConnectModal close={close} />
      </ModalContainer>
    </nav>
  );
};

export default NavigationLayout;
