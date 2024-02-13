"use client";
import axios from "axios";

import { useEffect, useState } from "react";

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
            img={`https://api-backend-9zbn.onrender.com/${item.cat_icon}.svg`}
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
