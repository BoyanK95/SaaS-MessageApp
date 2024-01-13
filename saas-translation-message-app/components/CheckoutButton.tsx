import React from "react";

const CheckoutButton = () => {
  return (
    <div>
        {/* TODO if subsribed show the user is subscribed */}
      <button className="mt-10 rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white dark:text-whte hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:bg-gray-500">
        Sign Up
      </button>
    </div>
  );
};

export default CheckoutButton;
