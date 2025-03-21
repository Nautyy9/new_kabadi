import { toggleTypeType } from "../../../types/home.types";
import { cn } from "../../../utils/cn";

export default function ToggleSelectType(
  { toggleType }: toggleTypeType,
  currText: string
) {
  return (
    <div className="w-full h-full flex items-center">
      <p
        className={cn(
          "py-0 px-4  rounded-full h-max  w-full text-lg flex justify-center items-center",
          toggleType === `${currText}`
            ? "bg-skin-fill text-skin-base"
            : "text-skin-accent"
        )}
      >
        {currText}
      </p>
    </div>
  );
}
