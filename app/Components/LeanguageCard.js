import React from "react";
import Image from "next/image";

const LeanguageCard = ({ logo, text = "Language Settings" }) => {
  return (
    <>
      <div className="card-box">
        <div className="left-icon">
          <Image src={logo} alt="card Image"></Image>
        </div>
        <div className="right-text">{text}</div>
      </div>
    </>
  );
};

export default LeanguageCard;
