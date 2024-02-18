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

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (Subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: null,
  setSubscription: (subscription) => set({ subscription }),
}));
