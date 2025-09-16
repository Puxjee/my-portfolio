"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

type Locale = "en" | "fr";

const LOCALES: Record<Locale, Record<string, unknown>> = {
  en,
  fr,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string, fallback?: unknown) => unknown;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("locale");
    return (saved as Locale) || "en";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t = useMemo(() => {
    return (path: string, fallback: unknown = undefined) => {
      const parts = path.split(".");
      let cur: unknown = LOCALES[locale];
      for (const p of parts) {
        if (cur === undefined || cur === null) return fallback;
        if (typeof cur !== "object") return fallback;
        cur = (cur as Record<string, unknown>)[p];
      }
      return cur === undefined || cur === null ? fallback : cur;
    };
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export type { Locale };
