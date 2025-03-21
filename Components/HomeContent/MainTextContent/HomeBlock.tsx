import paper from "../../../src/assets/images/other/kitab-ghar.webp";
import smallIcons from "./SmallIcons";

export default function HomeBlock() {
  return (
    <div className=" flex flex-col gap-y-3 px-2 py-4 home_blocks">
      <div className="h-52 mt-10 flex shadow-md shadow-accent/50  w-full border-accent rounded-2xl border-2 bg-skin-fill gap-3 p-2">
        <div className="flex-[4] flex flex-col gap-y-2 items-end ">
          <img
            className="h-40 object-cover w-full rounded-tl-2xl rounded-br-2xl m-0.5 "
            src={paper}
            alt="paper"
          />
          <div className="w-full flex gap-x-1.5 ">
            {smallIcons()}
            {smallIcons()}
          </div>
        </div>
        <div className="flex-[6] ">
          <h3 className="mt-[10px] mb-[5px] capitalize font-semibold">
            Why Throw Sell it to Us
          </h3>
          <p className="text-skin-base/50">
            We ensure fair deals and eco-friendly recycling to help you
            declutter while making a difference. Get started today your old
            newspapers are worth more than you thin
          </p>
        </div>
      </div>

      <div className="w-full flex h-72  justify-between ">
        <div className="h-72 flex shadow-md shadow-inverted/50 w-1/2 border-base/60 rounded-2xl border-2 bg-skin-fill gap-3 p-2"></div>
        <div className="h-full flex flex-col gap-y-2">
          <div className="h-40 w-40 rounded-full flex shadow-md shadow-accent/50 border-accent  border-2 bg-skin-fill gap-3 p-2"></div>
          <div className="h-32 w-44 rounded-2xl flex shadow-md shadow-inverted/50 border-base/60  border-2 bg-skin-fill gap-3 p-2"></div>
        </div>
      </div>
    </div>
  );
}
