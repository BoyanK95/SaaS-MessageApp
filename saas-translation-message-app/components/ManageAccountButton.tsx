import React from "react";

const ManageAccountButton = () => {
  return (
    <form className="mt-10 text-center rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white dark:text-whte hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:bg-gray-500" action="">
      <button type="submit">
        Manage Account
      </button>
    </form>
  );
};

export default ManageAccountButton;
