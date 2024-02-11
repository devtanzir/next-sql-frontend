"use client";

import React, { useState } from "react";

export default function InputForm({ children, className = "", ...props }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        id="filerted_catList"
        class={`h-12   placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
        sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4] ${className}`}
        type="text"
        {...props}
        value={inputValue}
        onChange={handleChange}
        name="search"
      />
    </>
  );
}
