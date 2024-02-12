"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import duaArrow from "@/public/Category-icons/duaarrow.svg";

const NestedSubTitle = () => {
  const [subtitle, setSubtitle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch category data from the backend
        const response = await axios.get(
          "https://api-backend-9zbn.onrender.com/dua"
        );
        setSubtitle(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <>
      {subtitle.map((item) => {
        if (item.id >= 1 && item.id <= 3) {
          return (
            <div className="mb-1 relative">
              <span className="absolute left-0">
                <Image src={duaArrow} alt="duaArrow"></Image>
              </span>
              <span className="w-auto text-black inline-block text-left pl-6 text-sm font-medium">
                {item.dua_name_en}
              </span>
            </div>
          );
        }
      })}
    </>
  );
};

export default NestedSubTitle;
