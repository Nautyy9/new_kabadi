import { toggleScrapType } from "../../../types/home.types";
import {
  electronicsArr,
  metalArr,
  PaperArr,
  PlasticArr,
} from "../../../utils/homeArrayData";
import ItemsList from "./ItemsLists";

export default function SwitchScrapType(
  type: string | undefined,
  { scrapType, setScrapType }: toggleScrapType
) {
  if (type === "METAL")
    return (
      <>
        {metalArr.map((value, index) => {
          return (
            <div
              key={generateRandomString()}
              className="flex flex-wrap items-center justify-center"
            >
              {ItemsList(value.type, value.price, value.unit, value.img, {
                scrapType,
                setScrapType,
              })}
            </div>
          );
        })}
      </>
    );
  else if (type === "ELECTRONICS")
    return (
      <>
        {electronicsArr.map((value, index) => {
          return (
            <div
              key={generateRandomString()}
              className="flex flex-wrap items-center justify-center"
            >
              {ItemsList(value.type, value.price, value.unit, value.img, {
                scrapType,
                setScrapType,
              })}
            </div>
          );
        })}
      </>
    );
  else if (type === "PAPER")
    return (
      <>
        {PaperArr.map((value, index) => {
          return (
            <div
              key={generateRandomString()}
              className="flex flex-wrap items-center justify-center"
            >
              {ItemsList(value.type, value.price, value.unit, value.img, {
                scrapType,
                setScrapType,
              })}
            </div>
          );
        })}
      </>
    );
  else
    return (
      <>
        {PlasticArr.map((value, index) => {
          return (
            <div
              key={generateRandomString()}
              className="flex flex-wrap items-center justify-center"
            >
              {ItemsList(value.type, value.price, value.unit, value.img, {
                scrapType,
                setScrapType,
              })}
            </div>
          );
        })}
      </>
    );
}
function generateRandomString() {
  return Math.random().toString(36).substring(2);
}
