import { toggleScrapType } from "../../../types/home.types";
import { cn } from "../../../utils/cn";

export default function ItemsList(
  text: string,
  price: string,
  unit: string,
  img: string,
  { scrapType, setScrapType }: toggleScrapType
) {
  return (
    <div
      onClick={() => setScrapType(text)}
      className={cn(
        " min-w-max w-40 border-[1.5px]   h-max py-2  px-4 rounded-2xl",
        text === scrapType
          ? "bg-skin-button-muted text-skin-inverted border-base/60"
          : "  text-skin-base border-base/60"
      )}
    >
      <div className="text-nowrap w-1/2 flex flex-col">
        <p className="text-xl">{text}</p>
        <div className="flex items-end">
          <p className={cn("text-[#BDE519] text-xl font-semibold")}>{price}</p>
          <p
            className={cn(
              "text-end",
              text === scrapType ? "text-skin-inverted/50" : "text-skin-base/50"
            )}
          >
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
}
