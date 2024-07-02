import React from "react";

const WelcomeHeader = () => {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
        Welcome to{" "}
        <span className="text-4xl text-blue-500 dark:text-indigo-400">
          Incognito
        </span>
      </h2>
    </div>
  );
};

export default WelcomeHeader;
