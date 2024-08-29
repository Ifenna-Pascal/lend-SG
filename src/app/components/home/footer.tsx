import React from "react";
import logo from "./../../assets/images/homapage/grouped-logo.svg";
import whatsapp from "./../../assets/images/homapage/whatsapp-icon.svg";
import twitter from "./../../assets/images/homapage/twitter-icon.svg";
import facebook from "./../../assets/images/homapage/facebook-icon.svg";
import instagram from "./../../assets/images/homapage/instagram-icon.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="bg-[#030D0A] bg-footer-bg bg-right  border-t-2 border-[#01F9AF] "
      style={{
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "70%",
        backgroundSize: "37%",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="px-2 mx-auto md:px-16  py-[2rem] md:py-[3rem]">
        <div className="flex flex-col justify-around  md:flex-row  ">
          <div className="flex flex-col  space-y-2 w-full px-2 ">
            <div className="">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-20 md:w-30 lg:w-32 xl:w-40 mb-4"
              />
            </div>
            <h3 className="w-full text-[#F2F2F2] px-2  leading-normal text-[12px] tracking-wider font-sora md:px-4 md:text-[12px] lg:text-[12px] md:w-[75%] lg:w-[45%]">
              Lorem ipsum dolor sit amet consectetur. Fusce nisl lacus elementum
              neque.
            </h3>
          </div>
          <div className="flex flex-col justify-around space-x-5 md:flex-row ">
            <div className="text-white w-full px-1 mt-4  font-montserrat  md:mt-0">
              <h1 className="text-[12px] md:text-[16px] lg:text-[18px] font-normal  mb-[1rem] font-sora md:mb-[1rem] mt-0 md:mt-4 lg:mt-0">
                Contact Us
              </h1>
              <div className="text-[10px] md:text-[14px]">
                <p className="text-[10px] md:text-[12px]  font-sora font-normal">
                  (524) 333 6565
                </p>
                <p className="mt-2 text-[10px] md:text-[12px]  font-sora font-normal">
                  turbolendprotocol@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between  md:flex-row ">
          <div className=" flex flex-col md:flex-row font-sora font-bold  md:space-x-[4rem] px-2 md:px-3 lg:px-3  mt-7 ">
            <a
              href="#About"
              className="text-white text-[10px] md:text-[12px] lg:text-[14px]  font-sora font-medium mt-5 md:mt-0"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-white text-[10px] md:text-[12px] lg:text-[14px]  font-sora font-medium  mt-5 md:mt-0 "
            >
              About
            </a>
            <a
              href="/dashboard/market"
              className="text-white text-[10px] md:text-[12px] lg:text-[14px]  font-sora font-medium  mt-5 md:mt-0 "
            >
              Market
            </a>
            <a
              href="/dashboard"
              className="text-white text-[10px] md:text-[12px] lg:text-[14px]  font-sora font-medium  mt-5 md:mt-0"
            >
              Dashboard
            </a>
          </div>
          <div className="flex flex-row font-sora font-bold space-x-2  mt-7 px-1 md:px-1 ">
            <Image
              src={whatsapp}
              alt="logo"
              className=""
              width={30}
              height={30}
            />
            <Image
              src={facebook}
              alt="logo"
              className=""
              width={30}
              height={30}
            />
            <Image
              src={twitter}
              alt="logo"
              className=""
              width={30}
              height={30}
            />
            <Image
              src={instagram}
              alt="logo"
              className=""
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className=" mt-3 px-2 md:px-3">
          <hr className="w-full border-gray-200 " />
        </div>
        <div className="flex flex-row justify-between px-1 mt-3 text-white text-[14px]">
          <div>
            <p className="text-[8px] md:text-[10px] lg:text-[12px]  font-sora font-light">
              © 2023 Vernchain Template • All Rights Reserved
            </p>
          </div>
          <div className="flex  md:flex-row space-x-3 md:space-x-4 text-[8px] md:text-[10px] lg:text-[12px]  font-sora font-light ">
            <div>Terms</div>
            <div>Privacy </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
