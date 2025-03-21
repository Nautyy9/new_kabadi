import React from "react";
import img_src from "../src/assets/images/svg/epr_services.svg";
function Services() {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="leading-tight ">
        <p>Attaining sustainable solution with ease</p>
        <h2 className="font-semibold">Our Services</h2>
      </div>
      <div className="relative flex justify-center h-52">
        <div className="z-20 active absolute top-0 px-2 w-full h-max py-2 bg-skin-fill rounded-2xl flex items-center justify-between border-2 border-dashed border-base/60">
          <img
            src={img_src}
            alt="?"
            className="rounded-full bg-skin-button-accent/50 h-14 w-14 "
          ></img>
          <div className="px-4">
            <h6 className="text-skin-base font-medium">EPR Service</h6>
            <p className="text-pretty text-skin-base">
              The Kabadiwala as a registered PRO, official collection &
              recycling partner helps in the compliance process of EPR.
            </p>
          </div>
        </div>
        <div className="z-10 opacity-90 absolute h-max py-2 top-10 px-2 w-[93%]   border-2 border-dashed border-base/60 bg-skin-fill rounded-2xl flex items-center justify-between">
          <img
            src={img_src}
            alt="?"
            className="rounded-full bg-skin-button-accent/50 h-14 w-14 "
          ></img>
          <div className="px-4">
            <h6 className="text-skin-base font-medium">EPR Service</h6>
            <p className="text-pretty text-skin-base">
              The Kabadiwala as a registered PRO, official collection &
              recycling partner helps in the compliance process of EPR.
            </p>
          </div>
        </div>
        <div className="opacity-60 z-0 absolute top-20 px-2  h-max py-2  w-[86%]  border-2 border-dashed  border-base/60 bg-skin-fill rounded-2xl flex items-center justify-between ">
          <img
            src={img_src}
            alt="?"
            className="rounded-full bg-skin-button-accent/50 h-14 w-14 "
          ></img>
          <div className="px-2">
            <h6 className="text-skin-base font-medium">EPR Service</h6>
            <p className="text-pretty text-skin-base">
              The Kabadiwala as a registered PRO, official collection &
              recycling partner helps in the compliance process of EPR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
