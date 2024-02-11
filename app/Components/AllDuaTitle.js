import React from "react";
import InputForm from "./InputForm";
import DuarGurutto from "@/public/Category-icons/duar_gurutto.svg";
import Image from "next/image";
import DefaultCard from "./DefaultCard";
import DuaKobulerShomoy from "@/public/Category-icons/dua_kobuler_somoy.svg";
import JaderDuaKobulHoy from "@/public/Category-icons/jader_dua_kobul_hoy.svg";
import kokhonKiBolteHoy from "@/public/Category-icons/kokhon_ki_bolte_hoy.svg";
import sokalSondha from "@/public/Category-icons/sokal_sondha.svg";
import zikirerFozilot from "@/public/Category-icons/zikirer_fozilot.svg";
const AllDuaTitle = () => {
  return (
    <>
      <div className="all-catagory">
        <div className="catagory-title">Categories</div>
        <div className="catagory-search p-3">
          <InputForm placeholder="Search Categories" className="pl-3" />
        </div>
        <div className="catagory-lists">
          <div className="first-item">
            <div className="icon">
              <Image src={DuarGurutto} alt="Duar_Gurutto"></Image>
            </div>
            <div className="card-title">
              <h5>Dua's Importance</h5>
              <p>Subcatagory: 7</p>
            </div>
            <div className="how-many-items">
              <h4>21</h4>
              <span>Duas</span>
            </div>
          </div>
          <div className="sub-titles mt-2 mb-2">
            <p>The servant is dependent on his Lord</p>
            <p>The most important thing to ask Allah for</p>
            <p>Ask for paradise & protection from fire</p>
            <p>Dua to remain steadfast on the religion</p>
            <p>Dua of good outcome in all deeds</p>
            <p>Seeking whatever good Allah can bestow</p>
            <p>
              Shelter from horror, misery, evil consequences and rejoicing of
              the enemy
            </p>
          </div>

          <DefaultCard
            img={zikirerFozilot}
            cardTitle="Dua's Excellence"
            SubNumber="1"
            DausNumber="15"
          />
          <DefaultCard
            img={DuaKobulerShomoy}
            cardTitle="Time of Dua"
            SubNumber="1"
            DausNumber="30"
          />
          <DefaultCard
            img={JaderDuaKobulHoy}
            cardTitle="Dua Acceptance"
            SubNumber="1"
            DausNumber="14"
          />
          <DefaultCard
            img={kokhonKiBolteHoy}
            cardTitle="When to say what"
            SubNumber="1"
            DausNumber="22"
          />
          <DefaultCard
            img={sokalSondha}
            cardTitle="Morning & Evening"
            SubNumber="3"
            DausNumber="53"
          />
        </div>
      </div>
    </>
  );
};

export default AllDuaTitle;
