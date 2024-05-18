"use client";

import { useLanguageStore, useSubscriptionStore } from "@/store/store";
import { usePathname } from "next/navigation";

const LanguageSelect = () => {
  const [language, setLanguage, getLanguages, getNotSuportedLanguages] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNotSuportedLanguages,
    ]);
  const pathName = usePathname();
  const isChatPage = pathName.includes("chat");

  const subscription = useSubscriptionStore((state) => state.subscription);
  const hasSubscription = subscription?.status === "active";

  return isChatPage && <div>LanguageSelect</div>;
};

export default LanguageSelect;
