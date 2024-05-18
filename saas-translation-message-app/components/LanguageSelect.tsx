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
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
                  <SelectItem key={language} value={language} className="cursor-pointer">
                    {LanguageSupportedMap[language]}
                  </SelectItem>
                ))}
                {getNotSuportedLanguages(hasSubscription).map((language) => (
                  <Link href={"/register"} key={language}>
                    <div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <SelectItem
                              key={language}
                              value={language}
                              disabled
                              className="bg-gray-300/5 text-gray-500 dark:text-white py-2 my-2"
                            >
                              {LanguageSupportedMap[language]}
                            </SelectItem>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            sideOffset={20}
                            className="z-50 absolute text-center text-sm"
                          >
                            Subscribe to unlock
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </Link>
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
