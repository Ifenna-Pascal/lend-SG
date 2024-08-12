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
    <div className="  bg-[#000000]  bg-cover bg-center px-3  bg-opacity-100   text-white  ">
      <div className="max-w-[2000px]  mx-auto  ">
        <div
        //  className="md:h-screen  items-center justify-center mx-auto  "
        >
          <div className=" max-w-[2000px] mx-auto  py-3 md:py-8 xl:px-8">
            <h1 className="text-[34px]  md:text-[40px]  mt-3 md:mt-[-5rem] lg:mt-[-6rem] xl:mt-[-8rem] text-center md:text-left  leading-[26px] md:leading-[32px]  lg:text-[48px] xl:text-[64px]  lg:leading-[46.5px] xl:leading-[52px]  font-sora text-[#01F8AF] font-bold w-full px-2 md:px-4 lg:px-5  xl:px-0 ">
              $ 234,429.22
            </h1>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-white text-opacity-60 xl:text-[24px] font-sora text-center md:px-4 px-0 lg:px-5 xl:px-1 md:text-left font-light  mt-1 md:mt-3">
              of Liquidity is Locked in TurboLend Protocol
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 xl:gap-12 mt-0 md:mt-[1rem] mx-auto  ">
            {data.map((item) => (
              <div
                key={item.id}
                className="mt-7 md:mt-0 border w-[295px] h-[470px] md:h-[380px] lg:h-[420px] xl:w-[430px] bg-[#03130E]  xl:h-[500px] border-[#01F9AF] rounded-md  "
              >
                <div className=" flex flex-col items-center  justify-center overflow-hidden ">
                  <Image
                    src={item.img}
                    alt="icons"
                    className="w-[226px] md:w-[180px] lg:w-[190px] xl:w-[241px] h-[200px] font-sora  lg:h-[200px] xl:h-[241px] mt-5"
                  />
                  <h2 className="text-[26px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold font-sora mt-5">
                    {item.title}
                  </h2>
                  <p className="text-[#E1E1E1] text-[18px]/[22px] md:text-[12px]/[14px] font-normal lg:text-[14px]/[18px] font-helevatica xl:text-[16px]/[20px] mt-4 text-center px-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse md:flex-row  md:items-center   space-x-0 md:space-x-4 lg:flex-row mt-[3rem]  ">
            <div className="w-full md:w-lg lg:w-3/4 xl:w-3/5  flex flex-col space-y-4 md:space-y-0 px-0  md:px-0">
              <Image src={docimage} alt="contact" className="w-3/4 md:w-3/4 " />
            </div>
            <div className="w-full md:w-lg lg:w-[590px] mt-0 md:mt-6 lg:mt-0 px-0 lg:px-4 ">
              <h4 className="font-orbitron text-center md:text-left   text-[12px]/[15px] font-sora font-bold mt-6 md:text-[14px]/[18px] text-[#01F9AF] lg:text-[14px]/[20px] xl:text-[18px]/[22px]  md:mt-0  ">
                ABOUT US
              </h4>
              <h1 className="font-orbitron  text-[#FFFFFF] text-center md:text-left text-[22px]/[27px] font-sora font-bold mt-6 md:text-[26px]/[34px] lg:text-[24px]/[38px] xl:text-[34px]/[42px]  md:mt-5  ">
                Crypto Saving Base of Your Choice
              </h1>

              <p className="font-orbitron  text-[#E1E1E1] text-center md:text-left text-[10px]/[15px] font-helvatica font-light mt-3 md:text-[12px]/[24px] lg:text-[10px]/[22px] xl:text-[16px]/[30px] md:mt-3   ">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu
                felis porttitor eget consectetur. Sed amet ridiculus sit nullam
                euismod. At mattis diam dui duis felis sem posuere lectus.
                Tincidunt a quis ornare mauris mauris aliquet interdum. Ac
                volutpat dolor quam adipiscing amet vitae in.
              </p>
              <div className=" flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-4 ">
                <button className=" border bg-[#FFFFFF0D]  justify-center  font-sora text-center text-[8px]/[12px] md:text-[10px]/[16px] lg:-text-[12px]/[18px]  xl:text-[14px]/[21px]  border-[#01F8AF] hover:bg-[#01F8AF] text-[#01F8AF] hover:text-white rounded-full text-md flex flex-row items-center gap-1 w-[77px] md:w-[97px] lg:w-[110px]  xl:w-[135px] h-[24px] md:h-[30px] lg:h-[33px] xl:h-[42px] ">
                  learn more
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
