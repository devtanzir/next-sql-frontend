import React, { useState } from "react";
import Image from "next/image";

const DefaultCard = ({
  img,
  className = "",
  cardTitle = "Dua's Importance",
  SubNumber = "1",
  DausNumber = "21",
  ...props
}) => {
  return (
    <>
      <div {...props} className={`default-card-section ${className}`}>
        <div className="icon-svg">
          <div className="svg-logo">
            <Image
              src={img}
              alt="card logo"
              className="card-title-logo"
            ></Image>
          </div>

          <div>
            <h5>{cardTitle}</h5>
            <p>Subcatagory: {SubNumber}</p>
          </div>
        </div>
        <div className="howManyItem">
          <h4>{DausNumber}</h4>
          <span>Duas</span>
        </div>
      </div>
    </>
  );
};

export default DefaultCard;
