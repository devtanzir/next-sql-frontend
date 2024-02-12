import React from "react";
import InputForm from "./InputForm";
import Image from "next/image";
import Avatar from "@/public/User-profile/avatar-default.svg";
import arrow from "@/public/User-profile/downarrow.svg";
import search from "@/public/search-icon.svg";
// import Search from "@/public/User-profile/search.svg";

const TopNavBar = () => {
  return (
    <>
      <div className="header-box flex justify-between items-center">
        <div className="w-[72vw]  flex justify-between items-center">
          <div className="header-logo">
            <h3 className="text-[25px]">Duas Page</h3>
          </div>
          <div className="header-search relative flex">
            <InputForm
              placeholder="Search By Dua Name"
              className="py-[26px] px-5 w-[330px]"
            />
            <Image src={search} alt="search"></Image>
          </div>
        </div>
        <div className="header-user">
          <Image src={Avatar} alt="Avater"></Image>
          <Image src={arrow} alt="Arrow"></Image>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
