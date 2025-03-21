import React from "react";
import { createContext, useContext, useState } from "react";
type homeContextType = {
  flip: boolean;
  setFlip: (v: boolean) => void;
  togglePrice: string;
  setTogglePrice: (v: string) => void;
  toggleType: string;
  setToggleType: (v: string) => void;
  scrapType: string;
  setScrapType: (v: string) => void;
};
const homeContext = createContext<homeContextType | null>(null);

export default function HomeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [flip, setFlip] = useState<boolean>(false);
  const [togglePrice, setTogglePrice] = useState<string>("Price");
  const [toggleType, setToggleType] = useState<string>("METAL");
  const [scrapType, setScrapType] = useState<string>("");
  const value = {
    flip,
    setFlip,
    togglePrice,
    setTogglePrice,
    toggleType,
    setToggleType,
    scrapType,
    setScrapType,
  };
  return <homeContext.Provider value={value}>{children}</homeContext.Provider>;
}

export const useHomeContext = (): homeContextType => useContext(homeContext)!;
