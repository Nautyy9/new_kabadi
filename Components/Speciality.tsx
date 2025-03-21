import { ArrowUpRight } from "lucide-react";
import React from "react";
import img_src from "../src/assets/images/other/brand-owner.webp";
function Speciality() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col leading-6 ">
        <p className="text-skin-muted text-base">insider</p>
        <h2 className="font-medium">What Makes Us Special</h2>
      </div>
      <div className="sustainability relative overflow-hidden h-max  border-2 border-base/60 w-full rounded-3xl">
        <div className="w-full relative h-40 z-50 p-2">
          <a
            href="_target"
            className=" py-2 text-[1.1rem] w-max px-4 rounded-full flex items-center justify-center gap-x-1 bg-skin-button-muted text-skin-inverted"
          >
            Learn More
            <ArrowUpRight />
          </a>
        </div>
        <img
          src={img_src}
          className="absolute  top-0  object-cover w-full h-44"
          alt="sustainabilty_image"
        />
        <div className="bg-skin-fill relative text-pretty px-5 py-3 border-2  border-x-0 border-b-0  border-base/60 rounded-3xl ">
          <div className="leading-tight">
            <h4 className="">Sustainability & Circular Economy </h4>
            <p className="text-skin-muted/50 text-[.9rem]">Trust We Serve</p>
          </div>
          <p className="text-balance py-3">
            The Kabadiwala with its acute understanding of waste has developed
            sustainable strategies & techniques to manage waste efficiently &
            cost-efficaciously contributing in closing the loop of product life
            cycle & attain circular economy while infusing sustainability into
            lives.
          </p>
        </div>
      </div>
      <div className="flex  gap-x-3">
        <div className=" left_card_1 flex border-2 border-base/60 rounded-3xl h-max w-full">
          <div className=" w-1/2 relative pl-1 py-1">
            <img
              src={img_src}
              alt="left_card_1_img"
              className="rounded-l-3xl h-48 w-max object-cover "
            />
            <a
              href="_target"
              className="absolute bottom-2 left-2 border-2 border-inverted text-skin-muted bg-skin-button-muted rounded-full h-8 w-8 p-1 m-auto flex items-center justify-center"
            >
              <span>
                <ArrowUpRight className="text-skin-inverted"></ArrowUpRight>
              </span>
            </a>
          </div>
          <div className="w-full flex items-start px-3 flex-col justify-center">
            <h6 className="text-pretty text-skin-base/50">kabadi</h6>
            <h5 className="leading-7">India&apos;s No.1 Scrap Pickup Site </h5>
            <p className="text-pretty mt-2">
              Providing door-to-door free pickup service of 40+ recyclables.
            </p>
            <div className="pills flex gap-x-1 mt-2">
              <span className="bg-skin-button-muted text-skin-inverted  rounded-full px-4 py-0.5  text-sm m-auto">
                Plastic
              </span>
              <span className="bg-skin-button-muted text-skin-inverted  rounded-full px-4 text-sm py-0.5">
                Plastic
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-accent rounded-full w-[38%] p-2  h-full items-center ">
          <img
            src={img_src}
            alt="alt_image_for_right_component"
            className="rounded-full w-24 h-24 flex object-cover "
          />
          <p className="text-skin-base/50">Our Trust</p>
          <h6 className="text-pretty text-center">Empowering Individuals</h6>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
