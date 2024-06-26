import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguageSuported =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "hi"
  | "ru"
  | "la"
  | "zh"
  | "bg"
  | "ar";

export const LanguageSupportedMap: Record<LanguageSuported, string> = {
  en: "English",
  de: "German",
  fr: "French",
  es: "Spanish",
  hi: "Hindi",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  bg: "Bulgarian",
  ar: "Arabic",
};

const LANGUAGES_IN_FREEE = 3;

interface LanguageState {
  language: LanguageSuported;
  setLanguage: (language: LanguageSuported) => void;
  getLanguages: (isSubscribed: boolean) => LanguageSuported[];
  getNotSuportedLanguages: (isSubscribed: boolean) => LanguageSuported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language:
    //TODO might casue problems after deploy, must check after deployment
    // (sessionStorage.getItem("languageState") as LanguageSuported) || "en",
    'en',
  setLanguage: (language: LanguageSuported) => {
    // sessionStorage.setItem("languageState", language);
    set({ language });
  },
  getLanguages: (isSubscribed) => {
    const supportedLanguages = Object.keys(
      LanguageSupportedMap
    ) as LanguageSuported[];
    if (isSubscribed) {
      return supportedLanguages;
    } else {
      return Object.keys(LanguageSupportedMap).slice(
        0,
        LANGUAGES_IN_FREEE
      ) as LanguageSuported[];
    }
  },
  getNotSuportedLanguages: (isSubscribed) => {
    if (isSubscribed) {
      return [];
    }
    return Object.keys(LanguageSupportedMap).slice(
      LANGUAGES_IN_FREEE
    ) as LanguageSuported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (Subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: null,
  setSubscription: (subscription) => set({ subscription }),
}));
