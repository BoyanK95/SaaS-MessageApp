"use client";

import { useSubscriptionStore } from "@/store/store";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UpgradeBanner = () => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();

  if (subscription) {
    return null;
  }

  return (
    <Button
      className="w-full rounded-none bg-gradient-to-r from-purple-300 to bg-red-300 text-lg font-bold text-center text-slate-900 hover:text-white dark:hover:text-purple-900 px-5 py-2 transition-all"
      onClick={() => router.push("/register")}
    >
      Upgrade to Pro to unlock all features
    </Button>
  );
};

export default UpgradeBanner;
