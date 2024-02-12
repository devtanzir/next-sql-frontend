"use client";
import axios from "axios";

import { useEffect, useState } from "react";

import duar_gurutto from "@/public/Category-icons/duar_gurutto.svg";

// import zikirer_fozilot from "@/public/Category-icons/zikirer_fozilot.svg";
// import dua_kobuler_somoy from "@/public/Category-icons/dua_kobuler_somoy.svg";
// import jader_dua_kobul_hoy from "@/public/Category-icons/jader_dua_kobul_hoy.svg";
// import sokal_sondha from "@/public/Category-icons/sokal_sondha.svg";
// import ghum from "@/public/Category-icons/ghum.svg";
// import poshak from "@/public/Category-icons/poshak.svg";
// import bari from "@/public/Category-icons/bari.svg";
// import toilet from "@/public/Category-icons/toilet.svg";
// import azan_ikamot from "@/public/Category-icons/azan_ikamot.svg";

import React from "react";
import DefaultCard from "./DefaultCard";
import SubTitle from "./subTitle";
import { useRouter } from "next/navigation";

const AllCategorys = () => {
  const [activeIndex, setsetIsActive] = useState(null);
  const [category, setCategory] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch category data from the backend
        const response = await axios.get(
          "https://api-backend-9zbn.onrender.com/category"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []);

  const handleClick = (index) => {
    setsetIsActive(index === activeIndex ? null : index);
    if (index === 0) {
      router.push("/duas_importance");
    }
    if (index === 1) {
      router.push("/duas_excellence");
    }
    if (index === 2) {
      router.push("/time_of_dua");
    }
    if (index === 3) {
      router.push("/dua_acceptance");
    }
    if (index === 4) {
      router.push("/morning_evening");
    }
    if (index === 5) {
      router.push("/sleep");
    }
    if (index === 6) {
      router.push("/cloths");
    }
    if (index === 7) {
      router.push("/home");
    }
    if (index === 8) {
      router.push("/toilet");
    }
    if (index === 9) {
      router.push("/adhaan_iqamah");
    }
  };

  return (
    <>
      {category.map((item, index) => (
        <div key={item.id}>
          <DefaultCard
            className={`accordion-title ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
            img={duar_gurutto}
            cardTitle={item.cat_name_en}
            SubNumber={item.no_of_subcat}
            DausNumber={item.no_of_dua}
          />
          {index === activeIndex && <SubTitle />}
        </div>
      ))}
    </>
  );
};

export default AllCategorys;
