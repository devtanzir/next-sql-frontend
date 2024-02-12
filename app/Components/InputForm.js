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
        class={`h-12 default-input placeholder:text-gray-500 placeholder:text-sm border-[1px] block bg-white w-full rounded-md shadow-sm
        sm:text-sm ${className}`}
        type="text"
        {...props}
        value={inputValue}
        onChange={handleChange}
        name="search"
      />
    </>
  );
}
