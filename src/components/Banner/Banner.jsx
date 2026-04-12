import Image from "next/image";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto space-y-10 text-center px-2 pt-14 md:pt-20">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
            We Build <br />
            <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              Productive{" "}
            </span>{" "}
            Apps
          </h1>
          <p className="text-gray-500 text-[14px] md:text-[20px]">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center items-center pb-10">
          <button className="flex justify-center items-center gap-2 text-lg md:text-xl btn">
            <BiLogoPlayStore /> Google Play
          </button>
          <button className="flex justify-center items-center gap-2 text-lg md:text-xl btn">
            <FaAppStoreIos /> App Store
          </button>
        </div>
      </div>
      <figure className="flex justify-center items-center px-2">
        <Image
          src={"/assets/hero.png"}
          width={923}
          height={476}
          alt="hero image"
          className="text-center"
        />
      </figure>
    </div>
  );
};

export default Banner;
