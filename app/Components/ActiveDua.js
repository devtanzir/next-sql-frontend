"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DuaCard from "./DuaCard";

const ActiveDua = () => {
  const [dua, setDua] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dua data from the backend
        const response = await axios.get(
          "https://api-backend-9zbn.onrender.com/dua"
        );
        setDua(response.data);
      } catch (error) {
        console.error("Error fetching dua data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper h-[88vh] overflow-y-scroll">
        {dua.map((item, index) => (
          <div key={item.id}>
            <DuaCard
              DuaTitle={item.dua_name_en}
              DuaIndex={index + 1}
              topPara={item.top_en}
              quranAyat={item.dua_arabic}
              Transliteration={item.transliteration_en}
              Translation={item.translation_en}
              Bottom_En={item.bottom_en}
              refference_en={item.refference_en}
              DuaName={item.dua_name_en}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveDua;
