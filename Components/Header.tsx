import { useState } from "react";
import { useContextValue } from "../Context/Context";
import logo from "../src/assets/images/svg/logo.svg";
import { cn } from "../utils/cn";
import { MoonIcon, SunIcon } from "lucide-react";

function Header() {
  return (
    <div className="w-full h-[80px] flex justify-evenly items-center  my-auto ">
      <div className="logo_sec ">
        <img className="h-16 w-16 object-contain" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
