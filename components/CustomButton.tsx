"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({title, btnTypes, containerStyles,handleClick}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnTypes}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
