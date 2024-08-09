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
    <nav className="bg-[#060A14] px-[1rem] py-3  w-full md:px-[2rem] lg:px-8 fixed top-0 z-50">
      <div className="max-w-[2000px] mx-auto flex justify-between ">
        <div className="  flex justify-between items-center gap-4">
          <Link to={"/"}>
            <div className="w-20 md:w-28">
              <Image src={logo} alt="logo" className="" />
            </div>
          </Link>
          <div className="hidden md:flex font-sora font-light space-x-[0.5rem] md:space-x-[1rem] lg:space-x-[2rem]  ">
            {dashbaordLinks.map((link, index) => {
              const active = router.pathname.includes(link.href);
              return (
                <Link to={link.href} key={index}>
                  <span
                    className={`${active && "border-b border-[#01F8AF]"} pb-3 font-montserrat text-white font-semibold text-[10px]/[12px] md:text-[14px]/[15px] lg:text-[16px]/[20px]`}
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
              className="hidden lg:flex w-[120px] lg:w-[190px] h-[45px] text-[8px] md:text-[12px] lg:text-[15px]"
              onClick={() => setOpen(true)}
            >
              <Image src={images.eth} width={19} height={40} alt="coin" />
              Switch tokens
              <Image src={images.swap} width={19} height={40} alt="switch" />
            </Button>
            <Button
              variant={"primary"}
              className="flex lg:hidden w-[50px] md:w-[70px] lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[12px] lg:text-[15px]"
              onClick={() => setOpen(true)}
            >
              <Image src={images.eth} alt="coin" className="w-4 lg:w-36" />

              <Image src={images.swap} alt="switch" className="w-4 lg:w-36" />
            </Button>
            <Button
              variant={"primary"}
              className="w-[90px] md:w-[130px] lg:w-[190px] h-[30px] md:h-[35px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[15px]"
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
                <div className="text-3xl ">
                  <RxHamburgerMenu />
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
