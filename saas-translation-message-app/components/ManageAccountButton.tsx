import { generatePortalLink } from "@/actions/generatePortalLink";
import React from "react";
import BillingButton from "./BillingButton";

const ManageAccountButton = () => {
  return (
    <form action={generatePortalLink}>
      <BillingButton />
    </form>
  );
};

export default ManageAccountButton;
