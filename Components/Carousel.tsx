import { TowerControl } from "lucide-react";

function Carousel() {
  return (
    <div>
      <div className="w-full h-max relative">
        <div className="absolute -top-6 flex items-center justify-evenly w-full bg-skin-card-accent h-10 -rotate-[7deg] gap-x-2 text-skin-accent font-medium">
          {Array.from({ length: 5 }).map((val, ind) => {
            return (
              <div
                key={ind + Math.random().toString(36).substring(2)}
                className="flex items-center justify-center gap-x-1"
              >
                <TowerControl className="h-5 w-4 " />
                <span>Plastic</span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 flex items-center justify-evenly w-full bg-skin-card-accent h-10  gap-x-2 text-skin-accent font-medium">
          {Array.from({ length: 5 }).map((val, ind) => {
            return (
              <div
                key={ind + Math.random().toString(36).substring(2)}
                className="flex items-center justify-center gap-x-1"
              >
                <TowerControl className="h-5 w-4 " />
                <span>Plastic</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Carousel;
