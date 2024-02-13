"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import NestedSubTitle from "./NestedSubTitle";

const SubTitle = () => {
  const [activeIndex, setsetIsActive] = useState(null);

  const handleClick = (index) => {
    setsetIsActive(index === activeIndex ? null : index);
  };

  const [subtitle, setSubtitle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch category data from the backend
        const response = await axios.get(
          "https://api-backend-9zbn.onrender.com/sub_category"
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
      {subtitle.map((item, index) => {
        if (item.id >= 1 && item.id <= 7) {
          return (
            <div
              key={item.id}
              className={`sub-titles pt-3 pb-3`}
              onClick={() => handleClick(index)}
            >
              <p
                className={`text-lg ${
                  index === activeIndex ? "activeSubtitle" : ""
                }`}
              >
                {item.subcat_name_en}
              </p>
              {index === activeIndex && <NestedSubTitle />}
            </div>
          );
        }
      })}
    </>
  );
};

export default SubTitle;
