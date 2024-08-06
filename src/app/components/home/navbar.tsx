"use client";

import React, { useState } from "react";
import logo from "./../../assets/images/homapage/grouped-logo.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";

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
    <nav className="bg-[#060A14] px-[1rem] py-3  w-full md:px-[2rem] lg:px-8 fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto ">
        <div className="  flex justify-between items-center">
          <div className="w-20 md:w-28">
            <Image src={logo} alt="logo" className="" />
          </div>

          <div className="hidden md:flex font-sora font-light space-x-[4rem]  ">
            <a href="#hero" className="text-white text-[16px] ">
              Home
            </a>
            <a href="#doc" className="text-white ext-[16px] ">
              Docs
            </a>
            <a href="#faq" className="text-white ext-[16px] ">
              FAQ
            </a>
          </div>

          <div className="mr-[-8rem] md:mr-0">
            <button className="bg-transparent border-2  font-sora text-[8px] md:text-[14px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-black px-[10px] py-[4px] md:px-6 md:py-[7px] rounded-full text-md flex flex-row items-center gap-1">
              Launch App
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              {isXIcon ? (
                <div>
                  <GiCancel />
                </div>
              ) : (
                //   <div className="w-[78px] h-8 bg-neutral-200 rounded-[100px] justify-center items-center inline-flex">
                // <div className="w-[42px] h-[22px] text-center text-gray-950 text-sm font-bold font-['Montserrat']">Close</div>
                // </div>
                <div className="text-3xl ">
                  <RxHamburgerMenu />
                </div>
              )}
            </button>
          </div>

          {showMenu && (
            <div className="lg:hidden fixed flex flex-col inset-y-0  right-0 z-50 bg-[#060A14] mt-[4rem] shadow-lg w-full h-screen p-4 transform transition-transform duration-2000 ease-in-out">
              <a
                href="#home"
                className="text-white text-[16px] py-2 px-2 mt-[40px]"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#docs"
                className="text-white text-[16px] py-2 px-1 mt-[45px]"
                onClick={closeMenu}
              >
                Docs
              </a>
              <a
                href="#faq"
                className="text-white text-[16px] mt-[45px] py-2 px-1"
                onClick={closeMenu}
              >
                FAQ
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
    // </Wrapper>
  );
};

export default NavBar;
