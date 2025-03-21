import { StarIcon, StarsIcon } from "lucide-react";

export default function Farak() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="">
        <p>we want to make change</p>
        <h2>Farak Padta Hai</h2>
      </div>
      <div className="flex gap-x-5 w-full max-w-[360px] overflow-x-scroll p-2">
        <div className="h-32 bg-skin-card-accent w-40 rounded-2xl px-5 flex flex-col items-center justify-center">
          <StarsIcon className="stroke-inverted h-10 w-8" />
          <h5 className="text-skin-base">81,10,504</h5>
          <p className=" text-skin-accent">
            kilograms waste diverted from land fills.
          </p>
        </div>
        <div className="h-32 bg-skin-card-accent w-40 rounded-2xl px-5 flex flex-col items-center justify-center">
          <StarsIcon className="stroke-inverted h-10 w-8" />
          <h5 className="text-skin-base">81,10,504</h5>
          <p className=" text-skin-accent">
            kilograms waste diverted from land fills.
          </p>
        </div>
        <div className="h-32 bg-skin-card-accent w-40 rounded-2xl px-5 flex flex-col items-center justify-center">
          <StarsIcon className="stroke-inverted h-10 w-8" />
          <h5 className="text-skin-base">81,10,504</h5>
          <p className=" text-skin-accent">
            kilograms waste diverted from land fills.
          </p>
        </div>
      </div>
    </div>
  );
}
