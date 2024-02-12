import React from "react";
import Dua_Card from "@/public/Dua-icons/duacard.svg";
import Copy from "@/public/Dua-icons/copy.svg";
import Bookmark from "@/public/nav-Icons/bookmark.svg";
import Memorize from "@/public/nav-Icons/memorize.svg";
import Share from "@/public/Dua-icons/share.svg";
import Image from "next/image";
import Report from "@/public/Dua-icons/report.svg";
import Audio from "@/public/Dua-icons/audiobtn.svg";

const DuaCard = ({
  DuaTitle,
  DuaIndex,
  topPara,
  quranAyat,
  Transliteration,
  Translation,
  Bottom_En,
  refference_en,
  DuaName,
}) => {
  return (
    <>
      <div className="p-5 flex bg-white rounded-xl">
        <h4 className="text-base text-[#1fa45b] font-medium">Section:</h4>
        <p className=" font-medium">&nbsp;{DuaName}</p>
      </div>
      <div className="active-duas">
        <div className="box mt-5 mb-5 p-6 bg-white rounded-xl flex flex-col gap-7">
          <div className="box-header">
            <Image src={Dua_Card} alt="DuaCard"></Image>
            <h4 className="font-medium text-[#1fa45b]">
              {DuaIndex}. {DuaTitle}
            </h4>
          </div>

          {topPara && (
            <div className="box-content">
              <span className="text-lg text-black font-medium">{topPara}</span>
            </div>
          )}

          {quranAyat && (
            <div className="box-content">
              <span className={`font-medium text-[26px] text-black`}>
                <p dir="rtl">{quranAyat}</p>
              </span>
            </div>
          )}
          {Transliteration && (
            <div className="box-content">
              <span className="text-lg text-black font-medium italic">
                {Transliteration}
              </span>
            </div>
          )}
          {Translation && (
            <div className="box-content">
              <span className="text-lg text-black font-medium">
                {Translation}
              </span>
            </div>
          )}
          {Bottom_En && (
            <div className="box-content">
              <span className="text-lg text-black font-medium">
                {Bottom_En}
              </span>
            </div>
          )}
          <div className="box-reference">
            <h4 className="font-medium text-[#1fa45b]">Reference:</h4>
            <h4 className="text-lg text-black font-medium">{refference_en}</h4>
          </div>
          <div className="box-footer flex justify-between items-center">
            <div className="vedio-icon">
              <Image src={Audio} alt="audio"></Image>
            </div>

            <div className="feature-icon flex gap-7">
              <Image src={Copy} alt="Copy"></Image>
              <Image src={Bookmark} alt="bookmark"></Image>
              <Image src={Memorize} alt="Memorize"></Image>
              <Image src={Share} alt="Share"></Image>
              <Image src={Report} alt="Report"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuaCard;
