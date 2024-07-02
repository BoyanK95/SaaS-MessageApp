import React from "react";
import WelcomeHeader from "./WelcomeHeader";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const WelcomeRedirectHeader = ({
  link,
  btnText,
}: {
  link: string;
  btnText: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-col justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <WelcomeHeader />
      <h2 className="text-4xl py-10 mt-7">You are already logged in!</h2>
      <Button
        className="dark:hover:bg-indigo-300 dark:bg-indigo-200 bg-blue-500 hover:bg-blue-700"
        size={"lg"}
        variant={"default"}
        onClick={() => router.push(`/${link}`)}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default WelcomeRedirectHeader;
