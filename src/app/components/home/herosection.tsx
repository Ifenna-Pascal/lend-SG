"use client";

import React from "react";
import heroimage from "./../../assets/images/homapage/hero-image.svg";
import logo from "./../../assets/images/homapage/singlelogo.svg";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="  bg-[#000000]  bg-cover h-[calc(95vh-74px)] bg-center lg:pl-16 px-3 flex items-center   bg-no-repeat bg-opacity-100   text-white  ">
      <div className="flex flex-col md:flex-row items-center h-full justify-center my-auto">
        <div data-aos="fade-up-right" className="lg:-mt-20">
          <h1 className="text-[30px] md:text-[45px] text-center md:text-left  leading-[36.9px] md:leading-[60px] lg:text-[52px] xl:text-[64px] lg:leading-[75.5px] xl:leading-[80px] font-sora font-bold w-full px-5 md:px-4 lg:px-8 md:w-[120%]  lg:w-[90%] xl:w-[80%]    xl:px-0 ">
            Supply, Borrow and Earn
          </h1>
          <p className="text-[12px]/[15px]  md:text-[14px]/[15px] text-center md:text-left text-[#E1E1E1] font-light font-sora lg:text-[13px]/[16px] xl:text-[16px]/[17px] w-full px-2 md:w-[90%]   md:px-4 lg:px-8 lg:w-[80%] xl:w-2/3  mt-3 md:mt-2 xl:px-0">
            TurboLend Protocol is the autonomous interest rate protocol for
            lending on TurboLend Protocol
          </p>
          <div className=" flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-7 px-0 md:px-5 lg:px-8 xl:px-0">
            <Link href={"/dashboard"}>
              <button className=" hidden md:block     font-sora text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] hover:bg-transparent hover:text-white hover:border duration-300 hover:border-[#01F8AF] bg-[#01F8AF] text-[#000000]  lg:w-[105px] xl:w-[135px] lg:h-[36px] xl:h-[42px] rounded-full ">
                Get started
              </button>
            </Link>
            <button className=" hidden md:block font-sora text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-[#01F8AF] bg-[#FFFFFF0D] text-[#01F8AF] hover:text-black duration-300 hover:bg-[#01F8AF] lg:w-[105px] xl:w-[135px] lg:h-[36px] xl:h-[42px] rounded-full ">
              View Docs
            </button>
            <button className="   md:hidden  border bg-[#FFFFFF0D]  justify-center  font-sora text-center text-[8px]/[12px] md:text-[10px]/[16px] lg:-text-[12px]/[18px]  xl:text-[14px]/[21px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-white rounded-full text-md flex flex-row items-center gap-1 w-[77px] md:w-[97px] lg:w-[110px]  xl:w-[135px] h-[24px] md:h-[30px] lg:h-[33px] xl:h-[42px] ">
              launch App
            </button>
          </div>
          <div></div>
        </div>
        <div className="relative ">
          <div
            data-aos="fade-up-right"
            className="circle  absolute bottom-[40%] right-4 rounded-full"
          ></div>
          <Image
            data-aos="fade-top-right"
            src={logo}
            alt="hero-image"
            width={100}
            height={100}
            className=" absolute  md:top-32 w-[31px] md:w-[60px] lg:text-[50px] xl:text-[81px] ml-20 md:ml-0 "
          />
          <Image
            src={logo}
            data-aos="fade-up-left"
            alt="hero-image"
            width={100}
            height={100}
            className="mt-16 absolute bottom-[25rem] md:top-72 lg:top-96 ml-0 md:ml-[-3rem] w-[31px] md:w-[60px] lg:text-[50px] xl:text-[81px]"
          />
          <Image
            src={heroimage}
            alt="hero-image"
            width={100}
            height={100}
            className="mt-0 md:mt-16 w-[100%]  md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
