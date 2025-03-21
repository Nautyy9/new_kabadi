import { HomeContext } from "../Home";
import HomeBlock from "./MainTextContent/HomeBlock";
import SchedulePickup from "./SellScrapContent/SchedulePickup";

export default function CheckFlip(flip: boolean) {
  const {
    setTogglePrice,
    togglePrice,
    toggleType,
    setToggleType,
    scrapType,
    setScrapType,
  } = HomeContext();
  if (flip) {
    return (
      <>
        {SchedulePickup(
          { setTogglePrice, togglePrice },
          { setToggleType, toggleType },
          { setScrapType, scrapType }
        )}
      </>
    );
  } else {
    return <>{HomeBlock()}</>;
  }
}
