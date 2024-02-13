import React from "react";
import InputForm from "./InputForm";
import Image from "next/image";
import AllCategorys from "./AllCategorys";
import searchIcon from "@/public/search-icon.svg";
const AllDuaTitle = () => {
  return (
    <>
      <div className={`all-catagory`}>
        <div className="catagory-title">Categories</div>
        <div className="catagory-search p-3 relative">
          <Image src={searchIcon} className="" alt="image-search"></Image>
          <InputForm placeholder="Search Categories" className="pl-11 w-full" />
        </div>
        <div className="catagory-lists">
          <AllCategorys />
        </div>
      </div>
    </>
  );
};

export default AllDuaTitle;
