"use client";

import React from "react";
import heroimage from "./../../assets/images/homapage/hero-image.svg";
import logo from "./../../assets/images/homapage/singlelogo.svg";
import backgroundImage from "./../../assets/images/homapage/hero-bg.svg";
import doc1 from "./../../assets/images/homapage/doc1.svg";
import doc2 from "./../../assets/images/homapage/doc2.svg";
import doc3 from "./../../assets/images/homapage/doc3.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="  bg-[#030D0A] bg-cover bg-hero-bg bg-center px-3 bg-no-repeat bg-opacity-100   text-white  ">
      <div className="max-w-[2000px]   mx-auto  py-[5rem] md:py-0  ">
        <div className="  flex flex-col md:flex-row items-center justify-center my-auto  ">
          <div className=" max-w-[2000px] mx-auto my-auto py-5  xl:px-8 2xl:px-0">
            <h1 className="text-[30px] md:text-[50px] text-center md:text-left md:tracking-widest lg:tracking-[3.70px] leading-[36.9px] md:leading-[60px] lg:text-[54px] xl:text-[64px] lg:leading-[80.5px] xl:leading-[83px] font-sora font-bold w-full px-5 md:px-4 lg:px-8 md:w-[120%]  lg:w-[100%] xl:w-[80%]    xl:px-0 ">
              Supply, Borrow and Earn
            </h1>
            <p className="text-[10px] md:text-[15px] text-center md:text-left text-[#E1E1E1] font-light font-sora lg:text-[18px] w-full px-2 md:w-[90%] md:leading-[17.78px]  lg:leading-[20.5px]  md:px-4 lg:px-8 lg:w-[100%] xl:w-2/3  mt-3 md:mt-2 xl:px-0">
              TurboLend Protocol is the autonomous interest rate protocol for
              lending on TurboLend Protocol
            </p>
            <div className=" flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-7 px-0 md:px-5 lg:px-8 xl:px-0">
              <button className=" hidden md:block  bg-transparent border-2  font-sora text-[8px] md:text-[14px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-black px-[10px] py-[4px] md:px-6 md:py-[7px] rounded-full text-md ">
                Get started
              </button>
              <button className="hidden md:block  bg-transparent border-2  font-sora text-[8px] md:text-[14px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-black px-[10px] py-[4px] md:px-6 md:py-[7px] rounded-full text-md ">
                View Docs
              </button>
              <button className="block md:hidden bg-transparent border-2  font-sora text-[8px] md:text-[14px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-black px-[10px] py-[4px] md:px-6 md:py-[7px] rounded-full text-md ">
                launch App
              </button>
            </div>
            <div></div>
          </div>
          <div>
            <Image
              src={logo}
              alt="hero-image"
              className=" absolute  md:top-32 w-10 md:w-14 ml-20 md:ml-0 "
            />
            <Image
              src={logo}
              alt="hero-image"
              className="mt-16 absolute bottom-[25rem] md:top-72 lg:top-96 ml-0 md:ml-[-3rem] w-10 md:w-14"
            />
            <Image
              src={heroimage}
              alt="hero-image"
              className="mt-0 md:mt-16 w-[100%] md:w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
