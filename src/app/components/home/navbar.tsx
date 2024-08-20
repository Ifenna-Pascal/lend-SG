"use client";

import React, { useState } from "react";
import logo from "./../../assets/images/homapage/grouped-logo.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const NavBar = () => {
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
    <nav className="bg-[#00100B] px-6 h-[44px] md:h-[55px] lg:h-[64px] xl:h-[74px] my-auto  w-full md:px-[2rem] opacity-70 lg:px-8 fixed top-0 z-50">
      <div className="max-w-[2000px] mx-auto ">
        <div className="  flex justify-between items-center mt-1">
          <div className="">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-[60px] md:w-[80px] lg:w-[100px] xl:w-[125px] "
            />
          </div>
          <div className="flex items-center justify-between space-x-[4rem] xl:space-x-[10rem]">
            <div className="hidden md:flex font-sora font-light md:space-x-[2rem] lg:space-x-[4rem]  ">
              <a
                href="#hero"
                className="text-white md:text-[12px]/[14px] lg:text-[13px]/[18px]  xl:text-[16px]/[20px] font-normal"
              >
                Home
              </a>
              <a
                href="#doc"
                className="text-white md:text-[12px]/[14px] lg:text-[13px]/[18px]   xl:text-[16px]/[20px] font-normal "
              >
                Docs
              </a>
              <a
                href="#faq"
                className="text-white md:text-[12px]/[14px] lg:text-[13px]/[18px]  xl:text-[16px]/[20px] font-normal"
              >
                FAQ
              </a>
            </div>
            <Link href={"/dashboard"}>
              <div className="mr-[-8rem] md:mr-0">
                <button className=" border bg-[#FFFFFF0D]  justify-center  font-sora text-center text-[8px]/[12px] md:text-[10px]/[16px] lg:-text-[12px]/[18px]  xl:text-[14px]/[21px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-white rounded-full text-md flex flex-row items-center gap-1 w-[77px] md:w-[97px] lg:w-[110px]  xl:w-[135px] h-[24px] md:h-[30px] lg:h-[33px] xl:h-[42px] ">
                  Launch App
                </button>
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              {isXIcon ? (
                <div>
                  <h1 className="text-3xl">x</h1>
                </div>
              ) : (
                <div className=" mt-1">
                  <RxHamburgerMenu className="w-[25px] h-[25px]" />
                </div>
              )}
            </button>
          </div>

          {showMenu && (
            <div className="lg:hidden fixed flex flex-col inset-y-0 px-6  right-0 z-50 bg-[#000000]  mt-[3rem]  shadow-lg w-full h-screen  transform transition-transform duration-2000 ease-in-out">
              <a
                href="#home"
                className="text-white text-[16px] py-2 px-2 mt-[40px]"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#docs"
                className="text-white text-[16px] py-2 px-1 mt-[6px]"
                onClick={closeMenu}
              >
                Docs
              </a>
              <a
                href="#faq"
                className="text-white text-[16px] mt-[6px] py-2 px-1"
                onClick={closeMenu}
              >
                FAQ
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
