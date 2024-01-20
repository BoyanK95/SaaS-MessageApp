"use client";

import React from "react";
import { useSession } from "next-auth/react";

const CheckoutButton = () => {
  const { data: session } = useSession();

  const createCheckoutSession = () => {
    if (!session) return;

    
    // ... stripe extension on firebase will create a checkout session
    //redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* TODO if subsribed show the user is subscribed */}
      <button
        onClick={() => createCheckoutSession}
        className="mt-10 rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white dark:text-whte hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:bg-gray-500"
      >
        Sign Up
      </button>
    </div>
  );
};

export default CheckoutButton;
