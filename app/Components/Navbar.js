"use client";
import React, { useState } from "react";
import bar from "@/public/bar-icon.svg";
import cross from "@/public/cross.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navIcon">
        <Image
          onClick={handleClick}
          src={isOpen ? cross : bar}
          alt="Hamburger bar"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
