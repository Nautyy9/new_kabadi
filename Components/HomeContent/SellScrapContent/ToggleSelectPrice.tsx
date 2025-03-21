import { togglePriceType } from "../../../types/home.types";
import { cn } from "../../../utils/cn";

export default function ToggleSelectPrice(
  { togglePrice }: togglePriceType,
  currText: string
) {
  return (
    <p
      className={cn(
        togglePrice === `${currText}`
          ? "bg-skin-button-accent text-skin-accent"
          : "text-skin-inverted"
      )}
    >
      {currText}
    </p>
  );
}
