import React from "react";
import doc1 from "./../../assets/images/homapage/doc1.svg";
import doc2 from "./../../assets/images/homapage/doc2.svg";
import doc3 from "./../../assets/images/homapage/doc3.svg";
import docimage from "./../../assets/images/homapage/doc-image.svg";
import Image from "next/image";

const Docs = () => {
  const data = [
    {
      id: 1,
      img: doc3,
      title: "Decentralized",
      description: "Access an immutable money market directly on-chain",
    },
    {
      id: 2,
      img: doc2,
      title: "ZK Rollup",
      description:
        "All TurboLend Protocol assets use Zk Rollup technology to guarantee data validity and availability",
    },
    {
      id: 3,
      img: doc1,
      title: "Community",
      description:
        "TurboLend Protocol is a community driven Decentralized protocol delivering best-in-class functionality for TurboLend Protocol",
    },
  ];

  return (
    <div className="  bg-[#030D0A]  bg-cover bg-center px-3  bg-opacity-100   text-white  ">
      <div className="max-w-[1200px]  mx-auto  ">
        <div
        //  className="md:h-screen  items-center justify-center mx-auto  "
        >
          <div className=" max-w-[1200px] mx-auto  py-3 md:py-6">
            <h1 className="text-[20px]  md:text-[40px]  mt-3 md:mt-[-5rem] lg:mt-[-6rem] xl:mt-[-8rem] text-center md:text-left md:tracking-widest lg:tracking-[3.70px] leading-[26px] md:leading-[32px]  lg:text-[64px]  lg:leading-[46.5px] xl:leading-[54px]  font-sora text-[#01F8AF] font-bold w-full px-2 md:px-4 lg:px-5  xl:px-0 ">
              $ 234,429.22
            </h1>
            <p className="text-[12px] md:text-[18px] lg:text-[24px] font-sora text-center md:px-4 px-0 lg:px-5 xl:px-1 md:text-left font-light text-gray-300 mt-1 md:mt-3">
              of Liquidity is Locked in TurboLend Protocol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0 md:mt-[3rem] px-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="mt-7 md:mt-0 border py-[2rem] md:py-[3rem] px-4 border-[#01F9AF] rounded-md  "
              >
                <div className=" flex flex-col items-center  justify-center overflow-hidden">
                  <Image src={item.img} alt="icons" />
                  <h2 className="text-[22px] md:text-[20px] lg:text-[24px] font-bold font-sora mt-5">
                    {item.title}
                  </h2>
                  <p className="text-[##E1E1E1] text-[14px] md:text-[14px] lg:text-[16px] mt-2 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse md:flex-row  md:items-center   space-x-0 md:space-x-7 lg:flex-row mt-[3rem]  ">
            <div className="w-full md:w-lg lg:w-[2/3] flex flex-col space-y-4 md:space-y-0 px-0  md:px-0">
              <Image src={docimage} alt="contact" className="w-3/4 md:w-3/4 " />
            </div>
            <div className="w-full md:w-lg lg:w-2/3 mt-0 md:mt-6 lg:mt-0 px-0 lg:px-4 ">
              <h4 className="font-orbitron text-center md:text-left   text-[12px]font-sora font-bold mt-6 md:text-[14px] text-[#01F9AF] lg:text-[18px]  md:mt-0 leading-[25px] ">
                ABOUT US
              </h4>
              <h1 className="font-orbitron  text-[#FFFFFF] text-center md:text-left text-[22px] font-sora font-bold mt-6 md:text-[24px] lg:text-[34px] md:leading-[38px] md:mt-5 leading-[25px] ">
                Crypto Saving Base of Your Choice
              </h1>

              <p className="font-orbitron  text-[#FFFFFF] text-center md:text-left text-[6px]font-helvatica font-light mt-6 md:text-[12px] lg:text-[14px]  md:mt-5 leading-[25px]  ">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu
                felis porttitor eget consectetur. Sed amet ridiculus sit nullam
                euismod. At mattis diam dui duis felis sem posuere lectus.
                Tincidunt a quis ornare mauris mauris aliquet interdum. Ac
                volutpat dolor quam adipiscing amet vitae in.
              </p>
              <div className=" flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-4 ">
                <button className=" bg-transparent border-2  font-sora text-[8px] md:text-[14px] mt-2 md:mt-0 border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-black px-[10px] py-[4px] md:px-6 md:py-[7px] rounded-full text-md ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
