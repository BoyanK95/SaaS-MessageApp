'use client'
import React from 'react'
import { RotatingLines } from "react-loader-spinner";


const LoadingButton = () => {
  return (
    <div className="flex justify-center gap-5">
    <RotatingLines width="18" strokeColor="white" />
    <p className="">Loading...</p>
  </div>
  )
}

export default LoadingButton