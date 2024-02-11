import React from "react";
import LeanguageCard from "./LeanguageCard";
import Font from "@/public/Settings-icon/font.svg";
// import colorFont from "@/public/Settings-icon/colorFont.svg";
import General from "@/public/Settings-icon/general.svg";
import Language from "@/public/Settings-icon/language.svg";

const Settings = () => {
  return (
    <div>
      <div className="settings-bar">
        <div className="head-text">Settings</div>
        <div className="cards">
          <LeanguageCard text="Language Settings" logo={Language} />
          <LeanguageCard text="General Settings" logo={General} />
          <LeanguageCard text="Font Settings" logo={Font} />
          <LeanguageCard text="Appearance Settings" logo={Font} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
