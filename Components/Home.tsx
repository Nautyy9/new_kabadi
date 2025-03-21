import { useState } from "react";
import pills from "./HomeContent/MainTextContent/PillsContent";
import CheckFlip from "./HomeContent/CheckFlip";
import LinkButton from "./HomeContent/LinkButtons";
function Home() {
  const { flip, setFlip } = HomeContext();

  return (
    <div>
      <div className="home_heading_context flex flex-col w-full h-full ">
        <h1 className="font-bold ">Buy Sell Scrap</h1>
        <h6 className="opacity-50">
          Trusted Network for scrap Buyers & Sellers
        </h6>

        <div className=" my-5 flex w-full gap-x-2">
          {pills("Good")}
          {pills("Better")}
          {pills("Best")}
        </div>
        <div className="border-2 relative border-base/60 rounded-2xl h-full w-full  ">
          <div className="absolute text-xl h-12 w-40 -top-[2px] -right-[2px]  bg-skin-fill text-skin-accent rounded-bl-full border-l-2 border-b-2  flex border-base/60 justify-end items-start">
            <div
              onClick={() => setFlip(!flip)}
              className="relative flex items-center justify-end  rounded-full bg-skin-fill border-2 border-accent px-4 py-1 gap-x-3 text-skin-base "
            >
              <p className="h-max w-max text-xl font-semibold">
                {flip ? "See Inside" : "Check Price"}
              </p>
              {/* <FlipHorizontal2 className="h-7 w-7 p-1  m-auto rounded-full stroke-base bg-skin-fill " /> */}
            </div>
          </div>
          {CheckFlip(flip)}
        </div>
        <div className="home_links flex gap-x-2 mt-6 justify-center">
          {LinkButton(
            "Buy Now",
            "bg-skin-button-accent hover:bg-skin-button-accent-hover/50 text-skin-accent"
          )}
          {LinkButton(
            "Sell Now",
            "bg-skin-button-muted hover:bg-skin-button-muted-hover/50 text-skin-inverted"
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

export function HomeContext() {
  const [flip, setFlip] = useState<boolean>(false);
  const [togglePrice, setTogglePrice] = useState<string>("Price");
  const [toggleType, setToggleType] = useState<string>("METAL");
  const [scrapType, setScrapType] = useState<string>("");

  return {
    flip,
    setFlip,
    togglePrice,
    setTogglePrice,
    toggleType,
    setToggleType,
    scrapType,
    setScrapType,
  };
}
