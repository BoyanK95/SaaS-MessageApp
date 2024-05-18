"use client";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingButton = ({ textCss }: { textCss?: string }) => {
  return (
    <div className="flex justify-center gap-5 cursor-wait">
      <RotatingLines width="18" strokeColor="white" />
      <p className={`animate-pulse ${textCss}`}>Loading...</p>
    </div>
  );
};

export default LoadingButton;
