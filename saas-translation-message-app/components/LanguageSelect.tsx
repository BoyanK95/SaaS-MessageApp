"use client";

import {
  LanguageSuported,
  LanguageSupportedMap,
  useLanguageStore,
  useSubscriptionStore,
} from "@/store/store";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import LoadingButton from "./LoadingButton";

const LanguageSelect = () => {
  const [language, setLanguage, getLanguages, getNotSuportedLanguages] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNotSuportedLanguages,
    ]);
  const pathName = usePathname();
  const isChatPage = pathName.includes("/chat");

  const subscription = useSubscriptionStore((state) => state.subscription);
  const hasSubscription = subscription?.status === "active";

  return (
    isChatPage && (
      <div>
        <Select onValueChange={(value: LanguageSuported) => setLanguage(value)}>
          <SelectTrigger className="w-[150px] text-black dark:text-white">
            <SelectValue placeholder={LanguageSupportedMap[language]} />
          </SelectTrigger>
          <SelectContent>
            {subscription === undefined ? (
              <LoadingButton />
            ) : (
              <>
                {getLanguages(hasSubscription).map((language) => (
                  <SelectItem key={language} value={language}>
                    {LanguageSupportedMap[language]}
                  </SelectItem>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>
    )
  );
};

export default LanguageSelect;
