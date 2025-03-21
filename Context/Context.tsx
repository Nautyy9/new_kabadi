import React, { createContext, useContext, useEffect, useState } from "react";

// function contextProviderFunction() {
//   const [windowWidth, setWindowWidth] = useState<number | null>();
//   return { windowWidth: windowWidth };
// }
// type contextProviderType = ReturnType<typeof contextProviderFunction>;

interface contextProviderType {
  windowWidth: number;
  setTheme: (val: boolean) => void;
  theme: boolean;
}

const contextProvider = createContext<contextProviderType | null>(null);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", debouncedResize(setWindowWidth));
    return () => {
      window.removeEventListener("resize", () => debouncedResize);
    };
  }, [debouncedResize]);
  const value = {
    windowWidth,
    setTheme,
    theme,
  };
  return (
    <contextProvider.Provider value={value}>
      {children}
    </contextProvider.Provider>
  );
}

export const useContextValue = () => useContext(contextProvider)!;

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as T;
}

const debouncedResize = (setWindowWidth: (val: number) => void) =>
  debounce((event) => {
    setWindowWidth((event.target as Window).innerWidth);
  }, 300);
