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
    <div className="  bg-[#000000] bg-cover bg-hero-bg bg-center px-3 bg-no-repeat bg-opacity-100   text-white  ">
      <div className="max-w-[2000px]   mx-auto  py-[5rem] md:py-0  ">
        <div className="  flex flex-col md:flex-row items-center justify-center my-auto  ">
          <div className=" max-w-[2000px] mx-auto my-auto py-5  xl:px-8 2xl:px-0">
            <h1 className="text-[30px] md:text-[45px] text-center md:text-left  leading-[36.9px] md:leading-[60px] lg:text-[52px] xl:text-[64px] lg:leading-[75.5px] xl:leading-[80px] font-sora font-bold w-full px-5 md:px-4 lg:px-8 md:w-[120%]  lg:w-[90%] xl:w-[80%]    xl:px-0 ">
              Supply, Borrow and Earn
            </h1>
            <p className="text-[12px]/[15px] md:text-[14px]/[15px] text-center md:text-left text-[#E1E1E1] font-light font-sora lg:text-[13px]/[16px] xl:text-[18px]/[17px] w-full px-2 md:w-[90%]   md:px-4 lg:px-8 lg:w-[80%] xl:w-2/3  mt-3 md:mt-2 xl:px-0">
              TurboLend Protocol is the autonomous interest rate protocol for
              lending on TurboLend Protocol
            </p>
            <div className=" flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-7 px-0 md:px-5 lg:px-8 xl:px-0">
              <button className=" hidden md:block     font-sora text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]  bg-[#01F8AF] text-[#000000]  lg:w-[105px] xl:w-[135px] lg:h-[36px] xl:h-[42px] rounded-full ">
                Get started
              </button>
              <button className=" hidden md:block     font-sora text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-[#01F8AF] bg-[#FFFFFF0D] text-[#01F8AF] lg:w-[105px] xl:w-[135px] lg:h-[36px] xl:h-[42px] rounded-full ">
                View Docs
              </button>
              <button className=" border bg-[#FFFFFF0D]  justify-center  font-sora text-center text-[8px]/[12px] md:text-[10px]/[16px] lg:-text-[12px]/[18px]  xl:text-[14px]/[21px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-white rounded-full text-md flex flex-row items-center gap-1 w-[77px] md:w-[97px] lg:w-[110px]  xl:w-[135px] h-[24px] md:h-[30px] lg:h-[33px] xl:h-[42px] ">
                launch App
              </button>
            </div>
            <div></div>
          </div>
          <div>
            <Image
              src={logo}
              alt="hero-image"
              className=" absolute  md:top-32 w-[31px] md:w-[40px] lg:text-[50px] xl:text-[81px] ml-20 md:ml-0 "
            />
            <Image
              src={logo}
              alt="hero-image"
              className="mt-16 absolute bottom-[25rem] md:top-72 lg:top-96 ml-0 md:ml-[-3rem] w-[31px] md:w-[40px] lg:text-[50px] xl:text-[81px]"
            />
            <Image
              src={heroimage}
              alt="hero-image"
              className="mt-0 md:mt-16 w-[100%]  md:w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
