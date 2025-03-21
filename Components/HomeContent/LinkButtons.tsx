import { MoveUpRight } from "lucide-react";
import { cn } from "../../utils/cn";

export default function LinkButton(children: string, ...attr: any[]) {
  return (
    <button
      className={cn(
        "rounded-full text-xl px-4 py-2 group h-max w-max transition-all duration-500  text-nowrap flex items-center hover:text-skin-base font-semibold",
        ...attr
      )}
    >
      <span className="px-2 py-1.5 flex rounded-full ">{children}</span>
      <span>
        <MoveUpRight
          className="hidden group-hover:block h-4 w-5  my-auto"
          strokeWidth={3}
        ></MoveUpRight>
      </span>
    </button>
  );
}
