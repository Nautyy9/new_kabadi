import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "../utils/cn";
import { useContextValue } from "../Context/Context";
import {
  Ellipsis,
  EllipsisVertical,
  HomeIcon,
  MoonIcon,
  PhoneCallIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";

export default function MenuBar() {
  const { theme, setTheme, windowWidth } = useContextValue();
  const [dots, setDots] = useState<boolean>(true);

  const [menuBar, setMenuBar] = useState<Record<string, boolean>>({
    home: true,
    search: false,
    phone: false,
    openMenu: false,
  });

  return (
    <div className="z-50 fixed bottom-0 w-full left-1/2 -translate-x-1/2 bg-skin-fill/50  h-16 backdrop-blur-3xl  [&_*]:stroke-inverted ">
      <div className="h-full flex items-center justify-around mx-auto w-[380px] ">
        <div className=" relative flex gap-x-4 sm:gap-x-8 items-center px-6 sm:px-10  rounded-full bg-skin-button-muted h-max py-3 self-center w-max">
          <PhoneCallIcon />
          <SearchIcon />
          <HomeIcon />{" "}
          <div className="mid_sec">{checkTheme(theme, setTheme)}</div>
          {checkWindowWidth(windowWidth, setMenuBar, menuBar.openMenu)}
        </div>
        <div
          onClick={() => {
            setDots(!dots);
          }}
          className=""
        >
          {checkDots(dots)}
        </div>
      </div>
    </div>
  );
}

function checkTheme(theme: boolean, setTheme: (val: boolean) => void) {
  if (!theme) {
    return (
      <MoonIcon className="cursor-pointer" onClick={() => setTheme(!theme)} />
    );
  } else {
    return (
      <SunIcon className=" cursor-pointer" onClick={() => setTheme(!theme)} />
    );
  }
}

function checkWindowWidth(
  windowWidth: number | null | undefined,
  setOpenMenu: Dispatch<SetStateAction<Record<string, boolean>>>,
  openMenu: boolean
) {
  if (windowWidth! > 744) {
    return (
      <span className="link_sec bg-pink-400 w-full h-full">
        this is awesome
      </span>
    );
  } else
    return (
      <div className=" w-max h-full  flex items-center justify-end ">
        <label htmlFor="check" className="flex flex-col  cursor-pointer ">
          <input
            onChange={(e) =>
              setOpenMenu((prev) => ({ ...prev, openMenu: e.target.checked }))
            }
            type="checkbox"
            id="check"
            checked={openMenu}
            className="hamburger"
          ></input>
          {hamburgerBars("top_bar w-[18px]")}
          {hamburgerBars("mid_bar ")}
          {hamburgerBars("bottom_bar w-[27px]")}
        </label>
      </div>
    );
}

function hamburgerBars(...args: any) {
  return (
    <span
      className={cn(
        `ham_bar flex bg-skin-button-accent w-8 h-[3px] my-[3px] rounded-full`,
        ...args
      )}
    ></span>
  );
}

function checkDots(dots: boolean) {
  if (dots)
    return (
      <Ellipsis className="hori_dots bg-skin-button-muted rounded-full h-8 w-8 p-1" />
    );
  else {
    return (
      <EllipsisVertical className="hori_dots bg-skin-button-muted rounded-full h-8 w-8 p-1" />
    );
  }
}
