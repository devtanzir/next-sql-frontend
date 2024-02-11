import React from "react";
import Image from "next/image";
import DuaCard from "@/public/Dua-icons/duacard.svg";
import Copy from "@/public/Dua-icons/copy.svg";
import Report from "@/public/Dua-icons/report.svg";
import Share from "@/public/Dua-icons/share.svg";
import Audio from "@/public/Dua-icons/audiobtn.svg";
import Bookmark from "@/public/nav-Icons/bookmark.svg";
import Memorize from "@/public/nav-Icons/memorize.svg";
import localFont from "next/font/local";

// config my font
const arabicFont = localFont({
  src: "../../public/me_quran.ttf",
});

const ActiveDua = () => {
  return (
    <>
      <div className="wrapper h-[88vh] overflow-y-scroll">
        <div className="p-5 flex bg-white rounded-xl rounded-t-none">
          <h4 className="text-base text-[#1fa45b] font-medium">Section:</h4>
          <p className=" font-medium">
            &nbsp;The servant is dependent on his Lord
          </p>
        </div>
        <div className="active-duas">
          <div className="box p-6 bg-white mt-5 rounded-xl flex flex-col gap-7">
            <div className="box-header">
              <Image src={DuaCard} alt="DuaCard"></Image>
              <h4 className="font-medium text-[#1fa45b]">
                1. The servant is dependent on his Lord #1
              </h4>
            </div>
            <div className="box-content">
              <span className="text-lg text-black font-medium">
                All human beings depend on Allah for their welfare and
                prevention of evil in various matters of their religion and
                world. Allah says (interpretation of the meaning): O mankind,
                you are those in need of Allah, while Allah is the Free of need,
                the Praiseworthy.
              </span>
            </div>
            <div className="box-reference">
              <h4 className="font-medium text-[#1fa45b]">Reference:</h4>
              <h4 className="text-lg text-black font-medium">
                Surah Al-Fatir 35:15
              </h4>
            </div>
            <div className="box-footer flex justify-between items-center">
              <div className="vedio-icon"></div>
              <div className="feature-icon flex gap-7">
                <Image src={Copy} alt="Copy"></Image>
                <Image src={Bookmark} alt="bookmark"></Image>
                <Image src={Memorize} alt="Memorize"></Image>
                <Image src={Share} alt="Share"></Image>
                <Image src={Report} alt="Report"></Image>
              </div>
            </div>
          </div>
          <div className="box p-6 bg-white mt-5 rounded-xl flex flex-col gap-7">
            <div className="box-header">
              <Image src={DuaCard} alt="DuaCard"></Image>
              <h4 className="font-medium text-[#1fa45b]">
                2. The servant is dependent on his Lord #2
              </h4>
            </div>
            <div className="box-content">
              <span className="text-lg text-black font-medium">
                Prophet (ﷺ) used to say after every compulsory prayer, The
                servant will ask his Lord for all of his religiously and worldly
                needs, because the treasure of all things is in the hands of
                Allah. Allah says (interpretation of the meaning): “And there is
                not a thing but that with Us are its depositories, and We do not
                send it down except according to a known measure.” (Sura Al-Hijr
                15:21) No one can withhold what Allah gives; And, no one can
                give what he resists.
              </span>
            </div>
            <div className="box-content">
              <span
                className={`font-medium ${arabicFont.className}  text-[26px] text-black`}
              >
                <p dir="rtl">
                  لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ
                  الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ،
                  اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا
                  مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
                </p>
              </span>
            </div>
            <div className="box-content">
              <span className="text-lg text-black font-medium italic">
                <strong>Transliteration:</strong> Laa ilaaha illallahu wahdahu
                laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli
                shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa
                mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu
              </span>
            </div>
            <div className="box-content">
              <span className="text-lg text-black font-medium">
                <strong>Transliteration:</strong> There is none worthy of
                worship except Allah alone with no partner or associate. He is
                the Dominion and to Him be all praise, and He is able to do all
                things. O Allah, one can withhold what You have given and none
                can give what You have withheld, and no wealth or fortune can
                benefit anyone for from You comes all wealth and fortune.
              </span>
            </div>
            <div className="box-reference">
              <h4 className="font-medium text-[#1fa45b]">Reference:</h4>
              <h4 className="text-lg text-black font-medium">Bukhari: 844</h4>
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
      </div>
    </>
  );
};

export default ActiveDua;
