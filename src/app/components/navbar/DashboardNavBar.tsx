"use client";
import { dashbaordLinks } from "../../utilities/links";
import Button from "../../components/ui/button";
import { useState } from "react";
import ModalContainer from "../../components/modal";
import { images } from "../../utilities/images";
import logo from "../../assets/images/homapage/grouped-logo.svg";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletConnectModal from "../modal/connect-modal";

const DashboardNavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isXIcon, setIsXIcon] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const closeModal = () => setOpen(false);

  const close = () => setOpen(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsXIcon(!isXIcon);
  };
  const closeMenu = () => {
    setShowMenu(false);
    setIsXIcon(false);
  };
  const handleWalletSelect = () => {
    setWalletConnected(true);
    closeModal();
  };

  // Determine the active link based on pathname
  const getLinkClass = (linkHref: any) => {
    return pathname === linkHref
      ? "border-b-2 border-[#01F8AF] pb-[15px] lg:pb-[22px]"
      : "";
  };

  return (
    <nav className="bg-[#010101] px-[1rem] h-[48px] md:h-[53px] lg:h-[66px] py-2 md:py-2 lg:py-0 w-full md:px-[2rem] border-b border-white border-opacity-50 lg:px-8 fixed top-0 z-50">
      <div className="max-w-[2000px] mx-auto flex justify-between">
        <div className="flex justify-between items-center gap-4">
          <Link href={"/"}>
            <div className="">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-[80px] h-[34px] lg:w-[151px] lg:h-[64px]"
              />
            </div>
          </Link>
          <div className="hidden md:flex font-sora font-light space-x-[0.5rem] md:space-x-[1rem] lg:space-x-[2rem]">
            {dashbaordLinks.map((link, index) => {
              return (
                <Link href={link.href} key={index}>
                  <span
                    className={`pb-3 font-montserrat text-white font-semibold text-[10px]/[12px] md:text-[12px]/[15px] lg:text-[14px] xl:text-[16px]/[20px] ${getLinkClass(link.href)}`}
                  >
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-around gap-2">
          <div className="flex items-center gap-x-1">
            <Button
              variant={"primary"}
              className="hidden lg:flex md:w-[160px] lg:w-[179px] bg-[#1A1A1A] border border-[#FFFFFF] border-opacity-10 h-[41px] text-[8px] md:text-[12px] lg:text-[15px]"
              onClick={() => setOpen(true)}
            >
              <div className="border border-gradient-to-r from-[#269981] to-[#142D44] rounded-full">
                <Image src={images.eth} width={18} height={18} alt="coin " />
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
                width={100}
                height={100}
                className="w-[8px] h-[8px] md:w-[13px] md:h-[13px]"
              />
              <Image
                src={images.swap}
                alt="switch"
                width={100}
                height={100}
                className="w-[9px] h-[9px] md:w-[15px] md:h-[15px]"
              />
            </Button>
            <Button
              variant={"primary"}
              className="w-[65px] md:w-[100px] lg:w-[134px] h-[15px] md:h-[30px] border-none rounded-[3px] lg:rounded-[5px] bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] lg:h-[40px] text-white text-[5px] md:text-[10px] lg:text-[14px]"
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
                <div className="bg-[#FFFFFF0D] h-[24px] w-[27px] items-center justify-center text-white text-opacity-70 flex my-auto border border-[#FFFFFF] border-opacity-10">
                  x
                </div>
              ) : (
                <div className="bg-[#FFFFFF0D] h-[24px] w-[27px] items-center justify-center text-white text-opacity-70 flex my-auto border border-[#FFFFFF] border-opacity-10">
                  <RxHamburgerMenu className="w-[16px] h-[10px]" />
                </div>
              )}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden fixed flex flex-col inset-y-0 right-0 z-50 bg-gradient-to-b from-[#02120D] to-[#000000] mt-[3rem] shadow-lg w-full h-screen transform transition-transform duration-2000 ease-in-out">
            <div className="border-y flex flex-col bg-[#01F8AF] bg-opacity-10 px-6 border-white border-opacity-50 mt-32">
              <p className="text-[8px]/[12px] text-white text-opacity-70 mb-4 font-sora font-medium mt-2">
                Menu
              </p>
              {dashbaordLinks.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <Link href={link.href} key={index}>
                    <p
                      className={`mb-3 font-montserrat hover:text-[#01F8AF] text-white text-opacity-60 font-medium text-[16px]/[24px] ${active ? "text-[#01F8AF]" : ""}`}
                      onClick={closeMenu}
                    >
                      {link.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <ModalContainer open={open} close={close}>
        <WalletConnectModal
          close={() => setOpen(false)}
          onWalletSelect={handleWalletSelect}
        />
      </ModalContainer>
    </nav>
  );
};

export default DashboardNavBar;
