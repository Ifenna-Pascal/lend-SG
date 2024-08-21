"use client";
import React, { useState, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    question: "1. The Copyrights Of NFT Digital Artwork?",
    answer:
      "Every mazemaps NFT is a unique digital artwork. The purchased mazemaps NFTs can be displayed and applied by the owner on any occasion, such as self-portraits, logos, or even in virtual museums, etc..Moreover, they can be transferred without limitation on the NFT trading platform.",
  },
  {
    question: "2. The Rights Of Air-Drop",
    answer:
      "Every mazemaps NFT is a unique digital artwork. The purchased mazemaps NFTs can be displayed and applied by the owner on any occasion, such as self-portraits, logos, or even in virtual museums, etc..Moreover, they can be transferred without limitation on the NFT trading platform.",
  },
  {
    question: "3. Long Term Benefits Of The Mazetopos Project",
    answer:
      "Every mazemaps NFT is a unique digital artwork. The purchased mazemaps NFTs can be displayed and applied by the owner on any occasion, such as self-portraits, logos, or even in virtual museums, etc..Moreover, they can be transferred without limitation on the NFT trading platform.",
  },
  {
    question: "4. The Construction Of NFT Mode In aA Open World",
    answer:
      "Every mazemaps NFT is a unique digital artwork. The purchased mazemaps NFTs can be displayed and applied by the owner on any occasion, such as self-portraits, logos, or even in virtual museums, etc..Moreover, they can be transferred without limitation on the NFT trading platform.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#000000] ">
      <div className=" max-w-[2000px] mx-auto py-[1rem] md:py-[4px] xl:py-[4px]">
        <h1 className="text-[#01F9AF] text-[16px] font-sora  text-center mt-[1rem] lg:mt-[5rem] 2xl:mt-[1rem] font-bold tracking-wide md:text-[20px] lg:text-[24px] xl:text-[32px]">
          FAQ{" "}
        </h1>
        <h4 className="text-white text-[11px] font-helvatica  text-center  font-bold tracking-wide md:text-[20px] lg:text-[24px] xl:text-[32px]">
          Dive into Our Dynamic{" "}
        </h4>
        <div className="max-w-[2000px]mx-auto mt-4 mb-[3rem] md:mt-10 px-8 md:px-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="mb-6 border border-[#01F8AF] border-opacity-50 bg-[#FFFFFF0D]   rounded-md"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer  p-3 md:p-6  flex justify-between items-center "
              >
                <div className="font-bold text-[#FFFFFF] font-sora text-[10px] md:text-[14px] lg:text-[18px] xl:text-[24px]">
                  {faq.question}
                </div>
                <div className="">
                  {activeIndex === index ? (
                    <IoIosArrowUp className="  " />
                  ) : (
                    <IoIosArrowDown className="text-[#FFFFFF] hover:bg-gray-700 p-1 text-2xl" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div className=" px-4  text-[#FFFFFF] font-urbanist font-light text-[8px] tracking-wide leading-[13.10px] mb-4  md:leading-relaxed w-[90%] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
