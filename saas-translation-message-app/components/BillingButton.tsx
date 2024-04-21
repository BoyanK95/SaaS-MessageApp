"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import LoadingButton from "./LoadingButton";

const BillingButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <LoadingButton />
      ) : (
        <button className="w-full" type="submit" disabled={pending}>
          Manage Billing
        </button>
      )}
    </>
  );
};

export default BillingButton;
