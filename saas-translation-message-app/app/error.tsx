"use client";

import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="md:text-5xl text-3xl font-bold pb-7">
        Some{" "}
        <span className="text-red-700 dark:text-purple-300">
          Error occured!
        </span>
      </h1>
    </div>
  );
};

export default ErrorPage;
