import { FaWhatsapp } from "react-icons/fa";
import {
  togglePriceType,
  toggleTypeType,
  toggleScrapType,
} from "../../../types/home.types";
import { MdNumbers } from "react-icons/md";
import ToggleSelectType from "./ToggleSelectType";
import SwitchScrapType from "./SwitchScrapType";
import ToggleSelectPrice from "./ToggleSelectPrice";

export default function SchedulePickup(
  { setTogglePrice, togglePrice }: togglePriceType,
  { setToggleType, toggleType }: toggleTypeType,
  { setScrapType, scrapType }: toggleScrapType
) {
  return (
    <div className="flex flex-col justify-center gap-y-3  pt-4 py-10   schedule_pickup w-[386px]">
      <h3 className="px-2 text-skin-base font-bold">Schedule Pickup</h3>
      <div className="home_contact_section w-max h-max mx-auto flex flex-col gap-y-2 my-2">
        <div className="flex items-center gap-x-1.5 justify-between">
          <h6 className="text-skin-base font-semibold underline">
            Message Us At
          </h6>
          <FaWhatsapp className=" text-green-600 h-8 w-8" />
        </div>
        <p className="flex items-center justify-center text-[#BDE519]">OR</p>
        <div className="flex flex-col justify-center">
          <h6 className="font-semibold underline">Call Us At</h6>
          <div className="flex items-center">
            <MdNumbers className="h-5 w-5"></MdNumbers>
            <p className="text-lg ">+91-123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full bg-skin-button-muted h-10  [&>*]:text-lg  [&>*]:w-full [&>*]:h-max [&>*]:flex  [&>*]:justify-center  [&>*]:items-center  [&>*]:rounded-full [&>*]:py-0.5 [&>*]:px-0">
        {ToggleSelectPrice({ togglePrice }, "Price")}
        {ToggleSelectPrice({ togglePrice }, "Mob No.")}
        {ToggleSelectPrice({ togglePrice }, "Address")}
        {ToggleSelectPrice({ togglePrice }, "Pickup")}
      </div>

      <div className="z-10 relative border-2 border-accent pb-10 w-11/12 h-max  rounded-2xl flex flex-col gap-y-4 mx-auto ">
        <div className="absolute  w-36 h-10 -top-[2px] -right-[2px]  bg-skin-fill rounded-bl-full border-b-2 border-l-2 border-accent overflow-hidden">
          <div className="relative flex items-start  justify-center -mb-1 ">
            <button
              className="bg-skin-fill border-2 border-accent h-max w-max text-lg text-skin-base px-5 py-0.5 rounded-full font-semibold "
              onClick={() => {
                if (togglePrice === "Price") {
                  setTogglePrice!("Mob No.");
                } else if (togglePrice === "Mob No.") {
                  setTogglePrice!("Price");
                } else if (togglePrice === "Address") {
                  setTogglePrice!("Mob No.");
                } else {
                  setTogglePrice!("Address");
                }
              }}
            >
              {togglePrice === "Price" ? "Next" : "Previous"}
            </button>
          </div>
        </div>
        {/* <div className="z-50 bg-yellow "></div> */}
        <div className="-z-10 absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-3xl px-16 border-x-2 border-accent h-max w-max py-5 bg-skin-fill"></div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <button
            className="bg-skin-fill z-50 border-2 border-accent h-max w-max text-lg text-skin-base px-8 rounded-full font-semibold py-1"
            onClick={() => {
              if (togglePrice === "Price") {
                setTogglePrice!("Mob No.");
              } else if (togglePrice === "Mob No.") {
                setTogglePrice!("Address");
              } else {
                setTogglePrice!("Pickup");
              }
            }}
          >
            Next
          </button>
        </div>
        <h5 className="flex font-semibold mt-1 ml-2 text-skin-accent-inverted">
          Check Price
        </h5>
        <div
          className="flex justify-start  items-center w-full  bg-skin-button-accent h-10  px-1 overflow-hidden"
          onClick={(e) => setToggleType!((e.target as HTMLElement).innerText)}
        >
          {ToggleSelectType({ toggleType }, "METAL")}
          {ToggleSelectType({ toggleType }, "ELECTRONICS")}
          {ToggleSelectType({ toggleType }, "PAPER")}
          {ToggleSelectType({ toggleType }, "PLASTIC")}
        </div>
        <div className="flex flex-grow flex-wrap gap-3 items-center justify-center">
          {SwitchScrapType(toggleType, { scrapType, setScrapType })}
        </div>
      </div>
    </div>
  );
}
